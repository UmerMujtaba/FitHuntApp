/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
import Icon from 'react-native-vector-icons/FontAwesome'
import React, { useState } from 'react'
import axios from 'axios'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput
} from 'react-native';

async function postImage({image,description}) {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)

  const result = await axios.post('/images',formData, {headers: {'Content-Type': 'multipart/form-data'}})
  return result.data
}

const AboutMe = ({navigation}) => {
  const {
    container,
    mid,
   
    nav,
    img,
    imgtxt,
    imgtxt2,
    maintxt,
    maintxt2,
    maintxt21,
    btn2,
    choose,
   
    btn1,
    btnText1
  } = styles;
  const [username, setusername] = useState('');
  const[useremail,setuseremail] = useState('');
  const[userage,setuserage] = useState('');
  const[usermobile,setusermobile] = useState('');
  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])

  const submit = async event => {
    event.preventDefault()
    const result = await postImage({image: file, description})
    setImages([result.image, ...images])
  }

  const fileSelected = event => {
    const file = event.target.files[0]
    setFile(file)
  }


  return (
        <SafeAreaView style={container}>
          <View style={nav}>
          <Icon
            name={'angle-left'}
            size={30}
            color={'white'}
            marginTop={10}
            marginLeft={15}
            onPress={() => navigation.goBack()}
          />
          <Text style={imgtxt}>Profile</Text>
          <Text style={[imgtxt,imgtxt2]}>Save</Text>
        </View>

       <View style={img}>
        <Icon name={'user'} size={90} color={'black'}/>
       </View>
       



       <Text style={maintxt}>Change Profile Picture</Text>
       <View style={choose}>
       <View style={mid}>
        <View>
          <Text style={maintxt2}>
            Name
          </Text>
        </View>

        <TouchableOpacity style={btn1}>
              <TextInput
                style={btnText1}
                placeholder=" Enter your name" //there should be dropdown
                placeholderTextColor="gray"
                value={username}
                onChangeText={text => setusername(text)}
              />
              {/* <Icon name={'user'} size={30} color='white' /> */}
            </TouchableOpacity>
       </View>

       <View style={mid}>
        <View>
          <Text style={maintxt2}>
            Email
          </Text>
        </View>

        <TouchableOpacity style={btn1}>
              <TextInput
                style={btnText1}
                placeholder=" Enter your email" //there should be dropdown
                placeholderTextColor="gray"
                value={useremail}
                onChangeText={text => setuseremail(text)}
              />
              {/* <Icon name={'user'} size={30} color='white' /> */}
            </TouchableOpacity>
       </View>

       <View style={mid}>
        <View>
          <Text style={maintxt2}>
            Age
          </Text>
        </View>

        <TouchableOpacity style={btn1}>
              <TextInput
                style={btnText1}
                placeholder=" Enter your age" //there should be dropdown
                placeholderTextColor="gray"
                value={userage}
                onChangeText={text => setuserage(text)}
              />
              {/* <Icon name={'user'} size={30} color='white' /> */}
            </TouchableOpacity>
       </View>

       <View style={mid}>
        <View>
          <Text style={[maintxt2,maintxt21]}>
          Mobile No
          </Text>
        </View>

        <TouchableOpacity style={[btn1,btn2]}>
              <TextInput
                style={btnText1}
                placeholder=" Enter your mobile no" //there should be dropdown
                placeholderTextColor="gray"
                value={usermobile}
                onChangeText={text => setusermobile(text)}
              />
              {/* <Icon name={'user'} size={30} color='white' /> */}
            </TouchableOpacity>
       </View>
       </View>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1F1717'
    },
    nav: {
      flexDirection: 'row',
      backgroundColor: '#3e5287',
      height:45
    },
    imgtxt: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center',
      marginLeft: 10,
      marginTop: 5
    },
    imgtxt2:{
      marginLeft: 'auto',
      marginRight: 10
    },
    img: {
      backgroundColor: 'lightgrey',
      borderRadius: 60, // Half of the width (90 / 2)
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 5,
      marginRight: 80,
      marginTop: 10,
      marginLeft: 140,
      width: 120, // Set the width
      height: 120,
      padding: 5
    },
    maintxt: {
      fontSize: 18,
      color: '#39A7FF',
      alignSelf:'center',
      fontWeight: 'normal',
      marginLeft: 25,
      marginTop: 10
    },
    maintxt2: {
      fontSize: 18,
      color: 'white',
      width: 55,
      marginTop: 35,
      marginLeft: 5
    },
    maintxt21:{
      width: 60,
    },
    mid: {
      flexDirection: 'row'
    },
    choose:{
      flexDirection: 'column'
    },
    btn1: {
      backgroundColor: 'white',
      borderRadius: 10,
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 25,
      borderColor: 'black',
      borderWidth: 2,
      width: '78%',
      height: 45
    },
    // btn2: {
    //   height: 45
    // },
    btnText1: {
      height: 40,
      borderColor: 'gray',
      paddingLeft: 10,
      color: 'black'
    },
})

export default AboutMe