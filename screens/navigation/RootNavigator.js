import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Image, ImageBackground } from 'react-native-elements';
import logo from '../../assets/logo.png'; 


import TabNavigator from '..';
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <ImageBackground source = {{logo}}
            style = {{width:"100%", height:"100%"}}>
      <TabNavigator />
      </ImageBackground>
    </NavigationContainer>
  );
};

export default RootNavigator;