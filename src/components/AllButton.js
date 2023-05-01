import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import colors from '../assets/colors/colors';

const AllButton = ({ label }) => {
    return (
        <LinearGradient
            colors={[colors.linearButtonColor1, colors.linearButtonColor2]}
            style={styles.linearData} >
            <Text style={styles.label}>{label}</Text>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    linearData: {
        width: scale(330),
        alignSelf: "center",
        height: verticalScale(50),
        marginVertical: moderateVerticalScale(10),
        borderRadius: scale(50),
        shadowColor: colors.solidRed,
        shadowRadius: scale(1),
        elevation: scale(1),
        borderWidth: scale(0.2),
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        fontSize: scale(25),
        fontWeight: "400",
        color: colors.solidWhite
    }
})
export default AllButton;