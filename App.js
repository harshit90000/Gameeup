import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/routes/Navigation'
import Background from './src/components/background'
import { MyProfile } from './src/screens'

const App = () => {
  return (
    <View style={{ flex:1 }} >
        {/* <Navigation /> */}
        <MyProfile />
    </View>
  )
}

export default App