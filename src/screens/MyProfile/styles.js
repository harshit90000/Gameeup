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
        marginHorizontal: scale(17),
    },
    myProfileImages: {
        marginTop: scale(30),
        height: scale(150),
        backgroundColor:colors.red,
        borderRadius:scale(50),
        width: scale(150),
        alignSelf: "center",
        resizeMode:"stretch"
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
    dobDate: {
        fontSize: scale(13),
        width: scale(250),
        color: colors.placeHolderColor,
        marginVertical: scale(10),
        marginLeft: scale(10)
    },
    selectImageIcon: {
        width: scale(20),
        height: scale(20),
    },
    modelMainView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: scale(60)
    },
    modelText: {
         marginStart: scale(1) ,
         fontSize:scale(20),
        },
    modelSubText: {
        marginStart: scale(1),
        marginVertical: scale(10), 
    },
    modelButton:{
        height: scale(50),
        width: scale(300),
        borderWidth: 1,
        borderColor: colors.solidBlack
    },
    saveData: {
        paddingHorizontal: scale(50),
        paddingVertical: scale(15),
        marginBottom: scale(30),
        borderWidth: 1,
        borderColor: colors.solidBlack
    }
})
export default styles