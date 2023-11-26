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
  View,
} from 'react-native';

const Forth = () => {
  return (
    <SafeAreaView>
       <ImageBackground source={require('../../assets/forth-screen.jpeg')} 
            style={styles.imageLayout}>
       </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    imageLayout: {
        height: 700,
        width: 450,
        backgroundColor: '#000000c0',
    }
})
export default Forth