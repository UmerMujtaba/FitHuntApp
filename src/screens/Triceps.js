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
import ButtomTab from '../components/Bottom_Tab'
const Triceps = ({navigation}) => {
  const { container, box, nav, heading, boxTxt, heading2, image,icon } = styles;
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
          <Text style={heading}>Trcieps</Text>
        </View>

        <Text style={heading2}>Standing Cable</Text>
        <View style={box}>
        <Image
            source={require('../../assets/tricep/StandingCableTricepPushdown,Rope.png')}
            style={image}
          />
          <Text style={boxTxt}>Rope Pushdown</Text>
          <Icon
            name={'angle-right'}
            size={40}
            color={'white'}
            style={ icon}
            onPress={() => navigation.navigate('RPDVid')}
          />
        </View>
        <View style={box}>
        <Image
            source={require('../../assets/tricep/StandingCableTricepPushdown,SingleArm.png')}
            style={image}
          />
          <Text style={boxTxt}>Single Arm Pushdown</Text>
          <Icon
            name={'angle-right'}
            size={40}
            color={'white'}
            style={ icon}
            onPress={() => navigation.navigate('SAPDVid')}
          />
        </View>
        <Text style={heading2}>Skull Crushers</Text>
        <View style={box}>
        <Image
            source={require('../../assets/tricep/DumbellSkullCrusher.png')}
            style={image}
          />
          <Text style={boxTxt}>On Head</Text>
          <Icon
            name={'angle-right'}
            size={40}
            color={'white'}
            style={ icon}
            onPress={() => navigation.navigate('SCONHVid')}
          />
        </View>
        <View style={box}>
        <Image
            source={require('../../assets/tricep/DumbellSkullCusher,BehindHead.png')}
            style={image}
          />
          <Text style={boxTxt}>Behind Head</Text>
          <Icon
            name={'angle-right'}
            size={40}
            color={'white'}
            style={ icon}
            onPress={() => navigation.navigate('SKBHNDHVid')}
          />
        </View>

        <Text style={heading2}>Tricep Extension Overhead</Text>
        <View style={box}>
        <Image
            source={require('../../assets/tricep/StandingCableOverheadTricepExtensios,StraightBar.png')}
            style={image}
          />
          <Text style={boxTxt}>Staright Bar</Text>
          <Icon
            name={'angle-right'}
            size={40}
            color={'white'}
            style={ icon}
            onPress={() => navigation.navigate('EOHSBVid')}
          />
        </View>
        <View style={box}>
        <Image
            source={require('../../assets/tricep/SeatedDumbellOverheadTricepExtensions.png')}
            style={image}
          />
          <Text style={boxTxt}>Seated Dumbell</Text>
          <Icon
            name={'angle-right'}
            size={40}
            color={'white'}
            style={ icon}
            onPress={() => navigation.navigate('EOHSDVid')}
          />
        </View>
      </ScrollView>
      <ButtomTab navigation={navigation}/>
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
    marginTop: 40
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
    marginRight: 10,
    alignSelf: 'center'
  },
});

export default Triceps;
