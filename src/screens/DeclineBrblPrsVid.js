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
import ButtomTab from '../components/Bottom_Tab';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const DeclineBrblPrsVid = ({ navigation }) => {
  const { container, nav, txt1, Vid, ins, heading, txt } = styles;
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
        <VideoPlayer
          video={require('../../assets/videos/chest/declinebrbl.mp4')}
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
        Lie with your glutes and shoulders in contact with the bench, feet flat on the ground.
        Grip the bar slightly wider than shoulder width.
        Squeeze your shoulder blades together.
        Lower the bar with control until contact is made with your upper chest, then extend your elbows until they are locked.

        </Text>
      </View><ButtomTab navigation={navigation}/>
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
   marginLeft: 'auto',
   marginRight: 'auto'

  },
  nav: {
    height: 50,
    width: '100%',
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
    backgroundColor: '#1F1717',
    height: 'auto',
    marginTop: 10,
    borderBottomWidth: 2,
    borderColor: 'white',
    margin: 10
  },
  txt:{
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    textAlignVertical: 'center',
    padding: 20,
    fontWeight: '400'
  }
    
});
export default DeclineBrblPrsVid;
