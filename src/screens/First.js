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

const First = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/new-logo.jpg')}
        style={styles.imageLayout}></ImageBackground>
      <Text style={styles.mainHeading}>
        MAKE {'\n'}
        YOUR SELF {'\n'}
        BETTER
      </Text>
      <Text style ={styles.headingtwo}>Sign in as</Text>

      <TouchableOpacity style={styles.btn1}>
        <Text style={styles.btnText}>Gym Owner</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn2}>
        <Text style={styles.btnText}>User</Text>
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
    marginTop: 0,
    alignSelf: 'center',
    padding: 5,    
    fontWeight: 'bold',
    fontSize: 45,
    marginLeft: 20,
    textAlign: 'center', // Set textAlign to center
    lineHeight: 60, // Adjust this value to control the line height
    color: 'black',
    
    
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
    backgroundColor: '#841584',
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
    backgroundColor: '#841584',
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
    fontWeight: 'bold',
  },
});

export default First;
