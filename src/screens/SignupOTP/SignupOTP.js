import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import navigationStrings from '../../constants/navigationStrings'
import { images } from '../../constants/imagePath'
import styles from './styles'
import colors from '../../assets/colors/colors'
import LinearGradient from 'react-native-linear-gradient'
import SmallButton from '../../components/SmallButton'
import TextInputData from '../../components/SigninTextInputLabel'
import AllButton from '../../components/AllButton'
import OtpInput from '../../components/OtpInput'

const SignupOTP = ({ navigation }) => {

  const [codeArr, setCodeArr] = useState([])
  const [number, setNumber] = useState()
  const code = codeArr.join("")
  const [confirm, setConfirm] = useState(null)

  handleCode = (e, index) => {
    const codeArray = [...code]
    codeArray[index] = e
    setCodeArr(codeArray)
  }

  return (
    <LinearGradient
      colors={[colors.linearBackGroundColor1, colors.linearBackGroundColor2]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1.2 }} >
      <SafeAreaView style={styles.mainView}>

        <Text style={styles.headingText1}>Welcome</Text>
        <Text style={styles.headingText2}>We sent a 4-digit code to</Text>

        <OtpInput
          onChangeText={(e, index) => handleCode(e, index)}
          value={codeArr}
          noOfInput={4}
        />

        <TouchableOpacity style={styles.nextButton}
        // onPress={()=>navigation.replace('SignupOTP')}
        >
          <AllButton label={'SUBMIT'} />
        </TouchableOpacity>


        <Image source={images.LogoGame} style={styles.appLogo} />

      </SafeAreaView>
    </LinearGradient>
  )
}

export default SignupOTP