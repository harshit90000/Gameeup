import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"
import { scale } from "react-native-size-matters"

const styles = StyleSheet.create({
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
        marginHorizontal: scale(17)
    },
    myProfileImages: {
        marginTop: scale(30),
        height: scale(120),
        width: scale(120),
        alignSelf: "center",
        resizeMode: "stretch",
        borderRadius: scale(120)
    },
    myUpdateImages: {
        marginTop: scale(-50),
        height: scale(50),
        width: scale(50),
        marginLeft: scale(90),
        alignSelf: "center",
        resizeMode: "stretch",
        borderRadius: scale(120)
    },
    mainImageIcon: {
        width: scale(20),
        height: scale(20),
    },
    textInputView: {
        fontSize: scale(13),
        width: scale(250),
        height: scale(35),
        marginLeft: scale(10)
    },
    selectImageIcon: {
        width: scale(20),
        height: scale(20),
    },
    datePickerStyle: {
        fontSize: scale(13),
        width: scale(250),
        marginLeft: scale(10),       
    },

})
export default styles