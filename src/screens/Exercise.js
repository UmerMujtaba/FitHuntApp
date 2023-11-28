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
  imgs,
  ScrollView
} from 'react-native';

const Exercise = () => {
  const { container, nav, txt1, exercise1, txt2 } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={nav}>
        <Icon
          name={'arrow-left'}
          size={30}
          color={'black'}
          margin={15}
          marginTop={28}
        />
        <Text style={txt1}>Exercises</Text>

        <Icon
          name={'bars'}
          size={30}
          color={'black'}
          marginTop={30}
          marginLeft={175}
        />
      </View>
      <ScrollView>
        {/* ABSS SECTION */}
        <View style={exercise1}>   
          <Image
            source={require('../../assets/abss2.png')}
            marginLeft={15}></Image>
          <Text style={txt2}>ABS</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={140}
            marginTop={18}
          />
        </View> 
        {/* Biceps SECTION */}
        <View style={exercise1}>
          <Image
            source={require('../../assets/abss2.png')}
            marginLeft={15}></Image>
          <Text style={txt2}>Biceps</Text>
          <Icon
            style={styles.icn}
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={115}
            marginTop={18}
          />
        </View>
        {/* Back SECTION */}
        <View style={exercise1}>
          <Image
            source={require('../../assets/back.png')}
            marginLeft={15}></Image>
          <Text style={txt2}>Back</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={135}
            marginTop={18}
          />
        </View>
        {/* Chest SECTION */}
        <View style={exercise1}>
          <Image
            source={require('../../assets/abss2.png')}
            marginLeft={15}></Image>
          <Text style={txt2}>Chest</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={125}
            marginTop={18}
          />
        </View>
        {/* Forearm SECTION */}
        <View style={exercise1}>
          <Image
            source={require('../../assets/abss2.png')}
            marginLeft={15}></Image>
          <Text style={txt2}>Forearm</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={95}
            marginTop={18}
          />
        </View>
      
        {/* Triceps SECTION */}
        <View style={exercise1}>
          <Image
            source={require('../../assets/abss2.png')}
            marginLeft={15}></Image>
          <Text style={txt2}>Triceps</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={105}
            marginTop={18}
          />
        </View>
        {/* Shoulders SECTION */}
        <View style={exercise1}>
          <Image
            source={require('../../assets/abss2.png')}
            marginLeft={15}></Image>
          <Text style={txt2}>Shoulders</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={75}
            marginTop={18}
          />
        </View>
         {/* Legs SECTION */}
         <View style={exercise1}>
          <Image
            source={require('../../assets/abss2.png')}
            marginLeft={15}></Image>
          <Text style={txt2}>Legs</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            marginLeft={135}
            marginTop={18}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  nav: {
    flexDirection: 'row'
  },
  txt1: {
    marginTop: 25,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  exercise1: {
    backgroundColor: 'grey',
    height: 92,
    width: 394,
    marginTop: 15,
    flexDirection: 'row'
  },
  txt2: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 35,
    marginTop: 25
  }
});
export default Exercise;
