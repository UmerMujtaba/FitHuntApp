/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import React, { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  View,
  ScrollView,
  Alert,
  Image
} from 'react-native';

const Login = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  //fun() for getting email,password from userdata to login
  function handleSubmit() {
    console.log(email, password);
    const userData = {
      email: email,
      password,
    };

    axios.post('http://10.8.186.255:5001/login-user', userData).then(res => {
      console.log(res.data);
      if (res.data.status == 'ok') {
        Alert.alert('Logged In Successfull');
        console.log("Token Data Login:", res.data.data)
        AsyncStorage.setItem('token', res.data.data);
        AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
        navigation.navigate('FG');
        //FG for user, RegGym for Owner
      }
      else{
        Alert.alert('Incorrect Credentials')
      }
    });
  }
  async function getData() {
    const data = await AsyncStorage.getItem('isLoggedIn');
    
    console.log(data, 'at app.jsx');
  
  }
  useEffect(()=>{
    getData();
    console.log("Hii");
  },[])


   
  return (
    <ScrollView>
      <SafeAreaView keyboardShouldPresistTaps={'always'}>
        <ImageBackground
          source={require('../../assets/third-screen.jpg')}
          style={styles.imageLayout}>
          <View style={styles.overlay}>
            <Image
              source={require('../../assets/new-logo.jpg')}
              style={styles.logo}
            />

            <TouchableOpacity style={styles.btn1}>
              <FontAwesome
                name="user-o"
                color="black"
                style={styles.smallIcon}
              />
              <TextInput
                style={styles.btnText1}
                placeholder="Enter your email"
                placeholderTextColor="gray"
                onChange={(e) => setemail(e.nativeEvent.text)}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2}>
              <FontAwesome name="lock" color="black" style={styles.smallIcon} />
              <TextInput
                style={styles.btnText1}
                placeholder=" Enter your password"
                placeholderTextColor="gray"
                secureTextEntry={showPassword}
                value={password}
                onChange={(e) => setPassword(e.nativeEvent.text)}
              />

              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}>
                {password.length < 1 ? null : !showPassword ? (
                  <Feather
                    name="eye-off"
                    style={{ marginLeft: 80, marginTop: 15 }}
                    color={passwordVerify ? 'green' : 'red'}
                    size={18}
                  />
                ) : (
                  <Feather
                    name="eye"
                    style={{
                      marginLeft: 39, marginTop: 15, }}
                      color={passwordVerify ? 'green' : 'red'}
                      size={18}
                   
                   
                  />
                )}
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn3}
              onPress={() => handleSubmit()}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.txt}>Forgot Password?</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageLayout: {
    flex: 1,
    height: '100%', // Use '100%' to fill the screen height
    width: '100%', // Use '100%' to fill the screen width
    backgroundColor: '#000000c0',
  },
  logo: {
    marginTop: 20,
    width: '80%', // Adjust the width as needed
    height: 210,
    resizeMode: 'contain',
    alignSelf: 'center', // Center the image horizontally,
    marginBottom: 110
  },
  overlay: {
    flex: 1,
    backgroundColor: 'hsla(0, 100%, 90%, 0.3);', // Adjust the last value (0.5) for opacity
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  btn1: {
    backgroundColor: 'white',
    borderRadius: 15,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    width: '90%', // Use '80%' to limit the width
    borderColor: 'black',
    borderWidth: 2,
    flexDirection: 'row',
  },
  btn2: {
    backgroundColor: 'white',
    borderRadius: 15,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 80,
    width: '90%', // Use '80%' to limit the width
    borderColor: 'black',
    borderWidth: 2,
    flexDirection: 'row',
  },
  btn3: {
    backgroundColor: '#176B87',
    borderRadius: 40,
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 10,
    width: '50%'
  },
  btnText1: {
    height: 37,
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 16,
    color: 'black',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  txt: {
    color: 'white',
    alignSelf: 'center',
    marginBottom: 120,
    marginTop: 25,
    fontSize: 20,
  },
  smallIcon: {
    fontSize: 25,
    margin: 10,
  },
});

export default Login;
