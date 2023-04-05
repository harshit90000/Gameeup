import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale } from 'react-native-size-matters';

const SmallButton = () => {
    return (
        <LinearGradient
            colors={['#473B6D', '#80d4ff']}
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
        shadowColor: '#FF0000',
        shadowRadius: scale(50),
        elevation: scale(20),
        borderWidth: scale(0.2),
        justifyContent: "center",
        alignItems: "center"
    },
    onBoardingButtonText: {
        fontSize: scale(25),
        fontWeight: "700",
        color: "white"
    }
})
export default SmallButton
