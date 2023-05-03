import { Dimensions, StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, scale } from "react-native-size-matters";
import colors from "../../assets/colors/colors";
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    baseView: {
        backgroundColor: colors.solidWhite,
        borderBottomEndRadius:scale(30),
        borderBottomStartRadius:scale(30),
        paddingBottom:scale(20),
        paddingTop:scale(50)
    },
    profileView: {
        height: scale(50),
        backgroundColor: colors.skyBlue,
        borderRadius: scale(10),
        flexDirection: 'row',
        marginTop: scale(20),
        marginBottom: scale(20),
        alignItems: 'center',
        justifyContent: "space-between",
        marginHorizontal: scale(15),
    },
    profileImage: {
        height: scale(40),
        width: scale(40),
        marginStart: scale(12),
        resizeMode:"stretch"
    },
    profileName: {
        fontSize: scale(15),
        color: colors.solidWhite,
        fontWeight: '600',
        marginRight: scale(90)
    },
    rightArrowView: {
        height: scale(40),
        width: scale(40),
        borderRadius: scale(20),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scale(20),
        backgroundColor: colors.solidWhite
    },
    rightIcon: {
        height: scale(20),
        width: scale(20)
    },
    searchInputView: {
        fontSize: scale(12),
        borderColor: colors.borderColor,
        borderWidth: scale(1),
        alignItems:"center",
        height:scale(50),
        borderRadius: scale(20),
        flexDirection: 'row',
        marginHorizontal: scale(15),
    },
    searchIcon: {
        height: scale(20),
        width: scale(20),
        marginHorizontal: scale(10),
        // alignSelf:"center"
    },
    searchPlaces:{
        fontSize:scale(12)
    },
    vendorDetails: {
        marginHorizontal: scale(15),
        marginBottom:scale(280)
    },
    headingText: {
        fontSize: scale(16),
        color: colors.solidBlack,
        fontWeight: '600',
        marginTop: scale(30),
        marginBottom: scale(20)
    },
    placeView: {
        borderRadius: scale(16),
        marginHorizontal: scale(5),
        height: scale(130),
        flexDirection: "row",
        backgroundColor: colors.solidWhite,
        marginBottom: scale(20)
    },
    placeImage: {
        width: scale(130),
        height: scale(130),
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
export default styles