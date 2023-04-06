import React from 'react';
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';
import { scale } from 'react-native-size-matters';
import colors from '../assets/styles/colors/colors';

const MyProfileTextInput = ({
    placeHolder,
    onChangeText = () => { },
    inputStyle = {},
    imageIcon,
    ...props }) => {
    return (
        <View style={styles.mainProfileView}>
            <Image source={imageIcon} style={styles.mainImageIcon} />
            <TextInput
                placeholder={placeHolder}
                placeholderTextColor={colors.placeHolderColor}
                style={styles.textInputView}
                {...props}
            />
            <Image source={imageIcon} style={styles.selectImageIcon} />
        </View>
    );
}
const styles = StyleSheet.create({
    mainProfileView: {
        flexDirection: "row",
        backgroundColor: colors.solidWhite,
        borderColor: colors.borderColor,
        borderWidth: scale(1),
        borderRadius: scale(10),
        padding:scale(10),
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:scale(17)
    },
    mainImageIcon: {
        width: scale(20),
        height: scale(20),
    },
    textInputView: {
        fontSize: scale(15),
        width:scale(250),
        marginLeft:scale(5)
    },
    selectImageIcon:{
        width: scale(20),
        height: scale(20),
    }
})
export default MyProfileTextInput;