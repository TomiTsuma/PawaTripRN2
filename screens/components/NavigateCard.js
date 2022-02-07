import React from 'react'
import { StyleSheet, Text, View, SafeAreaView , Image, ImageBackground} from 'react-native'
import { BackgroundImage } from 'react-native-elements/dist/config'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames'
import curr_loc from '../../assets/curr_loc.png'
import dest from '../../assets/dest.png'
import transition from '../../assets/transition.png'
import bkg from '../../assets/driver_background.png'
import { useDispatch, useSelector } from 'react-redux';
import { RFValue } from 'react-native-responsive-fontsize'
import CardView from 'react-native-cardview'



const NavigateCard = () => {
    const position = useSelector((state) => state.nav);

    return (
           
            <View style={styles.container1}>
                
                
            <View style={styles.container2}>
            <Image source = {curr_loc}
                   style={{width: 30, height: 30,marginTop:20, marginStart:20}}/>  
            <Image source = {transition}
                   style={{width: 4, height: 50,marginStart:33}}/>   
            <Image source = {dest}
                   style={{width: 30, height: 40,marginStart:20}}/>     
            </View>
            <View style={styles.container3}>
            <Text   style={{marginTop:10,fontSize:RFValue(18),fontFamily:'Gotham Medium'}}>Pick up</Text>
            <TouchableOpacity>
            <Text   style={{marginTop:5,fontSize:RFValue(18),fontFamily:'Gotham Medium'}}>{position.origin.coordinates.name}</Text>

            <Text style={{fontSize:20}}></Text>
            </TouchableOpacity>
            <Text   style={{marginTop:10,fontSize:RFValue(18),fontFamily:'Gotham Medium'}}>Drop off</Text>
            <TouchableOpacity>
            <Text   style={{marginTop:5,fontSize:RFValue(18),fontFamily:'Gotham Medium'}}>{position.destination.coordinates.name}</Text>
            </TouchableOpacity>

            </View>
            </View>

    )
}

export default NavigateCard

const styles = StyleSheet.create({
    container1:{
        width:"100%",
        flexDirection :"row",
        borderWidth:2,
        paddingHorizontal:'10%',
        paddingVertical:'3%',
        borderColor:'#1E319320',
        alignSelf:'center',
        alignItems:'center',
        borderRadius:50,
        elevation:1,
        backgroundColor:'#fff',
    },
    container2:{
        flexDirection :"column"
        
    },
    container3:{
        flexDirection :"column",
        marginStart:20,
        
    }
})
