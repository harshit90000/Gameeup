import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { scale } from 'react-native-size-matters';
import colors from '../assets/colors/colors';

const TextInputData = ({
    placeHolder,
    onChangeText = () => { },
    inputStyle = {},
    ...props }) => {
    return (
        <TextInput
            placeholder={placeHolder}
            placeholderTextColor={colors.placeHolderColor}
            style={styles.textInputView}
            {...props}
        />
    );
}
const styles = StyleSheet.create({
    textInputView:{
        fontSize: scale(12),
        backgroundColor: colors.solidWhite,
        borderColor: colors.borderColor,
        borderWidth: scale(1),
        padding: scale(10),
        borderRadius:scale(10),
        // marginHorizontal:scale(17)
    }
})
export default TextInputData;