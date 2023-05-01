import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import colors from '../assets/colors/colors';

const AllButton = ({ label ,innerStyle = {}, onPress}) => {
    return (
        <TouchableOpacity
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
        alignSelf: "center",
        marginVertical: moderateVerticalScale(10),
        borderRadius: scale(50),
        backgroundColor: '#fff',
        justifyContent: 'center', 
        alignItems:"center" 
    },
    label: {
        fontSize: scale(15),
        fontWeight: "bold",
        color: colors.solidBlack
    }
})
export default AllButton;