/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import axios from 'axios';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// async function postImage({image,description}) {
//   const formData = new FormData();
//   formData.append("image", image)
//   formData.append("description", description)

//   const result = await axios.post('/images',formData, {headers: {'Content-Type': 'multipart/form-data'}})
//   return result.data
// }
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtomTab from '../components/Bottom_Tab'
const AboutMe = ({ navigation }) => {
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
    btn2,
    choose,
    obese,
    btn4,
    btnText,
    btn1,
    btnText1
  } = styles;
  const [username, setusername] = useState('');
  const [useremail, setuseremail] = useState('');
  const [userage, setuserage] = useState('');
  const [usermobile, setusermobile] = useState('');
  const [images, setImages] = useState([]);

  // Import axios in your React Native component

  // Define a function to update user data
  async function updateUser(name, age, mobile) {
    const token = await AsyncStorage.getItem('token');
    try {
      const response = await axios.post('http://192.168.2.5:5001/update-user', {
        token: token,
        name: name,
        age: age,
        mobile: mobile
      });

      console.log(response.data); // Log the response
      return response.data; // Return the response data
    } catch (error) {
      console.error(error.response.data); // Log any errors
      throw error; // Throw the error for handling elsewhere
    }
  }

  function handleSave() {
    updateUser(username, userage, usermobile)
      .then(data => {
        console.log(data); // Log the response data if the update is successful

        Alert.alert('Profile updated successfully');
      })
      .catch(error => {
        // Handle errors
        console.error(error); // Log any errors that occur during the update process

        Alert.alert('Error updating profile. Please try again.');
      });
  }

  function signOut() {
    console.log('Hi Sign Out');
    AsyncStorage.setItem('isLoggedIn', '');
    AsyncStorage.removeItem('token');
    navigation.navigate('Log');
  }

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
        <Text style={[imgtxt, imgtxt2]} onPress={handleSave}>
          Save
        </Text>
      </View>

      <View style={img}>
        <Icon name={'user'} size={90} color={'black'} />
      </View>

      <Text style={maintxt}>Change Profile Picture</Text>
      <View style={choose}>
        <View style={mid}>
          <View>
            <Text style={maintxt2}>Name</Text>
          </View>

          <TouchableOpacity style={btn1}>
            <TextInput
              style={btnText1}
              placeholder=" Enter your name" //there should be dropdown
              placeholderTextColor="gray"
              value={username}
              onChangeText={text => setusername(text)}
            />
            {/* <Icon name={'user'} size={30} color='white' /> */}
          </TouchableOpacity>
        </View>


        <View style={mid}>
          <View>
            <Text style={maintxt2}>Age</Text>
          </View>

          <TouchableOpacity style={btn1}>
            <TextInput
              style={btnText1}
              placeholder=" Enter your age" //there should be dropdown
              placeholderTextColor="gray"
              value={userage}
              onChangeText={text => setuserage(text)}
            />
            {/* <Icon name={'user'} size={30} color='white' /> */}
          </TouchableOpacity>
        </View>

        <View style={mid}>
          <View>
            <Text style={[maintxt2, maintxt21]}>Mobile No</Text>
          </View>

          <TouchableOpacity style={[btn1, btn2]}>
            <TextInput
              style={btnText1}
              placeholder=" Enter your mobile no" //there should be dropdown
              placeholderTextColor="gray"
              value={usermobile}
              onChangeText={text => setusermobile(text)}
            />
            {/* <Icon name={'user'} size={30} color='white' /> */}
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <View style={obese}>
          <TouchableOpacity style={btn4} onPress={() => signOut()}>
            <MaterialCommunityIcons
              name="logout"
              color="black"
              style={styles.smallIcon}
            />
            <Text style={btnText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
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
    flexDirection: 'row',
    backgroundColor: '#3e5287',
    height: 45
  },
  imgtxt: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    marginLeft: 10,
    marginTop: 5
  },
  imgtxt2: {
    marginLeft: 'auto',
    marginRight: 10
  },
  img: {
    backgroundColor: 'lightgrey',
    borderRadius: 60, // Half of the width (90 / 2)
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 5,

    marginTop: 10,
   marginLeft: 'auto',
  marginRight: 'auto',
    width: 120, // Set the width
    height: 120,
    padding: 5
  },
  maintxt: {
    fontSize: 18,
    color: '#39A7FF',
    alignSelf: 'center',
    fontWeight: 'normal',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10
  },
  maintxt2: {
    fontSize: 16,
    color: 'white',
    width: 55,
    marginTop: 35,
    marginLeft: 5
  },
  maintxt21: {
    width: 60
  },
  mid: {
    flexDirection: 'row'
  },
  choose: {
    flexDirection: 'column'
  },
  btn1: {
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 25,
    borderColor: 'black',
    borderWidth: 2,
    width: '78%',
    height: 45
  },
  // btn2: {
  //   height: 45
  // },
  btnText1: {
    height: 40,
    borderColor: 'gray',
    paddingLeft: 10,
    color: 'black'
  },
  btn4: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderColor: 'black',
    marginVertical: 10,
    width: '100%',
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  marginRight: 'auto',
  },
  btnText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  },

  smallIcon: {
    fontSize: 35
  }
});

export default AboutMe;
