import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'

const SignupOTP = ({navigation}) => {
  return (
    <View>
<TouchableOpacity onPress={() => navigation.navigate(navigationStrings.HOME_SCREEN) }>
         <Text>SignupOtp</Text>
         </TouchableOpacity>
    </View>
  )
}

export default SignupOTP