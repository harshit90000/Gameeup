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
    searchIcon: {
        height: scale(20),
        width: scale(20),
        marginEnd: scale(15),
    },
    searchInputView: {
        fontSize: scale(12),
        borderColor: colors.borderColor,
        borderWidth: scale(1),
        padding: scale(10),
        borderRadius: scale(20),
        flexDirection: 'row',
        marginHorizontal: scale(15),
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
    
})
export default styles