/* eslint-disable prettier/prettier */
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const BackMain = ({navigation}) => {
  const { container, box, nav, heading, boxTxt,exercise1,txt2,img } = styles;
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
          <Text style={heading}>Back</Text>
        </View>

        <View style={box}>
          <Image
            source={require('../../assets/back/lats1.png')}
            style={img}/>
          <Text style={txt2}>Lats</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={150}
            marginTop={30}
            onPress={() => navigation.navigate('Lts')}
          />
        </View>
        <View style={box}>
          <Image
            source={require('../../assets/back/traps1.png')}
            style={img}/>
          <Text style={txt2}>Traps</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={140}
            marginTop={30}
            onPress={() => navigation.navigate('Trps')}
          />
        </View>
        <View style={box}>
          <Image
            source={require('../../assets/back/lowerback.png')}
            style={img}/>
          <Text style={txt2}>Lower Back</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={80}
            marginTop={30}
            onPress={() => navigation.navigate('LB')}
          />
        </View>
        <View style={box}>
          <Image
            source={require('../../assets/back/glutes.png')}
            style={img}/>
          <Text style={txt2}>Glutes</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={130}
            marginTop={30}
            onPress={() => navigation.navigate('Glts')}
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
  txt2: {
    marginTop: 40,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 15
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
    height: 100,
    marginBottom: 15,
    flexDirection: 'row',
    width: 395
  },
 
  img: {
    height: 100, // Adjust the height to fit within the view
    width: 120, // Adjust the width to fit within the view
    marginRight: 5,
    marginLeft: 0, // Ensure the image fits within the specified dimensions
  
  },
});

export default BackMain;
