import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import MyProfileTextInput from '../../components/myProfileTextInput'
import { images } from '../../constants/imagePath'

const MyProfile = ({navigation}) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.MENU_SCREEN)}>
        <Text>SignupOtp</Text>
      </TouchableOpacity></>
  )
}

export default MyProfile