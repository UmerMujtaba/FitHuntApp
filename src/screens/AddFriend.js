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

const AddFirend = ({navigation}) => {
  const { container, mid, nav, opt2, hdng, hdng1, opt3, icn,hdng3 } = styles;
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
        <Text style={hdng}>Add Friends</Text>
      </View>

      <View style={opt2}>
        <View style={opt3}>
          <Icon name={'address-book'} size={30} color={'white'} style={icn} />
          <View>
            <Text style={hdng1}>Contacts</Text>
            <Text style={hdng3}>Find Friends from my phone contacts</Text>
          </View>
        </View>

        <View style={opt3}>
          <Icon name={'at'} size={30} color={'white'} style={icn} />
          <View>
            <Text style={hdng1}>Email or FitHunt Username</Text>
            <Text style={hdng3}>Invite friends using their email address </Text>
          </View>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    marginTop: 5,
    marginLeft: 110
  },
  img: {
    marginTop: 15,
    height: 25
  },
  opt2: {
    flexDirection: 'column',
    marginTop: 10,
   
  },
  opt3: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    marginBottom: 10,
    height: 75
  },
  icn: {
    margin: 20
  },
  hdng1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5,
    marginTop: 10
  },
  hdng3: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'white',
    marginLeft: 5,
   
  }
});
export default AddFirend;
