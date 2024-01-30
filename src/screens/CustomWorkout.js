/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  imgs,
  ScrollView,
  TouchableOpacity,
  Modal
} from 'react-native';
import Payment from './Payment';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CustomWorkout = ({ navigation }) => {
    const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);

    const showPaymentModal = () => {
      setPaymentModalVisible(true);
    };
  
    const hidePaymentModal = () => {
      setPaymentModalVisible(false);
    };
  const { container, nav, txt1, day, icon, mid2, cont2,modalContainer,modalContent } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={nav}>
        <Icon
          name={'angle-left'}
          size={30}
          color={'white'}
          marginTop={14}
          marginLeft={15}
          marginRight={15}
          onPress={() => navigation.goBack()}
        />
        <Text style={txt1}>Categories</Text>
      </View>
      <View style={cont2}>
        <View>
          <View style={mid2}>
            <Text style={day}>Beginner</Text>
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
              <Icon
                name={'angle-right'}
                size={50}
                color={'black'}
                style={icon}
                onPress={() => navigation.navigate('Begin')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={mid2}>
            <Text style={day}>Intermediate</Text>

            <TouchableOpacity style={{ marginLeft: 'auto' }}>
              <Icon
                name={'angle-right'}
                size={50}
                color={'black'}
                style={icon}
                onPress={() => navigation.navigate('Inter')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Modal
        transparent
        animationType="slide"
        visible={isPaymentModalVisible}
        onRequestClose={hidePaymentModal}
      >
        <View style={modalContainer}>
          <View style={modalContent}>
            <Payment onClose={hidePaymentModal} />
          </View>
        </View>
      </Modal>
        <View>
            
          <View style={mid2}>
            <Text style={day}>Advanced</Text>

            <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={showPaymentModal}>
              <Icon
                name={'angle-right'}
                size={50}
                color={'black'}
                style={icon}
              />
            </TouchableOpacity>
          </View>
          <Payment
            isVisible={isPaymentModalVisible}
            onClose={hidePaymentModal}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1717'
  },
  txt1: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 12,
    marginLeft: 110
  },
  nav: {
    height: 50,
    width: 395,
    backgroundColor: '#3e5287',
    opacity: 0.9,
    flexDirection: 'row'
  },
  mid2: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 20,
    margin: 25,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#7D7C7C'
  },
  day: {
    // backgroundColor: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    marginRight: 5
  },
  cont2: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    height: 'auto'
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust opacity here
    borderRadius: 10,
  },
});
export default CustomWorkout;
