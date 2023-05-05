import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignupEmail, SignupOTP, OnBoarding, VenueScreen, GameScreen, BookingScreen, PaymentScreen, ScoreBoardNames, MyProfile, TermsScreen, LoserPayScreen, SplashScreen } from "../screens";
import navigationStrings from '../constants/navigationStrings';
import BottomStack from './BottomStack';
import colors from '../assets/colors/colors';
import { scale } from 'react-native-size-matters';
import { Image, TouchableOpacity } from 'react-native';
import { images } from '../constants/imagePath';

const Stack = createNativeStackNavigator();
export default function AuthStack({ navigation }) {
    return (

        <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name={navigationStrings.ONBOARDING} component={OnBoarding} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.SIGNUP_EMAIL} component={SignupEmail} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.SIGNUP_OTP} component={SignupOTP} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.SPLASH_SCREEN} component={SplashScreen} options={{ headerShown: false }} />
      
            <Stack.Screen name={navigationStrings.HOME_SCREEN} component={BottomStack} options={{ headerShown: false }} />

            <Stack.Screen name={navigationStrings.VENUE_SCREEN} component={VenueScreen}
                options={{
                    headerShown: false,
                    headerTitle: "VenueScreen",
                    headerTintColor: colors.borderColor,
                    headerTitleStyle: { fontSize: scale(16) }
                }} />
            <Stack.Screen name={navigationStrings.GAME_SCREEN}
                component={GameScreen}
                options={{
                    headerShown: false,
                    headerTitle: "GameScreen",
                    headerTintColor: colors.borderColor,
                    headerTitleStyle: { fontSize: scale(16) }
                }} />
            <Stack.Screen name={navigationStrings.LOSER_PAY} component={LoserPayScreen}
                options={{
                    headerTitle: "LoserPayScreen",
                    headerTintColor: colors.borderColor,
                    headerTitleStyle: { fontSize: scale(16) }
                }} />
            <Stack.Screen name={navigationStrings.BOOKING_SCREEN} component={BookingScreen}
                options={{
                    headerTitle: "BookingScreen",
                    headerTintColor: colors.borderColor,
                    headerTitleStyle: { fontSize: scale(16) },

                }} />
            <Stack.Screen name={navigationStrings.PAYMENT_SCREEN} component={PaymentScreen}
                options={{
                    headerTitle: "PaymentScreen",
                    headerTintColor: colors.borderColor,
                    headerTitleStyle: { fontSize: scale(16) }
                }} />
            <Stack.Screen name={navigationStrings.SCOREBOARD_NAME}
                component={ScoreBoardNames}
                options={{
                    headerTitle: "ScoreBoardNames",
                    headerTintColor: colors.borderColor,
                    headerTitleStyle: { fontSize: scale(16) }
                }} />

            <Stack.Screen name={navigationStrings.TERMS_SCREEN} component={TermsScreen}
                options={{
                    headerTitle: "TermsScreen",
                    headerTintColor: colors.borderColor,
                    headerTitleStyle: { fontSize: scale(16) }
                }} />
            <Stack.Screen name={navigationStrings.MY_PROFILE} component={MyProfile}
                options={{
                    headerTitle: "MyProfile",
                    headerTintColor: colors.borderColor,
                    headerTitleStyle: { fontSize: scale(16) }
                }} />

        </Stack.Navigator>
    )
}