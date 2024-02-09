/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
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
  ImTrainerAgeBackground,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';

const Add_Component = () => {
  const {  txt2, main,container } = styles;
  const [TrainerUserName, setTrainerUserName] = useState('');
  const [nameVerify, setTrainerUserNameVerify] = useState(false);
  const [TrainerMobile, setTrainerMobile] = useState('');
  const [TrainerMobileVerify, setTrainerMobileVerify] = useState(false);
  const [TrainerEmail, setTrainerEmail] = useState('');
  const [TrainerEmailVerify, setTrainerEmailVerify] = useState(false);
  const [TrainerAge, setTrainerAge]= useState('');
  const [TrainerAgeVerify, setTrainerAgeVerify]= useState('');
  const [Trainerfee, setTrainerFee] = useState('');
  const [TrainerFeeVerify, setTrainerFeeVerify] = useState(false);

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
    <SafeAreaView style={container}>
      <View style={main}>
        <Text style={txt2}>Name:</Text>
        <TouchableOpacity style={styles.btn1}>
          <FontAwesome name="user-o" color="black" style={styles.smallIcon} />
          <TextInput
            style={styles.btnText1}
            placeholder=" Enter Username"
            placeholderTextColor="gray"
            value={TrainerUserName}
            onChange={e => handleName(e)}
          />
          {TrainerUserName.length < 1 ? null : nameVerify ? (
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
            {TrainerUserName.length < 1 ? null : nameVerify ? null : (
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
          <FontAwesome name="mobile" color="black" style={styles.smallIcon} />
          <TextInput
            style={styles.btnText1}
            placeholder=" Enter Contact"
            placeholderTextColor="gray"
            value={TrainerMobile}
            onChange={e => handleTrainerMobile(e)}
          />
          {TrainerMobile.length < 1 ? null : TrainerMobileVerify ? (
            <Feather
              name="check-circle"
              color="green"
              size={20}
              marginLeft={'auto'}
              marginRight={10}
              marginTop={8}
              maxLength={11}
            />
          ) : (
            <Error name="error" color="red" size={20} />
          )}
        </TouchableOpacity>
      </View>

      <View style={main}>
        <Text style={txt2}>Fees:</Text>
        <TouchableOpacity style={styles.btn1}>
          <FontAwesome name="money" color="black" style={styles.smallIcon} />
          <TextInput
            style={styles.btnText1}
            placeholder=" Enter Fees"
            placeholderTextColor="gray"
            value={Trainerfee}
            onChange={e => handleFee(e)}
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
    </SafeAreaView>
  );
};
export default Add_Component;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 25
  }
  ,
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
    borderRadius: 15,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 2,
    width: '78%', // Adjust width as needed
    height: 40,
    flexDirection: 'row'
  },
  btnText1: {
    height: 35,
    fontSize: 12,
    color: 'black'
  },
  smallIcon: {
    fontSize: 12,
    margin: 10
  },
//   errorText: {
//     marginLeft: 30,
//     color: 'red',
//     marginTop: 12
//   },

});