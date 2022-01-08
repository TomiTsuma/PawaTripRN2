import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import bookride from "../assets/bookride.png"
import offerride from "../assets/offerride.png"
import logo from '../assets/logo.png'; 
import { auth, database } from '../firebase';
import { setUserMode } from '../slices/userSlice.js'
import { useDispatch } from 'react-redux'





const ModeScreen = () => {
    
const user = String(auth.currentUser.email).split('@')[0];
const dispatch =  useDispatch();
const [mode, setMode] = useState('')
const setTraveller = () =>{
    set(ref(database, 'user/'+ String(user)), {
        Mode: mode
      });
    dispatch(
        setUserMode({
            usrMode:mode
        })
    )  
    
    if(mode == "driver"){

    }
    else{

    }
    
        
}


    return (
        <SafeAreaView style={{width:"100%", height:"100%"}}>
            <Image
            source={logo}
            style={{width: "100%", height: "100%",marginTop:0,position:"absolute"}}>
        
        </Image>
            <Text style={{alignSelf:"center", justifyContent:"center",marginTop:300}}>Let's take a trip</Text>
            <Text style={{alignSelf:"center", width:"70%"}}>Request/ Offer a ride and share your trip with a nearby community member</Text>

            <TouchableOpacity> 
                <Image 
                onPressIn={(mode) => setMode("passenger")}
                onPress={setTraveller}
                source = {bookride}
                             style={{width: 150, height: 30,marginTop:40,alignSelf:"center"}}>
                </Image>
            </TouchableOpacity>

            <TouchableOpacity> 

                <Image
                onPressIn={(mode) => setMode("driver")}
                onPress={setTraveller}               
                source = {offerride}
                             style={{width: 150, height: 30,marginTop:20,alignSelf:"center"}}>
                </Image>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ModeScreen

const styles = StyleSheet.create({
    
})
