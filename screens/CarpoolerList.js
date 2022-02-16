import { FlatList, Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import curr_loc from '../assets/curr_loc.png'
import dest from '../assets/dest.png'
import transition from '../assets/transition.png'
import call from 'react-native-phone-call'
import { Rating } from 'react-native-elements'
import message from '../assets/message.png'
import dial from '../assets/call.png'
import back from '../assets/back.png'

const DATA = [
  {
    uuid:'ttsuma',
    name: 'Margaret Wanjiru',
    idNumber:'878366',
    source: 'Mogotio Road, Westlands Kenya',
    destination: 'WestGate Mall, Westlands Kenya',
    phone:'+254726539744'
  },
  
]


const Item = ({ title }) => (
 
  <View style={styles.item}>
            
  <View style={{flexDirection:'row',width:'100%',height:'20%',alignSelf:'center',alignItems:'center',justifyContent:'space-between'}}>
  <Image source={dial}
  style={{width:'14%',height:undefined,aspectRatio:11/10.8}}></Image>
  <View style={{flexDirection:'column'}}>
  <Text style={{alignSelf:'center',fontFamily:"Gotham Black Regular"}}>{title.name}</Text>
  
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
<Text   style={{marginTop:'3%',fontSize:RFValue(12),fontFamily:'Gotham Medium'}}>Pick up</Text>
<TouchableOpacity>
<Text   style={{width:'60%',marginTop:'1%',fontSize:RFValue(14),fontFamily:'Gotham Medium'}}>{title.source}</Text>

</TouchableOpacity>
<Text   style={{marginTop:'5%',fontSize:RFValue(12),fontFamily:'Gotham Medium'}}>Drop off</Text>
<TouchableOpacity>
<Text   style={{width:'60%',marginTop:'1%',fontSize:RFValue(14),fontFamily:'Gotham Medium'}}>{title.destination}</Text>
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
)

const CarpoolerList = () => {
  
  const renderItem = ({ item }) => (
    <View>
      <Item title={item} />
    </View>
  )

  return (
      <View style={{height:'100%',width:'100%',backgroundColor:'#fff'}}>   
       <ImageBackground
        source={back}
        style={{ width: "100%", height: "100%" }}>
      
    <View
      style={{ padding: '2%', width: '100%', height: '100%', marginTop: '20%', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>  
      <Text
      style={{fontSize:RFValue(20),fontFamily:'Gotham Medium',color:'#fff',alignSelf:'center'}}>
        Carpoolers</Text> 
     
      <FlatList 
      data={DATA}
       renderItem={renderItem}
        keyExtractor={(item) => item.date} 
        style={{height:'100%'}}/>
    </View>
    </ImageBackground>
    </View>

  )
}

export default CarpoolerList

const styles = StyleSheet.create({
  container1:{
    width:"100%",
    flexDirection :"row",
    paddingLeft:'1%',
    paddingVertical:'3%',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    backgroundColor:'#fff',
},
container2:{
    flexDirection :"column",

},
container3:{
    flexDirection :"column",
},
 item: {
    width: '90%',
    flexDirection: 'column',
    backgroundColor:'#fff',
    borderRadius:40,
    elevation:1,
    margin:'3%',
    paddingTop:'3%',
    paddingHorizontal:'5%',
    borderWidth:2,
    borderColor:'#FFFFFF20'
  }
})
