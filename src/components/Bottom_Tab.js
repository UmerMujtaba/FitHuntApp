/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BottomTab = ({navigation}) => {
  const {
    training,
    nav,
    exercise,
    home,
    social,
    me,
    insidenav,
    txt,
    img,
    smallIcon1
  } = styles;
  return (
    <View style={nav}>
      <View style={insidenav}>
        <View style={training}>
          <TouchableOpacity onPress={() => navigation.navigate('Tmplt')}>
            <Image source={require('../../assets/exercise.png')} style={img} />
            <Text style={txt}>Training</Text>
          </TouchableOpacity>
        </View>
        <View style={exercise}>
          <TouchableOpacity onPress={() => navigation.navigate('Exer')}>
            <FontAwesome
              name="dumbbell"
              color="black"
              style={styles.smallIcon}
            />
            <Text style={txt}>Exercise</Text>
          </TouchableOpacity>
        </View>
        <View style={home}>
          <TouchableOpacity onPress={() => navigation.navigate('FG')}>
            <Entypo name="home" color="white" style={styles.smallIcon} />
            <Text style={txt}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={social}>
          <TouchableOpacity  onPress={() => navigation.navigate('SCL')}>
            <MaterialIcons
              name="group"
              color="black"
              style={styles.smallIcon}
            />
            <Text style={txt}>Social</Text>
          </TouchableOpacity>
        </View>
        <View style={me}>
          <TouchableOpacity onPress={() => navigation.navigate('ME')}>
            <Entypo name="user" color="black" style={styles.smallIcon1} />
            <Text style={txt}>Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default BottomTab;

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'lightgrey',
 
    width: '100%',
    height: 55,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    borderRadius: 20
  },
  insidenav: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
  },
  training: {
    width: 45,
    height: 47,
    marginRight: 20
  },
  exercise: {
    width: 45,
    height: 47,
    marginRight: 20
  },
  home: {
    width: 45,
    height: 47,
    marginRight: 20
  },
  social: {
    width: 45,
    height: 47,
    marginRight: 20
  },
  me: {
    marginTop: 3,
    width: 45,
    height: 47,
    marginLeft: 5
  },
  smallIcon: {
    fontSize: 30,
    alignSelf: 'center'
  },
  img: {
    height: 29,
    width: 30,
    alignSelf: 'center'
  },
  txt: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  smallIcon1: {
    fontSize: 28,
    alignSelf: 'center'
  }
});
