/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import TabCmpnont from './src/components/TabComponet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Account1 from './src/screens/Account1';
import Selection from './src/screens/Selection';
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
import GymPage from './src/screens/GymPage';
import Template from './src/screens/Template';
import ShowGym from './src/screens/ShowGym';
import GymPage2 from './src/screens/GymPage2';
import AddFirend from './src/screens/AddFriend';
import Request from './src/screens/Request';
import Custom from './src/screens/Custom';
import GetInShape2days from './src/screens/GetInShape2days';
import GetinShape4days from './src/screens/GetinShape4days';
import Shreading2days from './src/screens/Shreading2days';
import Shread4daysBack from './src/screens/Shread4daysBack';
import Shread4daysLower from './src/screens/Shread4daysLower';
import Shread6Days from './src/screens/Shread6Days';
import MuscleGain2Days from './src/screens/MuscleGain2Days';
import MuscleGain4days from './src/screens/MuscleGain4days';
import MuscleGain6days from './src/screens/MuscleGain6days';
import Plans from './src/screens/Plans';
import Nutrition from './src/screens/Nutrition';
import OverviewLowCarb from './src/screens/OverviewLowCarb';
import OverviewNutrition from './src/screens/OverviewNutrition';
import AboutMe from './src/screens/AboutMe';
import Goals from './src/screens/Goals';
import GainWeight from './src/screens/GainWeight';
import LossWeight from './src/screens/LossWeight';
import DaysLoss from './src/screens/DaysLoss';
import DaysGain from './src/screens/DaysGain';
import CustomWorkout from './src/screens/CustomWorkout';
import Beginner from './src/screens/Begineer';
import Intermediate from './src/screens/Intermediate';
import LegRaiseVid from './src/screens/LegRaiseVid';
import ChrunchesVid from './src/screens/ChrunchesVid';
import SitupsVid from './src/screens/SitupsVid';
import EZbarVid from './src/screens/EZbarVid';
import BenchVid from './src/screens/BenchVid';
import InclineVid from './src/screens/InclineVid';
import DeclineSitVid from './src/screens/DeclineSitVid';
import DeclineChrcnh from './src/screens/DeclineChrcnh';
import EZbarVid2 from './src/screens/EZbarVid2';
import BarbellCurlVid from './src/screens/BarbellCurlVid';
import DmblStndCurlVid from './src/screens/DmblStndCurlVid';
import DmblStdCurlVid from './src/screens/DmblStdCurlVid';
import DmblHmrCurlVid from './src/screens/DmblHmrCurlVid';
import DmblInclnCurlVid from './src/screens/DmblInclnCurlVid';
import DeclineFlyVid from './src/screens/DeclineFlyVid';
import BrblBnchPrsVid from './src/screens/BrblBnchPrsVid';
import BrblInclineBnchPVid from './src/screens/BrblInclineBnchPVid';
import DeclineBrblPrsVid from './src/screens/DeclineBrblPrsVid';
import SmthMchnBnchVid from './src/screens/SmthMchnBnchVid';
import SmthMchnInclnPrsVid from './src/screens/SmthMchnInclnPrsVid';
import StndWrstCurl from './src/screens/StndWrstCurl';
import PrchrWrstCrlVid from './src/screens/PrchrWrstCrlVid';
import PrchrWrstCrlRvrsVid from './src/screens/PrchrWrstCrlRvrsVid';
import BrblWrstCrlVid from './src/screens/BrblWrstCrlVid';
import RpePshDwnVid from './src/screens/RpePshDwnVid';
import SnglArmPshDwnVid from './src/screens/SnglArmPshDwnVid';
import SklCrshronHed from './src/screens/SklCrshronHed';
import SklCrshrBhndHed from './src/screens/SklCrshrBhndHed';
import ExtnsnOvrHedStrghtBrVid from './src/screens/ExtnsnOvrHedStrghtBrVid';
import ExtnsnOvrHrdStdDmblVid from './src/screens/ExtnsnOvrHrdStdDmblVid';
import SmthMchnShldrOvrHdPrsVid from './src/screens/SmthMchnShldrOvrHdPrsVid';
import DmblStdOvrHdPrsVid from './src/screens/DmblStdOvrHdPrsVid';
import DmblStndOvrHdPrsVid from './src/screens/DmblStndOvrHdPrsVid';
import BrblStdOvrHdPrsVid from './src/screens/BrblStdOvrHdPrsVid';
import BrblStndOvrHdPrsVid from './src/screens/BrblStndOvrHdPrsVid';
import BrblUpRghtRowVid from './src/screens/BrblUpRghtRowVid';
import OvrHndPulUpVid from './src/screens/OvrHndPulUpVid';
import WdGrpPulUpVid from './src/screens/WdGrpPulUpVid';
import UndrHndGrpPulUpVid from './src/screens/UndrHndGrpPulUpVid';
import MchnSprtdOvrHndGrpVid from './src/screens/MchnSprtdOvrHndGrpVid';
import OvrGrpLatPulDwnVid from './src/screens/OvrGrpLatPulDwnVid';
import BrblStndShrugVid from './src/screens/BrblStndShrugVid';
import DmblShrugVid from './src/screens/DmblShrugVid';
import DmblInclPrneShrugVid from './src/screens/DmblInclPrneShrugVid';
import FlrBackExtnsnVid from './src/screens/FlrBackExtnsnVid';
import SupermanVid from './src/screens/SupermanVid';
import DeadliftVid from './src/screens/DeadliftVid';
import HipThrstMchnVid from './src/screens/HipThrstMchnVid';
import SnglLegHipThrstVid from './src/screens/SnglLegHipThrstVid';
import BrblHipThrstVid from './src/screens/BrblHipThrstVid';
import BrblGltBrdgVid from './src/screens/BrblGltBrdgVid';
import DmblHipThrstVid from './src/screens/DmblHipThrstVid';
import RegisterPage from './src/screens/Registeration';
import RegisterGym from './src/screens/RegisterGym';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //  <TabCmpnont/>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="FG">
        <Stack.Screen
          name="Selection"
          component={Selection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Acc"
          component={Account1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Log"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reg"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="RegGym"
          component={RegisterGym}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FG"
          component={FindGym}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SP"
          component={ShowGym}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GP"
          component={GymPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GP1"
          component={GymPage2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MN"
          component={TabCmpnont}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MN1"
          component={Menu}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AbsScreen"
          component={AbsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chst"
          component={Chest}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FM"
          component={ForeArm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tri"
          component={Triceps}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Shldr"
          component={Shoulders}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bicp"
          component={Biceps}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BM"
          component={BackMain}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Lts"
          component={Lats}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Trps"
          component={Traps}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Glts"
          component={Glutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LB"
          component={LowerBack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tmplt"
          component={Template}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AF"
          component={AddFirend}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RE"
          component={Request}
          options={{ headerShown: false }}
        />
         {/* <Stack.Screen
          name="Cont"
          component={Contact}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="CU"
          component={Custom}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="plan"
          component={Plans}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NUT"
          component={Nutrition}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GT2"
          component={GetInShape2days}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GT4"
          component={GetinShape4days}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ST2"
          component={Shreading2days}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ST4B"
          component={Shread4daysBack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ST4L"
          component={Shread4daysLower}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ST6"
          component={Shread6Days}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MG2"
          component={MuscleGain2Days}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MG4"
          component={MuscleGain4days}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MG6"
          component={MuscleGain6days}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OV1"
          component={OverviewLowCarb}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OV2"
          component={OverviewNutrition}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ME"
          component={AboutMe}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Goal"
          component={Goals}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WG"
          component={GainWeight}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WL"
          component={LossWeight}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DaysG"
          component={DaysGain}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DaysL"
          component={DaysLoss}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CW"
          component={CustomWorkout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Begin"
          component={Beginner}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Inter"
          component={Intermediate}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LRV"
          component={LegRaiseVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChrnchVid"
          component={ChrunchesVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SitVid"
          component={SitupsVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EZVid"
          component={EZbarVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BVid"
          component={BenchVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IVid"
          component={InclineVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DSitVid"
          component={DeclineSitVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DChrnch"
          component={DeclineChrcnh}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EZVid2"
          component={EZbarVid2}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BCVid"
          component={BarbellCurlVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DStndCVid"
          component={DmblStndCurlVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DStdCVid"
          component={DmblStdCurlVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DHCVid"
          component={DmblHmrCurlVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DICVid"
          component={DmblInclnCurlVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DFVid"
          component={DeclineFlyVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BBPVid"
          component={BrblBnchPrsVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BIBPVid2"
          component={BrblInclineBnchPVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DBPVid"
          component={DeclineBrblPrsVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SMBPVid"
          component={SmthMchnBnchVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SMIPVid"
          component={SmthMchnInclnPrsVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SWCVid"
          component={StndWrstCurl}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PWCVid"
          component={PrchrWrstCrlVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PWRCVid"
          component={PrchrWrstCrlRvrsVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BWCVid"
          component={BrblWrstCrlVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RPDVid"
          component={RpePshDwnVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SAPDVid"
          component={SnglArmPshDwnVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SCONHVid"
          component={SklCrshronHed}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SKBHNDHVid"
          component={SklCrshrBhndHed}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EOHSBVid"
          component={ExtnsnOvrHedStrghtBrVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EOHSDVid"
          component={ExtnsnOvrHrdStdDmblVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SMSOHPVid"
          component={SmthMchnShldrOvrHdPrsVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DSOHPVid"
          component={DmblStdOvrHdPrsVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DSTNDOHPVid"
          component={DmblStndOvrHdPrsVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BSTDOHPVid"
          component={BrblStdOvrHdPrsVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BSTNDOPVid"
          component={BrblStndOvrHdPrsVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BUpRRVid"
          component={BrblUpRghtRowVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OHPulupVid"
          component={OvrHndPulUpVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WGPulupVid"
          component={WdGrpPulUpVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UHGPVid"
          component={UndrHndGrpPulUpVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MSOHGVid"
          component={MchnSprtdOvrHndGrpVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OGLatPulDwnVid"
          component={OvrGrpLatPulDwnVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BSShrgVid"
          component={BrblStndShrugVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DShrugVid"
          component={DmblShrugVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DIPShrugVid"
          component={DmblInclPrneShrugVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FBExtnsnVid"
          component={FlrBackExtnsnVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SprManVid"
          component={SupermanVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DedLiftVid"
          component={DeadliftVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HipTVid"
          component={HipThrstMchnVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SLegHTVid"
          component={SnglLegHipThrstVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BHTVid"
          component={BrblHipThrstVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BGBrdgVid"
          component={BrblGltBrdgVid}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DHTVid"
          component={DmblHipThrstVid}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
