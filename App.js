import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/routes/Navigation'
import { HomeScreen, SignupEmail, SignupOTP } from './src/screens'

const App = () => {
  return (
    <View style={{ flex:1 }} >
        {/* <Navigation /> */}
        <HomeScreen/>
    </View>
  )
}

export default App