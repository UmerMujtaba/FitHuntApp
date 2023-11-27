import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const SelectGender = () => {
  const [checked, setChecked] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Gender:</Text>
      <View style={styles.radioButtonContainer}>
        <RadioButton
          value="male"
          status={checked === 'none' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('male')}
          color="white" // Match the button color with your existing styling
        />
        <Text style={styles.radioLabel}>Male</Text>

        <RadioButton
          value="female"
          status={checked === 'none' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('female')}
          color="white" // Match the button color with your existing styling
        />
        <Text style={styles.radioLabel}>Female</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    width: 320,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white', // Match the color with your existing styling
    marginBottom: 10,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 110,
    width: 200,
  },
  radioLabel: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Match the color with your existing styling
  },
});

export default SelectGender;
