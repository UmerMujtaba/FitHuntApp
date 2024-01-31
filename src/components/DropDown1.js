import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
  { label: '1000 to 3000', value: '1' },
  { label: '3000 to 6000', value: '2' },
  { label: '6000 to 1000', value: '3' }
];

const DropdownComponent = () => {
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
      placeholder="Price in Rs."
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderLeftIcon={() => (
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
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
    borderBottomWidth: 0.5,
    color: 'black'
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
    color: 'black'
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

export default DropdownComponent;
