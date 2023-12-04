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

const OverviewLowCarb = ({navigation}) => {
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
          source={require('../../assets/plan/over/salmon.png')}
          style={img}></ImageBackground>

          <Text style={maintxt}>Low Carb</Text>
          <Text style={maintxt2}>
          Ease into low-carb eating in just 4 weeks. This Plan uses our brand new Meal Planner tool to slowly scale back on carbs in a healthy and sustainable way. Build new habits one day at a time while following a meal plan customized for your calorie needs. By Day 28, you'll be able to confidently plan and cook low-carb meals and choose foods that fuel your body best.
          </Text>
          <Text style={maintxt3}>
          Consult your physician before starting any plan. Neither FitHunt nor its affiliates will be liable for any injury sustained as a result of your participation.
          </Text>
          <View style={mid}> 
            <Text style={midtxt}>Duration                                                            28 days</Text>
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
            Your calorie goal is between 1200 and 2200 calories.
            </Text>
            </View>

            <View style={chs2}>
            <Text style={dot}>
                .
            </Text>
            <Text style={chstxt}>
            Your goal is weight loss or weight maintenance.
            </Text>
            </View>

            <View style={chs2}>
            <Text style={dot}>
                .
            </Text>
            <Text style={chstxt}>
            You're new to a low-carb eating pattern.
            </Text>
            </View>

            <View style={chs2}>
            <Text style={dot}>
                .
            </Text>
            <Text style={chstxt}>
            You've tried low carb before and had trouble feeling full or getting enough fiber.
            </Text>
            </View>
            <View style={chs2}>
            <Text style={dot}>
                .
            </Text>
            <Text style={chstxt}>
            You are not a vegetarian (recipes in this       Plan include meat and dairy)
            </Text>
            </View>
        </View>
        <Text style={midtxt1}>What you will do</Text>
        <View style={choose}>
            <View style={chs2}>
            <Text style={dot}>
                .
            </Text>
            <Text style={[chstxt]}>
            You will follow 28 days of low-carb eating     and learning.
            </Text>
            </View>
            <View style={chs2}>
            <Text style={dot}>
                .
            </Text>
            <Text style={[chstxt]}>
            You will gradually change what you eat.       Shop, plan, and cook from a variety of recipes each week.
            </Text>
            </View>
            <View style={chs2}>
            <Text style={dot}>
                .
            </Text>
            <Text style={[chstxt]}>
            Plan meals that fit your goals. Our brand         new Meal Planner tool makes it easy.
            </Text>
            </View>
            <View style={chs2}>
            <Text style={dot}>
                .
            </Text>
            <Text style={[chstxt]}>
            Get recipes hand-picked by our Registered Dietitian to align with your calorie and carb goals.
            </Text>
            </View>
            <View style={chs2}>
            <Text style={dot}>
                .
            </Text>
            <Text style={[chstxt]}>
            Learn all about low carb. Master the basics, and get expert tips on how to eat enough       fiber and choose nutrient-dense, filling carb sources.
            </Text>
            </View>
            <View style={chs2}>
            <Text style={dot}>
                .
            </Text>
            <Text style={[chstxt]}>
            Evaluate and adapt. Learn how to track your progress in the app and listen to your body's cues—adjust what, when, and how much you eat.
            </Text>
            </View>
        </View>

        <Text style={midtxt1}>Guidelines</Text>

        <View style={choose}>
        <View style={chs2}>
            <Text style={dot}>
                .
            </Text>
            <Text style={[chstxt,chstxt2]}>
            Start this Plan so that Days 2, 7, 14, and 21       fall on a day you can go grocery shopping.    You should be able to meal prep for about an hour on Days 7, 14, and 21 as well.
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

export default OverviewLowCarb;
