/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
  Button,
  Image,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ShowGym = ({navigation}) => {
  const {
    container,
    mid,
    nav,
    nav2,
    img,
    hdng,
    hdng1,
    hdng3,
    head,
    txt,
    img2,
    btnText
  } = styles;
  return (
    <SafeAreaView style={container}>
        <ScrollView>
      <View style={nav}>
        <Icon
          name={'angle-left'}
          size={30}
          color={'white'}
          marginTop={10}
          marginLeft={15}
          onPress={() => navigation.goBack()}
        />

        <Icon
          name={'bars'}
          size={25}
          color={'white'}
          marginTop={15}
          marginLeft={310}
          onPress={() => navigation.navigate('MN')}
        />
      </View>

      <View style={nav2}>
        <Image source={require('../../assets/show/man.png')} style={img} />
        <View style={hdng1}>
          <Text style={hdng}>Hey! Welcome</Text>
          <Text style={[hdng,hdng3]}>Jack!</Text>
        </View>
      </View>
      <Text style={head}>Searched Results</Text>

        <View>
        <Text style={[head,txt]} onPress={() => navigation.navigate('GP')}>Shapes</Text>
      <View style={mid} onPress={() => navigation.navigate('GP')}>
            <Image source={require('../../assets/show/shapes1.png')} style={img2}/>
      </View>
      </View>

      <View>
        <Text style={[head,txt]} onPress={() => navigation.navigate('GP1')}>Fitness Hub</Text>
      <View style={mid} >
      <Image source={require('../../assets/show/fithub.png')} style={img2} onPress={() => navigation.navigate('GP1')}/>
      </View>
      </View>

      <View>
        <Text style={[head,txt]}>Shoaib Gym</Text>
      <View style={mid}>
      <Image source={require('../../assets/show/shoaib1.png')} style={img2}/>
      </View>
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
    height: 50,
    width: 395,
    backgroundColor: '#3e5287',
    opacity: 0.9,
    flexDirection: 'row'
  },
  nav2: {
    height: 80,
    flexDirection:'row'
  },
  img: {
    marginTop: 10,
    marginLeft: 10,
    height: 60,
    width: 60
  },
  hdng1: {
    flexDirection: 'column'
  },
  hdng: {
    marginTop: 18,
    marginLeft: 15,
    fontSize: 18,
    color: 'white'
  },
  hdng3: {
    marginTop:0,
  },
  head:{
    marginTop: 18,
    marginLeft: 15,
    fontSize: 18,
    color: 'white'
  },
  mid: {
    flexDirection: 'column',
    backgroundColor: 'white',
    height: 200,
    margin: 15,
    borderRadius: 15
  },
  txt: {
    marginTop: 10,
    fontSize: 22,
  },
  img2:{
    height: 200,
    width: 365,
    borderRadius: 15
  }
});
export default ShowGym;
