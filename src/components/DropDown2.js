import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
const data = [
  { label: 'Allama Iqbal Town', value: '1' },
  { label: 'Johar Town', value: '2' },
  { label: 'Wapda Town', value: '3' },
  { label: 'Muslim Town', value: '4' },
  { label: 'Cantt', value: '5' },
  { label: 'Valencia Town', value: '6' },
  { label: 'Gulberg', value: '7' }
];

const DropdownComponent2 = () => {
  const [value, setValue] = useState(null);

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
      placeholder="Main area"
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      renderLeftIcon={() => (
        <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      )}
    />
  );
};

export default DropdownComponent2;

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
    fontSize: 16
  }
});
