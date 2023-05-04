import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const ScoreBoardNames = ({route}) => {
  return (
    <View>
          <Text style={styles.playerNames}> {route.params.paramKey.toLowerCase()}</Text>
          <Text style={styles.playerNames}> {route.params.paramKeyTwo.toLowerCase()}</Text>
          <Text style={styles.playerNames}> {route.params.paramKeyThree.toLowerCase()}</Text>
          <Text style={styles.playerNames}> {route.params.paramKeyFour.toLowerCase()}</Text>
          <Text style={styles.playerNames}> {route.params.paramKeyFive.toLowerCase()}</Text>
    </View>
  )
}

export default ScoreBoardNames