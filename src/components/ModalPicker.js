import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import colors from '../assets/colors/colors'

const ModalPicker = (props) => {
    const Options = ["Male", "Female", "Other"]
    const width = Dimensions.get('window').width
    const height = Dimensions.get("window").height
    const onPressItem = (option) => {
        props.changeModel(false)
        props.setData(option)
    }
    const options = Options.map((item, index) => {
        return (
            <TouchableOpacity
                style={styles.options}
                key={index}
                onPress={() => onPressItem(item)}>
                <Text style={styles.text} >{item}</Text>
            </TouchableOpacity>
        )
    })
    return (
        <TouchableOpacity style={styles.container} onPress={() => { props.changeModel(false) }}>
            <View style={[styles.model,
                //  { width: width - 20, height: height/4.5  }
                 ]}>
                <ScrollView>
                    {options}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    model: {
        backgroundColor: "black",
        borderRadius: scale(20),
        width:scale(300),
        height:scale(150)
    },
    options:{
        alignItems:"flex-start"
    },
    text:{
        fontSize:scale(20),
        padding:scale(15),
        color:colors.solidWhite,
        fontWeight:"bold",
    }
})
export default ModalPicker