import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/routes/Navigation'

const App = () => {
  return (
    <View style={{ flex:1 }} >
        <Navigation />
    </View>
  )
}

export default App