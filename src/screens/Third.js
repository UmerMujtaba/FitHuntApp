/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const Third = () => {
  return (
    <SafeAreaView>
       
      <ImageBackground
            source={require('../../assets/third-screen.jpg')}
            style={styles.imageLayout}>

            <ImageBackground
                source={require('../../assets/new-logo.jpg')}
                style={styles.imageLayout1}>
            </ImageBackground>

            <TouchableOpacity style={styles.btn1}>
                <Text style={styles.btnText1}>Username/Email</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn2}>
                <Text style={styles.btnText1}>Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn3}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>

            <Text style = {styles.txt}>
                Forgot Password?
            </Text>

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
    backgroundColor: '#000000c0',
  },
  btn1: {
    backgroundColor: '#ECF4D6',
    borderRadius: 15,
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 30,
    marginRight: 90,
    marginLeft: 50,
    borderColor: 'black',
    borderWidth: 2,
  },
  btn2: {
    backgroundColor: '#ECF4D6',
    borderRadius: 15,
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 90,
    marginLeft: 50,
    marginBottom: 80,
    borderColor: 'black',
    borderWidth: 2
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
    marginLeft: 40,
    
  },
  btnText1: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'normal'
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
    marginRight: 30,
    fontSize: 20
  }
});
export default Third;
