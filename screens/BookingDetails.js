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
import { RFValue } from 'react-native-responsive-fontsize'
import curr_loc from '../assets/curr_loc.png'
import dest from '../assets/dest.png'
import transition from '../assets/transition.png'
import { useSelector } from 'react-redux'




const BookingDetails = () => {
    const position = useSelector((state) => state.nav);

    return (
        <View>
             <ImageBackground
        source={back}
        style={{ width: "100%", height: "100%",alignItems:'center'}}>
            <Text style={styles.title}>Carpooler Details</Text>

            <View
                style={{width:'70%',height:'40%',margin:'10%',backgroundColor:'#FFF',borderRadius:30,elevation:1,padding:'1%'}}>
                    <View style={{flexDirection:'row'}}>
                        <Image source={prof_pic}
                        style={{width:50,height:50, marginLeft:10,marginTop:10}}></Image>

                    <View style={{marginLeft:20,flexDirection:'column'}}>
                    <Text style={{marginTop:15, fontFamily:'Gilroy ExtraBold',fontSize:RFValue(18)}}>Name</Text>
                
                <Rating  
        type="star"
        fractions={1}
        startingValue={3.6}
        imageSize={25}
        style={{ paddingVertical:2 }}></Rating>
           
                    </View>
                    </View>
                    
        
                    <View style={styles.container1}>

<View style={styles.container2}>
<Image source = {curr_loc}
   style={{width: '20%', height: undefined,aspectRatio:12/12,marginTop:20, marginStart:20}}/>  
<Image source = {transition}
   style={{width: '3%', height: undefined,aspectRatio:3/30,marginStart:'31%'}}/>   
<Image source = {dest}
   style={{width: '15%', height: undefined,aspectRatio:12/17,marginStart:20}}/>     
</View>
<View style={styles.container3}>
<Text   style={{marginTop:'7%',fontSize:RFValue(15),fontFamily:'Gotham Medium'}}>Pick up</Text>
<TouchableOpacity>
<Text   style={{marginTop:'1%',fontSize:RFValue(15),fontFamily:'Gotham Medium'}}></Text>

</TouchableOpacity>
<Text   style={{marginTop:'5%',fontSize:RFValue(18),fontFamily:'Gotham Medium'}}>Drop off</Text>
<TouchableOpacity>
<Text   style={{marginTop:'1%',fontSize:RFValue(18),fontFamily:'Gotham Medium'}}></Text>
</TouchableOpacity>
</View>

</View>

                    <View style={{flexDirection:'row',marginTop:'2%'}}>
                    <Image source={prof_pic}
                        style={{width:20,height:20,marginLeft:30}}></Image>
                    <Text style={{alignSelf:'center',fontFamily:'Gilroy ExtraBold'}}>3 Passengers</Text>

                    </View>
                    <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-around'}}>
                        <Image source={loc} style={{width:15,height:22}}></Image>
                        <Text style={{fontSize:15,marginRight:6,fontFamily:'Gilroy ExtraBold'}}>12km</Text>
                        <Image source={loc} style={{width:15,height:22}}></Image>
                        <Text style={{fontSize:15,marginRight:6,fontFamily:'Gilroy ExtraBold'}}>1400hrs</Text>
                        <Image source={loc} style={{width:15,height:22}}></Image>
                        <Text style={{fontSize:15,marginRight:6,fontFamily:'Gilroy ExtraBold'}}>80mins</Text>

                    </View>
                    
                    <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-around'}}>
                        <View style={{flexDirection:'row'}}>
                        <Image source={call} style={{width:22,height:22}}></Image>
                        <Text style={{fontSize:15,fontFamily:'Gilroy ExtraBold'}}>Call</Text>
                        </View>
                        <Image source={split} style={{width:1,height:16}}></Image>
                        <View style={{flexDirection:'row'}}>
                        <Image source={message} style={{width:22,height:22}}></Image>
                        <Text style={{fontSize:15,fontFamily:'Gilroy ExtraBold'}}>Message</Text>
                        </View>

                    </View>
               
                     </View>
                 <View
                style={{width:'70%',height:'30%',margin:'5%',backgroundColor:'#FFF',borderRadius:30,elevation:1,padding:'1%'}}>
                <View style={{flexDirection:'row',marginTop:10}}>
                    <Image source={prof_pic}
                        style={{width:10,height:10, alignSelf:'center',marginLeft:30}}></Image>
                    <Text style={{alignSelf:'center',fontFamily:'Gilroy ExtraBold'}}>Mazda Demio</Text>

                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                    <Image source={prof_pic}
                        style={{width:10,height:10, alignSelf:'center',marginLeft:30}}></Image>
                    <Text style={{alignSelf:'center',fontFamily:'Gilroy ExtraBold'}}>KCJ 733L</Text>

                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                    <Image source={prof_pic}
                        style={{width:10,height:10, alignSelf:'center',marginLeft:30}}></Image>
                    <Text style={{alignSelf:'center',fontFamily:'Gilroy ExtraBold'}}>24 Rides</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                    <Image source={prof_pic}
                        style={{width:10,height:10, alignSelf:'center',marginLeft:30}}></Image>
                    <Text style={{alignSelf:'center',fontFamily:'Gilroy ExtraBold'}}>Female</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                    <Image source={prof_pic}
                        style={{width:10,height:10, alignSelf:'center',marginLeft:30}}></Image>
                    <Text style={{alignSelf:'center',fontFamily:'Gilroy ExtraBold'}}>Ksh. 150 per seat</Text>

                    </View> 

</View>
            </ImageBackground>
            <Button title={'Continue'}  style={{marginTop:50,width:50}}></Button>

        </View>
    )
}

export default BookingDetails

const styles = StyleSheet.create({
    title:{
        color:'#ffffff',
        alignSelf:'center',
        marginTop:50,
        fontSize:RFValue(22),
        fontFamily:'Gotham Black Regular'
      },
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
