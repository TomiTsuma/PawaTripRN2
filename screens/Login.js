import React from 'react'
import { ImageBackground,StyleSheet, Text,Image,View,TextInput,TouchableOpacity, SafeAreaView, KeyboardAvoidingView} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useState } from 'react';
import Modal from 'react-native-modal/dist/modal';

import { useNavigation } from '@react-navigation/core';
import logo from '../assets/logo.png'; 
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, setUserEmail } from '../slices/userSlice'
import { RFValue } from 'react-native-responsive-fontsize';
import 'react-native-gesture-handler';
import { auth } from '../firebase';
import { database } from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import Input from './components/Input/input';
import Button from './components/Button/button';


GoogleSignin.configure({
  webClientId: '222655618418-56opdtgrudrssbflgolm41t3dgffki5t.apps.googleusercontent.com',
});

const Login = ({navigation}) => {

  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const u = useSelector((state) => state.user);
// If null, no SMS has been sent
const [confirm, setConfirm] = useState(null);

const [code, setCode] = useState('');
const [phone, setPhone] = useState('');

const [isPhoneModal,showPhoneModal] = useState(false);
const [isCodeModal,showCodeModal] = useState(false);

const togglePhoneModal =()=>{
  showPhoneModal(!isPhoneModal)
}
const toggleCodeModal =()=>{
  showCodeModal(!isCodeModal)
}
// Handle the button press
 const signInWithPhoneNumber =async(phoneNumber)=> {
  const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  setConfirm(confirmation);
}

 const confirmCode=async()=> {
  try {
    await confirm.confirm(code);
  } catch (error) {
    alert(error);
  }
}
   

    const onGoogleButtonPress = async() => {
      // Get the users ID token
      try{
    const { idToken } = await GoogleSignin.signIn();
      }
      catch (error) {
        alert(error);
        console.log(error)
      }
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential

    auth().signInWithCredential(googleCredential)
    .then(credentials =>{
      console.log(credentials)
      navigation.navigate('IdScreen')
    })
    .catch(error => alert(error.message)) 

    // console.log(idToken)
    // console.log(auth.signInWithCredential(googleCredential))


     }



    const handleLogin = () => {
      

      signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
          const user = userCredentials.user;
          dispatch(
            setCurrentUser({
              currUsr:String(user.email).split('@')[0]
              
            }),
            setUserEmail({
              userEmail:user.email
            })
          );
          navigation.navigate('IdScreen')
    
          console.log(u.currentUsr)
        })
          .catch(error => alert(error.message)) 
    }


    const onFacebookButtonPress =async() =>{
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
    
      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();
    
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
    
      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    
      // Sign-in the user with the credential
      return auth().signInWithCredential(facebookCredential);
    }
    
    return (
        <KeyboardAvoidingView style={styles.container}>
   
<Input
 placeholder='Email'
 onChangeText={(email)=>{setEmail(email)}}></Input>
<Input 
placeholder='Password'
onChangeText={(password)=>{setPassword(password)}}
secureTextEntry={true}></Input>
<Button 
title='LOGIN'
onPress={handleLogin()}></Button>

<Text
  style={{marginTop:20,fontFamily:'Gotham Black Regular'}}>
      OR
  </Text>

  <View style={styles.loginbuttons}>
  <TouchableOpacity style={{backgroundColor:'#fff',height:'100%',width:'20%'}}  onPress={onGoogleButtonPress}>
  <Image source = {{uri: "https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-png-logo-noir.png"}}
             style={{width: '80%',height:undefined,aspectRatio:10/10}}
            />
             </TouchableOpacity>
             <TouchableOpacity style={{height:'100%',width:'15%'}} onPress={onFacebookButtonPress}>
   <Image source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetN3GYmYgghuFoDrgJa_A7z_ZHvrsF1ZXHw&usqp=CAU"}}
             style={{width: '100%', height: undefined,aspectRatio:12/11}}
             />
             </TouchableOpacity>
             <TouchableOpacity style={{backgroundColor:'#fff',height:'100%',width:'20%'}}  onPress={togglePhoneModal}>
             <Image source = {{uri: "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"}}
             style={{width: '80%',height:undefined,aspectRatio:10/10}}></Image>
             </TouchableOpacity>
             <Modal isVisible={isPhoneModal}
        backdropColor="#B4B3DB"
        backdropOpacity={0.8}
        onBackdropPress={()=>{togglePhoneModal()}}
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        animationOut="slideOutRight">
          <View style={{width:'80%',alignSelf:'center',paddingVertical:'10%',backgroundColor:'#fff',borderRadius:10,borderWidth:2,borderColor:'#00000020'}}>
            <Text
            style={{fontFamily:"Gilroy ExtraBold",fontSize:RFValue(18),alignSelf:'center'}}
            >Enter your Phone Number Here</Text>
           <Input 
       autoFocus={true}
       keyboardType='phone-pad'
       value={phone}
       onChangeText={(phone)=>{setPhone(phone)}}
       passedViewStyle={{marginBottom:'10%'}}
        ></Input>

            <Button title='Get Code' style={{flex:1}} onPress={()=>{
              toggleCodeModal()
              togglePhoneModal()
              }}>
                 </Button>
          </View>
        </Modal>

        <Modal 
        isVisible={isCodeModal}
        backdropColor="#B4B3DB"
        backdropOpacity={0.8}
        onBackdropPress={()=>{toggleCodeModal()}}
        animationIn="slideInLeft"
        animationOut="slideOutRight"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        animationOut="slideOutRight">
          <View style={{width:'80%',alignSelf:'center',paddingVertical:'10%',backgroundColor:'#fff',borderRadius:10,borderWidth:2,borderColor:'#00000020'}}>
            <Text
            style={{fontFamily:"Gilroy ExtraBold",fontSize:RFValue(18),alignSelf:'center'}}
            >Enter your Code Here</Text>
            <Input placeholder='4- Digit Code'
            keyboardType='phone-pad'
            value={code}
            onTextChange={(code)=>{setCode(code)}}
            passedTextStyle={{alignSelf:'center',textAlign:'center',width:'100%'}}></Input>

            <Button title='Done!' style={{flex:1}} onPress={()=>{
              setCode()
              toggleCodeModal()
              signInWithPhoneNumber(phone)
            }}> </Button>
          </View>
        </Modal>
  
    
</View>






<TouchableOpacity style={{marginTop:50}}> 
  <Text style={styles.forgot_button}>Forgot Password?</Text>
</TouchableOpacity>
        </KeyboardAvoidingView>
    )
}


export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    inputView: {
        backgroundColor: "#f0f1f5",
        borderRadius: 20,
        width: "80%",
      },
      
      TextInput: {
        fontFamily:'Gilroy ExtraBold',
        fontSize:RFValue(15),
        alignSelf:'center'
      },
      
      forgot_button: {
        height: 30,
        marginBottom: 1,
        fontFamily:'Gilroy ExtraBold'
      },
      loginbuttons: {
          flexDirection:"row",
          justifyContent:'space-between'


      },
      loginBtn:
 {
   width:"80%",
   borderRadius:25,
   height:50,
   alignItems:"center",
   justifyContent:"center",
   marginTop:10,
   backgroundColor:"#FF1493",
 }
  });
