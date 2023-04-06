import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignupEmail, SignupOTP, OnBoarding, VenueScreen, GameScreen, BookingScreen, PaymentScreen, ScoreBoardNames, MyProfile, TermsScreen, LoserPayScreen } from "../screens";
import navigationStrings from '../constants/navigationStrings';
import BottomStack from './BottomStack';

const Stack = createNativeStackNavigator();
export default function AuthStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name={navigationStrings.SIGNUP_EMAIL} component={SignupEmail} />
            <Stack.Screen name={navigationStrings.SIGNUP_OTP} component={SignupOTP} />
            <Stack.Screen name={navigationStrings.ONBOARDING} component={OnBoarding} />
            <Stack.Screen name={navigationStrings.HOME_SCREEN} 
            component={BottomStack} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.VENUE_SCREEN} component={VenueScreen} />
            <Stack.Screen name={navigationStrings.GAME_SCREEN} component={GameScreen} />
            <Stack.Screen name={navigationStrings.LOSER_PAY} component={LoserPayScreen} />
            <Stack.Screen name={navigationStrings.BOOKING_SCREEN} component={BookingScreen} />
            <Stack.Screen name={navigationStrings.PAYMENT_SCREEN} component={PaymentScreen} />
            <Stack.Screen name={navigationStrings.SCOREBOARD_NAME} component={ScoreBoardNames} />
            <Stack.Screen name={navigationStrings.MY_PROFILE} component={MyProfile} />
            <Stack.Screen name={navigationStrings.TERMS_SCREEN} component={TermsScreen} />
        </Stack.Navigator>
    )
}