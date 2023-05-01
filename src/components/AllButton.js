import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import colors from '../assets/colors/colors';

const AllButton = ({ label ,innerStyle = {}, onPress}) => {
    return (
        <TouchableOpacity
            // colors={[colors.linearButtonColor1, colors.linearButtonColor2]}
            style={[styles.linearData,innerStyle]}
            onPress={() => {
                onPress();
              }}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    linearData: {
        width: scale(100),
        alignSelf: "center",
        height: verticalScale(50),
        marginVertical: moderateVerticalScale(10),
        borderRadius: scale(50),
        backgroundColor: colors.linearButtonColor1,
        shadowColor: colors.solidRed,
        shadowRadius: scale(1),
        elevation: scale(1),
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