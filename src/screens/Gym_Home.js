/* eslint-disable prettier/prettier */

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const GymHomePage = ({ navigation }) => {
  const {
    container,
    hdng,
    nav,
    hdng2,
    nav2,
    hdng1,
    hdng3,
    img,
    hdng4,
    btns,
    btn3,
    btnText,
  } = styles;
  const [userData, setUserData] = useState('');

  async function getData() {
    const token = await AsyncStorage.getItem('token');
    console.log('User Token',token);
    axios
      .post('http://192.168.2.5:5001/userdata', { token: token })
      .then(res => {
        console.log(res.data);
        setUserData(res.data.data);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  function signOut() {
    console.log("Hi signout from gym home page")
    AsyncStorage.setItem('isLoggedIn','');
    AsyncStorage.removeItem('token');
    navigation.navigate("Log")
  }
  return (
    <SafeAreaView style={container}>
      <View style={nav}>
        <Icon
          name={'angle-left'}
          size={30}
          color={'white'}
          marginTop={12}
          marginLeft={15}
          onPress={() => navigation.goBack()}
        />
        <Text style={hdng}>Home</Text>
        <Text style={hdng2}  onPress={()=>signOut()}>Sign out</Text>
      </View>
      <View style={nav2}>
          <Image source={require('../../assets/show/man.png')} style={img} />
          <View style={hdng1}>
            <Text style={hdng4}>Hey! Welcome</Text>
            <Text style={[hdng4, hdng3]}>{userData?.name}</Text>
            {/* name not rendering */}
          </View>
        </View>

        <View style={btns}>
        <TouchableOpacity
              style={btn3}   onPress={() => navigation.navigate('RegGym')}>
              <Text style={btnText}>Add Gym</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={btn3} onPress={() => navigation.navigate('Add-Trainer')}>
              <Text style={btnText}>Add Trainer</Text>
            </TouchableOpacity>
            </View>
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
    width: '100%',
    backgroundColor: '#3e5287',
    opacity: 0.9,
    flexDirection: 'row'
  },
  hdng: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginTop: 5,
    textAlign: 'center',
    marginLeft: 130
  },
  hdng2: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    marginTop: 5,
    marginLeft: 'auto',
    marginRight: 5
  },
  nav2: {
    height: 80,
    flexDirection: 'row',
  },
  img: {
    marginTop: 10,
    marginLeft: 10,
    height: 60,
    width: 60,
  },
  hdng1: {
    flexDirection: 'column',
  },
  hdng4: {
    marginTop: 18,
    marginLeft: 15,
    fontSize: 18,
    color: 'white',
  },
  hdng3: {
    marginTop: 0,
  },
  btns:{
   marginTop: 145,
   
    // flexDirection: 'row'
  },
  btn3: {
    backgroundColor: '#176B87',
    borderRadius: 40,
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 20,
    width: '40%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GymHomePage;
