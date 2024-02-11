/* eslint-disable prettier/prettier */
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
const AbsScreen = ({navigation }) => {

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
          <Text style={heading}>ABS</Text>
         
        </View>
        <Text style={heading2}>Raises</Text>
        <View style={box}>
          <Image
            source={require('../../assets/abs/leg_raise.png')}
            style={image}
          />
          <Text style={boxTxt}>Hanging Leg Raises</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('LRV')}
          />
        </View>

        <Text style={heading2}>Chrunches</Text>
        <View style={box}>
          <Image
            source={require('../../assets/abs/chrunches.png')}
            style={image}
          />
          <Text style={boxTxt}>Crunches</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('ChrnchVid')}
          />
        </View>
        <View style={box}>
          <Image
            source={require('../../assets/abs/decline_crunches.png')}
            style={image}
          />
          <Text style={boxTxt}>Decline</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('DChrnch')}
          />
        </View>

        <Text style={heading2}>Sit ups</Text>
        <View style={box}>
          <Image
            source={require('../../assets/abs/situps.png')}
            style={image}
          />
          <Text style={boxTxt}>Sit ups</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('SitVid')}
          />
        </View>
        <View style={box}>
          <Image
            source={require('../../assets/abs/situps_weighted.png')}
            style={image}
          />
          <Text style={boxTxt}>Weighted</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('SitVid')}
          />
        </View>

        <View style={box}>
          <Image
            source={require('../../assets/abs/decline_situps.png')}
            style={image}
          />
          <Text style={boxTxt}>Decline</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('DSitVid')}
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
    marginLeft: 140,
  
  },
  box: {
    backgroundColor: '#176B87',
    height: 110,
    marginBottom: 15,
    flexDirection: 'row'
  },
  boxTxt: {
    color: 'white',
    fontSize: 20,
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
    marginTop: 28
  },
});

export default AbsScreen;
