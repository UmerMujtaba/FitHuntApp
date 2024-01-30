/* eslint-disable prettier/prettier */
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

const ForeArm = ({navigation}) => {
  const { container, box, nav, heading, boxTxt,image,heading2,icon } = styles;
  return (
    <SafeAreaView style={container}>
      <ScrollView>
        <View style={nav}>
          <Icon
            name={'angle-left'}
            size={30}
            color={'white'}
            marginLeft={20}
            marginTop={15}
            onPress={() => navigation.goBack()}
          />
          <Text style={heading}>Forearm</Text>
        </View>
        <Text style={heading2}>Dumbbell</Text>
        <View style={box}>
          <Image
            source={require('../../assets/forearm/StandingDumbellWirstCurl.png')}
            style={image}
          />
          <Text style={boxTxt}>Standing Wrist Curls</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('SWCVid')}
          />
        </View>
        <Text style={heading2}>Preacher</Text>
        <View style={box}>
        <Image
            source={require('../../assets/forearm/PreacherDumbbellWristcurl.png')}
            style={image}
          />
          <Text style={boxTxt}>Wrist Curls</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('PWCVid')}
          />
        </View>
        <View style={box}>
        <Image
            source={require('../../assets/forearm/PreacherDumbbellReverseWristCurl.png')}
            style={image}
          />
          <Text style={boxTxt}>Reverse Wrist Curls</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('PWRCVid')}
          />
        </View>
        <Text style={heading2}>Barbell</Text>
        <View style={box}>
        <Image
            source={require('../../assets/forearm/StandingBehindBaackBrbellWirstCurl.png')}
            style={image}
          />
          <Text style={boxTxt}>Behind Back Wrist Curls</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('BWCVid')}
          />
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
  nav: {
    height: 60,
    width: 400,
    marginTop: 0,
    flexDirection: 'row'
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'white',
    marginLeft: 120
  },
  box: {
    backgroundColor: '#176B87',
    height: 110,
    marginBottom: 15,
    flexDirection: 'row'
  },
  boxTxt: {
    color: 'white',
    fontSize: 18,
    marginTop: 40,
    
  },
  image: {
    height: 110, // Adjust the height to fit within the view
    width: 140, // Adjust the width to fit within the view
    marginRight: 5,
    marginLeft: 0 // Ensure the image fits within the specified dimensions
  },
  heading2: {
    fontSize: 20,
    color: 'white',
    marginLeft: 5,
    fontWeight: 'bold'
  },
  icon: {
    marginLeft: 'auto',
    marginRight: 20,
    marginTop: 28
  },
});

export default ForeArm;
