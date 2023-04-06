import React from 'react';
import { StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
import colors from '../assets/styles/colors/colors';

const LooserPay = () => {
    return (
        <LinearGradient
        colors={[colors.linearButtonColor1, colors.linearBackGroundColor2]}
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
        shadowColor: colors.solidRed,
        shadowRadius: scale(1),
        elevation: scale(3),
        borderWidth: scale(0.2),
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        fontSize: scale(15),
        fontWeight: "400",
        color: colors.solidWhite
    }
})
export default LooserPay;