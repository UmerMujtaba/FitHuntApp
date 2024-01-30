/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import Icon from 'react-native-vector-icons/FontAwesome'
import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput
} from 'react-native';

const AboutMe = ({navigation}) => {
  const {
    container,
    mid,
   
    nav,
    img,
    imgtxt,
    imgtxt2,
    maintxt,
    maintxt2,
    maintxt21,
    
    choose,
   
    btn1,
    btnText1
  } = styles;
  const [username, setusername] = useState('');
  
  return (
        <SafeAreaView style={container}>
          <View style={nav}>
          <Icon
            name={'angle-left'}
            size={30}
            color={'white'}
            marginTop={10}
            marginLeft={15}
            onPress={() => navigation.goBack()}
          />
          <Text style={imgtxt}>Profile</Text>
          <Text style={[imgtxt,imgtxt2]}>Save</Text>
        </View>

       <View style={img}>
        <Icon name={'user'} size={90} color={'black'}/>
       </View>
       
       <Text style={maintxt}>Change Profile Picture</Text>
       <View style={choose}>
       <View style={mid}>
        <View>
          <Text style={maintxt2}>
            Name
          </Text>
        </View>

        <TouchableOpacity style={btn1}>
              <TextInput
                style={btnText1}
                placeholder=" Enter your name" //there should be dropdown
                secureTextEntry={true}
                value={username}
                onChangeText={text => setusername(text)}
              />
              {/* <Icon name={'user'} size={30} color='white' /> */}
            </TouchableOpacity>
       </View>

       <View style={mid}>
        <View>
          <Text style={maintxt2}>
            Email
          </Text>
        </View>

        <TouchableOpacity style={btn1}>
              <TextInput
                style={btnText1}
                placeholder=" Enter your email" //there should be dropdown
                secureTextEntry={true}
                value={username}
                onChangeText={text => setusername(text)}
              />
              {/* <Icon name={'user'} size={30} color='white' /> */}
            </TouchableOpacity>
       </View>

       <View style={mid}>
        <View>
          <Text style={maintxt2}>
            Age
          </Text>
        </View>

        <TouchableOpacity style={btn1}>
              <TextInput
                style={btnText1}
                placeholder=" Enter your age" //there should be dropdown
                secureTextEntry={true}
                value={username}
                onChangeText={text => setusername(text)}
              />
              {/* <Icon name={'user'} size={30} color='white' /> */}
            </TouchableOpacity>
       </View>

       <View style={mid}>
        <View>
          <Text style={[maintxt2,maintxt21]}>
          Mob No
          </Text>
        </View>

        <TouchableOpacity style={btn1}>
              <TextInput
                style={btnText1}
                placeholder=" Enter your mobile no" //there should be dropdown
                secureTextEntry={true}
                value={username}
                onChangeText={text => setusername(text)}
              />
              {/* <Icon name={'user'} size={30} color='white' /> */}
            </TouchableOpacity>
       </View>
       </View>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1717'
    },
    nav: {
      flexDirection: 'row',
      backgroundColor: '#3e5287',
      height:45
    },
    imgtxt: {
      fontSize: 18,
      color: 'white',
  
      alignSelf: 'center',
      marginLeft: 10,
      marginTop: 5
    },
    imgtxt2:{
      marginLeft: 235
    },
    img: {
      backgroundColor: 'lightgrey',
      borderRadius: 60, // Half of the width (90 / 2)
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 5,
      marginRight: 80,
      marginTop: 10,
      marginLeft: 140,
      width: 120, // Set the width
      height: 120,
      padding: 5
    },
    maintxt: {
      fontSize: 18,
      color: '#39A7FF',
      alignSelf:'center',
      fontWeight: 'normal',
      marginLeft: 5,
      marginTop: 5
    },
    maintxt2: {
      fontSize: 18,
      color: 'white',
      width: 55,
      marginTop: 35,
      marginLeft: 5
    },
    maintxt21:{
      width: 60,
    },
    mid: {
      flexDirection: 'row'
    },
    choose:{
      flexDirection: 'column'
    },
    btn1: {
      backgroundColor: '#D0D4CA',
      borderRadius: 15,
      fontSize: 25,
      fontWeight: 'bold',
      marginRight: 90,
      marginLeft: 15,
      marginTop: 25,
      borderColor: 'black',
      borderWidth: 2,
      width: 300
    },
    btnText1: {
      height: 40,
      borderColor: 'gray',
      paddingLeft: 10
    },
})

export default AboutMe