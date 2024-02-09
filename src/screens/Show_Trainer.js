/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView
} from 'react-native';

const Show_Trainer = props => {
  const navigation = useNavigation();
  console.log('Props', props);
  console.log(props);
  const [trainerData, setTrainerData] = useState('');

  const {
    container,
    nav,
    hdng,
    hdng2,
    col,
    trn,
    trn1,
    trn2,
    trntxt,
    timeTxt,
    timeTxt2
  } = styles;

  async function getTrainerData() {
    const token = await AsyncStorage.getItem('token');
    console.log('Trainer Token', token);
    axios
      .post('http://192.168.2.5:5001/trainerdata', { token: token })
      .then(res => {
        console.log(res.data);
        setTrainerData(res.data.data);
      });
  }

  useEffect(() => {
    getTrainerData();
  }, []);

  return (
    <SafeAreaView style={container}>
      <ScrollView>
        <View style={nav}>
          <Icon
            name={'angle-left'}
            size={30}
            color={'white'}
            marginLeft={15}
            onPress={() => navigation.goBack()}
          />
          <Text style={hdng}>Trainers</Text>
        </View>
        <Text style={hdng2}>Trainer Details</Text>
        <View style={col}>
          <View style={trn}>
            <Text style={trn1}>{trainerData?.name}</Text>
            <View style={trn2}>
              <Text style={trntxt}>Email:</Text>
              <Text style={[timeTxt, timeTxt2]}>{trainerData?.email}</Text>
            </View>
            <View style={trn2}>
              <Text style={trntxt}>Contact:</Text>
              <Text style={[timeTxt, timeTxt2]}>{trainerData?.mobile}</Text>
            </View>
            <View style={trn2}>
              <Text style={trntxt}>Fees:</Text>
              <Text style={[timeTxt, timeTxt2]}>{trainerData?.fee}</Text>
            </View>
            <View style={trn2}>
              <Text style={trntxt}>Age:</Text>
              <Text style={[timeTxt, timeTxt2]}>{trainerData?.age}</Text>
            </View>
          </View>

           {/* <View style={trn}>
            <Text style={trn1}>{trainerData?.name}</Text>
            <View style={trn2}>
              <Text style={trntxt}>Email:</Text>
              <Text style={[timeTxt, timeTxt2]}>asga</Text>
            </View>
            <View style={trn2}>
              <Text style={trntxt}>Contact:</Text>
              <Text style={[timeTxt, timeTxt2]}>asga</Text>
            </View>
            <View style={trn2}>
              <Text style={trntxt}>Fees:</Text>
              <Text style={[timeTxt, timeTxt2]}>asga</Text>
            </View>
          </View> */}

         {/* <View style={trn}>
            <Text style={trn1}>Jerry</Text>
            <View style={trn2}>
              <Text style={trntxt}>Email:</Text>
              <Text style={[timeTxt, timeTxt2]}>asga</Text>
            </View>
            <View style={trn2}>
              <Text style={trntxt}>Contact:</Text>
              <Text style={[timeTxt, timeTxt2]}>asga</Text>
            </View>
            <View style={trn2}>
              <Text style={trntxt}>Fees:</Text>
              <Text style={[timeTxt, timeTxt2]}>asga</Text>
            </View>
          </View> */}
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
    width: '100%', // Use full width of the screen
    backgroundColor: '#3e5287',
    opacity: 1,
    flexDirection: 'row',
    justifyContent: 'center', // Horizontally center the children
    alignItems: 'center' // Vertically center the children
  },
  hdng: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 110, // Pushes text to the left
    marginRight: 'auto' // Pushes text to the right,
  },
  hdng2: {
    fontSize: 18,
    marginTop: 10,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  col: {
    flexDirection: 'column'
  },
  trn: {
    borderColor: 'white',
    borderWidth: 2,
    width: '90%',
    margin: 18
  },
  trn1: {
    fontSize: 20,
    color: 'white',
    margin: 15
  },
  trntxt: {
    fontSize: 18,
    color: 'white',
    margin: 15
  },
  trn2: {
    flexDirection: 'row'
  },
  timeTxt: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    marginTop: 25
  },
  timeTxt2: {
    fontSize: 16,
    marginTop: 5
  }
});
export default Show_Trainer;
