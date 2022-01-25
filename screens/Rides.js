// import React from 'react'
// import { StyleSheet, Text, View, ImageBackground } from 'react-native'
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from "@react-navigation/native";
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { store } from '../store';
// import { Provider } from 'react-redux';
// import back from '../assets/back.png'
// import RideDetails from './RideDetails.js'
// import PriceDetails from './PriceDetails.js'

// import BookingDetails from './BookingDetails.js';

// import CarpoolerDetails from './CarpoolerDetails';


// const Rides = () => {
//     const Stack = createStackNavigator();

//     return (
//         <View>
            
//             <Provider store={store}>
//     <NavigationContainer>
//     <SafeAreaProvider>
//      <Stack.Navigator>
//      <Stack.Screen
//       name='RideDetails'
//       component = {RideDetails}
//       options = {{
//         headerShown: false
//       }}
//       /> 
//       <Stack.Screen
//       name='PriceDetails'
//       component = {PriceDetails}
//       options = {{
//         headerShown: false
//       }}
//       /> 
//       <Stack.Screen
//       name='CarpoolerDetails'
//       component = {CarpoolerDetails}
//       options = {{
//         headerShown: false
//       }}
//       /> 
//       <Stack.Screen
//       name='BookingDetails'
//       component = {BookingDetails}
//       options = {{
//         headerShown: false
//       }}
//       /> 
//       </Stack.Navigator>
//       </SafeAreaProvider>
//       </NavigationContainer>
//       </Provider>
//         </View>
//     )
// }

// export default Rides

// const styles = StyleSheet.create({})
