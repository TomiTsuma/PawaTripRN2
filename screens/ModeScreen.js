import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import bookride from "../assets/bookride.png"
import offerride from "../assets/offerride.png"
import logo from '../assets/logo.png'; 
import { auth, database } from '../firebase';

const user = auth.currentUser;

const setDriver = () =>{
    database()
    .ref(('/users/').concat(user))
    .set({
        Mode: 'Driver',
    })
    .then(() => console.log('Mode set.'));

    // const navigation = useNavigation()

    //       useEffect(() => {
           
    //             navigation.replace("Home")
              
    //         })
        
}

const setPassenger = () =>{
    database()
    .ref(('/users/').concat(user))
    .set({
        Mode: 'Passenger',
    })
    .then(() => console.log('Mode set.'));

    const navigation = useNavigation()

          useEffect(() => {
           
                navigation.replace("Home")
              
            })
        
}

const ModeScreen = () => {
    return (
        <SafeAreaView style={{width:"100%", height:"100%"}}>
            <Image
            source={logo}
            style={{width: "100%", height: "100%",marginTop:0,position:"absolute"}}>
        
        </Image>
            <Text style={{alignSelf:"center", justifyContent:"center",marginTop:300}}>Let's take a trip</Text>
            <Text style={{alignSelf:"center"}}>Request/ Offer a ride and share your trip with a nearby community member</Text>

            <TouchableOpacity> 
                <Image 
                onPress={setPassenger}
                source = {bookride}
                             style={{width: 150, height: 30,marginTop:20,marginLeft:100}}>
                </Image>
            </TouchableOpacity>

            <TouchableOpacity> 

                <Image
                onPress={setDriver}
                source = {offerride}
                             style={{width: 150, height: 30,marginTop:20,marginLeft:100}}>
                </Image>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ModeScreen

const styles = StyleSheet.create({
    button:{
       
    }
})
