import React from "react";

import {createStackNavigator, createSwitchNavigator} from "react-navigation";
import OtpScreen from "../containers/OtpScreen";
import LoginScreen from "../containers/login";
import RegisterScreen from "../containers/Register";
import LoadingScreen from "../containers/Loading";
import Landing from "../containers/landing";
import OBTabScreen from "../containers/onboarding/OBTabScreen";


const LoginStack = createStackNavigator({LoginScreen, OtpScreen});


//const AuthTabs = createBottomTabNavigator({LoginStack, RegisterScreen});

const RootSwitch = createStackNavigator(
    {
        Landing, LoginScreen,
        RegisterScreen,
        OtpScreen,
        OBTabScreen},{ headerMode: 'none' });

export default RootSwitch;
