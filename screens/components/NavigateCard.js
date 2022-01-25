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



const NavigateCard = () => {
    const position = useSelector((state) => state.nav);

    return (
        <SafeAreaView >
           
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
            <Text style={{fontSize:17,marginTop:10}}>Pick up</Text>
            <TouchableOpacity>
            <Text style={{fontSize:20}}>{position.origin.coordinates.name}</Text>
            </TouchableOpacity>
            <Text style={{fontSize:17, marginTop:40} }>Drop off</Text>
            <TouchableOpacity>
            <Text style={{fontSize:20}}>{position.destination.coordinates.name}</Text>
            </TouchableOpacity>

            </View>
            </View>

        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({
    container1:{
        flexDirection :"row",
        width:300,
        height:300
        
    },
    container2:{
        flexDirection :"column"
        
    },
    container3:{
        flexDirection :"column",
        marginStart:20,
        
    }
})
