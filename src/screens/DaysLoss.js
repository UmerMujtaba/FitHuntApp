/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Payment from './Payment'; // Adjust the path accordingly

import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const DaysLoss = ({ navigation }) => {
  const [isPaymentModalVisible, setPaymentModalVisible] = useState(false);

  const showPaymentModal = () => {
    setPaymentModalVisible(true);
  };

  const hidePaymentModal = () => {
    setPaymentModalVisible(false);
  };
  const {
    container,
    nav,
    hdng,
    mid2,
    mid,
    namee,
    day,
    icon,
    modalContainer,
    midtxt3,
    img,
    modalContent,
    overlay
  } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={nav}>
        <Icon
          name={'angle-left'}
          size={30}
          color={'white'}
          marginTop={12}
          marginLeft={15}
          onPress={() => navigation.goBack()}
        />
        <Text style={hdng}>Day Wise Plan</Text>
      </View>

      <View style={mid}>
        <View style={mid2}>
          <Text style={day}>Day 1</Text>
          <Text style={namee}>/ Monday</Text>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={icon}
            onPress={() => navigation.navigate('WL')}
          />
        </View>

        <View>
      <View style={mid2}>
        <Text style={day}>
          Day 2
        </Text>
        <Text style={namee}>
          /  Tuesday
        </Text>
        <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={showPaymentModal}>
          <Icon
            name={'angle-right'}
            size={50}
            color={'black'}
            style={icon}
          />
        </TouchableOpacity>
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
    </View>

        <View>
          <View style={mid2}>
            <Text style={day}>Day 3</Text>
            <Text style={namee}>/ Wednesday</Text>
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

        <View>
          <View style={mid2}>
            <Text style={day}>Day 4</Text>
            <Text style={namee}>/ Thrusday</Text>
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

        <View>
          <View style={mid2}>
            <Text style={day}>Day 5</Text>
            <Text style={namee}>/ Friday</Text>
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
  nav: {
    height: 50,
    width: 395,
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
  mid: {
    // backgroundColor: 'green',
    height: 650,
    flexDirection: 'column'
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
  namee: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    marginLeft: 5,
    // backgroundColor: 'red',
    textAlignVertical: 'center'
  },
  day: {
    // backgroundColor: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    marginRight: 5
  },
  icon: {
    marginLeft: 'auto'
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
export default DaysLoss;
