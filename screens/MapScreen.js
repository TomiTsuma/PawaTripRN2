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

MapboxGL.setAccessToken('pk.eyJ1IjoidG9tbXl0c3VtYSIsImEiOiJja3JldzkyanM1cHYyMnFvNndqNHVmZ3E5In0.57Og6Agd2HC8lNZMTPay-w');

const MapScreen = () => {

  
  return (
    
    <><View style={tw`h-2/3`}>

      <Map />
      <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0
          },
          textInput: {
            fontSize: 18,
            paddingEnd: 160,
            marginTop: -250,
            marginLeft: 80,
            marginRight: 40,
            position: 'absolute'
          }
        }}
        enablePoweredByContainer={false}
        returnKeyType={"search"}
        query={{
          key: 'AIzaSyAu19oy2n9MFMcXx_zug-IMJX5oUXqhnyg',
          language: 'en',
        }}
        placeholder="Where to?"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400} />


    </View>
    <View style={tw`h-1/3`}>
        <Image source={sidebar}
          style={{ width: 80, height: 5, marginTop: 3, alignSelf: 'center' }}></Image>
          <ImageBackground source={button}
          style={{ width: 150, height: 30,position:'absolute' ,marginTop:150,alignSelf:'center'}}>
          <Text style={{color:"#FFFFFF", alignSelf:'center',fontSize:20}} onPress={()=>navigation.navigate('PriceDetails')}>Continue</Text>
        </ImageBackground>
        <NavigateCard />
        
      </View></>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
