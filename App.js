import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/routes/Navigation'
import Background from './src/components/background'

const App = () => {
  return (
    <View style={{ flex:1 }} >
        <Navigation />
        {/* <Background /> */}
    </View>
  )
}

export default App