import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import colors from "../../assets/colors/colors";
const styles = StyleSheet.create({
    tournamentsText: {
        marginTop: scale(20),
        marginStart: scale(15),
        fontSize: scale(15),
        fontWeight: "bold",
    },
    ScoreView: {
        backgroundColor: colors.solidWhite,
        marginVertical: scale(10),
        marginHorizontal: scale(20),
        padding: scale(15),
        borderRadius:scale(20)
    },
    playerData:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:scale(120),
        marginTop:scale(5),
        alignSelf:"flex-end"
    },
    placeName:{
        fontSize: scale(13),
        fontWeight: "bold"
    },
    playerNameView:{
        flexDirection:"row",
        justifyContent:"space-between",
        a:"center"
    },
    playerScoreWinner:{
        fontSize: scale(13),
        fontWeight: "400",
        alignSelf:"center",
        color:colors.skyBlue,
        alignSelf:"center"
    },
    playerScore:{
        fontSize: scale(13),
        fontWeight: "400",
        alignSelf:"center",
        color:colors.solidBlack
    }
})
export default styles