/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const LegRaiseVid = ({ navigation }) => {
  const {
    container,
    nav,
    txt1,
    Vid,
    ins,
    heading,
    video,
    mid5,
    mid5txt,
    mid5txt2,
    mid5txt3
  } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={nav}>
        <Icon
          name={'angle-left'}
          size={30}
          color={'white'}
          marginTop={12}
          marginLeft={15}
          marginRight={15}
          onPress={() => navigation.goBack()}
        />
        <Text style={txt1}>Demonstration</Text>
      </View>
      <View style={Vid}>
       
      </View>
      <Text style={heading}>Instructions :</Text>
      <View style={ins}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1717'
  },
  txt1: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 12,
    marginLeft: 90
  },
  nav: {
    height: 50,
    width: 395,
    backgroundColor: '#3e5287',
    opacity: 0.9,
    flexDirection: 'row'
  },
  Vid: {
    backgroundColor: 'red',
    height: 250,
    marginTop: 20
  },
  video: {
    width: 300,
    height: 200
  },
  heading: {
    fontSize: 25,
    color: 'white',
    marginTop: 10,
    marginLeft: 5
  },
  ins: {
    backgroundColor: 'blue',
    height: 250,
    marginTop: 10
  }
});
export default LegRaiseVid;
