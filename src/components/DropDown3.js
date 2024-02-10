/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  { label: 'For Finding Gym', value: '1' },
  { label: 'For Exercise Details', value: '2' },
  { label: 'For BMI Calculation', value: '3' },
  { label: 'For Workout Plan', value: '4' },
  { label: 'For Navigation', value: '5' },
  { label: 'For Training Templates', value: '6' },
  { label: 'For Training Interaction', value: '7' }
];

const DropdownComponent3 = ({onSelect}) => {
  const [value, setValue] = useState(null);

  // Custom render function for dropdown items
  const renderItem = (item, index, isSelected) => {
    return (
      <View style={styles.dropdownItem}>
        <Text style={isSelected ? styles.selectedItemText : styles.itemText}>
          {item.label}
        </Text>
      </View>
    );
  };

  const handleValueChange = (item) => {
    setValue(item.value);
    onSelect && onSelect(item.value); // Call the onSelect callback
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={250}
      labelField="label"
      valueField="value"
      placeholder="Please give your reason"
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderLeftIcon={() => (
        <AntDesign style={styles.icon} color="white" name="Safety" size={20} />
      )}
      renderItem={renderItem} // Pass the custom render function
    />
   
   
  );
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 20,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    color: 'black',
    
  },
  icon: {
    marginRight: 5
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'gray'
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white'
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black'
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  itemText: {
    fontSize: 16,
    color: 'black'
  },
  selectedItemText: {
    fontSize: 16,
    color: 'blue', // Customize the color for selected item
    fontWeight: 'bold' // Add any other styles for selected item
  }
});

export default DropdownComponent3;
