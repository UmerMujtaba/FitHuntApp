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

const Plans = ({ navigation }) => {
  const {
    container,
    mid,
    nav,
    hdng,
    hdng1,
    btn,
    midtxt2,
    hdng3,
    midtxt,
    midtxt3,
    midtxt4,
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
        <Text style={hdng}>Meal Plan</Text>
      </View>
      <View>
        <Text style={hdng1}>Find a Plan</Text>

        <Text style={[hdng1, hdng3]}>
          Meal plan, Start a plan, follow along, and reach your goals
        </Text>
      </View>
    
      <View style={mid}>
        <ImageBackground source={require('../../assets/breakfast.png')} style={img}>
        
        <View style={overlay}><Text style={[midtxt,midtxt4]}>Manage your eating habits</Text>
        <Text style={[midtxt,midtxt2]}>Start the meal plan that will help you with your diet and also make your life healthy</Text>
        <View style={btn}>
        <Text style={[midtxt,midtxt3]}  onPress={() => navigation.navigate('Goal')}>Get Started</Text>
        </View>
        </View>
        </ImageBackground>
        
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'hsla(0, 100%, 90%, 0.3);', // Adjust the last value (0.5) for opacity
 
  },
  hdng1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5,
    marginTop: 10
  },
  hdng3: {
    fontSize: 18,
    color: 'lightgrey'
  },
  mid: {
    marginTop: 10,
    height: 525,
  },

  midtxt: {
    marginTop: 65,
    fontSize: 25,
    color: 'black',
    // backgroundColor: '#B6BBC4',
    textAlign: 'center',
    
    height: 45,
    fontWeight: 'bold',
    textAlignVertical: 'center',
   
   
  },
  midtxt2: {
    marginTop: 25,
    fontSize: 18,
    opacity: 0.6,
    width: '80%',
    height: 65,
    marginLeft: 'auto',
    marginRight: 60
  },
  midtxt3:{
    marginTop: 75,
     backgroundColor: '#7D7C7C',
     marginLeft: 'auto',
    marginRight: 60,
    width: '94%',
  },
  midtxt4:{ 
    backgroundColor: '#7D7C7C',
    marginLeft: 'auto',
    marginRight: 60,
    width: '94%',
  }, 
  img:{
    height: 620,
    width: 393,
    position: 'absolute',
  }
});
export default Plans;
