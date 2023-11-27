/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable comma-dangle */
import React from 'react';
import First from '../screens/First';
import Second from '../screens/Second';
import Third from '../screens/Third';
import Forth from '../screens/Forth';
import Fifth from '../screens/Fifth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator(); //intilizting the tab object

const App = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          backgroundColor: 'lightblue'
        }
      }}>
      <Tab.Screen
        name={'Main'}
        component={First}
        options={{
          tabBarIcon: () => <Icon name={'home'} size={30} color={'green'} />
        }}
      />
      <Tab.Screen
        name={'second'}
        component={Second}
        options={{
          tabBarIcon: () => <Icon name={'music'} size={30} color={'green'} />
        }}
      />
      <Tab.Screen
        name={'third'}
        component={Third}
        options={{
          tabBarIcon: () => <Icon name={'gears'} size={30} color={'green'} />
        }}
      />
      <Tab.Screen
        name={'forth'}
        component={Forth}
        options={{
          tabBarIcon: () => <Icon name={'cloud'} size={30} color={'green'} />
        }}
      />
      <Tab.Screen
        name={'fifth'}
        component={Fifth}
        options={{
          tabBarIcon: () => <Icon name={'cloud'} size={30} color={'green'} />
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
