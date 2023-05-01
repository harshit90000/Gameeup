import { Dimensions, StyleSheet } from "react-native";
import { moderateVerticalScale, scale, verticalScale } from "react-native-size-matters";
import colors from "../../assets/colors/colors";
const { height, width } = Dimensions.get('window')  

const styles = StyleSheet.create({
    mainView:{
        // justifyContent:"center",
        // alignContent:"center",
        // alignItems:"center",
        flex:1
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
    subtitle: {
        color: colors.solidWhite,
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
      },
      title: {
        color: colors.solidWhite,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
      },
      image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
      },
      btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      },
   
})
export default styles