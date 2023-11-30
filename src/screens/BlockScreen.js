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

const BlockScreen = () => {
  const { container,
    main1, 
    nav,
    img, 
    txt,
    txt1,
    txt2, 
    heading, 
    heading2, 
    txt3 } =
    styles;
  return (
    <SafeAreaView style={container}>
      <ScrollView>
        <View style={nav}>
          {/* <Icon name={'arrow-left'} size={30} color={'black'}/> */}
          <Image source={require('../../assets/back-50.png')} style={img}/>
        </View>

        </ScrollView>
        </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1717'
    },
    heading: {
      fontSize: 22,
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 20
    },
    nav: {
      height: 70,
      width: 395,
      backgroundColor: '#3e5287',
      opacity: 0.9
    },
    img: {
        marginTop: 15,
        height: 35,
    }
})
export default BlockScreen