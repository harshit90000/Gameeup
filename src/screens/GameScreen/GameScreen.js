import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/colors/colors';

const GameScreen = ({ route, navigation }) => {
  const product = useSelector(state => state.productReduce.data.products)
  const id = route.params.courseId;
  console.log(id);
  return (
   <LinearGradient
    style={{ flex: 1 }}
    colors={[colors.linearBackGroundColor1, colors.linearBackGroundColor2]}
    start={{ x: 0, y: 0 }} end={{ x: 1, y: 1.2 }} >
      <Text>GameScreen</Text>
    </LinearGradient>
  )
}

export default GameScreen