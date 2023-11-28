/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable comma-dangle */
import React from 'react';
import First from '../screens/Selection';
import Second from '../screens/Account1';
import Third from '../screens/Login';
import Forth from '../screens/Registeration';
import Fifth from '../screens/FindGym';
import Sixth from '../screens/Menu';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator(); //intilizting the tab object

const App = () => {
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
        name={'Main'}
        component={First}
        options={{
          tabBarIcon: () => <Icon name={'home'} size={30} color={'black'} />
        }}
      />
      <Tab.Screen
        name={'Select'}
        component={Second}
        options={{
          tabBarIcon: () => <Icon name={'music'} size={30} color={'black'} />
        }}
      />
      <Tab.Screen
        name={'Log In'}
        component={Third}
        options={{
          tabBarIcon: () => <Icon name={'gears'} size={30} color={'black'} />
        }}
      />
      <Tab.Screen
        name={'Registeration'}
        component={Forth}
        options={{
          tabBarIcon: () => <Icon name={'cloud'} size={30} color={'black'} />
        }}
      />
      <Tab.Screen
        name={'Location'}
        component={Fifth}
        options={{
          tabBarIcon: () => <Icon name={'map'} size={30} color={'black'} />
        }}
      />
       <Tab.Screen
        name={'Exercise'}
        component={Sixth}
        options={{
          tabBarIcon: () => <Icon name={'music'} size={30} color={'black'} />
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
