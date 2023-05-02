import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import { images } from '../../constants/imagePath'
import styles from './styles'
import colors from '../../assets/colors/colors'
import LinearGradient from 'react-native-linear-gradient'
import SmallButton from '../../components/SmallButton'
import TextInputData from '../../components/SigninTextInputLabel'


const SignupEmail = ({ navigation }) => {
  return (
    <LinearGradient
      colors={[colors.linearBackGroundColor1, colors.linearBackGroundColor2]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1.2 }} >
      <View style={styles.mainView}>

        <Text style={styles.headingText1}>Enter Your Email Address</Text>
        <Text style={styles.headingText2}>We Will Send a confirmation code to your email.</Text>
        
        <TextInputData 
          placeHolder={'Email Address'} 
          />

        <TouchableOpacity style={styles.nextButton} 
        onPress={()=>navigation.replace(navigationStrings.SIGNUP_OTP)}
        >
          <SmallButton />
        </TouchableOpacity>

        
        <Image source={images.LogoGame} style={styles.appLogo} />
        
      </View>
    </LinearGradient>
  )
}

export default SignupEmail