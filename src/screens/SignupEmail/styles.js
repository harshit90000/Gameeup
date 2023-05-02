import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import colors from "../../assets/colors/colors";
const { height, width } = Dimensions.get('window')  

const styles = StyleSheet.create({
    mainView:{
        // justifyContent:"center",
        marginHorizontal:scale(10),
        // alignItems:"center",
        flex:1
    },
    appLogo:{
        alignSelf:"center",
        bottom:scale(40),
        position:'absolute'
    },
    mainProfileView: {
        flexDirection: "row",
        backgroundColor: colors.solidWhite,
        borderColor: colors.borderColor,
        borderWidth: scale(1),
        borderRadius: scale(10),
        padding: scale(5),
        alignItems: "center",
        marginVertical: scale(10),
        justifyContent: "center",
        marginHorizontal: scale(17),
    },
    mainImageIcon: {
        width: scale(20),
        marginStart:scale(10),
        height: scale(20),
    },
    textInputView: {
        fontSize: scale(13),
        width: scale(230),
        height: scale(35),
        marginLeft: scale(10)
    },
    nextButton: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: scale(50),
    },
    headingText1: {
        fontSize: scale(20),
        fontWeight: '700',
        marginTop: scale(60),
    },
    headingText2: {
        fontSize: scale(13),
        marginTop: scale(10),
        marginBottom: scale(30)
    },
    imageStyle:{
        height:scale(30),
        width:scale(30),
        marginStart:scale(-10),
        alignSelf:"flex-end",
        resizeMode:"stretch",
    }
})
export default styles