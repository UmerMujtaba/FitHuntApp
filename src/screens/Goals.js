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
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const Goals = ({ navigation }) => {
  const {
    container,
    nav,
    hdng,
    mid2,
    mid,
    midtxt2,
    hdng3,
    midtxt,
    midtxt3,
    img,
    overlay
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
          onPress={() => navigation.goBack()}
        />
        <Text style={hdng}>Diet Plan</Text>
      </View>
      <ImageBackground source={require('../../assets/cereal.png')} style={img}>
        <View style={overlay}>
          <View style={mid}>
            <Text style={midtxt}>What's your goal?</Text>
          </View>
          <View style={mid2}>
            <Text style={midtxt2} onPress={() => navigation.navigate('DaysG')}>
              {' '}
              Gain Muscle
            </Text>
            <Text style={midtxt3}>Build mass & strength</Text>
          </View>

          <View style={mid2}>
            <Text style={midtxt2} onPress={() => navigation.navigate('DaysL')}> Loss Weight</Text>
            <Text style={midtxt3}>Get motivated & energized</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1717'
  },
  nav: {
    height: 50,
    width: 395,
    backgroundColor: '#3e5287',
    opacity: 0.9,
    flexDirection: 'row'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'hsla(0, 100%, 90%, 0.3);' // Adjust the last value (0.5) for opacity
  },
  hdng: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
    marginLeft: 20
  },
  mid: {
    marginTop: 30,
    height: 90
  },
  midtxt: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25
  },
  mid2: {
    // backgroundColor: '#176B87',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 45,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 40
  },
  midtxt2: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
    backgroundColor: '#7D7C7C',
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 2,
    padding: 5,
    borderColor: 'black',
    borderRadius: 40
  },
  midtxt3: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    padding: 5
  },
  img: {
    height: 780
  }
});
export default Goals;
