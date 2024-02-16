import { React, useState } from 'react';

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
import { useNavigation } from '@react-navigation/native';

const ButtonBMI = () => {
  const { container, obese, btn4, btnText } = styles;
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={obese}>
        <TouchableOpacity style={btn4}>
          <Text style={btnText} onPress={() => navigation.navigate('plan')}>
            Click here
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ButtonBMI;

const styles = StyleSheet.create({
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
  }
});
