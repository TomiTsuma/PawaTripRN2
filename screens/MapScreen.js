import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import { GOOGLE_MAPS_API_KEY } from "@env"
import tw from "tailwind-react-native-classnames";
import Map from './components/Map.js';
import NavigateCard from './components/NavigateCard';
import sidebar from '../assets/sidebar.png'
import button from '../assets/button.png'
import MapboxGL from '@react-native-mapbox-gl/maps';
import MapView   from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice'
import axios from 'axios'
import Math from 'Math'
import { auth, database } from '../firebase';
import {ref, get, onValue} from 'firebase/database'



const MapScreen = () => {
  const [currLat,setCurrLat] = useState(32.5);
  const [currLng,setCurrLng] = useState(-1.3);
  const [usrPoints, setUsrPoints] = useState(); 


  function getRadialDistance (latitude, longitude){
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(latitude-currLat);  // deg2rad below
    var dLon = deg2rad(longitude-currLng); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;

  }
  const getCarpoolers =()=>{
      const users= ref(database, 'users') 
      onValue(users, (snapshot)=>{
        const userObject = snapshot.val();
        // const names = snapshot.child('Name').val();
        // const originLat = snapshot.child('SourceLatitude').val();
        // const originLng = snapshot.child('SourceLongitude').val();
        // const destinationLat = snapshot.child('DestinationLatitude').val();
        // const DestinationLng = snapshot.child('DestinationLongitude').val();
        // const phone = snapshot.child('PhoneNumber').val();
        
      })
  }


  const getDirections =(srcLat, srcLng, destLat, destLng)=>{

    axios.get("https://maps.googleapis.com/maps/api/directions/json?origin=" + srcLat + "," + srcLng + "&destination=" + destLat + "," + destLng + "&mode=driving&key=" + api_key)
          .then(response => {
            console.log(response)
              setResults(response.data.features)
           
          })

         
  }
  dispatch = useDispatch();
  return (
    
    <><View style={tw`h-2/3`}>

<MapView
    style={{flex:1}}
    initialRegion={{
      latitude: -1.21989,
      longitude: 36.8892117,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    {/* <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={GOOGLE_API_KEY} // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        /> */}
    </MapView>
      
      
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0
          },
          textInput: {
            fontSize: 18,
            paddingEnd: 160,
            marginTop: -350,
            marginLeft: 80,
            marginRight: 80,
            position: 'absolute'
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
        debounce={400}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          dispatch(
            setDestination({
              coordinates:{
                name:data
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
          style={{ width: 150, height: 30,position:'absolute', marginTop:180,alignSelf:'center'}}>
          <Text style={{color:"#FFFFFF", alignSelf:'center',fontSize:20}} onPress={()=>navigation.navigate('PriceDetails')}>Continue</Text>
        </ImageBackground>
      </View></>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
