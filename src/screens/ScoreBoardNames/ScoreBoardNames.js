import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../assets/colors/colors'

const ScoreBoardNames = ({ route }) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[colors.linearBackGroundColor1, colors.linearBackGroundColor2]}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1.2 }} >
      <Pressable style={styles.playerNameView}>
        <View style={styles.playerNameModel}>
          <Text style={styles.playerNames}>{route.params.paramKey.toLowerCase()}</Text>
        </View>
        <View style={[styles.playerScoreModel]}>
          <Text style={styles.playerScore}>score</Text>
        </View>
      </Pressable>
      <Text style={styles.playerNames}>{route.params.paramKeyTwo.toLowerCase()}</Text>
      <Text style={styles.playerNames}>{route.params.paramKeyThree.toLowerCase()}</Text>
      <Text style={styles.playerNames}>{route.params.paramKeyFour.toLowerCase()}</Text>
      <Text style={styles.playerNames}>{route.params.paramKeyFive.toLowerCase()}</Text>
    </LinearGradient>
  )
}

export default ScoreBoardNames