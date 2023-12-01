/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable comma-dangle */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Account1 from '../screens/Account1';
import Selection from '../screens/Selection';
import Login from '../screens/Login';
import Registeration from '../screens/Registeration';
import FindGym from '../screens/FindGym';
import Menu from '../screens/Menu';
import Exercise from '../screens/Exercise';
const Tab = createBottomTabNavigator(); //intilizting the tab object

const TabCmpnont = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'blue',
        tabBarStyle: {
          backgroundColor: 'lightgrey',
          
        }
      }}>
      <Tab.Screen
        name={'Exercise'}
        component={Exercise}
        options={{
          tabBarIcon: () => <Icon name={'music'} size={30} color={'black'} />,
        }}
      />
      <Tab.Screen
        name={'Menu'}
        component={Menu}
        options={{
          tabBarIcon: () => <Icon name={'menu'} size={30} color={'black'} />,
        }}
      />

      <Tab.Screen
        name={'Log In'}
        component={Login}
        options={{
          tabBarIcon: () => <Icon name={'gears'} size={30} color={'black'} />
        }}
      />
      <Tab.Screen
        name={'Registration'}
        component={Registeration}
        options={{
          tabBarIcon: () => <Icon name={'cloud'} size={30} color={'black'} />
        }}
      />
      <Tab.Screen
        name={'Location'}
        component={FindGym}
        options={{
          tabBarIcon: () => <Icon name={'map'} size={30} color={'black'} />
        }}
      />
       <Tab.Screen
        name={'Exercise'}
        component={Menu}
        options={{
          tabBarIcon: () => <Icon name={'music'} size={30} color={'black'} />
        }}
      />
    </Tab.Navigator>
  );
};

export default TabCmpnont;
