import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import colors from "../../assets/colors/colors";
const { height, width } = Dimensions.get('window')  

const styles = StyleSheet.create({
    mainView:{
        marginHorizontal:scale(10),
        flex:1
    },

    profileView: {
        height:scale(60),
        backgroundColor: colors.skyBlue,
        borderRadius: scale(10),
        flexDirection: 'row',
        marginTop: scale(20),
        marginBottom: scale(20),
        alignItems:'center',
        justifyContent:"space-between",
    },

    profileImage: {
        height: scale(40),
        width: scale(40),
        marginStart:scale(12)
    },

    profileName:{
        fontSize: scale(17),
        color: colors.solidWhite,
        fontWeight: '600',
        marginRight:scale(90)
    },

    rightArrowView: {
        height: scale(40),
        width: scale(40),
        borderRadius: scale(20),
        justifyContent:'center',
        alignItems:'center',
        marginRight:scale(20),
        backgroundColor: colors.solidWhite
    },

    rightIcon: {
        height: scale(20),
        width: scale(20)
    },

    searchIcon: { 
        height: scale(20),
        width: scale(20),
        marginEnd: scale(15)
    },

    searchInputView: {
        fontSize: scale(12),
        borderColor: colors.borderColor,
        borderWidth: scale(1),
        padding: scale(10),
        borderRadius:scale(20),
        flexDirection: 'row'
    },

    headingText: {
        fontSize: scale(16),
        color: colors.solidBlack,
        fontWeight: '600',
        marginTop: scale(30),
        marginBottom: scale(20)
    }
    

})
export default styles