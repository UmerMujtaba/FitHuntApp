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
  ScrollView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Beginner = ({ navigation }) => {
  const {
    container,
    nav,
    txt1,
    mid3,
    hdng3,
    mid4,
    mid5,
    mid5txt,
    mid5txt2,
    mid5txt3
  } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={nav}>
        <Icon
          name={'angle-left'}
          size={30}
          color={'white'}
          marginTop={12}
          marginLeft={15}
          marginRight={'auto'}
          onPress={() => navigation.goBack()}
        />
        <Text style={txt1}>Beginner</Text>
      </View>
      <ScrollView>
        <View style={mid3}>
          <Text style={hdng3}>Chest</Text>
        </View>

        <View style={mid4}>
          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/chest/chestflymachine.png')}
                style={mid5txt}
              />
            </View>

            <View style={mid5txt2}>
              <Text style={mid5txt3}>Chest Fly Machine</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/chest/Smithmachineinclinebenchpressclosegrip.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>
                Smith Machine Incline Bench Press Close Grip
              </Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/chest/Smithmachineinclinebeachpress.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Smith Machine Incline Bench Press</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/chest/Plateloadedinclinechestpress.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Plate Incline Chest Press</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/chest/SelectorchestpressMachin.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Selector Chest Press Machine</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/chest/Smithmachinebenchpressclosegrip.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>
                Smith Machine Incline Bench Press Close Grip
              </Text>
            </View>
          </View>
        </View>

        <View style={mid3}>
          <Text style={hdng3}>Back</Text>
        </View>

        <View style={mid4}>
          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/back/Floorbackextension.png')}
                style={mid5txt}
              />
            </View>

            <View style={mid5txt2}>
              <Text style={mid5txt3}>Floor Back Extension</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/back/Machinesupportedpullupoverheadgrip.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>
                Machine Supported Pullup Overhead Grip
              </Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/back/Seatedcablerownaturalgrip.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Seated Cable Row Neutral Grip</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/back/Superman1.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Superman</Text>
            </View>
          </View>
        </View>

        <View style={mid3}>
          <Text style={hdng3}>Shoulders</Text>
        </View>
        <View style={mid4}>
          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/shldr/Plateloadedmachineoverheadpress.png')}
                style={mid5txt}
              />
            </View>

            <View style={mid5txt2}>
              <Text style={mid5txt3}>Plate Loaded Machine Overhead Press</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/shldr/Plateloadedmachineoverheadpresswsinglearm.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Machine Overhead Press Single Arm</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/shldr/Selectoroverheadpressmachinewide.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Overhead Press Machine Wide</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/shldr/Smithmachineoverheadpressseated.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Smith Machine Overhead Press </Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/shldr/Smithmachineoverheadpressseatedbehindneck.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>
                Smith Machine Overhead Press Behind Neck
              </Text>
            </View>
          </View>
        </View>

        <View style={mid3}>
          <Text style={hdng3}>Biceps</Text>
        </View>
        <View style={mid4}>
          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/bic/EZbarpreachercurl.png')}
                style={mid5txt}
              />
            </View>

            <View style={mid5txt2}>
              <Text style={mid5txt3}>EZ Bar Preacher Curl</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/bic/Inclinedumbbellcurl.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Incline Dumbbell Curl</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/bic/Preachercurlmachine.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Preacher Curl Machine</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/bic/Standingdumbellcurl.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Standing Dumbbell Curl</Text>
            </View>
          </View>
        </View>

        <View style={mid3}>
          <Text style={hdng3}>Triceps</Text>
        </View>
        <View style={mid4}>
          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/tri/Benchdips.png')}
                style={mid5txt}
              />
            </View>

            <View style={mid5txt2}>
              <Text style={mid5txt3}>Bench Dips</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/tri/Seateddumbbeloverheadtricepsextension.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>
                Seated Overhead  Extension
              </Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/tri/Standingcabletricepspushdownstrightrope.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>
                Standing Cable Triceps Pushdown Straight 
              </Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/tri/Standingcabletricpespushdownsinglearm.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>
                Standing Cable Tricpes Pushdown Single Arm
              </Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/beginner/tri/Standingcabletricpspushdownrope.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Standing Cable Tricps Pushdown Rope</Text>
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
  txt1: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    alignSelf:'center',
    fontWeight: 'bold',
    marginRight: 'auto',
  },
  nav: {
    height: 50,
    width: 395,
    backgroundColor: '#3e5287',
    opacity: 0.9,
    flexDirection: 'row'
  },
  mid3: {
    flexDirection: 'row'
  },
  hdng3: {
    fontSize: 23,
    color: 'white',
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10
  },
  mid4: {
    flexDirection: 'column'
  },
  mid5: {
    flexDirection: 'row',
    margin: 15,
     borderWidth: 2,
    borderColor: 'white'
  },
  mid5txt: {
    // backgroundColor: 'red',
    width: 130,
    height: 120
    // borderWidth: 2,
    // borderColor: 'white'
  },
  mid5txt2: {
    backgroundColor: 'lightgrey',
    width: '60.5%',
    height: 120
    // borderWidth: 2,
    // borderColor: 'white',
  },
  mid5txt3: {
    fontSize: 18,
    marginLeft: 5,
    color: 'black',
    fontWeight: 'bold'
  }
});

export default Beginner;
