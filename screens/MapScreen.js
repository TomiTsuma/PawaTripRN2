import React, {useState, useEffect, useLayoutEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity, Platform, PermissionsAndroid} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import decodePolyline from 'decode-google-map-polyline'
import getDistance from 'geolib/es/getDistance';
import Geolocation from '@react-native-community/geolocation';

// import { GOOGLE_MAPS_API_KEY } from "@env"
import tw from "tailwind-react-native-classnames";
import Map from './components/Map.js';
import NavigateCard from './components/NavigateCard';
import sidebar from '../assets/sidebar.png'
import button from '../assets/button.png'
import MapboxGL from '@react-native-mapbox-gl/maps';
import MapView, {Polyline}   from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice'

import axios from 'axios'
import { auth, database } from '../firebase';
import {ref, get,set, onValue} from 'firebase/database'
import Button from './components/Button/button.js';
import { RFValue } from 'react-native-responsive-fontsize';



const MapScreen = () => {
  const [currLat,setCurrLat] = useState(-1.2199);
  const [currLng,setCurrLng] = useState(36.8892);
  const [destLat,setDestLat] = useState(-1.39390);
  const [destLng,setDestLng] = useState(36.7442);
  var [usrPoints, setUsrPoints] = useState([]); 
  const [dbUser, setDbUsr] = useState([])
  var usrCoords=[];
  let usr =[]
  const [locationStatus, setLocationStatus] = useState('');
  const users= ref(database, `user`)
  const user = auth.currentUser
  var carpoolerList = []
  const userDetails = useSelector((state) => state.user);
  var viableCarpoolers = []
  dispatch = useDispatch();




 
  useEffect(()=>{
    const users= ref(database, `user`)
    onValue(users, (snapshot)=>{
      snapshot.forEach(item=>{
        if(String(item.child('Mode').val()) != userDetails.usrMode)
        {        
         //Do nothing
          usr.push(item)

        }
       
      })
      setDbUsr(usr)
    })

    const requestLocationPermission = async () =>{
      if(Platform.OS === 'ios'){
        getOneTimeLocation();
        subscribeLocationLocation();
      }
      else{
        try{
          const granted = await
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title:'Location Acess Required',
              message:'This App needs to Access your Location',
            },

          );
          if(granted===PermissionsAndroid.RESULTS.GRANTED){
            getOneTimeLocation();
            subscribeLocationLocation();
          }
          else{
            setLocationStatus('Permission Denied');
          }
        }catch(err)
        {
          alert(err.message)
        }
      }
    };
    requestLocationPermission();
    return()=>{
      Geolocation.clearWatch(watchID);
    };
  },[]);

  const getOneTimeLocation =()=>{
    setLocationStatus('Getting Location ... ');
    Geolocation.getCurrentPosition(
      (position)=>{
        setLocationStatus('You are Here');

        const currentLongitude=JSON.stringify(position.coords.longitude);
        const currentLatitude=JSON.stringify(position.coords.latitude);

        setCurrLng(currentLongitude);
        setCurrLat(currentLatitude);
        setOriginCoords(currentLatitude,currentLongitude)
      },
      (error)=>{
        setLocationStatus(error.message);

      },
      {
        enableHighAccuracy:false,
        timeout:30000,
        maximumAge:1000
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        //Will give you the location on location change
        
        setLocationStatus('You are Here');
        // console.log(position);

        //getting the Longitude from the location json        
        const currentLongitude =
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrLng(currentLongitude);

        //Setting Latitude state
        setCurrLat(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };

  const getRadialDistance=(currUserLatitude,currUserLongitude,databaseLatitude,databaseLongitude)=>{
    return getDistance(
      {latitude: currUserLatitude, longitude: currUserLongitude},
      {latitude: databaseLatitude, longitude: databaseLongitude},
    );
  }


  const getMapDirection =(srcLat, srcLng, destLat, destLng)=> {
        var config = {
          method: 'get',
          url: 'https://maps.googleapis.com/maps/api/directions/json?origin='+srcLat+','+srcLng+'&destination='+destLat+','+destLng+ '&mode=driving&key=AIzaSyB0VZQy9-x8UEsjC6sTrQbRe5UohJn8fH0',
          headers: { }
        };
        axios(config)
        .then(function (response) {
        var coords = (decodePolyline((response.data.routes[0].legs[0].steps[0].polyline.points)))
        var newcoords = []
        coords.forEach(item=>{
          item['latitude']=item['lat']
          item['longitude']=item['lng']
          delete item['lat']
          delete item['lng']
          newcoords.push({'latitude':item['latitude'],'longitude':item['longitude']})
          usrCoords.push(newcoords)
          })
        return newcoords;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  const getViablePassengers=()=>{
  
    let viableSource = false
    let viableDestination = false
    dbUser.forEach(dbUsr =>{
      
    usrCoords.forEach(point =>{
      console.log(point)
      if(getRadialDistance(point.lat,point.lng,dbUsr.SourceLatitude,dbUsr.SourceLongititude)<250)
      {
        viableSource = true
        if(getRadialDistance(point.lat,point.lng,dbUsr.DestinationLatitude,dbUsr.DestinationLongititude)<250)
        {
          viableDestination= true
          viableCarpoolers.push(dbUsr)

        }
      }
      else{
      }
    })
  })
  }


  const getViableDrivers=()=>{

    usr.forEach(dbUsr =>{
      let viableSource = false
      let viableDestination = false
      var pts = getDirections(dbUsr.SourceLatitude,dbUsr.SourceLongititude,dbUsr.DestinationLatitude.dbUsr.DestinationLongititude)
      pts.forEach(pt =>{
        if(getRadialDistance(pt.lat,point.lng,currLat,currLng)<250)
      {
        viableSource = true
        if(getRadialDistance(point.lat,point.lng,dbUsr.DestinationLatitude,dbUsr.DestinationLongititude)<250)
        {
          viableDestination=true
        }
      }

      })
      if(viableSource === true && viableDestination === true)
      {
        viableCarpoolers.push(dbUsr)
      }
    })
  }

  const setOriginCoords = () =>{
    set(ref(database, 'user/'+ user), {
        SourceLatitude: currLat,
        SourceLongititude: currLng
      });     
}
  const setDestinationCoords = (latitudes,longitudes) =>{
        set(ref(database, 'user/'+ user), {
            DestinationLatitude: destLat,
            DestinationLongititude: destLng
          });     
  }


  return (
    
    <>
<MapView
    style={{flex:1,height:'100%'}}
    initialRegion={{
      latitude: currLat,
      longitude: currLng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    {/* <Polyline
		coordinates={usrPoints}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeWidth={6}
	/> */}
    
    </MapView>
      
      
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0
          },
          textInput: {
            fontSize: RFValue(18),
            fontFamily:'Gilroy ExtraBold',
            alignSelf:'center',
            position: 'relative',
            marginTop:-1300,
            width:'60%'
          }
        }}
        enablePoweredByContainer={false}
        returnKeyType={"search"}
        query={{
          key: 'AIzaSyB0VZQy9-x8UEsjC6sTrQbRe5UohJn8fH0',
          language: 'en',
          components: 'country:ke'
        }}
        placeholder="Where to?"
        nearbyPlacesAPI="GooglePlacesSearch"
        fetchDetails={true}
        debounce={400}
        onPress={(data, details = null) => {
          //Set current page destination coords
          setDestLat(JSON.stringify(details.geometry.location.lat))
          setDestLng(JSON.stringify(details.geometry.location.lng))
          //Send destnation coords to firebase
          setDestinationCoords(destLat,destLng)

          //Get driver directions
          if(userDetails.usrMode === 'Driver')
          {
            console.log('Maps destination set for driver, currently fetching directions')
            setUsrPoints(getMapDirection(currLat,currLng,destLat,destLng))
            getViablePassengers()
          }
          else{
            console.log('Maps destination set for passenger, currently fetching the viable drivers')
            getViableDrivers()
          }

          dispatch(
            setDestination({
              coordinates:{
                name:details.formatted_address,  
                latitude:JSON.stringify(details.geometry.location.lat),
                longitude:JSON.stringify(details.geometry.location.lng)
            }
              
            }),
          );
         
        }} 
        
        />
<View style={{position:'absolute',alignSelf:'center',marginTop:'120%'}}>
        <NavigateCard />

        
        <Button title='Continue' passedViewStyle={{width:'50%',alignSelf:'center',marginBottom:'10%'}}></Button>
        </View>
</>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
