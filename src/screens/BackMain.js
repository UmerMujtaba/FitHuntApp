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

const BackMain = () => {
  const { container, box, nav, heading, boxTxt,exercise1,txt2 } = styles;
  return (
    <SafeAreaView style={container}>
      <ScrollView>
        <View style={nav}>
          <Icon
            name={'angle-left'}
            size={50}
            color={'black'}
            marginLeft={20}
            marginTop={2}
          />
          <Text style={heading}>Back</Text>
        </View>

        <View style={exercise1}>
          <Image
            source={require('../../assets/abss2.png')}
            marginLeft={15}></Image>
          <Text style={txt2}>Traps</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={170}
            marginTop={18}
          />
        </View>
        <View style={exercise1}>
          <Image
            source={require('../../assets/abss2.png')}
            marginLeft={15}></Image>
          <Text style={txt2}>Lats</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={185}
            marginTop={18}
          />
        </View>
        <View style={exercise1}>
          <Image
            source={require('../../assets/abss2.png')}
            marginLeft={15}></Image>
          <Text style={txt2}>Lower Back</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={105}
            marginTop={18}
          />
        </View>
        <View style={exercise1}>
          <Image
            source={require('../../assets/abss2.png')}
            marginLeft={15}></Image>
          <Text style={txt2}>Glutes</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={160}
            marginTop={18}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  nav: {
    height: 60,
    width: 400,
    marginTop: 25,
    flexDirection: 'row'
  },
  txt2: {
    marginTop: 25,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10
  },
  exercise1: {
    backgroundColor: 'grey',
    height: 92,
    width: 394,
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 10,
  
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
    marginLeft: 130
  },
});

export default BackMain;
