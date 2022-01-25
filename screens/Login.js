import React from 'react'
import { Button,ImageBackground,StyleSheet, Text,Image,View,TextInput,TouchableOpacity, SafeAreaView} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import logo from '../assets/logo.png'; 
//import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, setUserEmail } from '../slices/userSlice'

import 'react-native-gesture-handler';
import { auth } from '../firebase';
import { database } from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';



const provider = new GoogleAuthProvider();

GoogleSignin.configure({
  webClientId: '222655618418-56opdtgrudrssbflgolm41t3dgffki5t.apps.googleusercontent.com',
}); 

const Login = ({navigation}) => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const u = useSelector((state) => state.user);

   

    const onGoogleButtonPress = () => {
        alert("called")
      signInWithPopup(auth, provider)
      .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        alert(error.message)
        // ...
      });
      
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


    return (
        <SafeAreaView style={styles.container}>
   
<View style={styles.inputView2}>
  <TextInput
    style={styles.TextInput}
    placeholder="Email."
    placeholderTextColor="#003f5c"
    onChangeText={(email) => setEmail(email)}
  />
</View>
 
<View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Password."
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
  />
</View>
<Button
  title="Login"
  onPress={handleLogin}></Button>
<Text
  style={{marginTop:20}}>
      OR
  </Text>

  <View style={styles.loginbuttons}>
  <TouchableOpacity>
  <Image source = {{uri: "https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-png-logo-noir.png"}}
             style={{width: 40, height: 40,margin:20}}
             onPress={onGoogleButtonPress}/>
             </TouchableOpacity>
             <TouchableOpacity>
   <Image source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetN3GYmYgghuFoDrgJa_A7z_ZHvrsF1ZXHw&usqp=CAU"}}
             style={{width: 40, height: 40,margin:20}}
             onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
             />
             </TouchableOpacity>
             <TouchableOpacity>
             <Image source = {{uri: "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"}}
             style={{width: 40, height: 40,margin:20}}/>
</TouchableOpacity>
  
    
</View>






<TouchableOpacity style={{marginTop:50}}> 
  <Text style={styles.forgot_button}>Forgot Password?</Text>
</TouchableOpacity>
        </SafeAreaView>
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
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      inputView2: {
        backgroundColor: "#f0f1f5",
        borderRadius: 20,
        width: "80%",
        height: 45,
        marginBottom: 20,
        marginTop:50,
        alignItems: "center",
      },
      
      TextInput: {
        height: 50,
        width:300,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      
      forgot_button: {
        height: 30,
        marginBottom: 1,
      },
      loginbuttons: {
          flexDirection:"row",
        height: 30,
        margin: 10,

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
