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
  imgs,
  ScrollView
} from 'react-native';

const Biceps = ({navigation}) => {
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
          <Text style={heading}>Bicep</Text>
        </View>
        <Text style={heading2}>EZ Bar</Text>
        <View style={box}>
        <Image
            source={require('../../assets/bicep/EZNarrow.png')}
            style={image}
          />
          <Text style={boxTxt}>Narrow Grip Curl</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('EZVid')}
          />
        </View>
        <View style={box}>
        <Image
            source={require('../../assets/bicep/EZPreacher.png')}
            style={image}
          />
          <Text style={boxTxt}>Preacher Curl</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('EZVid2')}
          />
        </View>
        <Text style={heading2}>Straight Bar</Text>
        <View style={box}>
        <Image
            source={require('../../assets/bicep/StraightBarCurl.png')}
            style={image}
          />
          <Text style={boxTxt}>Straight Bar Barbel Curl</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('BCVid')}
          />
        </View>
        <Text style={heading2}>Dumbbell</Text>
        <View style={box}>
        <Image
            source={require('../../assets/bicep/DumbellCurl.png')}
            style={image}
          />
          <Text style={boxTxt}>Standing Curl</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('DStndCVid')}
          />
        </View>
        <View style={box}>
        <Image
            source={require('../../assets/bicep/SeatedCurl.png')}
            style={image}
          />
          <Text style={boxTxt}>Seated Curl</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('DStdCVid')}
          />
        </View>
        <View style={box}>
        <Image
            source={require('../../assets/bicep/HammerCurl.png')}
            style={image}
          />
          <Text style={boxTxt}>Hammer Curl</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('DHCVid')}
          />
        </View>
        <View style={box}>
        <Image
            source={require('../../assets/bicep/InclineDumbel.png')}
            style={image}
          />
          <Text style={boxTxt}>Incline Curl</Text> 
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('DICVid')}
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
    flexDirection: 'row',
    width: 395
   
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

export default Biceps;
