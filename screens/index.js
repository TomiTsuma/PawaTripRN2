import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Signup from './Signup.js';
import { AppRegistry, SafeAreaView, View } from 'react-native';
import Login from './Login.js';



const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <SafeAreaView style={{width:"100%",height:"100%"}}>
       <View style={{width:"100%",height:"100%",paddingTop:200}}>
    <Tab.Navigator>
      <Tab.Screen  name="Login" component={Login} />
      <Tab.Screen name="Sign up" component={Signup}  />
    </Tab.Navigator>
    </View>
    </SafeAreaView>
  );
};

export default TabNavigator;
