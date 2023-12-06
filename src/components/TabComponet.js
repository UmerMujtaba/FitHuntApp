/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Template from '../screens/Template'; // Import your Training screen component
import Exercise from '../screens/Exercise';
import Menu from '../screens/Menu';
import Social from '../screens/Social';
import AboutMe from '../screens/AboutMe';

const Tab = createBottomTabNavigator();

const TabCmpnont = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let imageSource;

          switch (route.name) {
            case 'Training':
              imageSource = require('../../assets/dumbell.png');
              return (
                <Image
                  source={imageSource}
                  style={{ width: size, height: size }}
                />
              );
            case 'Exercise':
              imageSource = require('../../assets/exercise.png');
              return (
                <Image
                  source={imageSource}
                  style={{ width: size, height: size }}
                />
              );
            case 'Social':
              iconName = 'group';
              break;
              case 'Menu':
                imageSource = require('../../assets/dots.png');
                return (
                  <Image
                    source={imageSource}
                    style={{ width: size, height: size }}
                  />
                );
            case 'ME':
              iconName = 'user';
              break;
            default:
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      
      >
          <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Training" component={Template} />
      <Tab.Screen name="Exercise" component={Exercise} />
      <Tab.Screen name="Social" component={Social} />
    
      <Tab.Screen name="ME" component={AboutMe} />
    </Tab.Navigator>
  );
};
// tabBarOptions={{  to be written above line 64
//   activeTintColor: 'blue',
//   inactiveTintColor: 'black',
//   tabBarStyle: {
//     backgroundColor: 'lightgrey'
//   },
// }}
export default TabCmpnont;
