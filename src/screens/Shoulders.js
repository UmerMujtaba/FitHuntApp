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
const Shoulders = ({navigation}) => {
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
          <Text style={heading}>Shoulders</Text>
        </View>
        <Text style={heading2}>Smith Machine Overhead</Text>
        <View style={box}>
        <Image
            source={require('../../assets/shoulder/SmithMachineOverheadPress,Seated.png')}
            style={image}
          />
          <Text style={boxTxt}>Seated Press</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('SMSOHPVid')}
          />
        </View>
        
        <Text style={heading2}>Dumbbell Press</Text>
        <View style={box}>
        <Image
            source={require('../../assets/shoulder/SeatedDumbbellOverheadPress.png')}
            style={image}
          />
          <Text style={boxTxt}>Seated Overhead </Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('DSOHPVid')}
          />
        </View>
        <View style={box}>
        <Image
            source={require('../../assets/shoulder/StandingDumbbellOverheadPress.png')}
            style={image}
          />
          <Text style={boxTxt}>Standing Overhead </Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('DSTNDOHPVid')}
          />
        </View>
        <Text style={heading2}>Barbell Press</Text>
        <View style={box}>
        <Image
            source={require('../../assets/shoulder/SeatedBarbellOverheadPress2.png')}
            style={image}
          />
          <Text style={boxTxt}>Seated Overhead </Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('BSTDOHPVid')}
          />
        </View>
        <View style={box}>
        <Image
            source={require('../../assets/shoulder/StandingBarbellOverheadPress.png')}
            style={image}
          />
          <Text style={boxTxt}>Standing Overhead </Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('BSTNDOPVid')}
          />
        </View>
        <View style={box}>
        <Image
            source={require('../../assets/shoulder/BarbellUprightRow.png')}
            style={image}
          />
          <Text style={boxTxt}>Barbell Upright Row</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('BUpRRVid')}
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
    marginLeft: 110
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
    marginTop: 28
  },
});

export default Shoulders;
