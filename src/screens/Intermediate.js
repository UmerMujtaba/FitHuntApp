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

const Intermediate = ({ navigation }) => {
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
          marginRight={15}
          onPress={() => navigation.goBack()}
        />
        <Text style={txt1}>Intermediate</Text>
      </View>
      <ScrollView>
        <View style={mid3}>
          <Text style={hdng3}>Chest</Text>
        </View>

        <View style={mid4}>
          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/chest/barbellpress.png')}
                style={mid5txt}
              />
            </View>

            <View style={mid5txt2}>
              <Text style={mid5txt3}>Barbell Press</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/chest/inclinebarbellpress.png')}
                style={mid5txt}
              />
            </View>

            <View style={mid5txt2}>
              <Text style={mid5txt3}>Incline Barbell Press</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/chest/inclinedumbellpress.png')}
                style={mid5txt}
              />
            </View>

            <View style={mid5txt2}>
              <Text style={mid5txt3}>Incline Dumbbell Press</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/chest/declinefly.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Decline Fly</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/chest/declinepress.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Decline Press</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/chest/dumbellpress.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Dumbbell Press</Text>
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
                source={require('../../assets/inter/back/latpulldown.png')}
                style={mid5txt}
              />
            </View>

            <View style={mid5txt2}>
              <Text style={mid5txt3}>Lat Pull Down</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/back/widepullup.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Wide Pull Up</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/back/deadlift.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Deadlift</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/back/Behindthenecklatpulldown.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Behind Neck Lat Pulldown</Text>
            </View>
          </View>
          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/back/Neutralgriplatpulldown.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Neutral Grip Lat Pulldown</Text>
            </View>
          </View>
          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/back/Singlearmdumblerow.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Single Arm Dumbbell Row</Text>
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
                source={require('../../assets/inter/shldr/BarbellUprightRow.png')}
                style={mid5txt}
              />
            </View>

            <View style={mid5txt2}>
              <Text style={mid5txt3}>Barbell Upright Row</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/shldr/SeatedBarbellOverheadPress2.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Seated Barbell Overhead Press 2</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/shldr/SeatedDumbbellOverheadPress.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Seated Dumbbell Overhead Press</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/shldr/StandingBarbellOverheadPress.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Standing Barbell Overhead Press </Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/shldr/StandingDumbbellOverheadPress.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Standing Dumbbell Overhead Press</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/shldr/standingshrugs.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Standing Shrugs</Text>
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
                source={require('../../assets/inter/bic/EZNarrow.png')}
                style={mid5txt}
              />
            </View>

            <View style={mid5txt2}>
              <Text style={mid5txt3}>EZ Bar Narrow Grip</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/bic/EZWide.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>EZ Bar Wide Grip</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/bic/HammerCurl.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Hammer Curl</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/bic/StraightBarCurl.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Straight Bar Curl</Text>
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
                source={require('../../assets/inter/tri/DumbellSkullCrusher.png')}
                style={mid5txt}
              />
            </View>

            <View style={mid5txt2}>
              <Text style={mid5txt3}>Dumbbell Skull Crusher</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/tri/DumbellSkullCusher,BehindHead.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>Dumbbell Skull Cusher,Behind Head</Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/tri/StandingCableOverheadTricepExtensios,StraightBar.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>
                Standing Cable Overhead Tricep Extensios
              </Text>
            </View>
          </View>

          <View style={mid5}>
            <View style={mid5txt}>
              <Image
                source={require('../../assets/inter/tri/TandingDumbellOverheadtricepExtensions,sSingleRm.png')}
                style={mid5txt}
              />
            </View>
            <View style={mid5txt2}>
              <Text style={mid5txt3}>
                Dumbbell Overhead Tricep Extensions,Single Arm
              </Text>
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
    fontWeight: 'bold',
    marginTop: 12,
    marginLeft: 110
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
    margin: 15
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
    width: 235,
    height: 120
    // borderWidth: 2,
    // borderColor: 'white',
  },
  mid5txt3: {
    fontSize: 20,
    marginLeft: 5,
    color: 'black',
    fontWeight: 'bold'
  }
});

export default Intermediate;
