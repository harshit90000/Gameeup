import { View, Text } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Background from '../../components/background'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SIGNUP_EMAIL) }>
         <Text>Homescreen</Text>
         </TouchableOpacity>

         <Background/>
    </View>
  )
}

export default HomeScreen