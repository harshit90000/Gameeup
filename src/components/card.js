import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { heart, human } from '..';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const Card = ({ images, title, location, label, imageFavourite }) => {
    return (
        <Pressable style={styles.placeView}>
            <Image style={styles.placeImage} source={images} />
            <View style={styles.placeBaseView}>
                <Text style={styles.placeName}>{title}</Text>
                <Text style={styles.placeLocation}>{location}</Text>
                <View style={styles.placeSelectView}>
                    <LinearGradient
                        colors={['#473B6D', '#80d4ff']}
                        style={styles.placeButtonView} >
                        <Text style={styles.placeButtonTextView}>{label}</Text>
                    </LinearGradient>
                    {/* <TouchableOpacity> */}
                    <Image style={styles.placeFavourite} source={heart} />
                    {/* </TouchableOpacity> */}
                </View>
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    placeView: {
        borderRadius: scale(16),
        marginHorizontal: scale(16),
        height: moderateVerticalScale(150),
        flexDirection: "row",
        backgroundColor: "white"
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
        color: "black",
        fontWeight: "bold",
        width: scale(150),
        fontSize: scale(15)
    },
    placeLocation: {
        marginTop: scale(5),
        width: scale(150),
        color: "black",
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
        shadowColor: '#FF0000',
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
        color: "white"
    },
    placeFavourite:{
        width: scale(30),
        height: scale(30),
        resizeMode: "stretch",
        marginLeft: scale(20)
    }
})
export default Card;