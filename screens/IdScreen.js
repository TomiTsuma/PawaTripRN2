import React from 'react'
import { Image, SafeAreaView,StyleSheet, Text,TextInput, View } from 'react-native'
import { useState } from 'react';
import logo from '../assets/logo.png'; 
import { useNavigation } from '@react-navigation/native';
import { database } from '../firebase';
import { auth } from '../firebase';
import { ref, set, onValue, get, child } from 'firebase/database';
import {useDispatch, useSelector} from 'react-redux';
import { setUserId } from '../slices/userSlice';
import { setUser } from '../slices/navSlice';
import { store } from '../store';
import navSlice from '../slices/navSlice';
import { RFValue } from 'react-native-responsive-fontsize';
import Input from './components/Input/input';
import Button from './components/Button/button';

const IdScreen = ({navigation}) => {
    const [id, setID] = useState('');

    // const user = String(auth.currentUser.email).split('@')[0];
    const dispatch = useDispatch(); 
    const usr =[]
    
       
    const getCarpoolers =()=>{
        const users= ref(database, `user`)
 
        onValue(users, (snapshot)=>{
          const userObject = snapshot.forEach(item=>{
            const temp =item.val();
            usr.push(item)
            console.log(item.child("Email"))
          })
          
          // const names = snapshot.child('Name').val();
          // const originLat = snapshot.child('SourceLatitude').val();
          // const originLng = snapshot.child('SourceLongitude').val();
          // const destinationLat = snapshot.child('DestinationLatitude').val();
          // const DestinationLng = snapshot.child('DestinationLongitude').val();
          // const phone = snapshot.child('PhoneNumber').val();
          // usr = setUsr(userObject)
          // console.log(userObject)
        })
        // console.log(usr[0]("Email"))
        usr.forEach(item=>{
          console.log(item.child("DestinationLatitude"))
        })
    }
    const setIDNumber = () =>{
        set(ref(database, 'user/'+ user), {
            IDNumber: id
          });  
          dispatch(
            setUserId({
              usrId:id
            })
          );
          navigation.navigate('PhoneNumberScreen')     
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <Image
            source={logo}
            style={{width: "100%", height: "100%",margin:0,position:"absolute"}}>
        
        </Image>
            <Text   style={{marginTop:20,fontSize:RFValue(18),fontFamily:'Gotham Black Regular'}}>Enter your ID number</Text>

           <Input placeholder='ID Number'></Input>
            <Button
                    title="Continue"
                    onPress ={getCarpoolers}></Button>
        </SafeAreaView>
    )
}

export default IdScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      inputView: {
          flexDirection: "row",
          backgroundColor: "#f0f1f5",
          borderRadius: 20,
          width: "80%",
          height: 45,
          margin: 50,
          marginLeft:80,
          marginRight:80,
          alignItems: "center",
          justifyContent:'center',
        }
})
