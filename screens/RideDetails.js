import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Button, StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import { Provider } from 'react-redux';
import Index from './index.js'
import { store } from '../store';
import RootNavigator from './navigation/RootNavigator.js';
import IdScreen from './IdScreen.js';
import PhoneNumberScreen from './PhoneNumberScreen';
import ModeScreen from './ModeScreen';
import MapScreen from './MapScreen';

import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RideOptionsCard from './components/RideOptionsCard.js';
import logo from '../assets/logo.png'; 
import bkg from '../assets/driver_background.png'
import carpoolersbkg from '../assets/carpooler_background.png'
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
import back from '../assets/back.png'
import NavigateCard from './components/NavigateCard';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {

  return (
    <SafeAreaView style={{width: "100%", height: "100%"}}>
        <Image
            source={back}
            style={{width: "100%", height: "100%",margin:0,position:"absolute"}}>
        
        </Image>
        <Text style={styles.title}>Ride Details</Text>
        <View style = {{width: "100%", height: "100%",marginTop:40,marginBottom:10,marginLeft:50,flexDirection:"column",alignItems:"left"}}>
        <NavigateCard ></NavigateCard>
        <View style = {{width: "100%", height: 30,marginTop:10,marginBottom:10,marginLeft:-10,marginRight:20,flex:1,flexDirection:"row"}}>
            <View style={{marginRight:100}} >
                <Text>Departure Time</Text>
                <ImageBackground source={bkg}
                                 style={{width:80,height:50}}>
                    <TextInput style={{alignSelf:"center",marginTop:10}}>3:10</TextInput>
                </ImageBackground>
                <Text style={{marginTop:100}}>Number of passengers</Text>
        
                <ImageBackground source={carpoolersbkg}
                                  style={{width:280,height:60}}>
                    <View style={{flexDirection:"row"}}>
                    <TouchableOpacity>
                    <Image source={minus}
                          style={{width:40,height:40,marginStart:20,marginTop:5}}/>
                    </TouchableOpacity>
                    <TextInput style={{marginLeft:70}}>1</TextInput>
                    <TouchableOpacity>
                    <Image source={plus}
                          style={{width:40,height:40,marginLeft:70,marginTop:5}}/>
                    </TouchableOpacity>
                          </View>
                          <Button title="Continue"></Button>
                </ImageBackground>
                
            </View>
            <View style={{marginLeft:-180}} >
                <Text>Departure Date</Text>
                <ImageBackground
                source={bkg}
                style={{width:80,height:50}}>
                    <TextInput style={{alignSelf:"center",marginTop:10}}>12/12/2021</TextInput>
                </ImageBackground>
                
            </View>
        </View>
        
        
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    height:'100%',
    margin: 40,

  },
  title:{
    color:'#ffffff',
    alignSelf:'center',
    marginTop:50,
    fontSize:25
  }
});
