/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Menu_Angle_Right from '../components/Menu_Angle_Right';
import TabCmpnont from '../components/TabComponet';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground
} from 'react-native';

const Menu = ({ navigation }) => {
  const { container, imageLayout, nav, overlay, txt1, opt1, optText } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/sixth-screen.jpg')}
        style={imageLayout}>
        <View style={overlay}>
          <View style={nav}>
            <Icon
              name={'angle-left'}
              size={30}
              color={'black'}
              marginTop={14}
              marginLeft={15}
              marginRight={15}
              onPress={() => navigation.goBack()}
            />
            <Text style={txt1}>Fit Hunt</Text>
            <Icon
              name={'bars'}
              size={30}
              color={'black'}
              marginTop={15}
              marginLeft={180}
              marginRight={'auto'}
              onPress={() => navigation.navigate('MN')} //for us
            />
          </View>
          <View style={opt1}>
            <Menu_Angle_Right />
            <Text style={optText} onPress={() => navigation.navigate('NUT')}>
              Personalized Diet Plan
            </Text>
          </View>
          <View style={opt1}>
            <Menu_Angle_Right />
            <Text style={optText} onPress={() => navigation.navigate('UCC')}>
              Workout Tracking
            </Text>
          </View>
          <View style={opt1}>
            <Menu_Angle_Right />
            <Text style={optText} onPress={() => navigation.navigate('Show-Trainer')}>
              Personal Interaction Tracking
            </Text>
          </View>
          <View style={opt1}>
            <Menu_Angle_Right />
            <Text style={optText} onPress={() => navigation.navigate('BMI-Cal')}>
              Nutrition
            </Text>
          </View>
          <View style={opt1}>
            <Menu_Angle_Right />
            <Text style={optText} onPress={() => navigation.navigate('CW')}>
              Customized Workout Plan
            </Text>
          </View>
          <View style={opt1}>
            <Menu_Angle_Right />
            <Text style={optText} onPress={() => navigation.navigate('Feed')}>
              Feedback
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  imageLayout: {
    height: '100%',
    width: '100%'
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'hsla(0, 100%, 90%, 0.3);' // Adjust the last value (0.5) for opacity
  },
  nav: {
    flexDirection: 'row'
  },
  txt1: {
    marginTop: 12,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  opt1: {
    flexDirection: 'row',
    marginTop: 45,
    color: 'black',
    height: 40,
    width: 394
  },
  optText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10
  }
});
export default Menu;
