/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import TabCmpnont from './src/components/TabComponet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Account1 from './src/screens/Account1';
import Selection from './src/screens/Selection';
import Registeration from './src/screens/Registeration';
import Login from './src/screens/Login';
import FindGym from './src/screens/FindGym';
import Menu from './src/screens/Menu';
import BackMain from './src/screens/BackMain';
import Biceps from './src/screens/Biceps';
import Chest from './src/screens/Chest';
import ForeArm from './src/screens/ForeArm';
import Shoulders from './src/screens/Shoulders';
import AbsScreen from './src/screens/AbsScreen';
// import Exercise from './src/screens/Exercise';
import Triceps from './src/screens/Triceps';
import Lats from './src/screens/Lats';
import Traps from './src/screens/Traps';
import Glutes from './src/screens/Glutes';
import LowerBack from './src/screens/LowerBack';
import Custom from './src/screens/Custom';
// import Shread6Days from './src/screens/Shread6Days';
// import Shread4daysBack from './src/screens/Shread4daysBack';
// import Shread4daysLower from './src/screens/Shread4daysLower';
// import Shreading2days from './src/screens/Shreading2days';
// import GetInShape2days from './src/screens/GetInShape2days';
// import GetinShape4days from './src/screens/GetinShape4days';
// import MuscleGain2Days from './src/screens/MuscleGain2Days';
// import MuscleGain4days from './src/screens/MuscleGain4days';
// import MuscleGain6days from './src/screens/MuscleGain6days';
// import Nutrition from './src/screens/Nutrition';
// import GymPage2 from './src/screens/GymPage2';
// import GymPage from './src/screens/GymPage';
// import AboutMe from './src/screens/AboutMe';
// import Template from './src/screens/Template';
// import Request from './src/screens/Request';
// import ShowGym from './src/screens/ShowGym';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //  <TabCmpnont/>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Selection">
        <Stack.Screen name="Selection" component={Selection} />
        <Stack.Screen name="Acc" component={Account1} />
        <Stack.Screen name="Log" component={Login} />
        <Stack.Screen name="Reg" component={Registeration} />
        <Stack.Screen name="FG" component={FindGym} />
        <Stack.Screen name="MN" component={Menu} />
        <Stack.Screen name="Exercise" component={TabCmpnont} />
        <Stack.Screen name="AbsScreen" component={AbsScreen} />
        <Stack.Screen name="Chst" component={Chest} />
        <Stack.Screen name="FM" component={ForeArm} />
        <Stack.Screen name="Tri" component={Triceps} />
        <Stack.Screen name="Shldr" component={Shoulders} />
        <Stack.Screen name="Bicp" component={Biceps} />
        <Stack.Screen name="BM" component={BackMain} />
        <Stack.Screen name="Lts" component={Lats} />
        <Stack.Screen name="Trps" component={Traps} />
        <Stack.Screen name="Glts" component={Glutes} />
        <Stack.Screen name="LB" component={LowerBack} />
        <Stack.Screen name="Tmplt" component={Custom} />
      </Stack.Navigator>
    </NavigationContainer>

    // <MuscleGain6days/>

    // <Nutrition/>
    // <GymPage2/>
  );
};

export default App;
