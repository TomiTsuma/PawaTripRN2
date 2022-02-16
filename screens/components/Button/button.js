




import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Button extends Component {
  render() {
    return (
      <View style={{width:'100%',alignItems:'center'}}>
<TouchableOpacity
style={{width:'70%'}} 
onPress={this.props.onPress}
>
<View
style={[{width:'100%',borderRadius:20,backgroundColor:'#008AD8',justifyContent:'center',alignItems:'center',marginTop:'10%',padding:'3%'},this.props.passedViewStyle]}>
  <Text style={{fontSize:RFValue(18), color:'white',fontFamily:'Gotham Black Regular'}} 
 >{this.props.title}</Text>
</View>
</TouchableOpacity>      
</View>
    );
  }
}

const styles = StyleSheet.create({});




