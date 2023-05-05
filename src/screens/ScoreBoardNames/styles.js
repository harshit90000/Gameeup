import { scale } from "react-native-size-matters";
import colors from "../../assets/colors/colors";

const { StyleSheet } = require("react-native");
const styles = StyleSheet.create({
    playerNames:{  
        fontSize: scale(20),
        color:colors.solidWhite,
        fontWeight:"500"
    },
    playerScore:{
        fontSize: scale(20),
        color:colors.solidBlack,
        fontWeight:"500"
    },
    playerNameView:{
        flexDirection:"row",
        justifyContent:"center",
    },
    playerNameModel:{
        backgroundColor:colors.soliPurple,
        marginVertical:scale(10),
        height:scale(40),
        width:scale(150),
        justifyContent:"center",
        alignItems:"center",
        borderBottomStartRadius:scale(10),
        borderTopStartRadius:scale(10)
    },
    playerScoreModel:{
        backgroundColor:colors.skyBlue,
        marginVertical:scale(10),
        height:scale(40),
        width:scale(150),
        justifyContent:"center",
        alignItems:"center",
        borderTopEndRadius:scale(10),
        borderBottomEndRadius:scale(10)
    }
})
export default styles