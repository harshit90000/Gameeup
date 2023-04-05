import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignupEmail, SignupOTP, OnBoarding , HomeScreen,FavoriteScreen,ScoreBoard ,MenuScreen,LiveScore} from "../screens";
import navigationStrings from '../constants/navigationStrings';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"HomeScreen"} component={HomeScreen} />
            <Tab.Screen name={navigationStrings.FAVORITE_SCREEN} component={FavoriteScreen} />
            <Tab.Screen name={navigationStrings.SCOREBOARD_SCREEN} component={ScoreBoard} />
            <Tab.Screen name={navigationStrings.MENU_SCREEN} component={MenuScreen} />
            <Tab.Screen name={navigationStrings.LIVE_SCORE} component={LiveScore} />
        </Tab.Navigator>
    )
}


export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name={navigationStrings.SIGNUP_EMAIL} component={SignupEmail} />
            <Stack.Screen name={navigationStrings.SIGNUP_OTP} component={SignupOTP} />
            <Stack.Screen name={navigationStrings.ONBOARDING} component={OnBoarding} />
            <Stack.Screen name="HomeScreen" component = {HomeStack} options = {{headerShown: false}} />
        </Stack.Navigator>
    )
}