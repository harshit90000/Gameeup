import React from 'react';

import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import TextInputData from './SigninTextInputLabel';
import SimpleView from './simpleView';

import SmallButton from './SmallButton';
import AllButton from './AllButton';
import Card from './card';
import GameSelectionView from './GameSelectionView';
import MyProfileTextInput from './myProfileTextInput';
import LooserPay from './LooserPay';

import LinearGradient from 'react-native-linear-gradient';
import{ images } from '../constants/imagePath';
import colors from '../assets/styles/colors/colors';
import DayButton from './DayButton';

const Background = () => {
    return (
        <LinearGradient
            colors={[colors.linearBackGroundColor1, colors.linearBackGroundColor2]}
            style={{ height: "100%" }}
            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1.2 }} >
            <SafeAreaView>
                <ScrollView>
                    <SmallButton  />
                    <TextInputData placeHolder='Please enter your first name' />
                    <SimpleView
                        image={images.backgroundImage}
                        label={"My Profile"}
                        innerStyle={{ marginVertical: 10 }} />
                    <AllButton label={"Submit"} />
                    <Card
                        label={"Book Now"}
                        mainImages={images.myProfile}
                        title={"I am Sarthi Raval.I like Racing"}
                        location={"I am Sarthi Raval.I like Racing"} />
                    <GameSelectionView label={1} />
                    <MyProfileTextInput
                        imageIcon={images.myProfile}
                        placeHolder='Please enter your first name' />
                    <LooserPay />
                    <DayButton 
                        button={["Today","Tomorrow"]}/>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>

    )
}
export default Background