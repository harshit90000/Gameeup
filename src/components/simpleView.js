import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import colors from '../assets/colors/colors';

const SimpleView = ({ image, label, innerStyle = {} }) => {
    return (
        <View style={[innerStyle, styles.menuView]}>
            <Image source={image} style={styles.menuImageIcon} />
            <Text style={styles.menuText}>{label}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    menuView: {
        flexDirection: "row",
        padding: scale(10),
        backgroundColor: colors.solidWhite,
        borderColor: colors.borderColor,
        borderWidth: scale(1),
        // justifyContent:"center",
        alignItems:"center",
        borderRadius: scale(10),
        marginHorizontal: scale(17)
    },
    menuImageIcon: {
        width: scale(20),
        height: scale(20),
    },
    menuText: {
        fontSize: scale(13),
        color: colors.solidBlack,
        marginLeft:scale(10),
        fontWeight: "600",
    }
})
export default SimpleView;