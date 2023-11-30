/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
  Button,
  Alert,
  onPressLearnMore,
  TextInput,
} from 'react-native';
import SelectGender from '../components/SelectGender';
const Registeration = ({navigation}) => {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../assets/forth-screen.jpeg')}
        style={styles.imageLayout}>
          <View style = {styles.overlay}>
        <ImageBackground
          source={require('../../assets/new-logo.jpg')}
          style={styles.imageLayout1}></ImageBackground>
        
        <Text style={styles.txt1}>Create an account</Text>

        <TouchableOpacity style={styles.btn1}>
          <TextInput
            style={styles.btnText1}
            placeholder=" Enter Username"
            secureTextEntry={true}
            value={username}
            onChangeText={text => setusername(text)}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <TextInput
            style={styles.btnText1}
            placeholder=" Enter Email"
            secureTextEntry={true}
            value={email}
            onChangeText={text => setemail(text)}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn3}>
          <TextInput
            style={styles.btnText1}
            placeholder=" Enter Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </TouchableOpacity>
        <SelectGender />

        <TouchableOpacity style={styles.btn4} onPress={() => navigation.navigate('Log')}>
                <Text style={styles.btnText}> Register </Text>
            </TouchableOpacity>
          </View>
     </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageLayout: {
    height: 730,
    width: 450,
    backgroundColor: '#000000c0',
  
  },
  imageLayout1: {
    marginTop: 0,
    height: 190,
    width: 140,
    alignSelf: 'center',
    marginRight: 60,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'hsla(0, 100%, 90%, 0.3);', // Adjust the last value (0.5) for opacity
  },
  txt1: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    marginTop: 30,
    marginLeft: 32,
    marginBottom: 10,
  },
  btn1: {
    backgroundColor: '#D0D4CA',
    borderRadius: 15,
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 90,
    marginLeft: 30,
    marginBottom: 30,
    borderColor: 'black',
    borderWidth: 2,
    width: 320,
  },
  btn3: {
    backgroundColor: '#D0D4CA',
    borderRadius: 15,
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 90,
    marginLeft: 30,
    marginBottom: 30,
    borderColor: 'black',
    borderWidth: 2,
    width: 320,
  },
  btn4: {
    backgroundColor: '#176B87',
    borderRadius: 40,
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginRight: 90,
    marginLeft: 40,
    marginBottom: 55
  },
  btnText1: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
});
export default Registeration;
