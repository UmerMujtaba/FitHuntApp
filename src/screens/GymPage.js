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
import ButtomTab from '../components/Bottom_Tab'
// import GoogleMaps from 'react-native-maps'
const GymPage = ({navigation, route}) => {
  const {
    container,
    mid,
    nav,
    img,
    timeTxt2,
    timeTxt,
    time,
    midtxt,
    navTxt,
    btn3,
    btnText,
    midtxt2
  } = styles;
  const { fee, location, name,maletime,femaletime } = route.params;
  
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
        <Text style={navTxt}> {name}</Text>
        <Icon
          name={'bars'}
          size={25}
          color={'white'}
          marginTop={15}
          marginRight={20}
          marginLeft={'auto'}
          onPress={() => navigation.navigate('MN1')}
        />
      </View>

      <View style={mid}>
        <View>
          <Text style={midtxt}>Gym Location</Text>
        </View>
        <View>
          
          <Image source={require('../../assets/gym/loc.png')} style={img} />
        </View>
      </View>

      <TouchableOpacity style={btn3}>
        <Text style={btnText}>Navigate</Text>
      </TouchableOpacity>


      {/* <View style={styles.container}>
        <GoogleMaps
          apiKey="YOUR_API_KEY"
          initialRegion={{
            latitude: 37.422408,
            longitude: -122.084068,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View> */}
      <View style={mid}>
        <View>
          <Text style={[midtxt,midtxt2]}>Timing</Text>
        </View>
        <View style={time}>
            <View>
                <Text style={timeTxt}>
                    Female
                </Text>
                <Text  style={[timeTxt,timeTxt2]}>
                    {femaletime}
                </Text>
            </View>

            <View>
                <Text  style={timeTxt}>
                    Male
                </Text>
                <Text  style={[timeTxt,timeTxt2]}>
                    {maletime}
                </Text>
            </View>
        </View>
      </View>
      <ButtomTab navigation={navigation}/>
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
  navTxt: {
    fontSize: 18,
    color: 'white',
    marginTop: 16,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  mid: {
    height: 250,
    marginTop: 20,
    marginLeft: 5,
    marginRight: 60,
    width: '100%',
    backgroundColor: 'grey'
  },
  midtxt: {
    fontSize: 25,
   textAlign: 'center',
    color: 'black',
    backgroundColor: 'grey',
   width: '100%',
    opacity: 0.5,
    height: 40,
    fontWeight:'bold'
  },
  midtxt2:{
    marginLeft: 0,
    marginRight: 60
  },
  img: {
    height: 217,
    width: '100%'
  },
  btn3: {
    backgroundColor: '#176B87',
    borderRadius: 40,
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    alignSelf: 'center', // Center the button horizontally
    borderColor: 'black',
    borderWidth: 2,
    width: 130,
    marginTop: 35,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal'
  },
  time:{
    backgroundColor: 'lightgrey',
    height: 210,
    flexDirection: 'column',
  },
  timeTxt: {
    fontSize: 25,
    color: 'black',
    alignSelf:'center',
    marginTop: 25,
    fontWeight: 'bold'
  },
  timeTxt2 :{
    fontSize: 20,
    marginTop: 5,
    fontWeight: '500'
  },
  
});
export default GymPage;
