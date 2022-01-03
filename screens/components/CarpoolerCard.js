import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { Rating } from 'react-native-elements'
import driver_background from '../../assets/driver_background.png'
import pricebkg from '../../assets/pricebkg.png'
import message from '../../assets/message.png'
import call from '../../assets/call.png'
import greystar from '../../assets/greystar.png';
import NavigateCard from './NavigateCard'
import { Button } from 'react-native-elements/dist/buttons/Button'

const CarpoolerCard = () => {
    return (
        <View style={{width:"100%",height:"100%"}}>
            <ImageBackground source={driver_background}
            style={{width:370,height:220,marginTop:200,marginLeft:10}}>
                <View style={{flexDirection:'row',width:320,height:50,marginLeft:30,marginTop:10,alignItems:'center'}}>
                <Image source={call}
                style={{width:40,height:40,marginRight:30}}></Image>
                <View style={{flexDirection:'column',marginRight:30}}>
                <Text style={{alignSelf:'center'}}>Name</Text>
                
                    <Rating  
            type="star"
            fractions={1}
            startingValue={3.6}
            imageSize={25}
            style={{ paddingVertical:2 }}></Rating>
               
                </View>
                <Image source={message}
                style={{width:40,height:40}}></Image>
                </View>
                <View style={{marginTop:-15,width:500}}>
                <NavigateCard ></NavigateCard>
                
                </View>
                <View style = {{flexDirection:'row',marginTop:125, marginLeft:80}}>
                    <Text style={{color:'#3278f0'}}>Details</Text>
                    <Text style={{marginLeft:100, color:'#3278f0'}}>Confirm</Text>
                </View>
                
            </ImageBackground>
            
        </View>
    )
}

export default CarpoolerCard

const styles = StyleSheet.create({})
