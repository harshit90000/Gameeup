import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Image, StyleSheet, Text, View } from 'react-native';
import { add, minus } from '..';
import { moderateScale, scale } from 'react-native-size-matters';

const GameSelectionView = ({ label }) => {
    return (
        <LinearGradient
            colors={['#473B6D', '#80d4ff']}
            style={style.selectView} >
            <View style={style.selectBaseView}>
                <Image style={style.selectImageView} source={add} />
                <Text style={style.selectTextView}>{label}</Text>
                <Image style={style.selectImageView} source={minus} />
            </View>
        </LinearGradient>
    );
}
const style = StyleSheet.create({
    selectView:{
        width: moderateScale(150),
        alignSelf: "center",
        height: moderateScale(40),
        marginVertical: scale(10),
        borderRadius: scale(20),
        shadowColor: '#FF0000',
        shadowRadius: scale(1),
        elevation: scale(20),
        borderWidth: scale(0.2),
    },
    selectBaseView:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal:scale(10),
        marginVertical:scale(5)
    },
    selectImageView:{
        width: moderateScale(30),
        height: moderateScale(30),
        resizeMode: "stretch"
    },
    selectTextView:{
        fontSize: scale(20),
         fontWeight: "400",
          color: "white"
    }
})
export default GameSelectionView;