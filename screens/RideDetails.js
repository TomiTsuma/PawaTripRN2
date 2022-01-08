import React, { useState , Component} from 'react';
import { ImageBackground, Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler'
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import bkg from '../assets/driver_background.png'
import carpoolersbkg from '../assets/carpooler_background.png'
import plus from '../assets/plus.png'
import minus from '../assets/minus.png'
import back from '../assets/back.png'
import NavigateCard from './components/NavigateCard';
import { TextInput } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const RideDetails = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  var [dateTimeMode, setTimeDateMode] = useState('');
  
  const currentDateTime = new Date();
  const year = currentDateTime.getFullYear();
  const month = currentDateTime.getMonth();
  const day = currentDateTime.getDay();
  const hour = currentDateTime.getHours();
  const min = currentDateTime.getMinutes();
  var currdate = day+"/"+month+"/"+year;
  var currtime = hour+":"+min;
  var count = 1
  var [date, setDate] = useState(currdate);
  var [time, setTime] = useState(currtime);
  var [carpoolers, setCarpoolers] = useState(count);

  

 


  const showDatePicker=()=>{
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date.getFullYear());
    
    currdate =  date.getFullYear()+"/"+date.getMonth()+"/"+date.getDay();
    currtime = date.getHours()+":"+date.getMinutes();
    setDate(currdate);
    setTime(currtime);
    hideDatePicker();
  };




return (
    
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <ImageBackground
        source={back}
        style={{ width: "100%", height: "100%"}}>

      
      <Text style={styles.title}>Ride Details</Text>
      <View style={{ width: "100%", height: "100%", alignItems: 'center', marginTop: 40, marginBottom: 10, flexDirection: "column" }}>
        <ImageBackground source={bkg}
          style={{ width: 310, height: 190 }}>
          <NavigateCard ></NavigateCard>
        </ImageBackground>
        <View style={{ width: "100%", height: 20, marginTop: 10, marginBottom: 10, padding:50, flex: 1, flexDirection: "row",alignSelf:"center" ,flex:0}}>
          <View style={{ marginEnd:80}} >
            <Text style={{ width:120,height:50,marginBottom:-20,fontSize:15}}>Departure Time</Text>
            <TouchableOpacity onPressIn={()=>setTimeDateMode("time")} onPress={ showDatePicker}>
              <ImageBackground source={bkg}
                style={{ width: 130, height: 70 }}>
                <Text style={{ alignSelf: "center", marginTop: 10,fontSize:17 }} >{time}</Text>

                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  is24Hour={true}
                  mode={dateTimeMode}
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </ImageBackground>
            </TouchableOpacity>

          </View>
          <View style={{ }} >
            <Text style={{ width:120,height:50,marginBottom:-20,fontSize:15}}>Departure Date</Text>
            <TouchableOpacity onPressIn={()=>setTimeDateMode("date")} onPress={showDatePicker}>

              <ImageBackground
                source={bkg}
                style={{ width: 130, height: 70 }} >
                <Text style={{ alignSelf: "center", marginTop: 10,fontSize:17 }}  >{date}</Text>

              </ImageBackground>
            </TouchableOpacity>

          </View>

        </View>
        
        <Text style={{ marginTop: 100 ,fontSize:17}}>Number of passengers</Text>

<ImageBackground source={carpoolersbkg}
  style={{ width: 280, height: 60 , alignSelf:"center"}}>
  <View style={{ flexDirection: "row" }}>
    <TouchableOpacity>
      <Image source={minus} 
        style={{ width: 40, height: 40, marginStart: 20, marginTop: 5 }} />
    </TouchableOpacity>
    <TextInput style={{ marginLeft: 70 }}>{carpoolers}</TextInput>
    <TouchableOpacity>
      <Image source={plus}
        style={{ width: 40, height: 40, marginLeft: 70, marginTop: 5 }} />
    </TouchableOpacity>
  </View>

</ImageBackground>
<Button title={'Continue'} style={{marginTop:50,width:50}}></Button>


      </View>

      </ImageBackground>
    </SafeAreaView>
  )
}

export default RideDetails


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    margin: 40,

  },
  title: {
    color: '#ffffff',
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 25
  }
})




