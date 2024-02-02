/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const Underconstructio = ({navigation}) => {
  const {
    container,
    mid,
    nav,
    btnText2,
    btn2,
    btnText
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

      </View>

      <View style={mid}>
      <TouchableOpacity style={btn2} > 
        <MaterialIcons
       
                name="construction"
                color="yellow"
                style={styles.smallIcon}
              >
                  
        </MaterialIcons>
        <Text style={btnText}>In Progress</Text>
        <Text style={btnText2}  onPress={() => navigation.goBack()}>Ok</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1717',
    
  },

  nav: {
    height: 50,
    width: 395,
    backgroundColor: '#3e5287',
    opacity: 0.9,
    flexDirection: 'row'
  },
  mid: {
 
   justifyContent: 'center',

   marginTop: 250,
  },
  btn2: {
    backgroundColor: 'lightgrey',
    borderRadius: 0,
    fontSize: 25,
    height: 180,
    justifyContent: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#87C4FF',
    borderWidth: 1,
    width: '80%',
    
  },
  btnText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnText2:{
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 60,
   
  },
  smallIcon: {
    fontSize: 40,
    margin: 10,
  }
});
export default Underconstructio;
