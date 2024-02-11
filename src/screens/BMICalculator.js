/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Error from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import ButtonBMI from '../components/BMI_component';
import HeightConverter from '../components/Height_Cnvert_Component';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import ButtomTab from '../components/Bottom_Tab'
const BMI_Calculator = ({ navigation }) => {
  const {
    container,
    trainer1,
    main,
    nav,
    hdng,
    txt2,
    result,
    resulttxt,
    resdesc,
    obese,
    convert,
    hdng3
  } = styles;
  const [UserAge, setUserAge] = useState('');
  const [UserAgeVerify, setUserAgeVerify] = useState('');

  const [UserHeight, setUserHeight] = useState('');
  const [UserHeightVerify, setUserHeightVerify] = useState('');

  const [UserWeight, setUserWeight] = useState('');
  const [UserWeightVerify, setUserWeightVerify] = useState('');

  const [BMI, setBMI] = useState(null);
  const [Description, setDescription] = useState('');

  function handleUserAge(e) {
    const ageVar = e.nativeEvent.text;
    setUserAge(ageVar);
    setUserAgeVerify(false);
    if (/^\d{2}$/.test(ageVar)) {
      setUserAge(ageVar);
      setUserAgeVerify(true);
    }
  }

  function handleUserHeight(e) {
    const heightVar = e.nativeEvent.text;
    setUserHeight(heightVar);
    setUserHeightVerify(false);
    if (/^\d{2}$/.test(heightVar)) {
      setUserHeight(heightVar);
      setUserHeightVerify(true);
    } else if (/^\d{3}$/.test(heightVar)) {
      setUserHeight(heightVar);
      setUserHeightVerify(true);
    }
  }

  function handleUserWeight(e) {
    const WghtVar = e.nativeEvent.text;
    setUserWeight(WghtVar);
    setUserWeightVerify(false);
    if (/^\d{2}$/.test(WghtVar)) {
      setUserWeight(WghtVar);
      setUserWeightVerify(true);
    } else if (/^\d{3}$/.test(WghtVar)) {
      setUserWeight(WghtVar);
      setUserWeightVerify(true);
    }
  }

  const calculateBMI = () => {
    const BMI = UserWeight / ((UserHeight / 100) * (UserHeight / 100));
    setBMI(BMI.toFixed());

    if (BMI < 18.5) {
      setDescription('Underweight, eat more!!!!');
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      setDescription('Normal ,keep it up!!!');
    } else if (BMI >= 25 && BMI <= 29.9) {
      setDescription('Overweight, Start working out!!!!');
    } else if (BMI >= 30) {
      setDescription('Obese, Hit the gym');
    } else {
      Alert.alert('Fill Mandatory details');
    }
    return BMI;

    //console.log(BMI)
  };

  return (
    <SafeAreaView style={container}>
      <ScrollView>
        <View style={nav}>
          <Icon
            name={'angle-left'}
            size={30}
            color={'white'}
            marginLeft={10}
            onPress={() => navigation.goBack()}
          />
          <Text style={hdng}>BMI Calculator</Text>
        </View>
        <Text style={hdng3}>
            Height Converter...
        </Text>
        <View style={convert}>
            <HeightConverter/>
        </View>
        <View style={trainer1}>
          <View style={main}>
            <Text style={txt2}>Age:</Text>
            <TouchableOpacity style={styles.btn1}>
              <Octicons name="number" color="black" style={styles.smallIcon} />
              <TextInput
                style={styles.btnText1}
                placeholder=" Enter Age"
                placeholderTextColor="gray"
                value={UserAge}
                onChange={e => handleUserAge(e)}
                keyboardType="numeric"
              />
              {UserAge.length < 1 ? null : UserAgeVerify ? (
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
            <Text style={txt2}>Height:</Text>
            <TouchableOpacity style={styles.btn1}>
              <Octicons name="number" color="black" style={styles.smallIcon} />
              <TextInput
                style={styles.btnText1}
                placeholder=" Enter Height in cm"
                placeholderTextColor="gray"
                value={UserHeight}
                onChange={e => handleUserHeight(e)}
                // onChangeText={(Text) = setUserWeight(Text)}
                keyboardType="numeric"
              />
              {UserHeight.length < 1 ? null : UserHeightVerify ? (
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
            <Text style={txt2}>Weight:</Text>
            <TouchableOpacity style={styles.btn1}>
              <Octicons name="number" color="black" style={styles.smallIcon} />
              <TextInput
                style={styles.btnText1}
                placeholder=" Enter Weight in KG"
                placeholderTextColor="gray"
                value={UserWeight}
                onChange={e => handleUserWeight(e)}
                // onChangeText={(Text) = setUserWeight(Text)}
                keyboardType="numeric"
              />
              {UserWeight.length < 1 ? null : UserWeightVerify ? (
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
          <TouchableOpacity style={styles.btn4} onPress={() => calculateBMI()}>
            <Text style={styles.btnText} onPress={() => calculateBMI()}>
              Calculate
            </Text>
          </TouchableOpacity>
        </View>

        <View style={result}>
          <Text style={resulttxt}>{BMI}</Text>
          <Text style={resdesc}>{Description}</Text>
        </View>

        {BMI >= 18.5 && BMI <= 24.9 && (
          <View style={obese} >
            <TouchableOpacity style={styles.btn4} onPress={() => navigation.navigate('plan')}>
              <Text style={styles.btnText}>Click here</Text>
            </TouchableOpacity>
          </View>
        )}
        {BMI >= 25 && BMI <= 29.9 && (
          <View style={obese} >
            <TouchableOpacity style={styles.btn4} onPress={() => navigation.navigate('plan')}>
              <Text style={styles.btnText}>Click here</Text>
            </TouchableOpacity>
          </View>
        )}
        {BMI >= 30 && (<ButtonBMI />)}

        {/* {BMI <= 18.5  && (
          <View style={obese}>
            <TouchableOpacity style={styles.btn4}>
              <Text style={styles.btnText}>Hello4</Text>
            </TouchableOpacity>
          </View>
        )} */}
      </ScrollView>
      <ButtomTab navigation={navigation}/>
    </SafeAreaView>
  );
};

export default BMI_Calculator;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1717'
  },
  nav: {
    height: 50,
    width: '100%', // Use full width of the screen
    backgroundColor: '#3e5287',
    opacity: 1,
    flexDirection: 'row',
    justifyContent: 'center', // Horizontally center the children
    alignItems: 'center', // Vertically center the children,
  
  },
  hdng: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 90, // Pushes text to the left
    marginRight: 'auto' // Pushes text to the right,
  },
  hdng3:{
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    textAlign: 'center'
  },
  convert:{
  
    height: 180,
    width: '100%',
    marginTop: 10
  },
  trainer1: {
    height: 320,
    width: 'auto',
    marginTop: 5,
    marginBottom: 5
    // borderWidth: 2,
    // borderColor: 'white'
  },
  main: {
    flexDirection: 'row', // Make components inline horizontally
    justifyContent: 'center', // Horizontally center the children
    alignItems: 'center', // Vertically center the children
    width: '90%',
    height: 45,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
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
    color: 'black',
    width: '78%'
  },
  smallIcon: {
    fontSize: 12,
    margin: 10
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
    borderWidth: 1,
    marginVertical: 10,
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  result: {
    // margin: 5
  },
  resulttxt: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 20
  },
  resdesc: {
    fontSize: 20,
    color: 'white',
    marginLeft: 20
    // fontWeight: 'bold'
  }
});
