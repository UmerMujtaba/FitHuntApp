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
} from 'react-native';


const Menu = () => {
  const {
    container,
    imageLayout,
    nav,
    overlay,
    txt1,
    opt1,
    optText
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/sixth-screen.jpg')}
        style={imageLayout}>
        <View style={overlay}>
          <View style={nav}>
            <Icon name={'arrow-left'} size={30} color={'black'} margin={15} />
            <Text style={txt1}>Fit Hunt</Text>

            <Icon
              name={'bars'}
              size={30}
              color={'black'}
              marginTop={15}
              marginLeft={195}
            />
          </View>

          <View style={opt1}>
            <Icon
              name={'angle-right'}
              size={30}
              color={'black'}
              marginLeft={25}
              marginTop={2}
            />
            <Text style={optText}>Personalized Diet Plan</Text>
          </View>
          <View style={opt1}>
            <Icon
              name={'angle-right'}
              size={30}
              color={'black'}
              marginLeft={25}
              marginTop={2}
            />
            <Text style={optText}>Workout Tracking</Text>
          </View>
          <View style={opt1}>
            <Icon
              name={'angle-right'}
              size={30}
              color={'black'}
              marginLeft={25}
              marginTop={2}
            />
            <Text style={optText}>Personal Interaction Tracking</Text>
          </View>
          <View style={opt1}>
            <Icon
              name={'angle-right'}
              size={30}
              color={'black'}
              marginLeft={25}
              marginTop={2}
            />
            <Text style={optText}>Nutrition</Text>
          </View>
          <View style={opt1}>
            <Icon
              name={'angle-right'}
              size={30}
              color={'black'}
              marginLeft={25}
              marginTop={2}
            />
            <Text style={optText}>Customized Workout Plan</Text>
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
    height: 680,
    width: 400
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
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10
  }
});
export default Menu;
