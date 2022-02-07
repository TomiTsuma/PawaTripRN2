import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import bookride from "../assets/bookride.png"
import offerride from "../assets/offerride.png"
import logo from '../assets/logo.png'; 
import { auth, database } from '../firebase';
import {set, ref} from 'firebase/database'

import { setUserMode } from '../slices/userSlice.js'
import { useDispatch } from 'react-redux'
import { RFValue } from 'react-native-responsive-fontsize';
import Button from './components/Button/button';





const ModeScreen = ({navigation}) => {
    
// const user = String(auth.currentUser.email).split('@')[0];
const dispatch =  useDispatch();
const [mode, setMode] = useState('')
const setTraveller = () =>{
    console.log('done')
    set(ref(database, 'user/'+ String(user)), {
        Mode: mode
      });
    dispatch(
        setUserMode({
            usrMode:mode
        })
    )  
    
    navigation.navigate('MapScreen')
    
        
}


    return (
        <SafeAreaView style={{width:"100%", height:"100%",justifyContent:'center'}}>
            <Image
            source={logo}
            style={{width: "100%", height: "100%",marginTop:0,position:"absolute"}}>
        
        </Image>
        <View style={{alignItems:'center',padding:'10%'}}>
        <Text   style={{marginTop:20,fontSize:RFValue(15),fontFamily:'Gotham Black Regular',textAlign:'center'}}>Let's take a trip</Text>
        <Text   style={{marginTop:20,fontSize:RFValue(15),fontFamily:'Gotham Black Regular',textAlign:'center'}}>Request/ Offer a ride and Share your Trip with a nearby Community Member</Text>
        </View>
            <Button title='Book Ride' passedViewStyle={{width:'50%',alignSelf:'center',backgroundColor:'#1E3193'}}></Button>
            <Button title='Offer Ride' passedViewStyle={{width:'50%',alignSelf:'center',backgroundColor:'#1E3193'}}></Button>
        </SafeAreaView>
    )
}

export default ModeScreen

const styles = StyleSheet.create({
    
})
