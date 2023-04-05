import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import imagePath, { profile } from '../../constants/imagePath'

const SignupEmail = ({navigation}) => {
  return (
    <View style={{backgroundColor:"red"}}>
      {/* <Text>SignupEmail</Text> */}
      <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SIGNUP_OTP) }>
         <Text>SignupEmail</Text>
         </TouchableOpacity>
         <Image source={imagePath.splashFullLogo}
        //  style={{height:30, width:30}}
          />
    </View>
  )
}

export default SignupEmail