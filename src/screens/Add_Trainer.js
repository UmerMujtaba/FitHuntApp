/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Error from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';

const Add_Trainer = ({ navigation }) => {
  const { container, hdng, nav, hdng2, trainer1, txt1, txt2, main } = styles;
  const [TrainerUserName, setTrainerUserName] = useState('');
  const [TrainerUserNameVerify, setTrainerUserNameVerify] = useState(false);
  const [TrainerMobile, setTrainerMobile] = useState('');
  const [TrainerMobileVerify, setTrainerMobileVerify] = useState(false);
  const [TrainerEmail, setTrainerEmail] = useState('');
  const [TrainerEmailVerify, setTrainerEmailVerify] = useState(false);
  const [TrainerAge, setTrainerAge] = useState('');
  const [TrainerAgeVerify, setTrainerAgeVerify] = useState('');
  const [Trainerfee, setTrainerFee] = useState('');
  const [TrainerFeeVerify, setTrainerFeeVerify] = useState(false);
  function handleSubmit() {
    const TrainerData = {
      name: TrainerUserName,
      age: TrainerAge,
      email: TrainerEmail,
      mobile: TrainerUserName,
      fee: Trainerfee,
   
    };
    if (TrainerUserNameVerify && TrainerAgeVerify && TrainerEmailVerify && TrainerMobileVerify && TrainerFeeVerify  ) {
      axios
        .post('http://192.168.2.5:5001/trainerregister', TrainerData)
        .then(res => {
          console.log(res.data);

          if (res.data.status == 'ok') {

            Alert.alert('Registered Successfully!!');
            AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
            navigation.navigate('FG');
            
          } else {
            Alert.alert(JSON.stringify(res.data));
            navigation.navigate('FG');
          }
        })
        .catch(e => console.log(e));
       
    }
    else {
      Alert.alert('Fill mandatory details');
    }
  }
  async function getTrainerData() {
    const trainerdata = await AsyncStorage.getItem('isLoggedIn');

    console.log(trainerdata, 'at TrainerOwner.jsx');
  }
  useEffect(() => {
    getTrainerData();
    console.log('Hi from trainer');
  }, []);

  function handleName(e) {
    const nameVar = e.nativeEvent.text;
    setTrainerUserName(nameVar);
    setTrainerUserNameVerify(false);

    if (nameVar.length > 1) {
      setTrainerUserNameVerify(true);
    }
  }
  function handleTrainerEmail(e) {
    const EmailVar = e.nativeEvent.text;
    setTrainerEmail(EmailVar);
    setTrainerEmailVerify(false);
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(EmailVar)) {
      setTrainerEmail(EmailVar);
      setTrainerEmailVerify(true);
    }
  }

  function handleTrainerMobile(e) {
    const MobileVar = e.nativeEvent.text;
    setTrainerMobile(MobileVar);
    setTrainerMobileVerify(false);
    if (/^\d{11}$/.test(MobileVar)) {
      setTrainerMobile(MobileVar);
      setTrainerMobileVerify(true);
    }
  }

  function handleFee(e) {
    const feeVar = e.nativeEvent.text;
    setTrainerFee(feeVar);
    setTrainerFeeVerify(false);
    if (/^\d{4}$/.test(feeVar)) {
      setTrainerFee(feeVar);
      setTrainerFeeVerify(true);
    }
  }

  function handleTrainerAge(e) {
    const ageVar = e.nativeEvent.text;
    setTrainerAge(ageVar);
    setTrainerAgeVerify(false);
    if (/^\d{2}$/.test(ageVar)) {
      setTrainerAge(ageVar);
      setTrainerAgeVerify(true);
    }
  }

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <SafeAreaView style={container}>
        <View style={nav}>
          <Icon
            name={'angle-left'}
            size={30}
            color={'white'}
            marginLeft={15}
            onPress={() => navigation.goBack()}
          />
          <Text style={hdng}>Add Trainer</Text>
        </View>
        <Text style={hdng2}>Personal Trainer Information</Text>

        <View style={trainer1}>
          <Text style={txt1}>Trainer 1</Text>
          <View style={main}>
            <Text style={txt2}>Name:</Text>
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
                value={TrainerUserName}
                onChange={e => handleName(e)}
              />
              {TrainerUserName.length < 1 ? null : TrainerUserNameVerify ? (
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                  marginLeft={90}
                  marginTop={8}
                />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </TouchableOpacity>
            {TrainerUserName.length < 1 ? null : TrainerUserNameVerify ? null : (
              <Text style={styles.errorText}>
                {/* Name should be more than 1 character. */}
              </Text>
            )}
          </View>

          <View style={main}>
            <Text style={txt2}>Age:</Text>
            <TouchableOpacity style={styles.btn1}>
              <Octicons name="number" color="black" style={styles.smallIcon} />
              <TextInput
                style={styles.btnText1}
                placeholder=" Enter Age"
                placeholderTextColor="gray"
                value={TrainerAge}
                onChange={e => handleTrainerAge(e)}
                keyboardType='numeric'
              />
              {TrainerAge.length < 1 ? null : TrainerAgeVerify ? (
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                  marginLeft={'auto'}
                  marginRight={10}
                  marginTop={8}
                />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <View style={main}>
            <Text style={txt2}>Email:</Text>
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
                value={TrainerEmail}
                onChange={e => handleTrainerEmail(e)}
              />
              {TrainerEmail.length < 1 ? null : TrainerEmailVerify ? (
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                  marginLeft={'auto'}
                  marginRight={10}
                  marginTop={8}
                />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <View style={main}>
            <Text style={[txt2]}>Contact:</Text>
            <TouchableOpacity style={styles.btn1}>
              <FontAwesome
                name="mobile"
                color="black"
                style={styles.smallIcon}
              />
              <TextInput
                style={styles.btnText1}
                placeholder=" Enter Contact"
                placeholderTextColor="gray"
                value={TrainerMobile}
                onChange={e => handleTrainerMobile(e)}
                keyboardType='numeric'
                maxLength={11}
              />
              {TrainerMobile.length < 1 ? null : TrainerMobileVerify ? (
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                  marginLeft={'auto'}
                  marginRight={10}
                  marginTop={8}
                  
                />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <View style={main}>
            <Text style={txt2}>Fees:</Text>
            <TouchableOpacity style={styles.btn1}>
              <FontAwesome
                name="money"
                color="black"
                style={styles.smallIcon}
              />
              <TextInput
                style={styles.btnText1}
                placeholder=" Enter Fees"
                placeholderTextColor="gray"
                value={Trainerfee}
                onChange={e => handleFee(e)}
                maxLength={4}
                keyboardType='numeric'
              
              />
              {Trainerfee.length < 1 ? null : TrainerFeeVerify ? (
                <Feather
                  name="check-circle"
                  color="green"
                  size={20}
                  marginLeft={'auto'}
                  marginRight={10}
                  marginTop={8}
                  maxLength={4}
                />
              ) : (
                <Error name="error" color="red" size={20} />
              )}
            </TouchableOpacity>
          </View>

          {/* <Add_Component/> */}
        </View>
        {/* <View style={trainer1}>
          <Text style={txt1}>Trainer 2</Text>
          <Add_Component/>
        </View>
        <View style={trainer1}>
          <Text style={txt1}>Trainer 3</Text>
          <Add_Component/>
        </View> */}
        <TouchableOpacity style={styles.btn4} onPress={() => handleSubmit()}>
          <Text style={styles.btnText}> Submit </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};
export default Add_Trainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 900,
    backgroundColor: '#1F1717'
  },
  nav: {
    height: 50,
    width: '100%', // Use full width of the screen
    backgroundColor: '#3e5287',
    opacity: 0.9,
    flexDirection: 'row',
    justifyContent: 'center', // Horizontally center the children
    alignItems: 'center', // Vertically center the children
    position: 'fixed',
    top: 0,
    zIndex: 1,
  },
  hdng: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 100, // Pushes text to the left
    marginRight: 'auto' // Pushes text to the right,
  },
  hdng2: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 30,
    fontWeight: 'bold'
  },
  trainer1: {
    height: 320,
    width: 'auto',
    // borderWidth: 2,
    // borderColor: 'white',
    marginBottom: 10
  },
  txt1: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    margin: 15
  },
  btn4: {
    backgroundColor: '#176B87',
    borderRadius: 40,
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 0.5,
    marginVertical: 10,
    width: '40%'
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
   
  },
  main: {
    flexDirection: 'row', // Make components inline horizontally
    justifyContent: 'center', // Horizontally center the children
    alignItems: 'center', // Vertically center the children
    width: '90%',
    height: 45,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  txt2: {
    fontSize: 15,
    color: 'white',
    width: '19%', // Adjust width as needed
    height: 65,
    marginTop: 45
  },
  btn1: {
    backgroundColor: 'white',
    borderRadius: 12,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 0.5,
    width: '78%', // Adjust width as needed
    height: 36,
    flexDirection: 'row'
  },
  btnText1: {
    height: 35,
    fontSize: 12,
    color: 'black',
    width: '80%'
  },
  smallIcon: {
    fontSize: 12,
    margin: 10
  }
});
