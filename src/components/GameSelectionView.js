import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Image, StyleSheet, Text, View } from 'react-native';

import { moderateScale, scale } from 'react-native-size-matters';
import {images} from '../constants/imagePath';
import colors from '../assets/colors/colors';

const GameSelectionView = ({ label }) => {
    return (
        <LinearGradient
            colors={[colors.linearButtonColor1, colors.linearButtonColor2]}
            style={style.selectView} >
            <View style={style.selectBaseView}>
                <Image style={style.selectImageView} source={images.iconPlus} />
                <Text style={style.selectTextView}>{label}</Text>
                <Image style={style.selectImageView} source={images.iconMinus} />
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
        shadowColor: colors.solidRed,
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
          color: colors.solidWhite
    }
})
export default GameSelectionView;