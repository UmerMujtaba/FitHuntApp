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
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const DaysLoss = ({ navigation }) => {
  const {
    container,
    nav,
    hdng,
    mid2,
    mid,
    namee,
    day,
    icon,
    midtxt3,
    img,
    overlay
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
          onPress={() => navigation.goBack()}
        />
        <Text style={hdng}>Day Wise Plan</Text>
      </View>

      <View style={mid}>
        <View style={mid2}>
            <Text style={day}>
                Day 1
            </Text>
            <Text style={namee}>
                /  Monday
            </Text>
            <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={icon}
            onPress={() => navigation.navigate('WL')}
          />
        </View>

        <View style={mid2}>
            <Text style={day}>
                Day 2
            </Text>
            <Text style={namee}>
                /  Tuesday
            </Text>
            <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={icon}
            onPress={() => navigation.navigate('Pay')}
          />
        </View>

        <View style={mid2}>
            <Text style={day}>
                Day 3
            </Text>
            <Text style={namee}>
                /  Wednesday
            </Text>
            <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={icon}
            onPress={() => navigation.navigate('Pay')}
          />
        </View>

        <View style={mid2}>
            <Text style={day}>
                Day 4
            </Text>
            <Text style={namee}>
                /  Thursday
            </Text>
            <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={icon}
            onPress={() => navigation.navigate('Pay')}
          />
        </View>

        <View style={mid2}>
            <Text style={day}>
                Day 5
            </Text>
            <Text style={namee}>
                /  Friday
            </Text>
            <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={icon}
            onPress={() => navigation.navigate('Pay')}
          />
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
  mid: {
    // backgroundColor: 'green',
    height: 650,
    flexDirection: 'column',
  },
  mid2:{
    flexDirection :'row',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    margin: 25,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#7D7C7C',
  },
  namee: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
    // backgroundColor: 'red',
    textAlignVertical: 'center'
  },
  day: {
    // backgroundColor: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    marginRight: 5
  },
  icon: {
    marginLeft: 'auto',
    marginRight: 10
  },
 
});
export default DaysLoss;
