/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import Add_Component from '../components/Add_Trainer_Compnt';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';

const Add_Trainer = ({navigation}) => {
  const { container, hdng, nav, hdng2, trainer1, txt1 } =
    styles;
  const [username, setusername] = useState('');
  const [nameVerify, setUserNameVerify] = useState(false);

  // function handleSubmit() {
  //   const GymData = {
  //     name: gymname,
  //     fee: gymfee,
  //     mobile: gymmobile,
  //     location: gymlocation,
  //     maletime: gymmaleTiming,
  //     femaletime: gymfemaleTiming,
  //   };
  //   if (gymnameVerify && gymmobileVerify && gymfeeVerify && gymmaleVerify && gymfemaleVerify  ) {
  //     axios
  //       .post('http://192.168.2.6:5003/gymregister', GymData)
  //       .then(res => {
  //         console.log(res.data);

  //         if (res.data.status == 'ok') {
            
  //           Alert.alert('Registered Successfully!!');
  //           AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
  //           navigation.navigate('FG');
  //         } else {
  //           Alert.alert(JSON.stringify(res.data));
  //         }
  //       })
  //       .catch(e => console.log(e));
  //   } 
  //   else {
  //     Alert.alert('Fill mandatory details');
  //   }
  // }
  // async function getGymData() {
  //   const gymdata = await AsyncStorage.getItem('isLoggedIn');

  //   console.log(gymdata, 'at GymOwner.jsx');
  // }
  // useEffect(() => {
  //   getGymData();
  //   console.log('Hi2');
  // }, []);
  return (
    <ScrollView>
   <SafeAreaView style={container}>
     
        <View style={nav}>
          <Icon
            name={'angle-left'}
            size={30}
            color={'white'}
            marginLeft={15}
            onPress={() => navigation.goBack()}
          />
          <Text style={hdng}>Add Trainer</Text>
        </View>
        <Text style={hdng2}>Personal Trainer Information</Text>
        
        <View style={trainer1}>
          <Text style={txt1}>Trainer 1</Text>
          <Add_Component/>
        </View>
        <View style={trainer1}>
          <Text style={txt1}>Trainer 2</Text>
          <Add_Component/>
        </View>
        <View style={trainer1}>
          <Text style={txt1}>Trainer 3</Text>
          <Add_Component/>
        </View>
        <TouchableOpacity
              style={styles.btn4}
              onPress={() => handleSubmit()}>
              <Text style={styles.btnText}> Submit </Text>
            </TouchableOpacity>
    </SafeAreaView>
    </ScrollView>
  );
};
export default Add_Trainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1717'
  },
  nav: {
    height: 50,
    width: '100%', // Use full width of the screen
    backgroundColor: '#3e5287',
    opacity: 0.9,
    flexDirection: 'row',
    justifyContent: 'center', // Horizontally center the children
    alignItems: 'center' // Vertically center the children
  },
  hdng: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 100, // Pushes text to the left
    marginRight: 'auto' // Pushes text to the right,
  },
  hdng2: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 30,
    fontWeight: 'bold'
  },
  trainer1: {
    height: 320,
    width: 'auto',
    // borderWidth: 2,
    // borderColor: 'white',
    marginBottom: 10
  },
  txt1: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    margin: 15
  },
  btn4: {
    backgroundColor: '#176B87',
    borderRadius: 40,
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginVertical: 10,
    width: '40%'
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
});
