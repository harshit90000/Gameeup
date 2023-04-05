import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { scale } from 'react-native-size-matters';

const TextInputData = ({
    placeHolder,
    onChangeText = () => { },
    inputStyle = {},
    ...props }) => {
    return (
        <TextInput
            placeholder={placeHolder}
            placeholderTextColor={"#979797"}
            style={styles.textInputView}
            {...props}
        />
    );
}
const styles = StyleSheet.create({
    textInputView:{
        fontSize: scale(12),
        backgroundColor: "#ffffff",
        borderColor: "#027CC8",
        borderWidth: scale(1),
        padding: scale(10),
        borderRadius:scale(10),
        marginHorizontal:scale(17)
    }
})
export default TextInputData;