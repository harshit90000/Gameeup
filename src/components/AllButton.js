import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';

const AllButton = ({ label }) => {
    return (
        <LinearGradient
            colors={['#473B6D', '#80d4ff']}
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
        shadowColor: '#FF0000',
        shadowRadius: scale(1),
        elevation: scale(20),
        borderWidth: scale(0.2),
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        fontSize: scale(25),
        fontWeight: "400",
        color: "white"
    }
})
export default AllButton;