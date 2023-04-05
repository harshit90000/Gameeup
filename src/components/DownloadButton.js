import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { scale } from 'react-native-size-matters';

const DownloadButton = ({ button }) => {
    const [seletedvalue, setselectValue] = useState(0)

    const handleData = (item, id) => {
        setselectValue(id)
    }
    return (
        <View style={styles.buttonView}>
            {
                button.map((buttonLabel, index) => {
                    return (
                        <TouchableOpacity
                            onPress={(item) => handleData(item, index)}
                            key={index}
                            style={[index === seletedvalue ? styles.buttonActive : styles.button]}>
                            <Text style={[styles.textViewData,[index === seletedvalue ? styles.todayText : styles.todayTextActive]]}>
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
        backgroundColor: "#288FCF",
        borderWidth: 0.5,
        borderRadius:scale(20),
        borderColor: "black",
        marginHorizontal:scale(10)
    },
    buttonActive: {
        width: scale(120),
        height: scale(40),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderWidth: 0.5,
        borderColor: "black",
        borderRadius:scale(20),
        marginHorizontal:scale(10)
    },
    todayText: {
        color: "black"
    },
    todayTextActive: {
        color: "white"
    },
    textViewData:{
        fontSize:scale(15),
        fontWeight:"500"
    }
})

export default DownloadButton;
