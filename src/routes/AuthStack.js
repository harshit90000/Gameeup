import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignupEmail, SignupOTP } from "../screens";
import navigationStrings from '../constants/navigationStrings';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
            <Stack.Navigator screenOptions={{headerShown : true}}>
                <Stack.Screen name={navigationStrings.SIGNUP_EMAIL} component={SignupEmail} />
                <Stack.Screen name={navigationStrings.SIGNUP_OTP} component={SignupOTP} />
                <Stack.Screen name={navigationStrings.ONBOARDING} component={OnBoarding} />

            </Stack.Navigator>
    )
}