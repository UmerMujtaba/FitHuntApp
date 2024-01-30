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
  ScrollView,
  ImageBackground
} from 'react-native';

const OverviewNutrition = ({navigation}) => {
  const {
    container,
    mid,
    mid1,
    nav,
    img,
    imgtxt,
    maintxt,
    maintxt2,
    maintxt3,
    chstxt2,
    midtxt1,
    chs2,
    midtxt,
    choose,
    dot,
    chstxt
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ScrollView>
        <View style={nav}>
          <Icon
            name={'angle-left'}
            size={45}
            color={'white'}
            marginTop={15}
            marginLeft={15}
            onPress={() => navigation.goBack()}
          />
          <Text style={imgtxt}>Plan Details</Text>
        </View>
        <ImageBackground
          source={require('../../assets/plan/over/lowcarb.png')}
          style={img}></ImageBackground>

          <Text style={maintxt}>Jumpstart Your Health</Text>
          <Text style={maintxt2}>
          Start 2023 off right! For the next two weeks we're learning from the best: you. Our members have been there/done that-and they're sharing their secrets for success. Plus, FitHunt's nutrition & fitness experts (and very special guest Ayesha Curry!) weigh in on why these tips work.
          </Text>
          <Text style={maintxt3}>
          Consult your physician before starting any plan. Neither FitHunt nor its affiliates will be liable for any injury sustained as a result of your participation.
          </Text>
          <View style={mid}> 
            <Text style={midtxt}>Duration                                                            14 days</Text>
            <Text style={midtxt}>Difficulty                                                           Begineer </Text>
            <Text style={midtxt}>Commmitment                                                   Daily</Text>
          </View>
          <Text style={midtxt1}>Choose the plan if</Text>
        <View style={choose}>
         <View style={chs2}>
            <Text style={dot}>
                .
            </Text>
            <Text style={chstxt}>
            You want to start the new year off right by improving your fitness and diet, but aren't        sure how
            </Text>
            </View>

            <View style={chs2}>
            <Text style={dot}>
                .
            </Text>
            <Text style={chstxt}>
            You're looking for inspiration and easy to implement tips to achieve your goals and     build healthy habits
            </Text>
            </View>

            <View style={chs2}>
            <Text style={dot}>
                .
            </Text>
            <Text style={chstxt}>
            You're looking to make small daily changes      to see big improvements over time
            </Text>
            </View>
        </View>
        <Text style={midtxt1}>What you will do</Text>
        <View style={choose}>
            <View style={chs2}>
            <Text style={dot}>
                .
            </Text>
            <Text style={[chstxt,chstxt2]}>
            Receive daily tips from our members,   registered dietitians, and fitness experts
            </Text>
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
    flexDirection: 'row'
  },
  img: {
    height: 220,
    width: 393,
    marginTop: 5
  },
  imgtxt: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 115,
    marginTop: 15
  },
  maintxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    margin: 10
  },
  maintxt2: {
    fontSize: 18,
    color: 'white',
   marginLeft: 10,
   marginTop: 5,
   marginRight: 10
  },
  maintxt3 :{
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
    opacity: 0.5,
    marginRight: 10
  },
  mid: {
    flexDirection: 'column'
  },
  midtxt: {
    fontSize: 16,
    color: 'white',
    marginLeft: 10,
    marginTop: 5
  },
  midtxt1: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
    marginTop: 20,
    backgroundColor: 'lightgrey'
  },
  choose: {
    flexDirection: 'column'
  },
  dot: {
    fontSize:30,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
   
  },
  chstxt: {
    fontSize: 18,
    color: 'white',
    marginLeft: 5,
   marginTop: 15,
   marginRight: 5,
  },
  chs2:{
    flexDirection: 'row',
    marginTop: 10
  },
  chstxt2: {
    marginBottom: 30
  }
});

export default OverviewNutrition;
