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

const Eighth = () => {
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
          <Text style={heading}>ABS</Text>
        </View>

        <View style={box}>
          <Text style={boxTxt}>Crunches</Text>
        </View>
        <View style={box}>
          <Text style={boxTxt}>Sit ups</Text>
        </View>
        <View style={box}>
          <Text style={boxTxt}>Weighted Sit ups</Text>
        </View>
        <View style={box}>
          <Text style={boxTxt}>Decline Crunches</Text>
        </View>
        <View style={box}>
          <Text style={boxTxt}>Decline Sit ups</Text>
        </View>
        <View style={box}>
          <Text style={boxTxt}>Hanging Leg Raises</Text>
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
    marginLeft: 135
  },
  box: {
    backgroundColor: 'pink',
    height: 110,
    marginBottom: 15
  },
  boxTxt: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
    
  }
});

export default Eighth;
