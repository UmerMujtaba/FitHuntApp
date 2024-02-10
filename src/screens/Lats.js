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

const Lats = ({navigation}) => {
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
          <Text style={heading}>Lats</Text>
        </View>
        <Text style={heading2}>Pull Ups</Text>
        <View style={box}>
        <Image
            source={require('../../assets/back/lats/overhandpulldown.png')} 
            style={image}
          />
          <Text style={boxTxt}>Overhand Grip </Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('OHPulupVid')}
          />
        </View>
        <View style={box}>
        <Image
            source={require('../../assets/back/lats/widepullup.png')}
            style={image}
          />
          <Text style={boxTxt}>Wide Grip</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('WGPulupVid')}
          />
        </View>
        <View style={box}>
        <Image
            source={require('../../assets/back/lats/underhandpullup.png')}
            style={image}
          />
          <Text style={boxTxt}>Underhand Grip</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('UHGPVid')}
          />
        </View>
        <View style={box}>
        <Image
            source={require('../../assets/back/lats/Machinepullups.png')}
            style={image}
          />
          <Text style={boxTxt}>Machine Overhand Grip</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('MSOHGVid')}
          />
        </View>
        <Text style={heading2}>Pull Down</Text>
        <View style={box}>
        <Image
            source={require('../../assets/back/lats/latpulldown.png')}
            style={image}
          />
          <Text style={boxTxt}>Overhand Grip Lat</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('OGLatPulDwnVid')}
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
    marginLeft: 140
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
    marginRight: 7,
    marginTop: 28
  },
});

export default Lats;
