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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Exercise = ({navigation}) => {
 
  const { container, nav, txt1, exercise1, txt2,image,icon } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={nav}>
      <Icon
            name={'angle-left'}
            size={30}
            color={'white'}
            marginTop={27}
            marginLeft={15}
            marginRight={15}
            onPress={() => navigation.goBack()}
          />
        <Text style={txt1}>Exercises</Text>

        <Icon
          name={'bars'}
          size={25}
          color={'white'}
          marginTop={30}
          marginRight={'auto'}
          marginLeft={'auto'}
          paddingLeft={150}
          onPress={() => navigation.navigate('MN')}
        />
      </View>
      <ScrollView>
        {/* ABSS SECTION */}
        <View style={exercise1}>
          <Image
            source={require('../../assets/abs.png')}
            style={image}
          />
          <Text style={ txt2}>ABS </Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={icon}
            onPress={() => navigation.navigate('AbsScreen')}
          />
       
        </View>
        {/* Biceps SECTION */}
        <View style={exercise1}>
          <Image
            source={require('../../assets/bicep.png')}
            style={image}></Image>
          <Text style={txt2}>Biceps</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={ icon}
            onPress={() => navigation.navigate('Bicp')}
          />
        </View>
        {/* Back SECTION */}
        <View style={exercise1}>
          <Image
            source={require('../../assets/back.jpeg')}
            style={image}></Image>
          <Text style={txt2}>Back</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={icon}
            onPress={() => navigation.navigate('BM')}
          />
        </View>
        {/* Chest SECTION */}
        <View style={exercise1}>
          <Image
            source={require('../../assets/chest.png')}
            style={image}></Image>
          <Text style={txt2}>Chest</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={icon}
            onPress={() => navigation.navigate('Chst')}
          />
        </View>
        {/* Forearm SECTION */}
        <View style={exercise1}>
          <Image
            source={require('../../assets/forearm.png')}
            style={image}></Image>
          <Text style={txt2}>Forearm</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={icon}
            onPress={() => navigation.navigate('FM')}
          />
        </View>

        {/* Triceps SECTION */}
        <View style={exercise1}>
          <Image
            source={require('../../assets/triceps.png')}
            style={image}></Image>
          <Text style={txt2}>Triceps</Text>
          <Icon
           name={'angle-right'}
           size={50}
           color={'black'}
           style={[icon]}
           onPress={() => navigation.navigate('Tri')}
          />
        </View>
        {/* Shoulders SECTION */}
        <View style={exercise1}>
          <Image
            source={require('../../assets/shoulders.png')}
            style={image}></Image>
          <Text style={txt2}>Shoulders</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={icon}
            onPress={() => navigation.navigate('Shldr')}
          />
        </View>
        {/* Legs SECTION */}
        <View style={exercise1}>
          <Image
            source={require('../../assets/legs.png')}
            style={image}></Image>
          <Text style={txt2}>Legs</Text>
          <Icon
           name={'angle-right'}
           size={50}
           color={'black'}
           style={[icon]}
          />
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
  txt1: {
    marginTop: 25,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white'
  },
  exercise1: {
    backgroundColor: '#176B87',
    height: 92,
    width: 394,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center' // Center items vertically
  },
  image: {
    height: 395, // Adjust the height to fit within the view
    width: 90, // Adjust the width to fit within the view
    marginRight: 10,
   marginLeft: 0 // Ensure the image fits within the specified dimensions
  },
  txt2: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10
  },
  icon: {
    marginLeft: 'auto',
    marginRight: 50
  },
 
});
export default Exercise;
