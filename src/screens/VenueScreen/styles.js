import { Dimensions, StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
    scrollViewDesign:{
        marginBottom:scale(15),
        flex:1
    },
    photoView: {
        width: scale(350),
        height: scale(200),
        marginTop: scale(20),
        resizeMode: "stretch",
    },
    rightIcon: {
        height: scale(20),
        width: scale(20)
    },
    rightArrowView: {
        height: scale(30),
        width: scale(30),
        borderRadius: scale(20),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.solidWhite,
        marginStart: scale(10)
    },
    carouselView: {
        flexDirection: "row",
        marginEnd: scale(20),
        justifyContent: "space-between",
        marginTop:scale(-180)
    },
    dotSliderView: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop:scale(-20)
    },
    dotSlider: {
        width: scale(12),
        height: scale(12),
        borderRadius: scale(10),
        marginLeft: scale(5),
    },
    baseView:{
        marginTop:scale(180),
        marginStart:scale(20)
    },
    placeName:{
        fontWeight:"bold",
        fontSize:scale(30),
        color:colors.solidBlack,
        width:scale(300),
    },
    placeAddressView:{
        flexDirection:"row",
        marginTop:scale(20),
    },
    placeTimeView:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:scale(20),
    },
    placeAddress:{
        fontSize:scale(14),
        color:colors.solidBlack,
        fontWeight:"500",
        marginStart:scale(15),
        width:scale(150)
    },
    placeTime:{
        fontSize:scale(14),
        color:colors.solidBlack,
        fontWeight:"500",
        marginStart:scale(15),
    },
    placeTimePM:{
        fontSize:scale(14),
        color:colors.solidBlack,
        fontWeight:"500",
        marginStart:scale(5),
    },
    placeTimeArrow:{
        fontSize:scale(14),
        color:colors.solidBlack,
        fontWeight:"500",
        marginStart:scale(5),
    },
    placeGoogleMapView:{
        height: scale(40),
        width: scale(140),
        borderRadius: scale(20),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:"row",
        backgroundColor: colors.skyBlue,
        marginStart: scale(50),
        marginTop:scale(20)
    },
    placeGoogleImageView:{
        height: scale(20),
        width: scale(20),
        borderRadius: scale(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.solidWhite
    },
    placeGoogleMapText:{
        fontSize:scale(15),
        color:colors.solidWhite,
        fontWeight:"400",
        marginStart:scale(5),
    },
    availableGame:{
        marginStart:scale(20),
        color:colors.solidBlack,
        fontSize:scale(15),
        fontWeight:"900",
        marginBottom:scale(20)
     },
    showingGameView:{
        flexDirection:"row",
        marginBottom:scale(20),
        flexWrap:1,
        justifyContent:"space-evenly"
    },
    showingGameBaseView:{
        backgroundColor:colors.skyBlue,
        height:scale(130),
        width:scale(120),
        justifyContent:"space-between",
        borderRadius:scale(20),
        marginBottom:scale(20),
    },
    gameImageView:{
        marginTop:scale(10),
        alignSelf:"center",
        height:scale(70),
        width:scale(70),
        resizeMode:"stretch"
    },
    textViewGame:{
        width:scale(120),
        alignItems:"center",
        justifyContent:"center",
        height:scale(40),
        borderBottomStartRadius:scale(20),
        borderBottomEndRadius:scale(20),
        backgroundColor:colors.soliPurple
    },
    gameNameText:{
        color:colors.solidWhite,
        fontSize:scale(20),
        fontWeight:"800",
    },
    model: {
        backgroundColor:colors.skyBlue,
        maxHeight:Dimensions.get('window').height * 0.4,
        height:Dimensions.get('window').height * 0.3,
        bottom:0,
        width:"100%",
        alignItems:"center",
        alignContent:"center",
        position:"absolute",
        bottom:0,
        borderTopEndRadius:scale(20),
        borderTopStartRadius:scale(20)
    },
})
export default styles