import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import {images} from '../constants/imagePath';
import colors from '../assets/styles/colors/colors';

const Card = ({ mainImages, title, location, label }) => {
    const [selectedValue, setSelectedValue] = useState(true)
    let imagePaths = selectedValue ? images.iconEmptyHeart : images.iconFilledHeart
    let changeImage = () => setSelectedValue(previousState => !previousState);
    return (
        <TouchableOpacity style={styles.placeView}>
            <Image style={styles.placeImage} source={mainImages} />
            <View style={styles.placeBaseView}>
                <Text style={styles.placeName}>{title}</Text>
                <Text style={styles.placeLocation}>{location}</Text>
                <View style={styles.placeSelectView}>
                    <TouchableOpacity>
                        <LinearGradient
                            colors={[colors.linearButtonColor1, colors.linearButtonColor2]}
                            style={styles.placeButtonView} >
                            <Text style={styles.placeButtonTextView}>{label}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => changeImage()}>
                            <Image style={styles.placeFavorite} source={imagePaths} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    placeView: {
        borderRadius: scale(16),
        marginHorizontal: scale(16),
        height: moderateVerticalScale(150),
        flexDirection: "row",
        backgroundColor: colors.solidWhite
    },
    placeImage: {
        width: scale(130),
        height: moderateVerticalScale(150),
        borderBottomLeftRadius: scale(16),
        borderTopLeftRadius: scale(16),
        resizeMode: "stretch"
    },
    placeBaseView: {
        alignSelf: "center",
        marginStart: scale(15),
        flexDirection: "column"
    },
    placeName: {
        color: colors.solidBlack,
        fontWeight: "bold",
        width: scale(150),
        fontSize: scale(15)
    },
    placeLocation: {
        marginTop: scale(5),
        width: scale(150),
        color: colors.solidBlack,
        fontWeight: "400",
        fontSize: scale(10)
    },
    placeSelectView: {
        flexDirection: "row",
        marginTop: scale(20)
    },
    placeButtonView: {
        width: moderateScale(100),
        borderRadius: 30,
        padding: scale(10),
        shadowColor: colors.solidRed,
        shadowRadius: scale(1),
        elevation: scale(2),
        borderWidth: scale(0.2),
        justifyContent: "center",
        alignItems: "center",
        padding: scale(10)
    },
    placeButtonTextView: {
        fontSize: scale(13),
        fontWeight: "500",
        color: colors.solidWhite
    },
    placeFavorite: {
        width: scale(30),
        height: scale(30),
        resizeMode: "stretch",
        marginLeft: scale(20)
    }
})
export default Card;