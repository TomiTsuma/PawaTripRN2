import React, {useState, useEffect} from 'react'
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



const MapScreen = () => {
  const [currLat,setCurrLat] = useState(-1.2199);
  const [currLng,setCurrLng] = useState(36.8892);
  const [destLat,setDestLat] = useState(-1.39390);
  const [destLng,setDestLng] = useState(36.7442);
  var [usrPoints, setUsrPoints] = useState([]); 
  var usrCoords=[];
  const usr =[]
  const [locationStatus, setLocationStatus] = useState('');
  const users= ref(database, `user`)
  const user = auth.currentUser

  useEffect(()=>{
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


  const getDirections =(srcLat, srcLng, destLat, destLng)=> {
        var config = {
          method: 'get',
          url: 'https://maps.googleapis.com/maps/api/directions/json?origin='+srcLat+','+srcLng+'&destination='+destLat+','+destLng+ '&mode=driving&key=AIzaSyB0VZQy9-x8UEsjC6sTrQbRe5UohJn8fH0',
          headers: { }
        };
        axios(config)
        .then(function (response) {
        console.log(response.data.routes[0].legs[0].steps[0].polyline)
        var coords = (decodePolyline((response.data.routes[0].legs[0].steps[0].polyline.points)))
        console.log(coords)
        var newcoords = []
        coords.forEach(item=>{
          item['latitude']=item['lat']
          item['longitude']=item['lng']
          delete item['lat']
          delete item['lng']
          newcoords.push({'latitude':item['latitude'],'longitude':item['longitude']})
          })
        return newcoords;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const getCarpoolers =()=>{
    const users= ref(database, `user`)

    onValue(users, (snapshot)=>{
      
      snapshot.forEach(item=>{
        usr.push(item)
      })
     
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



  // const getDirections =(srcLat, srcLng, destLat, destLng)=>{
  //   console.log(srcLat)
  //   console.log(srcLng)
  //   console.log(destLat)
  //   console.log(destLng)



  //   axios.get("https://maps.googleapis.com/maps/api/directions/json?origin=" + srcLat + "," + srcLng + "&destination=" + destLat + "," + destLng + "&mode=driving&key=AIzaSyB0VZQy9-x8UEsjC6sTrQbRe5UohJn8fH0")
  //         .then(response => {
  //           // console.log(response)
  //             console.log(decodePolyline(response.data.routes[0].legs[0].steps.polyline.points))
              
           
  //         })

         
  // }
  dispatch = useDispatch();
  return (
    
    <><View style={tw`h-2/3`}>

<MapView
    style={{flex:1}}
    initialRegion={{
      latitude: currLat,
      longitude: currLng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    <Polyline
		coordinates={usrPoints}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeWidth={6}
	/>
    
    </MapView>
      
      
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0
          },
          textInput: {
            fontSize: 18,
            paddingEnd: 160,
            marginTop:-600,
            alignSelf:'center',
            position: 'relative'
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
          setDestLat(JSON.stringify(details.geometry.location.lat))
          setDestLng(JSON.stringify(details.geometry.location.lng))
          setDestinationCoords(destLat,destLng)
          setUsrPoints(getDirections(currLat,currLng,destLat,destLng))
          

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


    </View>
    <View style={tw`h-1/3`}>
        <Image source={sidebar}
          style={{ width: 80, height: 5, marginTop: 3, alignSelf: 'center' }}></Image>
          
        <NavigateCard />

        
        <ImageBackground source={button}
         style={{ width: 150,height: 30, marginTop:0,alignSelf:'center'}}
         >
 <TouchableOpacity 
         style={{ width: 150,height: 30, marginTop:0,alignSelf:'center'}}
         onPress={getOneTimeLocation}>

          <Text style={{color:"#FFFFFF", alignSelf:'center',fontSize:20}} onPress={getCarpoolers}>Continue</Text>
          </TouchableOpacity>

        </ImageBackground>

      </View></>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
