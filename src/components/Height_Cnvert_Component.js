/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text
} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
const HeightConverter = () => {
  const [feet, setfeet] = useState('');
  const [inches, setinches] = useState('');
  const [centimeters, setcentimeters] = useState(null);

  const getHeight = () => {
    const centimeters = feet * 30.48 + inches * 2.54;
    setcentimeters(centimeters.toFixed());

    return centimeters;
  };
  return (
    <SafeAreaView>
      <View style={styles.foot} />
      <TouchableOpacity style={styles.btn1}>
        <Octicons name="number" color="black" style={styles.smallIcon} />
        <TextInput
          style={styles.btnText1}
          placeholder=" Enter foot"
          placeholderTextColor="gray"
          value={feet}
          onChange={e => setfeet(e.nativeEvent.text)} // Extract value from event object
          keyboardType="numeric"
        />
      </TouchableOpacity>
      <View style={styles.inches}>
        <TouchableOpacity style={styles.btn1}>
          <Octicons name="number" color="black" style={styles.smallIcon} />
          <TextInput
            style={styles.btnText1}
            placeholder=" Enter inches"
            placeholderTextColor="gray"
            value={inches}
            onChange={e => setinches(e.nativeEvent.text)} // Extract value from event object
            keyboardType="numeric"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn4} onPress={() => getHeight()}>
        <Text style={styles.btnText} onPress={() => getHeight()}>
          Submit
        </Text>
      </TouchableOpacity>

      <Text style={styles.result}>{centimeters} cm</Text>
    </SafeAreaView>
  );
};
export default HeightConverter;

const styles = StyleSheet.create({
  btn1: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 5,
    marginTop: 5,
    fontWeight: 'bold',
    borderColor: 'black',
    borderWidth: 2,
    width: '78%', // Adjust width as needed
    height: 40,
    flexDirection: 'row',
    marginLeft: 40
  },
  btnText1: {
    height: 35,
    fontSize: 12,
    color: 'black'
  },
  btn4: {
    backgroundColor: '#176B87',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderColor: 'black',
    marginVertical: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  btnText: {
    color: 'white',
    fontSize: 12
  },
  smallIcon: {
    fontSize: 12,
    margin: 10
  },
  result: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
  resulttxt: {}
});
