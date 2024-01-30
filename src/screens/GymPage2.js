/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
  Button,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const GymPage2 = ({navigation}) => {
  const {
    container,
    mid,
    nav,
    nav2,
    img,
    timeTxt2,
    timeTxt,
    time,
    midtxt,
    navTxt,
    btn3,
    btnText
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
        <Text style={navTxt}> Fitness Hub!</Text>
        <Icon
          name={'bars'}
          size={25}
          color={'white'}
          marginTop={15}
          marginLeft={190}
          onPress={() => navigation.navigate('MN')}
        />
      </View>

      <View style={mid}>
        <View>
          <Text style={midtxt}>Gym Location</Text>
        </View>
        <View>
          <Image source={require('../../assets/gym/loc.png')} style={img} />
        </View>
      </View>

      <TouchableOpacity style={btn3}>
        <Text style={btnText}>Navigate</Text>
      </TouchableOpacity>

      <View style={mid}>
        <View>
          <Text style={midtxt}>Timing</Text>
        </View>
        <View style={time}>
            <View>
                <Text style={timeTxt}>
                    Female
                </Text>
                <Text  style={[timeTxt,timeTxt2]}>
                    06:30am to 09:00am
                </Text>
            </View>

            <View>
                <Text  style={timeTxt}>
                    Male
                </Text>
                <Text  style={[timeTxt,timeTxt2]}>
                    10:00am to 10:00pm
                </Text>
            </View>
        </View>
      </View>
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
  navTxt: {
    fontSize: 22,
    color: 'white',
    marginTop: 12,
    marginLeft: 5
  },
  mid: {
    height: 250,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5
  },
  midtxt: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    backgroundColor: 'grey',
    width: 382,
    opacity: 0.5,
    height: 40
  },
  img: {
    height: 217,
    width: 382
  },
  btn3: {
    backgroundColor: '#176B87',
    borderRadius: 40,
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginRight: 130,
    marginLeft: 140,
    marginTop: 30
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal'
  },
  time:{
    backgroundColor: 'lightgrey',
    height: 210,
    flexDirection: 'column'
  },
  timeTxt: {
    fontSize: 25,
    color: 'black',
    alignSelf:'center',
    marginTop: 25,
    fontWeight: 'bold'
  },
  timeTxt2 :{
    fontSize: 20,
    marginTop: 5,
    fontWeight: '500'
  },
  
});
export default GymPage2;
