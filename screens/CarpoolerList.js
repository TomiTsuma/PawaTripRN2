import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { auth, database } from '../firebase';
import {ref, get, onValue} from 'firebase/database'
import button from '../assets/button.png'
import { Button } from 'react-native';



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
      console.log(users)
    })
}
const CarpoolerList = () => {
  return (
    <View>
      <Button title='Cont'></Button>
    </View>
  );
};

export default CarpoolerList;

const styles = StyleSheet.create({});
