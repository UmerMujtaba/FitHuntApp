/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  imageLayout,
  ImageBackground,
  Button,
  TouchableOpacity
} from 'react-native';
import { LinearTextGradient } from 'react-native-text-gradient';
const Account1 = ({navigation}) => {
  const {
    container,
    imageLayout,
    mainHeading,
    btn1,
    btnText,
    btn2,
    bars
  } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/new-logo.jpg')}
        style={imageLayout}></ImageBackground>
       <LinearTextGradient style={mainHeading}
        locations={[0, 1]}
        colors={['red', 'blue']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Text >
        MAKE {'\n'}
        YOUR SELF {'\n'}
        BETTER
      </Text>
      </LinearTextGradient>
      
      <TouchableOpacity style={btn1} onPress={() => navigation.navigate('Reg')}>
        <Text style={btnText}>Create Account</Text> 
      </TouchableOpacity>

      <TouchableOpacity style={btn2} onPress={() => navigation.navigate('Log')}>
        <Text style={btnText}>Sign In</Text>
      </TouchableOpacity>
      
     
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  imageLayout: {
    flex: 1,
    marginTop: 0,
    height: 210,
    width: 130,
    alignSelf: 'center',
    
  },
  mainHeading: {
    
    alignSelf: 'center',
    padding: 5,
    fontWeight: 'normal',
    fontSize: 45,
    marginBottom: 50,
    textAlign: 'center', // Set textAlign to center
    lineHeight: 60, // Adjust this value to control the line height
    color: 'black',
    fontFamily: 'Poppins-Bold'
  },
  headingtwo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 0,
    marginBottom: 15,
    marginLeft: 30
  },
  btn1: {
    backgroundColor: '#176B87',
    borderRadius: 40,
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    marginBottom: 30,
    marginLeft: 40,
    marginRight: 40,
    borderColor: 'black',
    borderWidth: 0.5
  },
  btn2: {
    backgroundColor: '#176B87',
    borderRadius: 40,
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 80,
    borderColor: 'black',
    borderWidth: 0.5
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // bars:{
  //   width: '200%',
  //   backgroundColor: 'red',
  //   opacity: 0.5,
  //   alignContent: 'center',
  //   alignSelf: 'center',
  //   transform: [{ rotate: '130deg' }],
  //   margin: 20,
  //   zIndex:-1
  // }
});

export default Account1;
