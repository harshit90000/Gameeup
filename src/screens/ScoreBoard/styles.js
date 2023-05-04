import { Dimensions, StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import colors from "../../assets/colors/colors";
const styles = StyleSheet.create({
  startButtonView: {
    justifyContent: "center",
    alignItems: "center",
  },
  saveButtonViewData: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom:scale(20)
  },
  placeButtonView: {
    width: scale(180),
    flexDirection: "row",
    borderRadius: 30,
    height: scale(50),
    shadowColor: colors.solidRed,
    shadowRadius: scale(1),
    elevation: scale(2),
    borderWidth: scale(0.2),
    justifyContent: "center",
    alignItems: "center",
  },

  iconView: {
    height: scale(20),
    width: scale(20),
    marginRight: scale(10)
  },
  placeButtonTextView: {
    fontSize: scale(15),
    fontWeight: "700",
    color: colors.solidWhite
  },
  modelPlayerNames: {
    fontSize: scale(20),
    fontWeight: "600",
    marginStart: scale(30)
  },
  modelPlayer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: scale(20)
  },
  model: {
    backgroundColor: colors.lightWhite,
    maxHeight: Dimensions.get('window').height,
    height: Dimensions.get('window').height * 0.62,
    bottom: 0,
    width: "100%",
    // alignItems:"center",
    position: "absolute",
    borderTopEndRadius: scale(20),
    borderTopStartRadius: scale(20)
  },
  saveButtonView: {
    width: scale(180),
    flexDirection: "row",
    borderRadius: 30,
    height: scale(50),
    shadowColor: colors.solidRed,
    shadowRadius: scale(1),
    elevation: scale(2),
    borderWidth: scale(0.2),
    justifyContent: "center",
    alignItems: "center",
  },
  mainView: {
    // justifyContent:"center",
    marginHorizontal: scale(10),
    // alignItems:"center",
    flex: 1
  },
  appLogo: {
    alignSelf: "center",
    bottom: scale(40),
    position: 'absolute'
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
    marginStart: scale(10),
    height: scale(20),
  },
  textInputView: {
    fontSize: scale(13),
    width: scale(270),
    height: scale(40),
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
  imageStyle: {
    height: scale(30),
    width: scale(30),
    marginStart: scale(-10),
    alignSelf: "flex-end",
    resizeMode: "stretch",
  }
})
export default styles