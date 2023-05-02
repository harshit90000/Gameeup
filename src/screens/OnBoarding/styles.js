import { Dimensions, StyleSheet } from "react-native";
import { moderateVerticalScale, scale, verticalScale } from "react-native-size-matters";
import colors from "../../assets/colors/colors";
const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  mainView: {
    // justifyContent:"center",
    // alignContent:"center",
    // alignItems:"center",
    flex: 1
  },
  appLogo: {
    alignSelf: "center",
    marginTop: scale(50)
  },
  flatScreen: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"white",
    height: scale(400),
    width: width
  },
  onBoardingImages: {
    resizeMode: "contain",
    height: scale(240),
    alignSelf: "center",
    width: scale(260)
  },
  featuresText: {
    fontSize: scale(15),
    fontWeight: 'bold',
    color: "#427186",
    alignSelf: "center",
    marginVertical: scale(1),
  },
  indicator: {
    height: scale(4),
    width: scale(10),
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  lineView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerView: {
    justifyContent: 'space-between',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    marginBottom:scale(5)
  },
  skipButton: {
    backgroundColor: "transparent",
    borderColor: colors.solidBlack,
    borderWidth: scale(1),
    paddingHorizontal: scale(40),
    paddingVertical: scale(10)
  },
  nextButton: {
    paddingHorizontal: scale(40),
    paddingVertical: scale(10),
    marginStart: scale(20)
  },
  startedButton: {
    paddingVertical: scale(15),
    paddingHorizontal: scale(100)
  },

})
export default styles