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

const Glutes = ({navigation}) => {
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
          <Text style={heading}>Glutes</Text>
        </View>
        <View style={box}>
          <Image
            source={require('../../assets/back/glute/hipthrustmachine.png')}
            style={image}
          />
          <Text style={boxTxt}>Hip Thrust Machine</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('HipTVid')}
          />
        </View>
        <View style={box}>
          <Image
            source={require('../../assets/back/glute/singleleghipthrust.png')}
            style={image}
          />
          <Text style={boxTxt}>Single Leg Hip Thrust</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('SLegHTVid')}
          />
        </View>
        <Text style={heading2}>Barbell</Text>
        <View style={box}>
          <Image
            source={require('../../assets/back/glute/barbellhipthrust.png')}
            style={image}
          />
          <Text style={boxTxt}>Barbell Hip Thrust </Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('BHTVid')}
          />
        </View>
        <View style={box}>
          <Image
            source={require('../../assets/back/glute/barbellglutebridge.png')}
            style={image}
          />
          <Text style={boxTxt}>Barbell Glute Bridge</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('BGBrdgVid')}
          />
        </View>
        <Text style={heading2}>Dumbbell</Text>
        <View style={box}>
          <Image
            source={require('../../assets/back/glute/dumbbellhipthrust.png')}
            style={image}
          />
          <Text style={boxTxt}>Dumbell Hip Thrust</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('DHTVid')}
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
    marginLeft: 125
  },
  box: {
    backgroundColor: '#176B87',
    height: 110,
    marginBottom: 15,
    flexDirection: 'row',
    width: 395
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
    marginRight: 45,
    marginTop: 28
  },
});

export default Glutes;
