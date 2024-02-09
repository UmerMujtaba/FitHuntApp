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
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

function ShowGym(props) {
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
    btnText,
  } = styles;
  const navigation = useNavigation();
  console.log('Props', props);
  console.log(props);
  const [gymData, setGymData] = useState([]);
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

  async function getGymData() {
    const token = await AsyncStorage.getItem('token');
    console.log('Gym Token:', token);
    axios.post('http://192.168.2.5:5001/gymdata', { token: token })
      .then(res => {
        let originalGymData = JSON.parse(res.data.data);
        console.log('Response Gym Data:', originalGymData.length);
        let gymDataArray = [];
        for (let i = 0; i < 5; i++){
          const randomIndex = Math.floor(Math.random() * originalGymData.length);
          const randomGymObject = originalGymData[randomIndex];
          gymDataArray.push(randomGymObject);
        }
        console.log('New',gymDataArray);
        setGymData(gymDataArray);
      });
  }

  useEffect(() => {
    getGymData();
  }, []);

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
            marginLeft={290}
            onPress={() => navigation.navigate('MN')}
          />
        </View>

        <View style={nav2}>
          <Image source={require('../../assets/show/man.png')} style={img} />
          <View style={hdng1}>
            <Text style={hdng}>Hey! Welcome</Text>
            <Text style={[hdng, hdng3]}>{userData?.name}</Text>
            {/* name not rendering */}
          </View>
        </View>
        <Text style={head}>Searched Results</Text>
        {console.log('Hi',gymData)}
        {gymData.forEach((gym)=>{console.log(gym?.name);})}
        <View>
          {gymData.map((gym) => (
            <><Text style={head} key={gym.id} onPress={() => navigation.navigate('GP', { location: gym.location, fee: gym.fee , name: gym.name , maletime: gym.maletime,femaletime: gym.femaletime})}>
              {gym.name}
            </Text><View style={mid} key={gym.id} >
                <Image 
                  source={require('../../assets/show/shapes1.png')}
                  style={img2} />
              </View></>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1717',
  },
  nav: {
    height: 50,
    width: '100%',
    backgroundColor: '#3e5287',
    opacity: 0.9,
    flexDirection: 'row',
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
  hdng: {
    marginTop: 18,
    marginLeft: 15,
    fontSize: 18,
    color: 'white',
  },
  hdng3: {
    marginTop: 0,
  },
  head: {
    marginTop: 18,
    marginLeft: 15,
    fontSize: 18,
    color: 'white',
  },
  mid: {
    flexDirection: 'column',
    backgroundColor: 'white',
    height: 200,
    margin: 15,
    borderRadius: 15,
  },
  txt: {
    marginTop: 10,
    fontSize: 22,
  },
  img2: {
    height: 200,
    width: 'auto',
    borderRadius: 15,
  },
});
export default ShowGym;
