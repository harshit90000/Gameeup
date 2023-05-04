import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import colors from '../assets/colors/colors'

const ModalPicker = (props) => {
    const Options = ["Male", "Female", "Other"]
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
            <View style={styles.model}>
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
    },
    model: {
        backgroundColor:colors.skyBlue,
        maxHeight:Dimensions.get('window').height * 0.4,
        height:Dimensions.get('window').height * 0.3,
        bottom:0,
        width:"100%",
        alignItems:"center",
        alignContent:"center",
        position:"absolute",
        bottom:0,
        borderTopEndRadius:scale(20),
        borderTopStartRadius:scale(20)
    },
    options:{
        // alignItems:"flex-start"
        bottom:scale(0),
        width:"100%"
    },
    text:{
        fontSize:scale(20),
        padding:scale(15),
        color:colors.solidWhite,
        fontWeight:"bold",
    }
})
export default ModalPicker