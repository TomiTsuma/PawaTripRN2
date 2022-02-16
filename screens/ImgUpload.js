import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import upload from '../assets/curr_loc.png'
const ImageUpload=()=>  {
    const [imgUri, setImgUri] = useState('')

    const handleChooseImage=()=>{
        launchImageLibrary({ noData:true}, (response)=>{
            if(response){
              setImgUri(response.assets[0].uri)
              
            }
        })
        
    }
    
    return (
      <View>
          <TouchableOpacity 
          style={{width:'40%',height:'40%'}}
          onPress={handleChooseImage}>
        <Image 
        source={upload}
        style={{width:'40%',height:"40%"}}></Image>


        <Image
        source={{uri:imgUri}}
        style={{width:'100%',height:"100%"}}></Image>
        </TouchableOpacity>
      </View>
    )
  }


export default ImageUpload