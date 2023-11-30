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
  TouchableOpacity,
  ScrollView
} from 'react-native';

const Template = () => {
  const { container, main1, nav, icn, txt, txt1,txt2, heading, heading2, txt3 } =
    styles;
  return (
    <SafeAreaView style={container}>
      <ScrollView>
        <View style={nav}>
          <Text style={heading}>Workout Templates</Text>
        </View>
        <Text style={heading2}>2 Days a week</Text>

        <View style={main1}>
        {/* <Image source={require('../../assets/template/2days/1.1.png')} style={icn} /> */}
        <Text style={txt} > Get in Shape </Text>
        <Text style={txt1}> Full Body Split </Text>
        </View>

        <View style={main1}>
        {/* <Image source={require('../../assets/template/2days/1.1.png')} style={icn} /> */}
        <Text style={txt2}> Shreding </Text>
        <Text style={txt1}> Full, Upper & Lower body split </Text>
        </View>

        <View style={main1}>
        {/* <Image source={require('../../assets/template/2days/1.1.png')} style={icn} /> */}
        <Text style={txt3} > Muscle Gain </Text>
        <Text style={txt1}> Full, Upper & Lower body split </Text>
        </View>

        {/* 4days a week */}
        <Text style={heading2}>4 Days a week</Text>

        <View style={main1}>
        {/* <Image source={require('../../assets/template/2days/1.1.png')} style={icn} /> */}
        <Text style={txt}> Get in Shape </Text>
        <Text style={txt1}> Full Body Split </Text>
        </View>

        <View style={main1}>
        {/* <Image source={require('../../assets/template/2days/1.1.png')} style={icn} /> */}
        <Text style={txt2}> Shreding </Text>
        <Text style={txt1}> Full, Upper & Lower Push, Pull, Bro Split </Text>
        </View>

        <View style={main1}>
        {/* <Image source={require('../../assets/template/2days/1.1.png')} style={icn} /> */}
        <Text style={txt2}> Shreding </Text>
        <Text style={txt1}> Chest, Arms, Back, Shoulders & Abs Focus </Text>
        </View>

        <View style={main1}>
        {/* <Image source={require('../../assets/template/2days/1.1.png')} style={icn} /> */}
        <Text style={txt3}>Muscle Gain </Text>
        <Text style={txt1}>Upper & Lower Push, Pull, Full Body Split </Text>
        </View>


        {/* 6days a week */}
        <Text style={heading2}>6 Days a week</Text>

        <View style={main1}>
        {/* <Image source={require('../../assets/template/2days/1.1.png')} style={icn} /> */}
        <Text style={txt2}>Shreding </Text>
        <Text style={txt1}> Push, Pull / Bro Split </Text>
        </View>

        <View style={main1}>
        {/* <Image source={require('../../assets/template/2days/1.1.png')} style={icn} /> */}
        <Text style={txt3}> Muscle Gain </Text>
        <Text style={txt1}> Push, Pull / Bro Split </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1717'
  },
  heading: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20
  },
  nav: {
    height: 70,
    width: 395,
    backgroundColor: '#3e5287',
    opacity: 0.9
  },
  heading2: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20
  },
  main1: {
    height: 200,
    width: 395,
    backgroundColor: '#0E1F87',
    marginTop: 10,
    flexDirection: 'column',
    opacity: 0.8,
    marginBottom: 10
  },
  img: {
    alignSelf: 'center',
    height: 20,
    width: 150,
    marginTop: 30,
  },
  txt: {
    fontSize: 22,
    color: '#06FB43',
    fontWeight: 'bold',
    marginTop: 65
  },
  txt1: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'normal',
    marginTop: 10,
    fontStyle: 'italic'
  },
  txt3: {
    fontSize: 22,
    color: '#BF3232',
    fontWeight: 'bold',
    marginTop: 65
  },
  txt2: {
    fontSize: 22,
    color: '#175624',
    fontWeight: 'bold',
    marginTop: 65
  }
});
export default Template;
