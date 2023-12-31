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
  TextInput,
  pickerSelectStyles
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FindGym = ({navigation}) => {
  const {
    backgrndImg,
    container,
    overlay,
    main,
    main1,
    main2,
    location,
    range
  } = styles;
  const [username, setusername] = useState('');

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={backgrndImg}
        source={require('../../assets/fifth-screen.jpg')}>
        <View style={overlay}>
          <Image
            source={require('../../assets/new-logo.jpg')}
            style={styles.logo}></Image>

          <Text style={main}>Find Gym</Text>

          <View style={location}>
            <Text style={[main, main1]}>Select Location</Text>
            <TouchableOpacity style={styles.btn1}>
              <TextInput
                style={styles.btnText1}
                placeholder=" Enter Username"
                secureTextEntry={true}
                value={username}
                onChangeText={text => setusername(text)}
              />
              {/* <Icon name={'user'} size={30} color='white' /> */}
            </TouchableOpacity>
          </View>

          <View style={range}>
            <Text style={[main, main2]}>Enter Your Range</Text>
            <TouchableOpacity style={styles.btn1}>
              <TextInput
                style={styles.btnText1}
                placeholder=" 1000 to 2000" //there should be dropdown
                secureTextEntry={true}
                value={username}
                onChangeText={text => setusername(text)}
              />
              {/* <Icon name={'user'} size={30} color='white' /> */}
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btn4} onPress={() => navigation.navigate('SP')}>
                <Text style={styles.btnText}> Find </Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  backgrndImg: {
    height: 795,
    width: 400
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'hsla(0, 100%, 90%, 0.3);' // Adjust the last value (0.5) for opacity
  },
  logo: {
    width: 250,
    marginLeft: 70,
    height: 210
  },
  main: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 20
  },
  main1: {
    marginTop: 25,
    marginBottom: 10
  },
  main2: {
    marginBottom: 10,
    marginTop: 0
  },
  btn1: {
    backgroundColor: '#D0D4CA',
    borderRadius: 15,
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 90,
    marginLeft: 40,
    marginBottom: 30,
    borderColor: 'black',
    borderWidth: 2,
    width: 320
  },
  btnText1: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10
  },
  btn4: {
    backgroundColor: '#176B87',
    borderRadius: 40,
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 55
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  
});
export default FindGym;
