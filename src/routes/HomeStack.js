import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoarding } from "../screens";
import navigationStrings from '../constants/navigationStrings';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
    return (
            <Stack.Navigator>
                <Stack.Screen name={navigationStrings.ONBOARDING} component={OnBoarding} />
            </Stack.Navigator>
    )
}