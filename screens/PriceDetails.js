import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native'
import { Button } from 'react-native-elements'
import back from '../assets/back.png'
import pricebkg from '../assets/pricebkg.png'
import button from '../assets/button.png'
import loc from '../assets/loc.png';
 

const PriceDetails = () => {
    return (
        <View style={{width:'100%',height:'100%'}}>
            <ImageBackground source={back} 
            style={{width:'100%',height:'100%'}}>
                <Text style={styles.title}>Ride Details</Text>

                <ImageBackground source={pricebkg}
                style={{width:260,height:270,alignSelf:'center',marginTop:100,alignItems:'center'}}>
                    <Text style={{alignSelf:'center',marginTop:7}}>Recommended price</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:30,marginTop:100}}>Ksh.</Text>
                        <Text style={{fontSize:70,marginTop:60}}>50</Text>
                        </View>
                    
                    <View style={{flexDirection:'row',margin:20}}>
                        <TouchableOpacity>
                            <ImageBackground source={button}
                            style={{width:80,height:15,marginRight:20}}>
                                <Text style={{color:'#ffffff',alignSelf:'center',fontSize:11}}>Agree</Text>
                            </ImageBackground>
                            
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageBackground source={button}
                            style={{width:80,height:15}}>
                                <Text style={{color:'#ffffff',alignSelf:'center',fontSize:11}}>Change</Text>
                            </ImageBackground>
                            
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Image source={loc} style={{width:11,height:16}}></Image>
                        <Text style={{fontSize:11,marginRight:6}}>12km</Text>
                        <Image source={loc} style={{width:11,height:16}}></Image>
                        <Text style={{fontSize:11,marginRight:6}}>1400</Text>
                        <Image source={loc} style={{width:11,height:16}}></Image>
                        <Text style={{fontSize:11,marginRight:6}}>80mins</Text>

                    </View>
                    

                </ImageBackground>
                <TouchableOpacity>
                <ImageBackground source={button}
                    style={{width:200,height:40,alignSelf:'center',marginTop:50}}>
                        <Text style={{color:'#FFFFFF',alignSelf:'center',fontSize:25}}>Confirm</Text>
                    </ImageBackground>
                    </TouchableOpacity>
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
        fontSize:25
      }
})
