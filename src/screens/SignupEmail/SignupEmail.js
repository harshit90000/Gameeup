import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import {images} from '../../constants/imagePath'

const SignupEmail = ({navigation}) => {
  return (
    <View >
      {/* <Text>SignupEmail</Text> */}
      <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SIGNUP_OTP) }>
         <Text>SignupEmail</Text>
         </TouchableOpacity>
         <Image source={images.myProfile}
        //  style={{height:30, width:30}}
          />
    </View>
  )
}

export default SignupEmail