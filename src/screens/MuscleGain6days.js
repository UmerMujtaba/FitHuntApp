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
  TouchableOpacity,
  ScrollView
} from 'react-native';

const MuscleGain6days = ({navigation}) => {
  const {
    container,
    mid,
    nav,
    img,
    heading,
    heading2,
    heading3,
    info,
    btn,
    hdng2,
    insideInfo,
    txt3,
    txt4,
    imgg,
    txt5,
    txt6,
    txt7,
    muscle,
    btn4,
    btnTxt2,
    info2,
    btn5,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={nav}>
      <Icon
            name={'angle-left'}
            size={30}
            color={'black'}
            marginTop={10}
            marginLeft={15}
            marginRight={15}
            onPress={() => navigation.goBack()}
          />
      </View>

      <Text style={heading}>Push, Pull / Bro Split</Text>
      <Text style={heading2}>Muscle Gain</Text>
      <Text style={heading3}>
        Total body workout plan to get in shape and build a foundation in weight
        training. This plan is 12 weeks long, made up of 2 blocks, 6 weeks each.
      </Text>
      <View style={btn}>
        <TouchableOpacity style={styles.btn3}>
          <Text style={styles.btnText}>Block 1</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={mid}>
          <Text style={hdng2}>Day 1 - Bicep, Shurgs, Abs</Text>

          <View style={info}>
            <View style={insideInfo}>
              <Text style={txt3}>Exercise</Text>
              <Text style={txt4}>5</Text>
            </View>
            <View style={insideInfo}>
              <Text style={txt3}>Sets</Text>
              <Text style={txt4}>19</Text>
            </View>
            <View style={insideInfo}>
              <Text style={txt3}>Duration</Text>
              <Text style={txt4}>50-70 min</Text>
            </View>
          </View>
          <View style={info2}>
            <View style={info}>
              <View style={imgg}>
                <Image source={require('../../assets/block/6days/mg/diclinesitups.png')}/>
              </View>
              <View style={txt5}>
                <Text style={txt6}>Decline Situps</Text>
                <Text style={txt7}>3 sets * 10-12 reps</Text>
              </View>
              <View style={muscle}>
                <TouchableOpacity style={btn4}>
                  <Text style={btnTxt2}>ABS</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={info}>
              <View style={imgg}>
              <Image source={require('../../assets/block/6days/mg/PlateLoadedMachineOverheadPress.png')}/>
              </View>
              <View style={txt5}>
                <Text style={txt6}>Overhead Press</Text>
                <Text style={txt7}>3 sets * 10-12 reps</Text>
              </View>
              <View style={muscle}>
                <TouchableOpacity style={btn5}>
                  <Text style={btnTxt2}>SHOULDER</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={info}>
              <View style={imgg}>
              <Image source={require('../../assets/block/6days/mg/SeatedDumbellOverheadTricepExtensions.png')}/>
              </View>
              <View style={txt5}>
                <Text style={txt6}>Dumbbell Overhead Extension</Text>
                <Text style={txt7}>3 sets * 10-12 reps</Text>
              </View>
              <View style={muscle}>
                <TouchableOpacity style={btn5}>
                  <Text style={btnTxt2}>TRICEP</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={info}>
              <View style={imgg}>
              <Image source={require('../../assets/block/6days/mg/standingstrightbarbarbellcrul.png')}/>
              </View>
              <View style={txt5}>
                <Text style={txt6}>Straight Barbell Curl</Text>
                <Text style={txt7}>3 sets * 10-12 reps</Text>
              </View>
              <View style={muscle}>
                <TouchableOpacity style={btn4}>
                  <Text style={btnTxt2}>BICEP</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={info}>
              <View style={imgg}>
              <Image source={require('../../assets/block/6days/mg/StandingDumbelWirstCurl.png')}/>
              </View>
              <View style={txt5}>
                <Text style={txt6}>Dumbbell Wrist Curl</Text>
                <Text style={txt7}>3 sets * 10-12 reps</Text>
              </View>
              <View style={muscle}>
                <TouchableOpacity style={btn5}>
                  <Text style={btnTxt2}>FOREARM</Text>
                </TouchableOpacity>
              </View>
            </View>


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
    height: 50,
    width: 395,
    backgroundColor: '#3e5287',
    opacity: 0.9
  },
  img: {
    marginTop: 15,
    height: 25
  },
  heading: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 5
  },
  heading2: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 5
  },
  heading3: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'normal',
    marginTop: 10,
    marginLeft: 5
  },
  btn: {
    flexDirection: 'row'
  },
  btn3: {
    backgroundColor: '#176B87',
    borderRadius: 10,
    padding: 5,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginRight: 10,
    marginTop: 10,
    marginLeft: 5
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'normal'
  },
  mid: {
    margin: 10,
    backgroundColor: '#1F1717',
    height: 515
  },
  hdng2: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10
  },
  info: {
    flexDirection: 'row',
    marginTop: 5
  },
  info2: {
    flexDirection: 'column',
    
  },
  insideInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 55,
    marginLeft: 20
  },
  txt3: {
    fontSize: 20,
    color: 'white'
  },
  txt4: {
    fontSize: 18,
    color: 'yellow',
    textAlign: 'center'
  },
  imgg: {
    backgroundColor: 'lightgreen',
    height: 80,
    width: 80
  },
  txt5: {
    backgroundColor: '#61677A',
    height: 80,
    width: 210
  },
  muscle: {
    backgroundColor: 'orange',
    height: 80,
    width: 82
  },
  txt6: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    
  },
  txt7: {
    marginLeft: 5,
    fontSize: 14,
    marginTop: 5,
    color: 'orange',
    
  },
  btn4: {
    backgroundColor: 'skyblue',
    borderRadius: 90,
    padding: 4,
    alignItems: 'center',
    marginRight: 15,
    marginLeft: 20,
    marginTop: 25
  },

  btnTxt2: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold'
  },
  btn5: {
    backgroundColor: 'skyblue',
    borderRadius: 90,
    padding: 4,
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 5,
    marginTop: 25
  },

});
export default MuscleGain6days;
