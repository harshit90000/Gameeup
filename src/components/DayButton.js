import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { scale } from 'react-native-size-matters';
import colors from '../assets/styles/colors/colors';

const DayButton = ({ button }) => {
    const [selectedValue, setSelectedValue] = useState(0)

    const handleData = (item, id) => {
        setSelectedValue(id)
    }
    return (
        <View style={styles.buttonView}>
            {
                button.map((buttonLabel, index) => {
                    return (
                        <TouchableOpacity
                            onPress={(item) => handleData(item, index)}
                            key={index}
                            style={[index === selectedValue ? styles.buttonActive : styles.button]}>
                            <Text style={[styles.textViewData,[index === selectedValue ? styles.todayText : styles.todayTextActive]]}>
                                {buttonLabel}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    buttonView: {
        flexDirection: "row",
        alignSelf:"center"
    },
    button: {
        width: scale(120),
        height: scale(40),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.solidWhite,
        borderWidth: 0.5,
        borderRadius:scale(20),
        borderColor: colors.solidBlack,
        marginHorizontal:scale(10)
    },
    buttonActive: {
        width: scale(120),
        height: scale(40),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.skyBlue,
        borderWidth: 0.5,
        borderColor: colors.solidBlack,
        borderRadius:scale(20),
        marginHorizontal:scale(10)
    },
    todayText: {
        color: colors.solidWhite
    },
    todayTextActive: {
        color: colors.solidBlack
    },
    textViewData:{
        fontSize:scale(15),
        fontWeight:"500"
    }
})

export default DayButton;
