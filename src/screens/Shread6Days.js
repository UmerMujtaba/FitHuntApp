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

const Shread6Days = ({ navigation }) => {
  const {
    container,
    mid,
    nav,
    img,
    txt,
    txt1,
    txt2,
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
    info2
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
      <Text style={heading2}>Shreading</Text>
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
          <Text style={hdng2}>Day 1 - Chest, Tricep, Shoulder</Text>

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
                <Image
                  source={require('../../assets/block/6days/shrd/dumbellbreanchpress.png')}
                />
              </View>
              <View style={txt5}>
                <Text style={txt6}>Dumbbell Bench Press</Text>
                <Text style={txt7}>3 sets * 10-12 reps</Text>
              </View>
              <View style={muscle}>
                <TouchableOpacity style={btn4}>
                  <Text style={btnTxt2}>CHEST</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={info}>
              <View style={imgg}>
                <Image
                  source={require('../../assets/block/6days/shrd/DumbellSkullCuser,BehindHead.png')}
                />
              </View>
              <View style={txt5}>
                <Text style={txt6}>Dumbbell Skull Crusher, Behind Head</Text>
                <Text style={txt7}>3 sets * 10-12 reps</Text>
              </View>
              <View style={muscle}>
                <TouchableOpacity style={btn4}>
                  <Text style={btnTxt2}>TRICEP</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={info}>
              <View style={imgg}>
                <Image
                  source={require('../../assets/block/6days/shrd/inclinebarbellbenpress.png')}
                />
              </View>
              <View style={txt5}>
                <Text style={txt6}>Incline Dumbbell Bench Press</Text>
                <Text style={txt7}>3 sets * 10-12 reps</Text>
              </View>
              <View style={muscle}>
                <TouchableOpacity style={btn4}>
                  <Text style={btnTxt2}>CHEST</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={info}>
              <View style={imgg}>
                <Image
                  source={require('../../assets/block/6days/shrd/inclinebarbellbenpress.png')}
                />
              </View>
              <View style={txt5}>
                <Text style={txt6}>Incline Barbell Bench Press</Text>
                <Text style={txt7}>3 sets * 10-12 reps</Text>
              </View>
              <View style={muscle}>
                <TouchableOpacity style={btn4}>
                  <Text style={btnTxt2}>CHEST</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={info}>
              <View style={imgg}>
                <Image
                  source={require('../../assets/block/6days/shrd/StandingBarbellOverheadPress.png')}
                />
              </View>
              <View style={txt5}>
                <Text style={txt6}>Overhead Barbell Press</Text>
                <Text style={txt7}>3 sets * 10-12 reps</Text>
              </View>
              <View style={muscle}>
                <TouchableOpacity style={btn4}>
                  <Text style={btnTxt2}>TRAPS</Text>
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
    marginLeft: 10
  },
  heading2: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 10
  },
  heading3: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'normal',
    marginTop: 10,
    marginLeft: 10
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
    marginLeft: 10
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'normal'
  },
  mid: {
    backgroundColor: '#1F1717',
    height: 515,
    width: '100%'
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
    marginTop: 5,
    width: '100%'
  },
  info2: {
    flexDirection: 'column',
    width: '100%'
  },
  insideInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 35,
    marginLeft: 25
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
    width: '20%',
    marginRight: 85
  },
  txt6: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5
  },
  txt7: {
    marginLeft: 5,
    fontSize: 14,
    marginTop: 5,
    color: 'orange'
  },
  btn4: {
    backgroundColor: 'skyblue',
    borderRadius: 90,
    padding: 4,
    alignItems: 'center',
    width: '80%',
    marginTop: 25,
    alignContent: 'center',
    alignSelf: 'center'
  },

  btnTxt2: {
    fontSize: 10,
    color: 'black',
    fontWeight: 'bold'
  },
  btn5: {
    backgroundColor: 'skyblue',
    borderRadius: 90,
    padding: 4,
    alignItems: 'center',
    width: '85%',
    marginTop: 25,
    alignSelf: 'center'
  }
});
export default Shread6Days;
