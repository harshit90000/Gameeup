import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import colors from "../../assets/colors/colors";
const { height, width } = Dimensions.get('window')  

const styles = StyleSheet.create({
    mainView:{
        justifyContent:"center",
        // alignContent:"center",
        alignItems:"center",
        // flex:1
    },
    appLogo:{
        alignSelf:"center",
        marginTop:scale(50)
    },
    flatScreen:{
        marginTop:scale(-50),
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"white",
        height:scale(450),
        width:width
    },
    onBoardingImages: {
        resizeMode: "contain",
        height:scale(240),
        // width:width,
        alignSelf:"center",
        width:scale(260)
    },
    featuresText: {
        fontSize: scale(15),
        fontWeight: 'bold',
        color: "#427186",
        alignSelf: "center",
        marginVertical: scale(1),
    },
    getStartedView: {
        height: 48,
        width: 261,
        backgroundColor: colors.solidBlue,
        borderRadius: 48,
        display: "flex",
        padding: 15,
        alignSelf: "center",
        bottom:"5%"
    },
    getStartedText: {
        color: colors.solidWhite,
        fontSize: 16,
        fontWeight: "500",
        alignItems: "center",
        textAlign: "center"
    }

})
export default styles