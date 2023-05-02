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

   
    

})
export default styles