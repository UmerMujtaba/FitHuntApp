/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

const Payment = ({ navigation, isVisible, onClose }) => {
  const { container, nav, hdng,head } = styles;

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
            agdgd
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(31, 23, 23, 0.5)', // Adjust opacity as needed
  },
  nav: {
    height: 50,
    width: '100%',
    backgroundColor: '#3e5287',
    opacity: 0.9,
    flexDirection: 'row',
  },
  hdng: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
    marginLeft: 20,
  },
  head: {
    backgroundColor: 'red',
    height: 150,
  }
});

export default Payment;
