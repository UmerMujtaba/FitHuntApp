/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView
} from 'react-native';

const Show_Trainer = () => {
    const {container}=styles;
  return (
    <SafeAreaView style={container}>
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default Show_Trainer;
