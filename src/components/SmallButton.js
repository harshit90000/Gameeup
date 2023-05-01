import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale } from 'react-native-size-matters';
import colors from '../assets/colors/colors';

const SmallButton = () => {
    return (
        <LinearGradient
            colors={[colors.linearButtonColor1, colors.linearButtonColor2]}
            style={styles.onBoardingButtonView} >
            <Text style={styles.onBoardingButtonText}>NEXT</Text>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    onBoardingButtonView: {
        width: scale(150),
        height: scale(50),
        marginVertical: scale(10),
        borderRadius: scale(50),
        shadowColor: colors.solidWhite,
        shadowRadius: scale(50),
        elevation: scale(20),
        borderWidth: scale(0.2),
        justifyContent: "center",
        alignItems: "center"
    },
    onBoardingButtonText: {
        fontSize: scale(25),
        fontWeight: "700",
        color: colors.solidWhite
    }
})
export default SmallButton
