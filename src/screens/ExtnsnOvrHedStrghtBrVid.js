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
import VideoPlayer from 'react-native-video-player';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const ExtnsnOvrHedStrghtBrVid = ({ navigation }) => {
  const { container, nav, txt1, Vid, ins, heading, txt } = styles;
  return (
    <SafeAreaView style={container}>
      <ScrollView>
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
          <VideoPlayer
            video={require('../../assets/videos/tri/ExtnsnOvrHedStrghtBrVid.mp4')}
            autoplay={false}
            defaultMuted={true}
            videoWidth={1200}
            videoHeight={900}
            thumbnail={require('../../assets/new-logo.png')}
          />
        </View>
        <Text style={heading}>Instructions :</Text>
        <View style={ins}>
          <Text style={txt}>
            Lean slighly forward, with your elbows positioned above your head At
            the starting position, hold your arms overhead, in line with your
            ears, with your elbows bent back and the handle behind your head.
            Extend your elbows bringing your arms back to an overhead position
            with your arms straight. Return to the starting position in a slow
            and controlled manner. Max Weight Lifted
          </Text>
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
    height: 250,
    marginTop: 20
  },
  heading: {
    fontSize: 25,
    color: 'white',
    marginTop: 55,
    marginLeft: 10
  },
  ins: {
    backgroundColor: 'grey',
    height: 320,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'white',
    margin: 10
  },
  txt: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    textAlignVertical: 'center',
    padding: 20,
    fontWeight: 'bold'
  }
});
export default ExtnsnOvrHedStrghtBrVid;
