import React from 'react'
import {ImageBackground,StyleSheet, Text,Image,View,TextInput,TouchableOpacity, SafeAreaView} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { useState } from 'react';
import logo from '../assets/logo.png'; 
import 'react-native-gesture-handler';
import { auth, database } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import Input from './components/Input/input';
import Button from './components/Button/button';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pwd, setPwd] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [name, setName] = useState('');

    const handleSignUp = () =>{
      console.log(pwd+"/"+password)
      console.log(name)
      console.log(email)
      if (password == pwd) {
        createUserWithEmailAndPassword(auth, email, pwd)
        .then(userCredentials => {
          const user = userCredentials.user;
          set(ref(database, 'user/'+ (email.split('@')[0])), {
            Email: email,
            Name: name
          });  

          
        })
        .catch(error => alert(error.message)) 


        
      }
      else{
        alert("The passwords do not match")
      }
    }
    
    return (
        <SafeAreaView style={styles.container}>
  
<Input
 style={styles.TextInput}
 placeholder="Name."
 placeholderTextColor="#003f5c"
 onChangeText={(name) => setName(name)}></Input>

<Input
 style={styles.TextInput}
 placeholder="Email."
 placeholderTextColor="#003f5c"
 onChangeText={(email) => setEmail(email)}></Input>
 
 <Input
 style={styles.TextInput}
 placeholder="Password."
 placeholderTextColor="#003f5c"
 onChangeText={(password) => setPassword(password)}></Input>

<Input
 style={styles.TextInput}
 placeholder="Confirm Password."
 placeholderTextColor="#003f5c"
 onChangeText={(pwd) => setPwd(pwd)}></Input>

<Button title='SIGN UP'></Button>

<Text   style={{marginTop:20,fontFamily:'Gotham Black Regular'}}>
      OR
  </Text>

  <View style={styles.loginbuttons}>
  <TouchableOpacity>
  <Image source = {{uri: "https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-png-logo-noir.png"}}
             style={{width: 40, height: 40,margin:20}}/>
             </TouchableOpacity>
             <TouchableOpacity>
   <Image source = {{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetN3GYmYgghuFoDrgJa_A7z_ZHvrsF1ZXHw&usqp=CAU"}}
             style={{width: 40, height: 40,margin:20}}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Image source = {{uri: "https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png"}}
             style={{width: 40, height: 40,margin:20}}/>
</TouchableOpacity>
  
    
</View>







        </SafeAreaView>
    )
}


export default Signup;

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
        fontFamily:'Gilroy ExtraBold'

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
