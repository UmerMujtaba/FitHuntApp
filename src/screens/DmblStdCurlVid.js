/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import ButtomTab from '../components/Bottom_Tab';

const DmblStdCurlVid = ({ navigation }) => {
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
          video={require('../../assets/videos/bic/dmblstdcurl.mp4')}
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
          Sit with your back pressed against the pads. At the starting position,
          hold the dumbbells at your sides with your arms straight using an
          underhand grip. Perform the curl by bending your elbows and raising
          the dumbbells until they are in front of your neck. Return to starting
          position in a slow and controlled manner. Avoid using momentum.
        </Text>
      </View>
      <ButtomTab navigation={navigation} />
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
export default DmblStdCurlVid;
