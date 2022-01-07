import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RideDetails from './screens/RideDetails.js'
import PriceDetails from './screens/PriceDetails.js'
import Index from './screens/index';
import IdScreen from './screens/IdScreen';
import { store } from './store';
import { Provider } from 'react-redux';
import MapScreen from './screens/MapScreen.js';


export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
    <NavigationContainer>
    <SafeAreaProvider>
     <Stack.Navigator>
     {/* <Stack.Screen
        name = 'index'
        component = {Index}
        options = {{
          headerShown: false
        }}
      /> */}
      {/* <Stack.Screen
      name='IdScreen'
      component = {IdScreen}
      options = {{
        headerShown: false
      }}
      /> */}
      {/* <Stack.Screen
      name='PriceDetails'
      component = {PriceDetails}
      options = {{
        headerShown: false
      }}
      /> */}
      {/* <Stack.Screen
      name='MapScreen'
      component = {MapScreen}
      options = {{
        headerShown: false
      }}
      /> */}
      <Stack.Screen
      name='RideDetails'
      component = {RideDetails}
      options = {{
        headerShown: false
      }}
      />
    </Stack.Navigator>
    </SafeAreaProvider>
    </NavigationContainer>
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
