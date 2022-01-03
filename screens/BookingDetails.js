import React from 'react'
import { StyleSheet, Text, View , ImageBackground, TouchableOpacity, Button, Image} from 'react-native'
import back from '../assets/back.png'
import pricebkg from '../assets/pricebkg.png'
import { Rating } from 'react-native-elements'
import prof_pic from '../assets/prof_pic.png';
import loc from '../assets/loc.png'
import split from '../assets/split.png'
import NavigateCard from './components/NavigateCard'
import message from '../assets/message.png'
import call from '../assets/call.png'
import driver_background from '../assets/driver_background.png'




const BookingDetails = () => {
    return (
        <View>
            <ImageBackground 
            source={back}
            style={{width:'100%',height:'100%',alignItems:'center'}}>

            <Text style={styles.title}>Carpooler Details</Text>

            <ImageBackground source={pricebkg}
                style={{width:300,height:320,marginTop:50}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={prof_pic}
                        style={{width:50,height:50, marginLeft:10,marginTop:10}}></Image>

                    <View style={{marginLeft:20,flexDirection:'column'}}>
                    <Text style={{marginTop:15}}>Name</Text>
                
                <Rating  
        type="star"
        fractions={1}
        startingValue={3.6}
        imageSize={25}
        style={{ paddingVertical:2 }}></Rating>
           
                    </View>
                    </View>
                    <NavigateCard></NavigateCard>
                    <View style={{flexDirection:'row',marginTop:130}}>
                    <Image source={prof_pic}
                        style={{width:20,height:20, alignSelf:'center',marginLeft:30}}></Image>
                    <Text style={{alignSelf:'center'}}>3 Passengers</Text>

                    </View>
                    <View style={{flexDirection:'row',marginTop:10,marginLeft:50}}>
                        <Image source={loc} style={{width:15,height:22}}></Image>
                        <Text style={{fontSize:15,marginRight:6}}>12km</Text>
                        <Image source={loc} style={{width:15,height:22}}></Image>
                        <Text style={{fontSize:15,marginRight:6}}>1400hrs</Text>
                        <Image source={loc} style={{width:15,height:22}}></Image>
                        <Text style={{fontSize:15,marginRight:6}}>80mins</Text>

                    </View>
                    
                    <View style={{flexDirection:'row',marginTop:30,marginLeft:30}}>
                        <Image source={call} style={{width:22,height:22}}></Image>
                        <Text style={{fontSize:15,marginRight:6,marginRight:50}}>Call</Text>
                        <Image source={split} style={{width:1,height:16}}></Image>
                        <Image source={message} style={{width:22,height:22,marginLeft:50}}></Image>
                        <Text style={{fontSize:15,marginRight:6}}>Message</Text>

                    </View>
                </ImageBackground>
                <ImageBackground 
            source={driver_background}
            style={{width:300,height:170,alignItems:'flex_start'}}>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Image source={prof_pic}
                        style={{width:10,height:10, alignSelf:'center',marginLeft:30}}></Image>
                    <Text style={{alignSelf:'center'}}>Mazda Demio</Text>

                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                    <Image source={prof_pic}
                        style={{width:10,height:10, alignSelf:'center',marginLeft:30}}></Image>
                    <Text style={{alignSelf:'center'}}>KCJ 733L</Text>

                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                    <Image source={prof_pic}
                        style={{width:10,height:10, alignSelf:'center',marginLeft:30}}></Image>
                    <Text style={{alignSelf:'center'}}>24 Rides</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                    <Image source={prof_pic}
                        style={{width:10,height:10, alignSelf:'center',marginLeft:30}}></Image>
                    <Text style={{alignSelf:'center'}}>Female</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                    <Image source={prof_pic}
                        style={{width:10,height:10, alignSelf:'center',marginLeft:30}}></Image>
                    <Text style={{alignSelf:'center'}}>Ksh. 150 per seat</Text>

                    </View>

            </ImageBackground>
                
            </ImageBackground>
        </View>
    )
}

export default BookingDetails

const styles = StyleSheet.create({
    title:{
        color:'#ffffff',
        alignSelf:'center',
        marginTop:50,
        fontSize:25
      }
})
