import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity} from 'react-native'
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
import { auth, database } from '../firebase';
import {ref, get, onValue} from 'firebase/database'
import { Button } from 'react-native-elements/dist/buttons/Button';



const MapScreen = () => {
  const [currLat,setCurrLat] = useState(32.5);
  const [currLng,setCurrLng] = useState(-1.3);
  const [usrPoints, setUsrPoints] = useState(); 
  const usr =[]



  function getRadialDistance (latitude, longitude){
    console.log(latitude)
    console.log(longitude)
    console.log(37.444-latitude)
  }
  const getCarpoolers =()=>{
    const users= ref(database, `user`)

    onValue(users, (snapshot)=>{

      snapshot.forEach(item=>{
        usr.push(item)
      })
     
    })
    usr.forEach(item=>{
      getRadialDistance(item.child("SourceLatitude"),item.child("SourceLongititude"))
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

         <TouchableOpacity 
         style={{ width: 150,height: 30,backgroundColor:'#000', marginTop:0,alignSelf:'center'}}
         onPress={getCarpoolers}>

        <ImageBackground source={button}
        style={{ width: 150, height: 30, marginTop:0,alignSelf:'center'}}
          >

          <Text style={{color:"#FFFFFF", alignSelf:'center',fontSize:20}} onPress={getCarpoolers}>Continue</Text>

        </ImageBackground>
        </TouchableOpacity>

      </View></>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
