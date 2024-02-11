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
import ButtomTab from '../components/Bottom_Tab'
const Traps = ({navigation}) => {
  const { container, box, nav, heading, boxTxt,heading2,image,icon } = styles;
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
          <Text style={heading}>Traps</Text>
        </View>
        <Text style={heading2}>Barbell</Text>
        <View style={box}>
        <Image
            source={require('../../assets/back/traps/standingshrugs.png')}
            style={image}
          />
          <Text style={boxTxt}>Standing Shrugs </Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('BSShrgVid')}
          />
        </View>
        <Text style={heading2}>Dumbbell</Text>
        <View style={box}>
        <Image
            source={require('../../assets/back/traps/standingdmblshrugs.png')}
            style={image}
          />
          <Text style={boxTxt}>Shrugs</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('DShrugVid')}
          />
        </View>
        
        <View style={box}>
        <Image
            source={require('../../assets/back/traps/incline_prone.png')}
            style={image}
          />
          <Text style={boxTxt}>Incline Prone Shrugs</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('DIPShrugVid')}
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
    marginRight: 7,
    marginTop: 28
  },
});

export default Traps;
