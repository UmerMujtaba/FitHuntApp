/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtomTab from '../components/Bottom_Tab'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const Social = ({navigation}) => {
  const {
    container,
    mid,
    nav,
    opt2,
    hdng,
    hdng1,
    hdng3,
    txtNav2,
    nav2,
    btn2,
    btnText
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
        <Text style={hdng}>Social</Text>
        <Icon
          name={'plus'}
          size={20}
          color={'white'}
          marginTop={18}
          marginRight={'auto'}
          marginLeft={'auto'}
          paddingLeft={50}
        />
      </View>

      <View style={opt2}>
        <View >
          <Text style={hdng1} onPress={() => navigation.navigate('UCC')}> All</Text>
          {/* onPress={() => navigation.navigate('NUT')} */}
        </View>
        <View >
          <Text style={hdng3} onPress={() => navigation.navigate('UCC')}>Requests</Text>
          {/* onPress={() => navigation.navigate('NUT')} */}
        </View>
      </View>

      <View style={nav2}>
        <Text style={txtNav2}>
          Diet with firend and lose up to 3x more.{' '}
        </Text>
      </View>

      <View style={mid}>
      <TouchableOpacity style={btn2} > 
        <Text style={btnText}onPress={() => navigation.navigate('UCC')}>Add Friends</Text>
        {/* onPress={() => navigation.navigate('AF')} */}
      </TouchableOpacity>
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
    width: 395,
    backgroundColor: '#3e5287',
    opacity: 0.9,
    flexDirection: 'row'
  },
  hdng: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginTop: 5,
    marginLeft: 140
  },
  img: {
    marginTop: 15,
    height: 25
  },
  opt2: {
    alignSelf: 'center',
    flexDirection: 'row'
  },
  hdng1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 15
  },
  hdng3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 190
  },
  nav2: {
    backgroundColor: 'lightgrey',
    height: 35,
    marginTop: 15
  },
  txtNav2: {
    fontSize: 14,
    color: 'black',
    marginTop: 7,
    marginLeft: 10
  },
  mid: {
    marginTop: 130
  },
  btn2: {
    backgroundColor: 'lightgrey',
    borderRadius: 0,
    padding: 5,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    borderColor: 'grey',
    borderWidth: 0.5
  },
  btnText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default Social;
