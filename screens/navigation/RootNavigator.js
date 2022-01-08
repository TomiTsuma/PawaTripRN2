import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Image } from 'react-native-elements';
import logo from '../../assets/logo.png'; 


import TabNavigator from '..';
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Image source = {{logo}}
            style = {{width:"100%", height:"100%"}}></Image>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;