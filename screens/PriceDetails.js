import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import back from '../assets/back.png'
import pricebkg from '../assets/pricebkg.png'
import button from '../assets/button.png'
import loc from '../assets/loc.png';
import { RFValue } from 'react-native-responsive-fontsize'
import Button from './components/Button/button'
 

const PriceDetails = () => {
    const [price, setPrice] = useState('')
    const [distance, setDistance] = useState('')
    const [time, setTime] = useState('')
    const [duration,setDuration] = useState('')

    return (

        <View style={{width:'100%',height:'100%'}}>
            <ImageBackground
        source={back}
        style={{ width: "100%", height: "100%",alignItems:'center'}}>
                <Text style={styles.title}>Price Details</Text>

                <View
                style={{width:'70%',height:'40%',margin:'10%',backgroundColor:'#FFF',borderRadius:30,elevation:1,padding:'1%',alignItems:'center',justifyContent:'space-around'}}>
                <Text style={{alignSelf:'center',fontFamily:'Gilroy ExtraBold',color:'#1E3193'}}>Recommended price</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:RFValue(40),marginTop:60,fontFamily:'Gilroy ExtraBold',color:'#1E3193'}}>KSh. 50</Text>
                        </View>
                    
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:'10%'}}>
                        <TouchableOpacity
                        style={{width:'35%',height:'30%',backgroundColor:'#008AD8',borderRadius:20,marginEnd:'10%'}}>
                            <View
                            style={{width:'100%',height:'100%',backgroundColor:''}}>
                                <Text style={{color:'#ffffff',alignSelf:'center',fontSize:RFValue(12),fontFamily:'Gotham Book Font',marginTop:'4%'}}>Agree</Text>
                            </View>
                            
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={{width:'35%',height:'30%',backgroundColor:'#008AD8',borderRadius:20}}>
                            <View
                            style={{width:'100%',height:'100%',backgroundColor:''}}>
                                <Text style={{color:'#ffffff',alignSelf:'center',fontSize:RFValue(12),fontFamily:'Gotham Book Font',marginTop:'4%'}}>Change</Text>
                            </View>
                            
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Image source={loc} style={{width:11,height:16}}></Image>
                        <Text style={{fontSize:11,marginRight:6}}>{distance}km</Text>
                        <Image source={loc} style={{width:11,height:16}}></Image>
                        <Text style={{fontSize:11,marginRight:6}}>{time}</Text>
                        <Image source={loc} style={{width:11,height:16}}></Image>
                        <Text style={{fontSize:11,marginRight:6}}>{duration}</Text>

                    </View>
                    
                    <Button title='Continue' passedViewStyle={{width:'60%',alignSelf:'center',marginBottom:'10%'}}
        // onPress={togglePriceModal}
        ></Button>
                </View>
               
                    </ImageBackground>
        </View>
    )
}

export default PriceDetails

const styles = StyleSheet.create({
    title:{
        color:'#ffffff',
        alignSelf:'center',
        marginTop:50,
        fontSize:RFValue(24),
        fontFamily:'Gotham Black Regular'
      }
})
