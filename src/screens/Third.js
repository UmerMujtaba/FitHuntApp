/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */

import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';

const Third = () => {
  const [password, setPassword] = useState('');
  const [username, setusername] = useState('');
  return (
    <SafeAreaView>
       
      <ImageBackground
            source={require('../../assets/third-screen.jpg')}
            style={styles.imageLayout}>

            <View style = {styles.overlay}>
            <ImageBackground
                source={require('../../assets/new-logo.jpg')}
                style={styles.imageLayout1}>

            </ImageBackground>

            <TouchableOpacity style={styles.btn1}>
            <TextInput 
              style={styles.btnText1}
              placeholder="Username/Email"
              secureTextEntry={true}
              value={username}
              onChangeText={(text) => setusername(text)}
            />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2}>
                <TextInput
                  style={styles.btnText1}
                  placeholder="Password"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn3}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>

            <Text style = {styles.txt}>
                Forgot Password?
            </Text>
      </View>
      </ImageBackground>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    imageLayout1: {
        flex: 1,
        marginTop: 0,
        height: 210,
        width: 140,
        alignSelf: 'center',
        marginRight: 60
    },
  imageLayout: {
    height: 700,
    width: 450,
    backgroundColor: '#000000c0'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'hsla(0, 100%, 90%, 0.3);', // Adjust the last value (0.5) for opacity
  },
    btn1: {
    backgroundColor: '#ECF4D6',
    borderRadius: 15,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    marginRight: 90,
    marginLeft: 30,
    borderColor: 'black',
    borderWidth: 2,
    width: 320
    
  },
  btn2: {
    backgroundColor: '#ECF4D6',
    borderRadius: 15,
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 90,
    marginLeft: 30,
    marginBottom: 80,
    borderColor: 'black',
    borderWidth: 2,
    width: 320
    
  },
  btn3: {
    backgroundColor: '#0174BE',
    borderRadius: 40,
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginRight: 90,
    marginLeft: 40
    
  },
  btnText1: {
    height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal'
  },
  txt: {
    color: 'white',
    alignSelf: 'center',
    marginBottom: 120,
    marginTop: 25,
    marginRight: 50,
    fontSize: 20
  }
});
export default Third;
