/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

const Payment = ({ navigation, isVisible, onClose }) => {
  const {
    container,
    nav,
    hdng,
    head,
    txt,
    mid,
    mid2,
    mid2txt,
    box,
    middle,
    middle2,
    btn3,
    btnText,
    cont2,
    middle3,
    middle4
  } = styles;

  return (
    
    <Modal
      isVisible={isVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown">
      <SafeAreaView style={container}>
        <View style={nav}>
          <Icon
            name={'angle-left'}
            size={30}
            color={'white'}
            marginTop={12}
            marginLeft={15}
            onPress={onClose}
          />
          <Text style={hdng}>Payment</Text>
        </View>

        <View style={head}>
          <Text style={txt}>Get UNLIMITED ACCESS to your personal plan!</Text>
        </View>
        <View style={cont2}>
          <View style={mid}>
            <View style={mid2}>
              <View style={box}>
                <Text style={middle}>1 Month</Text>
              </View>
              <View style={mid2txt}>
                <Text style={middle2}>Basic Plan</Text>
                <Text style={[middle2,middle3,middle4]}>Rs.3000/</Text>
                <Text style={[middle2,middle3]}>Rs.2500/</Text>
              </View>
            </View>

            <View style={mid2}>
              <View style={box}>
                <Text style={middle}>12 Month</Text>
              </View>
              <View style={mid2txt}>
                <Text style={middle2}>Annualy Plan</Text>
                <Text style={[middle2,middle3,middle4]}>Rs.8500/</Text>
                <Text style={[middle2,middle3]}>Rs.7000/</Text>
              </View>
            </View>

            <View style={mid2}>
              <View style={box}>
                <Text style={middle}>Foreever Access</Text>
              </View>
              <View style={mid2txt}>
                <Text style={middle2}>One Time Payment</Text>
                <Text style={[middle2,middle3,middle4]}>Rs.16,500/</Text>
                <Text style={[middle2,middle3]}>Rs.15,000/</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={btn3}>
            <Text style={btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      
    </Modal>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(31, 23, 23, 0.5)', // Adjust opacity as needed
    height: 'auto',
  },
  nav: {
    height: 50,
    width: '100%',
    backgroundColor: '#3e5287',
    opacity: 0.9,
    flexDirection: 'row'
  },
  hdng: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
    marginLeft: 20
  },
  head: {
    // backgroundColor: 'red',
    height: 100,
    margin: 15,
    alignItems: 'center'
  },
  txt: {
    fontSize: 25,
    color: 'orange',
    fontWeight: 'bold',
    padding: 20,
    marginLeft: 5
  },
  mid: {
    flexDirection: 'column'
  },
  mid2: {
    flexDirection: 'row',
    marginBottom: 20,
    
  },
  box: {
    backgroundColor: '#3081D0',
    height: 110,
    width: 120,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 9,
    justifyContent: 'center', // Align content vertically
    alignItems: 'center', // Align content horizontally
  },
  mid2txt: {
    borderWidth: 1,
    borderColor: 'white',
    width: 180,
    height: 110,
    backgroundColor: '#7D7C7C',
    // marginLeft: 10,
    marginRight: 20,
   
  },
  middle: {
    fontSize: 22,
    color: '#FFA33C',
    alignSelf: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    padding: 5
  },
  middle2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    textAlignVertical: 'center',
    padding: 2
  },
  middle3: {
    color: '#FFA33C'
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal'
  },
  btn3: {
    backgroundColor: '#176B87',
    borderRadius: 40,
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginRight: 80,
    marginLeft: 80,
    marginTop: 45
  },
  cont2 :{
    borderWidth: 2,
    borderColor: 'grey',
    paddingTop: 15,
    paddingBottom: 15
  },
  middle4: {
    textDecorationLine: 'line-through',
    color: 'black'
  }
});

export default Payment;
