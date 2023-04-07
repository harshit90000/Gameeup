import { StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"
import colors from "../../assets/styles/colors/colors"

const styles = StyleSheet.create({
    termsText:{
        color:colors.solidBlack,
        fontSize:scale(15),
        marginHorizontal:scale(20),
        marginTop:scale(20)
    }
})
export default styles