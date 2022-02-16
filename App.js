import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Sentry from "@sentry/react-native";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RideDetails from './screens/RideDetails.js'
import PriceDetails from './screens/PriceDetails.js'
import Index from './screens/index';
import TabNavigator from './screens/index';
import IdScreen from './screens/IdScreen';
import { store } from './store';
import { Provider } from 'react-redux';
import MapScreen from './screens/MapScreen.js';
import BookingDetails from './screens/BookingDetails.js';
import PhoneNumberScreen from './screens/PhoneNumberScreen.js';
import ModeScreen from './screens/ModeScreen.js'
import Map from './screens/components/Map.js';
import Rides from './screens/Rides.js';
import CarpoolerList from './screens/CarpoolerList.js';
import Login from './screens/Login.js';
import CarpoolerCard from './screens/components/CarpoolerCard.js';
import ImageUpload from './screens/ImgUpload.js';
import { SharedElementRenderer } from 'react-native-motion';

Sentry.init({
  dsn: "https://d080087d3afd479fb0f97078718ec605@o1144139.ingest.sentry.io/6206542",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
  debug:true,
  maxBreadcrumbs:150,
  enableAutoSessionTracking:true,
  sessionTrackingIntervalMillis:10000
});
export default function App() {
  const Stack = createStackNavigator();

  return (
    
    <Provider store={store}>
      <SharedElementRenderer>
    <NavigationContainer>
    <SafeAreaProvider>
     <Stack.Navigator initialRouteName='MapScreen'>
     <Stack.Screen
      name='ImgUpload'
      component = {ImageUpload}
      options = {{
        headerShown: false
      }}
      />
     <Stack.Screen
      name='Index'
      component = {Index}
      options = {{
        headerShown: false
      }}
      />
     <Stack.Screen
      name='MapScreen'
      component = {MapScreen}
      options = {{
        headerShown: false
      }}
      />
     <Stack.Screen
      name='IdScreen'
      component = {IdScreen}
      options = {{
        headerShown: false
      }}
      /> 
     <Stack.Screen
      name='CarpoolerList'
      component = {CarpoolerList}
      options = {{
        headerShown: false
      }}
      /> 
     
     <Stack.Screen
        name = 'TabNavigator'
        component = {TabNavigator}
        options = {{
          headerShown: false
        }}
      /> 
      <Stack.Screen
        name = 'CarpoolerCard'
        component = {CarpoolerCard}
        options = {{
          headerShown: false
        }}
      /> 
      <Stack.Screen
      name='PriceDetails'
      component = {PriceDetails}
      options = {{
        headerShown: false
      }}
      />
    
      <Stack.Screen
      name='RideDetails'
      component = {RideDetails}
      options = {{
        headerShown: false
      }}
      />
       <Stack.Screen
      name='BookingDetails'
      component = {BookingDetails}
      options = {{
        headerShown: false
      }}
      /> 
      <Stack.Screen
      name='PhoneNumberScreen'
      component = {PhoneNumberScreen}
      options = {{
        headerShown: false
      }}
      /> 
      <Stack.Screen
      name='ModeScreen'
      component = {ModeScreen}
      options = {{
        headerShown: false
      }}
      />
    </Stack.Navigator>
    </SafeAreaProvider>
    </NavigationContainer>
    </SharedElementRenderer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
