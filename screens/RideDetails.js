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
  var [carpoolers, setCarpoolers] = useState('');

  

 


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
      <Image
        source={back}
        style={{ width: "100%", height: "100%", margin: 0, position: "absolute" }}>

      </Image>
      <Text style={styles.title}>Ride Details</Text>
      <View style={{ width: "100%", height: "100%", alignItems: 'center', marginTop: 40, marginBottom: 10, marginLeft: 50, flexDirection: "column" }}>
        <ImageBackground source={bkg}
          style={{ width: 220, height: 140, marginLeft: -70 }}>
          <NavigateCard ></NavigateCard>
        </ImageBackground>
        <View style={{ width: "100%", height: 30, marginTop: 10, marginBottom: 10, marginLeft: -10, marginRight: 20, flex: 1, flexDirection: "row" }}>
          <View style={{ marginRight: 100 }} >
            <Text >Departure Time</Text>
            <TouchableOpacity onPressIn={()=>setTimeDateMode("time")} onPress={ showDatePicker}>
              <ImageBackground source={bkg}
                style={{ width: 80, height: 50 }}>
                <Text style={{ alignSelf: "center", marginTop: 10 }} >{time}</Text>

                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode={dateTimeMode}
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
              </ImageBackground>
            </TouchableOpacity>
            <Text style={{ marginTop: 100 }}>Number of passengers</Text>

            <ImageBackground source={carpoolersbkg}
              style={{ width: 280, height: 60 }}>
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
            <Button title="Continue"></Button>

          </View>
          <View style={{ marginLeft: -180 }} >
            <Text>Departure Date</Text>
            <TouchableOpacity onPressIn={()=>setTimeDateMode("date")} onPress={showDatePicker}>

              <ImageBackground
                source={bkg}
                style={{ width: 80, height: 50 }} >
                <Text style={{ alignSelf: "center", marginTop: 10 }}  >{date}</Text>

              </ImageBackground>
            </TouchableOpacity>

          </View>

        </View>


      </View>
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




