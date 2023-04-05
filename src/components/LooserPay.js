import React from 'react';
import { StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';

const LooserPay = () => {
    return (
        <LinearGradient
        colors={['#473B6D', '#80d4ff']}
        style={styles.linearData} >
        <Text style={styles.label}>Losser's Pay</Text>
    </LinearGradient>
    );
}
const styles = StyleSheet.create({
    linearData: {
        width: moderateScale(150),
        alignSelf: "center",
        height: scale(40),
        marginVertical: moderateVerticalScale(10),
        borderRadius: scale(50),
        shadowColor: '#FF0000',
        shadowRadius: scale(1),
        elevation: scale(3),
        borderWidth: scale(0.2),
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        fontSize: scale(15),
        fontWeight: "400",
        color: "white"
    }
})
export default LooserPay;