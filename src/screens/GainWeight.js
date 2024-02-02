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
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const GainWeight = ({ navigation }) => {
  const {
    container,
    nav,
    hdng,
    mid2,
    mid,
    mid3,
    hdng3,
    hdng4,
    midimg,
    midtxt3,
    midtxt4,
    dot,
    dot1,
    midtxt5,
    midtxt6,
    hdng6,
    hdng7,
    hdng8,
    overlay
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ScrollView>
        <View style={nav}>
          <Icon
            name={'angle-left'}
            size={30}
            color={'white'}
            marginTop={12}
            marginLeft={15}
            onPress={() => navigation.goBack()}
          />
          <Text style={hdng}>Weight Gain</Text>
        </View>

        <View style={mid}>
          <View style={mid3}>
            <Text style={hdng3}>Before Breakfast</Text>
            <Text style={[hdng3, hdng4]}> 09:00 am</Text>
          </View>
          <View style={mid2}>
            <View style={midimg}>
              <Image
                source={require('../../assets/gain/morning.png')}
                style={midimg}
              />
            </View>
            <View style={midtxt3}>
              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>Yougurt</Text>
              </View>
              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>Fresh Juice</Text>
              </View>

              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>Oats</Text>
              </View>
            </View>
          </View>

          <View style={mid3}>
            <Text style={hdng3}> Breakfast</Text>
            <Text style={[hdng3, hdng4, hdng6]}> 12:00 pm</Text>
          </View>
          <View style={mid2}>
            <View style={midimg}>
              <Image
                source={require('../../assets/gain/breakfast.png')}
                style={midimg}
              />
            </View>
            <View style={midtxt3}>
              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>2 Piece Bread </Text>
              </View>
              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>Salad & 2 eggs</Text>
              </View>

              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>Seasonal Fruit</Text>
              </View>
            </View>
          </View>

          <View style={mid3}>
            <Text style={hdng3}>Lunch</Text>
            <Text style={[hdng3, hdng4, hdng8]}> 03:00 pm</Text>
          </View>
          <View style={mid2}>
            <View style={midimg}>
              <Image
                source={require('../../assets/gain/lunch.png')}
                style={midimg}
              />
            </View>
            <View style={midtxt3}>
              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>2 Chapatis</Text>
              </View>
              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>Boiled Rice</Text>
              </View>
            </View>
          </View>

          <View style={mid3}>
            <Text style={hdng3}>Pre Workout (before 90 mins)</Text>
          </View>
          <View style={mid2}>
            <View style={midimg}>
              <Image
                source={require('../../assets/gain/preworkout.png')}
                style={midimg}
              />
            </View>
            <View style={midtxt3}>
              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>Boiled Potato </Text>
              </View>
              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>Banana &2dates</Text>
              </View>

              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>Yogurt</Text>
              </View>
            </View>
          </View>

          <View style={mid3}>
            <Text style={hdng3}>Post Workout</Text>
          </View>
          <View style={mid2}>
            <View style={midimg}>
              <Image
                source={require('../../assets/gain/postworkout.png')}
                style={midimg}
              />
            </View>
            <View style={midtxt3}>
              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>3/6 Eggs</Text>
              </View>
              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>Chicken Breast</Text>
              </View>

              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>Shake</Text>
              </View>
            </View>
          </View>

          <View style={mid3}>
            <Text style={hdng3}>Dinner</Text>
            <Text style={[hdng3, hdng4, hdng7]}> 09:00 pm</Text>
          </View>
          <View style={mid2}>
            <View style={midimg}>
              <Image
                source={require('../../assets/gain/dinner.png')}
                style={midimg}
              />
            </View>
            <View style={midtxt3}>
              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>Boiled Rice</Text>
              </View>
              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>Minced Beef</Text>
              </View>

              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>Minced Mutton</Text>
              </View>
            </View>
          </View>

          <View style={mid3}>
            <Text style={hdng3}>Before Sleep</Text>
          </View>
          <View style={mid2}>
            <View style={midimg}>
              <Image
                source={require('../../assets/gain/beforesleep.png')}
                style={midimg}
              />
            </View>
            <View style={midtxt3}>
              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>250/500 ml Milk</Text>
              </View>
              <View style={midtxt4}>
                <Text style={dot}>.</Text>
                <Text style={midtxt5}>2 Dates</Text>
              </View>
            </View>
          </View>

          <View style={mid3}>
            <Text style={hdng3}>Note</Text>
          </View>

          <View style={[midtxt4]}>
            <Text style={[dot, dot1]}>.</Text>
            <Text style={midtxt5}>Adjust diet according to your workout</Text>
          </View>
          <View style={[midtxt4]}>
            <Text style={[dot, dot1]}>.</Text>
            <Text style={midtxt5}>Eat 4 bananas in a day</Text>
          </View>
          <View style={[midtxt4]}>
            <Text style={[dot, dot1]}>.</Text>
            <Text style={midtxt5}>After 40min of workout (recommended)</Text>
          </View>
          <View style={[midtxt4, midtxt6]}>
            <Text style={[dot, dot1]}>.</Text>
            <Text style={midtxt5}>Drint 2-3 liters water daily</Text>
          </View>
        </View>
      </ScrollView>
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
  mid3: {
    flexDirection: 'row'
  },
  hdng3: {
    fontSize: 20,
    color: 'white',
    marginLeft: 5,
    marginTop: 10
  },
  hdng6: {
    marginLeft: 155
  },
  hdng7: {
    marginLeft: 185
  },
  hdng4: {
    marginLeft: 95
  },
  hdng8: {
    marginLeft: 185
  },
  mid: {
    flexDirection: 'column'
  },
  mid2: {
    height: 200,
    flexDirection: 'row',
    margin: 10,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10
  },
  midimg: {
    height: 194,
    width: 195,
    marginRight: 10,
    //  marginTop: 3,
    borderRadius: 10
  },
  midtxt3: {
    height: 180,
    width: 158,
    flexDirection: 'column',
    marginTop: 10
  },
  midtxt4: {
    flexDirection: 'row'
  },
  dot: {
    fontSize: 35,
    color: 'white',
    
  },
  dot1: {
    marginLeft: 20
  },
  midtxt5: {
    color: 'white',
    fontSize: 16,
    marginLeft: 2,
    marginTop: 20
  },
  midtxt6: {
    marginBottom: 25
  }
});
export default GainWeight;
