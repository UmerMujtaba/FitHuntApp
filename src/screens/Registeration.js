/* eslint-disable react-native/no-inline-styles */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Error from 'react-native-vector-icons/MaterialIcons';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
  Button,
  Alert,
  onPressLearnMore,
  TextInput,
  ScrollView
} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons'
import { useNavigation } from '@react-navigation/native';
function RegisterPage({ props }) {
  const [username, setusername] = useState('');
  const [nameVerify, setUserNameVerify] = useState(false);
  const [mobile, setmobile] = useState('');
  const [mobileVerify, setMobileVerify] = useState(false);
  const [email, setemail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender]= useState('');
  const [verifyGender, setGenderVerify]= useState('');
  const [age, setage]= useState('');
  const [ageVerify, setAgeVerify]= useState('');

  const navigation = useNavigation();
  function handelSubmit() {
    const userData = {
      name: username,
      email: email,
      mobile: mobile,
      gender: gender,
      age:age,
      password: password,
    };
    if (nameVerify && emailVerify && passwordVerify && mobileVerify && verifyGender && ageVerify) {
      axios
        .post('http://192.168.2.5:5001/register', userData)
        .then(res => {
          console.log(res.data);
          if (res.data.status === 'ok') {
            Alert.alert('Registered Successfull!!');
            navigation.navigate("Log")
           
          } else {
            Alert.alert(JSON.stringify(res.data));
            navigation.navigate("Log")
          }
        })
        .catch(e => console.log(e));
       
    } else {
      Alert.alert('Fill mandatory details');
    }
  }

  function handleName(e) {
    const nameVar = e.nativeEvent.text;
    setusername(nameVar);
    setUserNameVerify(false);

    if (nameVar.length > 1) {
      setUserNameVerify(true);
    }
  }
  function handleGender(e) {
    const gendVar = e.nativeEvent.text;
    setGender(gendVar);
    setGenderVerify(false);

    if (gendVar.length > 1) {
      setGenderVerify(true);
    }
  }
  function handleEmail(e) {
    const emailVar = e.nativeEvent.text;
    setemail(emailVar);
    setEmailVerify(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(emailVar)) {
      setemail(emailVar);
      setEmailVerify(true);
    }
  }

  function handleMobile(e) {
    const mobileVar = e.nativeEvent.text;
    setmobile(mobileVar);
    setMobileVerify(false);
    if (/^\d{11}$/.test(mobileVar)) {
      setmobile(mobileVar);
      setMobileVerify(true);
    }
  }

  function handleAge(e) {
    const ageVar = e.nativeEvent.text;
    setage(ageVar);
    setAgeVerify(false);
    if (/^\d{2}$/.test(ageVar)) {
      setage(ageVar);
      setAgeVerify(true);
    }
  }
  function handlePassword(e) {
    const passwordVar = e.nativeEvent.text;
    setPassword(passwordVar);
    setPasswordVerify(false);
    if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passwordVar)) {
      setPassword(passwordVar);
      setPasswordVerify(true);
    }
  }

  return (
    <ScrollView>
    <SafeAreaView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPresistTaps={true}>
      
        <ImageBackground
          source={require('../../assets/forth-screen.jpeg')}
          style={styles.imageLayout}>
          <View style={styles.overlay}>
            <Image
              source={require('../../assets/new-logo.jpg')}
              style={styles.logo}></Image>

            <Text style={styles.txt1}>Create an account</Text>

            <TouchableOpacity style={styles.btn1}>
              <FontAwesome
                name="user-o"
                color="black"
                style={styles.smallIcon}
              />
              <TextInput
                style={styles.btnText1}
                placeholder=" Enter Username"
                placeholderTextColor="gray"
                value={username}
                onChange={e => handleName(e)}
              />
              {username.length < 1 ? null : nameVerify ? (
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                  marginLeft={'auto'}
                  marginRight={10}
                  marginTop={15}
                />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </TouchableOpacity>
            {username.length < 1 ? null : nameVerify ? null : (
              <Text
                style={{
                  marginLeft: 30,
                  color: 'red'
                }}>
                Name sholud be more then 1 characters.
              </Text>
            )}

            <TouchableOpacity style={styles.btn1}>
              <FontAwesome
                name="mobile"
                color="black"
                style={styles.smallIcon}
              />
              <TextInput
                style={styles.btnText1}
                placeholder=" Enter Mobile"
                placeholderTextColor="gray"
                value={mobile}
                onChange={e => handleMobile(e)}
                maxLength={13}
              />
              {mobile.length < 1 ? null : mobileVerify ? (
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                  marginLeft={'auto'}
                  marginRight={10}
                  marginTop={15}
                />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </TouchableOpacity>
            {mobile.length < 1 ? null : mobileVerify ? null : (
              <Text
                style={{
                  marginLeft: 30,
                  color: 'red'
                }}>
                Phone number with 6-9 and remaing 9 digit with 0-9
              </Text>
            )}
            {/* <SelectGender /> */}

           

            <TouchableOpacity style={styles.btn1}>
              <FontAwesome
                name="user"
                color="black"
                style={styles.smallIcon}
              />
              <TextInput
                style={styles.btnText1}
                placeholder=" Enter Gender"
                placeholderTextColor="gray"
                value={gender}
                onChange={e => handleGender(e)}
              />
             {gender.length < 1 ? null : verifyGender ? (
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                  marginLeft={'auto'}
                  marginRight={10}
                  marginTop={15}
                />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </TouchableOpacity>
            {gender.length < 1 ? null : verifyGender ? null : (
              <Text
                style={{
                  marginLeft: 30,
                  color: 'red'
                }}>
               Gender sholud be more then 1 characters.
              </Text>
            )}

                
              <TouchableOpacity style={styles.btn1}>
              <Octicons
                name="number"
                color="black"
                style={styles.smallIcon}
              />
              <TextInput
                style={styles.btnText1}
                placeholder=" Enter Age"
                placeholderTextColor="gray"
                value={age}
                onChange={e => handleAge(e)}
              />
             {age.length < 1 ? null : ageVerify ? (
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                  marginLeft={'auto'}
                  marginRight={10}
                  marginTop={15}
                />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </TouchableOpacity>
            {age.length < 1 ? null : ageVerify ? null : (
              <Text
                style={{
                  marginLeft: 30,
                  color: 'red'
                }}>
                Age sholud be more then 1 characters.
              </Text>
            )}





            <TouchableOpacity style={styles.btn1}>
              <MaterialCommunityIcons
                name="email"
                color="black"
                style={styles.smallIcon}
              />
              <TextInput
                style={styles.btnText1}
                placeholder=" Enter Email"
                placeholderTextColor="gray"
                value={email}
                onChange={e => handleEmail(e)}
              />
              {email.length < 1 ? null : emailVerify ? (
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                  marginLeft={'auto'}
                  marginRight={10}
                  marginTop={15}
                />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </TouchableOpacity>
            {email.length < 1 ? null : emailVerify ? null : (
              <Text
                style={{
                  marginLeft: 35,
                  color: 'red'
                }}>
                Enter Proper Email Address
              </Text>
            )}
            <TouchableOpacity style={styles.btn3}>
              <FontAwesome name="lock" color="black" style={styles.smallIcon} />
              <TextInput
                style={styles.btnText1}
                placeholder=" Enter Password"
                placeholderTextColor="gray"
                secureTextEntry={showPassword}
                value={password}
                onChange={e => handlePassword(e)}
              />

              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {password.length < 1 ? null : !showPassword ? (
                  <Feather
                    name="eye-off"
                    style={{ marginLeft: 95, marginTop: 15 }}
                    color={passwordVerify ? 'green' : 'red'}
                    size={23}
                  />
                ) : (
                  <Feather
                    name="eye"
                    style={{ marginLeft: 70, marginTop: 15 }}
                    color={passwordVerify ? 'green' : 'red'}
                    size={23}
                  />
                )}
              </TouchableOpacity>
            </TouchableOpacity>
            {password.length < 1 ? null : passwordVerify ? null : (
              <Text
                style={{
                  marginLeft: 25,
                  color: 'red',
                  fontSize: 14
                }}>
                Uppercase, Lowercase, Number and 6 or more characters.
              </Text>
            )}
            

              <TouchableOpacity
              style={styles.btn4}
              onPress={() => handelSubmit()}>
              <Text style={styles.btnText}> Register </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageLayout: {
    height: 900,
    width: 450,
    backgroundColor: '#000000c0'
  },
  imageLayout1: {
    marginTop: 0,
    height: 195,
    width: 'auto',
    alignSelf: 'center',
    marginRight: 60
  },
  logo: {
    width: 250,
    marginLeft: 70,
    height: 210
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'hsla(0, 100%, 90%, 0.3);' // Adjust the last value (0.5) for opacity
  },
  txt1: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
    marginTop: 30,
    marginLeft: 32,
    marginBottom: 10
  },
  btn1: {
    backgroundColor: 'white',
    borderRadius: 15,
    fontWeight: 'bold',
    marginRight: 70,
    marginLeft: 30,
    marginBottom: 30,
    borderColor: 'black',
    borderWidth: 2,
    width: 300,
    height: 55,
    flexDirection: 'row'
  },
  btn3: {
    backgroundColor: 'white',
    borderRadius: 15,
    fontWeight: 'bold',
    marginRight: 90,
    marginLeft: 30,
    marginBottom: 25,
    borderColor: 'black',
    borderWidth: 2,
    width: 300,
    height: 55,
    flexDirection: 'row'
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
    width: 160,
    marginBottom: 55,
    marginTop: 10,
    marginRight: 'auto',
    marginLeft: 105
  },
  btnText1: {
    height: 37,
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 16,

    color: 'black'
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  smallIcon: {
    fontSize: 28,
    margin: 10
  }
});
export default RegisterPage;
