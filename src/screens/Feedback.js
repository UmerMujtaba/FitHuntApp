/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropdownComponent3 from '../components/DropDown3';
import CheckBox from '@react-native-community/checkbox';
import ButtomTab from '../components/Bottom_Tab'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const FeedBack = ({ navigation }) => {
  const [yesChecked, setYesChecked] = useState(false);
  const [partiallyChecked, setPartiallyChecked] = useState(false);
  const [noChecked, setNoChecked] = useState(false);
  const { container, box, nav, hdng, hdng2, btn2, btn1, icon } = styles;
  return (
    <SafeAreaView style={container}>
      <ScrollView>
        <View style={nav}>
          <Icon
            name={'angle-left'}
            size={30}
            color={'white'}
            marginLeft={15}
            onPress={() => navigation.goBack()}
          />
          <Text style={hdng}>Feedback</Text>
        </View>
        <Text style={hdng2}>Did you achieve your goal? *</Text>

        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setYesChecked(!yesChecked)}>
          <CheckBox
            disabled={false}
            value={yesChecked}
            onValueChange={setYesChecked}
          />
          <Text style={styles.checkboxLabel}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setYesChecked(!partiallyChecked)}>
          <CheckBox
            disabled={false}
            value={partiallyChecked}
            onValueChange={setPartiallyChecked}
          />
          <Text style={styles.checkboxLabel}>Partially</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => setYesChecked(!noChecked)}>
          <CheckBox
            disabled={false}
            value={noChecked}
            onValueChange={setNoChecked}
          />
          <Text style={styles.checkboxLabel}>No</Text>
        </TouchableOpacity>
        <Text style={hdng2}>What was the reason for your visit?</Text>
        <DropdownComponent3 />

        <Text style={hdng2}>
          Please describe why you couldn't achieve your goal!
        </Text>

        <TouchableOpacity style={[btn1, btn2]}>
          <TextInput style={styles.btnText1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn4}>
          {/* onPress={() => handleSubmit()} in above >*/}

          <Text style={styles.btnText}> Submit </Text>
        </TouchableOpacity>
      </ScrollView>
      <ButtomTab navigation={navigation}/>
    </SafeAreaView>
  );
};

export default FeedBack;
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
    alignItems: 'center' // Vertically center the children
  },
  hdng: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 110, // Pushes text to the left
    marginRight: 'auto' // Pushes text to the right,
  },
  hdng2: {
    fontSize: 18,
    marginTop: 40,
    color: 'white',
    textAlign: 'left',
    marginLeft: 15
  },
  btn1: {
    backgroundColor: 'white',
    borderRadius: 1,
    fontWeight: 'bold',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: 'black',
    borderWidth: 1,
    height: 55,
    flexDirection: 'row',
    marginTop: 10
  },
  btnText1: {
    height: 37,
    paddingLeft: 10,
    marginTop: 10,
    fontSize: 16,
    color: 'black'
  },
  btn2: {
    height: 125,
    border:2,
    borderColor:'gray'
  },
  smallIcon: {
    fontSize: 28,
    margin: 10
  },
  btn4: {
    backgroundColor: '#176B87',
    borderRadius: 5,
    padding: 15,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'white',
    marginVertical: 10,
    width: '30%',
    marginTop: 20
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderColor: 'white',
    borderWidth: 1,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 45
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: 'white'
  }
});
