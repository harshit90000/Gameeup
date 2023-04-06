import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Background from '../../components/background'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Background />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen