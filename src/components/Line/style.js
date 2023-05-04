import { StyleSheet }from "react-native";
import { scale } from "react-native-size-matters";
import colors from "../../assets/colors/colors";
const styles = StyleSheet.create({
    lineView:{
        borderBottomColor:colors.placeHolderColor,
        borderWidth:scale(0.5),
        marginVertical:scale(20)
    }
})
export default styles