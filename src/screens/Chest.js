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

const Chest = ({navigation}) => {
  const { container, box, nav, heading, boxTxt, image, heading2,icon } = styles;
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
          <Text style={heading}>Chest</Text>
        </View>
        <Text style={heading2}> Dumbbell</Text>
        <View style={box}>
          <Image
            source={require('../../assets/chest/dumbellpress.png')}
            style={image}
          />
          <Text style={boxTxt}> Bench Press</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('BVid')}
          />
        </View>
        <View style={box}>
          <Image
            source={require('../../assets/chest/declinefly.png')}
            style={image}
          />
          <Text style={boxTxt}>Decline Fly</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('DFVid')}
          />
        </View>
        <View style={box}>
          <Image
            source={require('../../assets/chest/inclinedumbellpress.png')}
            style={image}
          />
          <Text style={boxTxt}>Incline Bench Press</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('IVid')}
          />
        </View>

        <Text style={heading2}>Bench Press</Text>

        <View style={box}>
          <Image
            source={require('../../assets/chest/barbellpress.png')}
            style={image}
          />
          <Text style={boxTxt}>Barbell Bench Press</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('BBPVid')}
          />
        </View>
        <View style={box}>
          <Image
            source={require('../../assets/chest/inclinebarbellpress.png')}
            style={image}
          />
          <Text style={boxTxt}>Incline Barbell</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('BIBPVid2')}
          />
        </View>
        <View style={box}>
          <Image
            source={require('../../assets/chest/declinepress.png')}
            style={image}
          />
          <Text style={boxTxt}>Decline Barbell </Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('DBPVid')}
          />
        </View>

        <Text style={heading2}> Smith Machine</Text>

        <View style={box}>
          <Image
            source={require('../../assets/chest/smithmchinebenchpress.png')}
            style={image}
          />
          <Text style={boxTxt}>Bench Press</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('SMBPVid')}
          />
        </View>
        <View style={box}>
          <Image
            source={require('../../assets/chest/smithmchineinclinepress.png')}
            style={image}
          />
          <Text style={boxTxt}>Incline Bench Press</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('SMIPVid')}
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
    marginLeft: 130
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

export default Chest;
