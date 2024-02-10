/* eslint-disable eqeqeq */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { launchImageLibrary } from 'react-native-image-picker'
import Error from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Iconicons from 'react-native-vector-icons/Ionicons';
// import { launchCamera,launchImageLibrary } from 'react-native-image-picker'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { endEvent } from 'react-native/Libraries/Performance/Systrace';

function RegisterGym({ props }) {
  const [gymname, setgymname] = useState('');
  const [gymnameVerify, setgymnameVerify] = useState(false);
  const [gymmobile, setgymmobile] = useState('');
  const [gymmobileVerify, setgymMobileVerify] = useState(false);
  const [gymfee, setgymfee] = useState('');
  const [gymfeeVerify, setgymfeeVerify] = useState(false);
  const [gymlocation, setgymlocation] = useState('');
  const [gymlocationVerify, setgymLocationVerify] = useState(false);
  const [image, setImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [gymmaleTiming, setMaleTiming] = useState('');
  const [gymfemaleTiming, setFemaleTiming] = useState('');
  const [gymmaleVerify, setgymmaleVerify] = useState(false);
  const [gymfemaleVerify, setgymfemaleVerify] = useState(false);
  const navigation = useNavigation();
  // const uploadImage = async () => {
  //   const formData = new FormData();
  //   formData.append('image', {
  //     uri: image.uri,
  //     type: image.type,
  //     name: image.fileName,
  //   });

  //   try {
  //     const response = await fetch('http://192.162.2.6:3000/upload', {
  //       method: 'POST',
  //       body: formData,
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });

  //     const data = await response.json();
  //     console.log('Image uploaded. File path:', data.filePath);
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   }
  // };
  // const onPickImageFromCamera = async () => {
  //   const result = await launchCamera();
  //   console.log(result);
  // };

  // const onInputChange = (e) ={

  //   console.log(e.target.files[0]);
  //   setImage(e.target.files[0]);
  // }
  const createFormData = (photo, body={}) => {
    const data = new FormData();
  
    data.append('photo', {
      name: photo.fileName,
      type: photo.type,
      uri: photo.uri,
    });
    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });
    return data;
  };
  
  function handleSubmit() {
    if (
      gymnameVerify &&
      gymmobileVerify &&
      gymfeeVerify &&
      gymmaleVerify &&
      gymfemaleVerify &&
      selectedImage
    ) {
      axios
        .post('http://192.168.2.5:5001/gymregister',createFormData(selectedImage,{
          name: gymname,
          fee: gymfee,
          mobile: gymmobile,
          location: gymlocation,
          maletime: gymmaleTiming,
          femaletime: gymfemaleTiming,
        } ))
        .then(res => {
          console.log(res.data);
          if (res.data.status == 'ok') {
            Alert.alert('Registered Successfully!!');
            AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
            navigation.navigate('FG');
          } else {
            Alert.alert(JSON.stringify(res.data));
          }
        })
        .catch(e => console.log(e));
    } else {
      Alert.alert('Fill mandatory details');
    }
  }
  async function getGymData() {
    const gymdata = await AsyncStorage.getItem('isLoggedIn');

    console.log(gymdata, 'at GymOwner.jsx');
  }
  useEffect(() => {
    getGymData();
    console.log('Hi2');
  }, []);

  function handleName(e) {
    const nameVar = e.nativeEvent.text;
    setgymname(nameVar);
    setgymnameVerify(false);

    if (nameVar.length > 1) {
      setgymnameVerify(true);
    }
  }

  function handleLocation(e) {
    const locVar = e.nativeEvent.text;
    setgymlocation(locVar);
    setgymLocationVerify(false);
    if (locVar.length > 1) {
      setgymLocationVerify(true);
    }
  }

  function handleMobile(e) {
    const mobileVar = e.nativeEvent.text;
    setgymmobile(mobileVar);
    setgymMobileVerify(false);
    if (/^\d{11}$/.test(mobileVar)) {
      setgymmobile(mobileVar);
      setgymMobileVerify(true);
    }
  }

  function handleFee(e) {
    const feeVar = e.nativeEvent.text;
    setgymfee(feeVar);
    setgymfeeVerify(false);
    if (/^\d{4}$/.test(feeVar)) {
      setgymfee(feeVar);
      setgymfeeVerify(true);
    }
  }

  function handlemaletime(e) {
    const malVar = e.nativeEvent.text;
    setMaleTiming(malVar);
    setgymmaleVerify(false);
    if (malVar.length > 1) {
      setgymmaleVerify(true);
    }
  }
  function handlefemaletime(e) {
    const femalVar = e.nativeEvent.text;
    setFemaleTiming(femalVar);
    setgymfemaleVerify(false);
    if (femalVar.length > 1) {
      setgymfemaleVerify(true);
    }
  }
  const handleImagePicker = () => {
    launchImageLibrary({ noData: true },response => {
      if (response.didCancel) {
        console.log('User cancelled image picker', response);
      } else if (response.error) {
        console.log('ImagePicker Error: ', response);
      } else {
        console.log("Image set:", response)
        setSelectedImage(response.assets[0]);
      }
    });
  };
  return (
    <ScrollView>
      <SafeAreaView keyboardShouldPresistTaps={'always'}>
        <ImageBackground
          source={require('../../assets/forth-screen.jpeg')}
          style={styles.imageLayout}>
          <View style={styles.overlay}>
            <Image
              source={require('../../assets/new-logo.jpg')}
              style={styles.logo}
            />

            <Text style={styles.txt1}>Enter Gym Details</Text>

            <TouchableOpacity style={styles.inputContainer}>
              <MaterialIcons
                name="sports-gymnastics"
                color="black"
                style={styles.smallIcon}
              />
              <TextInput
                style={styles.input}
                placeholder=" Enter Gym Name"
                placeholderTextColor="gray"
                value={gymname}
                onChange={e => handleName(e)}
              />
              {gymname.length < 1 ? null : gymnameVerify ? (
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                  marginLeft={110}
                  marginTop={15}
                />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </TouchableOpacity>
            {gymname.length < 1 ? null : gymnameVerify ? null : (
              <Text style={styles.errorText}>
                Name should be more than 1 character.
              </Text>
            )}

            <TouchableOpacity style={styles.inputContainer}>
              <FontAwesome
                name="money"
                color="black"
                style={styles.smallIcon}
              />
              <TextInput
                style={styles.input}
                placeholder=" Enter Fee"
                placeholderTextColor="gray"
                value={gymfee}
                onChange={e => handleFee(e)}
                maxLength={5}
              />
              {gymfee.length < 1 ? null : gymfeeVerify ? (
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                  marginLeft={140}
                  marginTop={15}
                />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </TouchableOpacity>
            {gymfee.length < 1 ? null : gymfeeVerify ? null : (
              <Text style={styles.errorText}>
                Fee value should be minimum 4
              </Text>
            )}

            <TouchableOpacity style={styles.inputContainer}>
              <FontAwesome
                name="mobile"
                color="black"
                style={styles.smallIcon}
              />
              <TextInput
                style={styles.input}
                placeholder="     Enter Mobile"
                placeholderTextColor="gray"
                value={gymmobile}
                onChange={e => handleMobile(e)}
                maxLength={11}
              />
              {gymmobile.length < 1 ? null : gymmobileVerify ? (
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                  marginLeft={140}
                  marginTop={15}
                />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </TouchableOpacity>
            {gymmobile.length < 1 ? null : gymmobileVerify ? null : (
              <Text style={styles.errorText}>
                Phone number with 6-9 and remaining 9 digits with 0-9
              </Text>
            )}
            {/* <Button onPress={onPickImageFromCamera}
        title="pick image from camera"/> */}

            <TouchableOpacity style={styles.inputContainer}>
              <FontAwesome
                name="location-arrow"
                color="black"
                style={styles.smallIcon}
              />
              <TextInput
                style={styles.input}
                placeholder=" Enter Main Area Location"
                placeholderTextColor="gray"
                value={gymlocation}
                onChange={e => handleLocation(e)}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.inputContainer}>
              <Iconicons name="time" color="black" style={styles.smallIcon} />
              <TextInput
                style={styles.input}
                placeholder="For Male 00:00 am to 00:00 pm"
                placeholderTextColor="gray"
                value={gymmaleTiming}
                onChange={e => handlemaletime(e)}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.inputContainer}>
              <Iconicons name="time" color="black" style={styles.smallIcon} />
              <TextInput
                style={styles.input}
                placeholder=" For Female (00:00 am to 00:00 pm)"
                placeholderTextColor="gray"
                value={gymfemaleTiming}
                onChange={e => handlefemaletime(e)}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.inputContainer}>
              <FontAwesome
                name="camera"
                size={25}
                color="black"
                style={styles.icon}
                onPress={e => handleImagePicker(e)}
                ></FontAwesome>


              {selectedImage && (
                <Image
                  source={{ uri: selectedImage.uri }}
                  style={styles.image}
                />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn4}
              onPress={() => handleSubmit()}>
              <Text style={styles.btnText}> Register your gym </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageLayout: {
    flex: 1,
    height: '100%', // Use '100%' to fill the screen height
    width: '100%', // Use '100%' to fill the screen width
    backgroundColor: '#000000c0'
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '80%',
    height: 210,
    resizeMode: 'contain'
  },
  overlay: {
    flex: 1,
    backgroundColor: 'hsla(0, 100%, 90%, 0.2);', // Adjust the last value (0.5) for opacity
    justifyContent: 'center', // Center vertically
    alignItems: 'center' // Center horizontally
  },
  txt1: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    marginTop: 30,
    marginBottom: 10
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    fontWeight: 'bold',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 30,
    borderColor: 'black',
    borderWidth: 2,
    width: '85%',
    flexDirection: 'row'
  },
  input: {
    height: 37,
    width: 200,
    paddingLeft: 2,
    marginTop: 10,
    fontSize: 12,
    color: 'black'
  },
  errorText: {
    marginLeft: 30,
    color: 'red'
  },
  btn4: {
    backgroundColor: '#176B87',
    borderRadius: 40,
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginVertical: 10
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  smallIcon: {
    fontSize: 28,
    margin: 10
  },
  icon: {
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
});

export default RegisterGym;
