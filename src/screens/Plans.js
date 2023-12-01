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
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const Plans = () => {
  const {
    container,
    mid,
    mid1,
    mid2,
    nav,
    img,
    hdng,
    hdng1,
    midtxt1,
    midtxt2,
    hdng3,
    midtxt,
    txtbox
  } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={nav}>
      <Icon
          name={'angle-left'}
          size={25}
          color={'white'}
          marginTop={15}
          marginLeft={15}
        />
        <Text style={hdng}>Meal Plan</Text>
      </View>
      <View>
        <Text style={hdng1}>Find a Plan</Text>

        <Text style={[hdng1, hdng3]}>
          Meal plans, workout plans. Start a plan, follow along, and reach your
          goals
        </Text>
      </View>
      <Text style={midtxt}>Available Plans</Text>
      <View style={mid}>
        <View style={mid1}>
          
          <Image
            source={require('../../assets/plan/meal/lowcarb.png')}
            style={img}
          />

          <Text style={midtxt1}>Low Carb</Text>
          <Text style={midtxt2}>28 Days . Daily</Text>
        </View>

        <View style={mid1}>
          
          <Image
            source={require('../../assets/plan/meal/highprotein.png')}
            style={img}
          />

          <Text style={midtxt1}>High Protien</Text>
          <Text style={midtxt2}>28 Days . Daily</Text>
        </View>
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
    width: 395,
    backgroundColor: '#3e5287',
    opacity: 0.9,
    flexDirection: 'row'
  },
  hdng: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
    marginLeft: 20
  },
  hdng1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5,
    marginTop: 10
  },
  hdng3: {
    fontSize: 18,
    color: 'lightgrey'
  },
  mid: {
    marginTop: 10,
    height: 525
  },
  mid1: {
    height: 250,
    marginBottom: 15
  },
  mid2: {
    backgroundColor: 'purple',
    height: 225
  },
  midtxt: {
    fontSize: 20,
    color: 'black',
    backgroundColor: 'grey',
    padding: 10,
    marginTop: 10
  },
  img: {
    height: 160,
    width: 393
  },
  midtxt1: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    backgroundColor: 'grey',
    paddingLeft: 10
  },
  midtxt2: {
    fontSize: 14,
    color: 'black',
    backgroundColor: 'grey',
    paddingLeft: 10,
    paddingBottom: 5
  }
});
export default Plans;
