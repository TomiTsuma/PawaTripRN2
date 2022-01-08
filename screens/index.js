import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Signup from './Signup.js';
import { AppRegistry, ImageBackground, SafeAreaView, View } from 'react-native';
import Login from './Login.js';
import logo from '../assets/logo.png'



const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    // <SafeAreaView style={{width:"100%",height:"100%"}}>
      <ImageBackground  style={{width:"100%",height:"100%"}} source={logo}>
       <View style={{width:"100%",height:"100%",paddingTop:260}}>
    <Tab.Navigator>
      <Tab.Screen  name="Login" component={Login} />
      <Tab.Screen name="Sign up" component={Signup}  />
    </Tab.Navigator>
    </View>
    </ImageBackground>
    // </SafeAreaView>
  );
};

export default TabNavigator;
