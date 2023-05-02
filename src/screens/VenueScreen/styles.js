import {  StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
import { scale } from "react-native-size-matters";

const styles = StyleSheet.create({
    scrollViewDesign:{
        width: scale(350),
    },
    photoView: {
        width: scale(350),
        height: scale(200),
        resizeMode: "stretch",
        borderBottomEndRadius:scale(30),
        borderBottomStartRadius:scale(30)
    },
    carouselView:{
        flexDirection:"row",
        
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
        backgroundColor: colors.solidWhite
    },
    carouselView:{
        flexDirection:"row"
    },
    modelImageZoom:{
        marginTop:20
    },
    modelSliderView: {
        width: "80%",
        height: "70%",
        resizeMode: "stretch",
        marginHorizontal:10,
        alignSelf:"center"
    },
    modelSmallSliderView: {
        alignSelf: "center",
    },
    mainView: {
        backgroundColor: colors.solidWhite,
        height: "100%"
    },
    scrollImage: {
        alignSelf: "center",
        marginTop: "5%",
        width: "100%",
        // marginVertical:"10%"
    },
    dotSliderView: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: scale(-20)
    },
    dotSlider: {
        width: scale(12),
        height: scale(12),
        borderRadius: scale(10),
        marginLeft: scale(5),
    },
    dataview : {
        width: "100%",
        height: "100%",
        marginLeft: "5%",
        marginBottom: "10%"
    },
    baseView: {
        flexDirection: "row",
        marginVertical: "2%",
    },
    mainText: {
        fontSize: 16,
        fontWeight: "700",
        width: "30%",
        color: colors.solidBlack
    },
    columText: {
        fontSize: 16,
        fontWeight: "700",
        width: "2%",
        marginHorizontal: "1%",
        color: colors.solidBlack
    },
    viewText: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.solidBlack
    },
    viewSymbol:{
        fontSize: 16,
        fontWeight: "500",
        color: colors.solidRed,
    },
    viewDes: {
        fontSize: 16,
        fontWeight: "500",
        color: colors.solidBlack,
        width: "50%"
    },
    ratingStyle:{
        marginTop:"2%"
    },
    crossImage: {
        height: 20,
        width: 20,
        marginVertical: "5%",
        marginLeft: "1%"
    },
    modelScrollImageView: {
        alignSelf: "center",
        width: "100%",
    },
    imageSmallSliderView: {
        flexDirection: "row",
        marginBottom: "10%"
    },
    crossImageModel: {
        height: 20,
        width: 20,
        marginTop: "15%",
        marginBottom: "10%",
        marginLeft: "1%"
    },
})
export default styles