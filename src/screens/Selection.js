/* eslint-disable react-native/no-inline-styles */
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
  ImageBackground,
  TouchableOpacity
} from 'react-native';

const Selection = ({ navigation }) => {
  const {
    container,
    imageLayout,
    mainHeading,
    headingtwo,
    linearGradient,
    btn1,
    btnText,
    btn2
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/new-logo.jpg')}
        style={imageLayout}></ImageBackground>

      <Text style={mainHeading}>
        MAKE {'\n'}
        YOUR SELF {'\n'}
        BETTER
      </Text>

      <Text style={headingtwo}>Sign in as</Text>

      
        <TouchableOpacity
          style={btn1}
          onPress={() => navigation.navigate('Acc')}>
          <Text style={btnText}>Gym Owner</Text>
        </TouchableOpacity>
      

      <TouchableOpacity style={btn2} onPress={() => navigation.navigate('Acc')}>
        <Text style={btnText}>User</Text>
      </TouchableOpacity>

      {/* <Button style = {styles.btn}
        title="Gym Owner"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageLayout: {
    flex: 1,
    marginTop: 0,
    height: 210,
    width: 130,
    alignSelf: 'center'
  },
  mainHeading: {
    marginTop: 0,
    alignSelf: 'center',
    padding: 5,
    fontWeight: 'normal',
    fontSize: 45,
    marginLeft: 15,
    textAlign: 'center', // Set textAlign to center
    lineHeight: 60, // Adjust this value to control the line height
    color: 'black',
    fontFamily: 'Poppins-Bold'
  },
  headingtwo: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
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
    borderWidth: 2
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
    borderWidth: 2
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default Selection;
