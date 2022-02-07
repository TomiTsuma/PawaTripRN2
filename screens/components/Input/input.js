import { TextInput, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { Component } from 'react'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export default class Input extends Component {
  render() {
    return (
      <View
        style={[
          {
            width: '90%',
            marginTop: '3%',
            borderColor: '#00000015',
            backgroundColor: "#f0f1f5",
            borderRadius: 20,
            borderWidth: 1,
            alignSelf: 'center',
            padding:'1%',
            paddingLeft:'5%',
            flexDirection: 'row'
          },
          this.props.passedViewStyle
        ]}
      >
        <TextInput
          style={[
            {
              width: '80%',
              fontFamily: 'Gilroy ExtraBold',
              fontSize: RFValue(15),
              color:'#000000'
            },
            this.props.passedTextStyle
          ]}
      
          onChangeText={this.props.onChangeText}
          placeholder={this.props.placeholder}
          placeholderTextColor={this.props.placeholdercolor}
          secureTextEntry={this.props.secureTextEntry}
          keyboardType={this.props.keyboardType}
          maxLength={this.props.maxLength}
          multiline={this.props.multiline}
          autoFocus={this.props.autoFocus}
          onFocus={this.props.onFocus}
          value={this.props.value}
          onTextInput={this.props.onTextInput}
          editable={this.props.editable}
        ></TextInput>
        <TouchableOpacity
          style={{ width: '10%', height: '90%', marginTop: '5%' }}
          onPress={this.props.onPress}
        >
          <Image
            source={this.props.source}
            style={{ width: '70%', height: undefined, aspectRatio: 12 / 12,alignSelf:'center' }}
          ></Image>
        </TouchableOpacity>
      </View>
    )
  }
}
