import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image,TouchableOpacity } from 'react-native'
import { Rating } from 'react-native-elements'
import driver_background from '../../assets/driver_background.png'
import pricebkg from '../../assets/pricebkg.png'
import message from '../../assets/message.png'
import call from '../../assets/call.png'
import greystar from '../../assets/greystar.png';
import NavigateCard from './NavigateCard'
import { Button } from 'react-native-elements/dist/buttons/Button'
import curr_loc from '../../assets/curr_loc.png'
import dest from '../../assets/dest.png'
import transition from '../../assets/transition.png'
import { RFValue } from 'react-native-responsive-fontsize'


export default class CarpoolerCard extends Component {
  render() {
    return (
        <View style={{marginHorizontal:'10%',marginVertical:'10%',padding:'3%',paddingBottom:0,backgroundColor:'#fff',borderColor:'#1E319320',borderWidth:2,borderRadius:40}}>
            
        <View style={{flexDirection:'row',width:'100%',height:'16%',alignSelf:'center',alignItems:'center',justifyContent:'space-between'}}>
        <Image source={call}
        style={{width:'14%',height:undefined,aspectRatio:12/12}}></Image>
        <View style={{flexDirection:'column'}}>
        <Text style={{alignSelf:'center',fontFamily:"Gotham Black Regular"}}>Name</Text>
        
            <Rating  
    type="star"
    fractions={1}
    startingValue={3.6}
    imageSize={25}
    style={{ paddingVertical:2 }}></Rating>
       
        </View>
        <Image source={message}
        style={{width:'14%',height:undefined,aspectRatio:12/12}}></Image>
        </View>

        <View style={styles.container1}>

        <View style={styles.container2}>
    <Image source = {curr_loc}
           style={{width: '25%', height: undefined,aspectRatio:12/12,marginTop:20, marginStart:20}}/>  
    <Image source = {transition}
           style={{width: '5%', height: undefined,aspectRatio:3/30,marginStart:'31%'}}/>   
    <Image source = {dest}
           style={{width: '20%', height: undefined,aspectRatio:12/17,marginStart:20}}/>     
    </View>
    <View style={styles.container3}>
    <Text   style={{marginTop:'3%',fontSize:RFValue(18),fontFamily:'Gotham Medium'}}>Pick up</Text>
    <TouchableOpacity>
    <Text   style={{marginTop:'1%',fontSize:RFValue(18),fontFamily:'Gotham Medium'}}>{this.props.srcName}</Text>

    </TouchableOpacity>
    <Text   style={{marginTop:'5%',fontSize:RFValue(18),fontFamily:'Gotham Medium'}}>Drop off</Text>
    <TouchableOpacity>
    <Text   style={{marginTop:'1%',fontSize:RFValue(18),fontFamily:'Gotham Medium'}}>{this.props.destName}</Text>
    </TouchableOpacity>
</View>
        
        </View>
        <View style = {{flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity>
            <Text style={{color:'#3278f0',fontFamily:'Gilroy ExtraBold'}}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={{ color:'#3278f0',fontFamily:'Gilroy ExtraBold'}}>Confirm</Text>
            </TouchableOpacity>
        </View>
        
    
</View>

    );
  }
}


const styles = StyleSheet.create({
    container1:{
        width:"100%",
        flexDirection :"row",
        backgroundColor:'#fff',
    },
    container2:{
        flexDirection :"column" 
    },
    container3:{
        flexDirection :"column",
        marginStart:0
    }
})
