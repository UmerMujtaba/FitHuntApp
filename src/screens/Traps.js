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
  imgs,
  ScrollView
} from 'react-native';

const Traps = () => {
  const { container, box, nav, heading, boxTxt } = styles;
  return (
    <SafeAreaView style={container}>
      <ScrollView>
        <View style={nav}>
          <Icon
            name={'angle-left'}
            size={50}
            color={'black'}
            marginLeft={20}
            marginTop={2}
          />
          <Text style={heading}>Traps</Text>
        </View>

        <View style={box}>
          <Text style={boxTxt}>Standing Barbell Shrugs </Text>
        </View>
        <View style={box}>
          <Text style={boxTxt}>Standing Dumbbell Shrugs</Text>
        </View>
        <View style={box}>
          <Text style={boxTxt}>Incline Prone Dumbbell Shrugs</Text>
        </View>
    
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  nav: {
    height: 60,
    width: 400,
    marginTop: 25,
    flexDirection: 'row'
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
    marginLeft: 115
  },
  box: {
    backgroundColor: 'pink',
    height: 110,
    marginBottom: 15
  },
  boxTxt: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    
  }
});

export default Traps;
