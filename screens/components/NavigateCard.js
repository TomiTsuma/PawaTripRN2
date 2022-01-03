import React from 'react'
import { StyleSheet, Text, View, SafeAreaView , Image, ImageBackground} from 'react-native'
import { BackgroundImage } from 'react-native-elements/dist/config'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames'
import curr_loc from '../../assets/curr_loc.png'
import dest from '../../assets/dest.png'
import transition from '../../assets/transition.png'
import bkg from '../../assets/driver_background.png'


const NavigateCard = () => {
    return (
        <SafeAreaView >
           
            <View style={styles.container1}>
                
                
            <View style={styles.container2}>
            <Image source = {curr_loc}
                   style={{width: 20, height: 20,marginTop:20, marginStart:20}}/>  
            <Image source = {transition}
                   style={{width: 3, height: 50,marginStart:27}}/>   
            <Image source = {dest}
                   style={{width: 20, height: 28,marginStart:20}}/>     
            </View>
            <View style={styles.container3}>
            <Text style={tw` text-sm mt-3` }>Pick up</Text>
            <TouchableOpacity>
            <Text style={tw` text-sm mb-5` }>Current Location</Text>
            </TouchableOpacity>
            <Text style={tw` text-sm mt-3` }>Drop off</Text>
            <TouchableOpacity>
            <Text style={tw`text-sm` }>Destination</Text>
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
