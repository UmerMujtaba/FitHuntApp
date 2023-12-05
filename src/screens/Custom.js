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
  TouchableOpacity
} from 'react-native';

const Custom = ({navigation}) => {
  const { container, main, nav, img, txt, btn1, btn2, btnText, heading } =
    styles;
  return (
    <SafeAreaView style={container}>
      <View style={nav}>
      <Icon
            name={'angle-left'}
            size={30}
            color={'white'}
            marginTop={14}
            marginLeft={15}
            marginRight={15}
            onPress={() => navigation.goBack()}
          />
        <Text style={heading}>Customized Workout</Text>
      </View>
      <View style={main}>
        <Image source={require('../../assets/customicon.png')} style={img} />
        <Text style={txt}> You haven't created any custom workouts yet </Text>
      </View>

      <TouchableOpacity style={btn1} >
        <Text style={btnText} onPress={() => navigation.navigate('Tmplt')}>Use a Template</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[btn2,btn1]}>
        <Text style={btnText}>Create my Own</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1717'
  },
  heading: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 12,
    marginLeft: 55
  },
  nav: {
    height: 50,
    width: 395,
    backgroundColor: '#3e5287',
    opacity: 0.9,
    flexDirection: 'row',
    
  },
  main: {
    height: 250,
    width: 395,
    backgroundColor: '#3e5287',
    marginTop: 10,
    flexDirection: 'column',
    opacity: 0.5,
    marginBottom: 20
  },
 
  img: {
    alignSelf: 'center',
    height: 80,
    width: 90,
    marginTop: 30,
  },
  txt: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  btn1: {
    backgroundColor: '#176B87',
    borderRadius: 40,
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    marginBottom: 30,
    marginLeft: 45,
    marginRight: 35,
    borderColor: 'black',
    borderWidth: 2,
   
  },
  btn2: {
    marginLeft: 45,
    marginRight: 35,
    marginTop:5
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default Custom;
