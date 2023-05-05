import { View, Text, FlatList } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../assets/colors/colors'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'

const LiveScore = () => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.productReduce.data.products)

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[colors.linearBackGroundColor1, colors.linearBackGroundColor2]}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1.2 }} >

      <Text style={styles.tournamentsText}>Tournaments</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={product}
        bounces={false}
        style={styles.venueDetails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.ScoreView}>
              <Text style={styles.placeName}>{item.title}</Text>
              <View style={styles.playerData}>
                <Text style={styles.playerScore}>Score</Text>
                <Text style={styles.playerScore}>Frame</Text>
              </View>
              <View style={styles.playerNameView}>
                <Text style={styles.playerScoreWinner}>{item.brand}</Text>
                <View style={styles.playerData}>
                  <Text style={styles.playerScoreWinner}>{item.stock}</Text>
                  <Text style={styles.playerScoreWinner}>{item.stock}</Text>
                </View>
              </View>
              <View style={styles.playerNameView}>
                <Text style={styles.plays}>{item.brand}</Text>
                <View style={styles.playerData}>
                  <Text style={styles.playerScore}>{item.stock}</Text>
                  <Text style={styles.playerScore}>{item.stock}</Text>
                </View>
              </View>
            </View>
          );

        }}
      />
    </LinearGradient>
  )
}

export default LiveScore