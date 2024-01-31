/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'react-native-image-picker';
import Error from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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

function RegisterGym({ props }) {
  const [gymname, setgymname] = useState('');
  const [gymnameVerify, setgymnameVerify] = useState(false);
  const [gymmobile, setgymmobile] = useState('');
  const [gymmobileVerify, setgymMobileVerify] = useState(false);
  const [gymfee, setgymfee] = useState('');
  const [gymfeeVerify, setgymfeeVerify] = useState(false);
  const [gymlocation, setgymlocation] = useState('');
  const [gymlocationVerify, setgymLocationVerify] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigation = useNavigation();

  const handleImagePicker = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Set the selected image
        setSelectedImage({ uri: response.uri });
      }
    });
  };

  function handleSubmit() {
    const GymData = {
      name: gymname,
      fee: gymfee,
      mobile: gymmobile,
      location: gymlocation
    };
    if (gymnameVerify && gymmobileVerify && gymfeeVerify && gymlocationVerify) {
      axios
        .post('http://192.168.2.4:5002/gymregister', GymData)
        .then(res => {
          console.log(res.data);

          if (res.data.status == 'ok') {
            Alert.alert('Registered Successfully!!');
            navigation.navigate('Log');
          } else {
            Alert.alert(JSON.stringify(res.data));
          }
        })
        .catch(e => console.log(e));
    } else {
      Alert.alert('Fill mandatory details');
    }
  }

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <ImageBackground
          source={require('../../assets/forth-screen.jpeg')}
          style={styles.imageLayout}>
          <View style={styles.overlay}>
            <View style={styles.centeredContainer}>
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
                  placeholder=" Enter Mobile"
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
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.inputContainer}
                onPress={handleImagePicker}>
                <FontAwesome
                  name="camera"
                  size={25}
                  color="black"
                  style={styles.icon}
                ></FontAwesome>
                
                <TextInput
                  style={styles.input}
                  placeholder=" Click to add picture"
                  placeholderTextColor="gray"
                  value={gymlocation}
                  onChange={e => handleLocation(e)}
                />

                {selectedImage ? (
                  <Image
                    source={{ uri: selectedImage.uri }}
                    style={styles.image}
                  />
                ) : (
                  <FontAwesome
                    name="plus"
                    size={25}
                    color="black"
                    style={styles.icon}
                    marginRight={55}
                  />
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn4}
                onPress={() => handleSubmit()}>
                <Text style={styles.btnText}> Register your gym </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollViewContainer: {
    flexGrow: 1
  },
  imageLayout: {
    height: '100%',
    width: '100%',
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
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'hsla(0, 100%, 90%, 0.3);',
    justifyContent: 'center'
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
    borderRadius: 15,
    fontWeight: 'bold',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 30,
    borderColor: 'black',
    borderWidth: 2,
    width: '80%',
    flexDirection: 'row'
  },
  input: {
    height: 37,
    width: 200,
    paddingLeft: 2,
    marginTop: 10,
    fontSize: 16,
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
