import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../assets/colors/colors'
import styles from './styles'

import SmallButton from '../../components/SmallButton'
import { images } from '../../constants/imagePath'
import Card from '../../components/card'

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={[colors.linearBackGroundColor1, colors.linearBackGroundColor2]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1.2 }} >
      <SafeAreaView style={styles.mainView}>

        <View style={styles.profileView}>
          <Image source={images.menuProfile} style={styles.profileImage} />
          <Text style={styles.profileName}>Hello, Harshit</Text>
          <View style={styles.rightArrowView}>
            <Image source={images.iconRightArrow} style={styles.rightIcon} />
          </View>
        </View>

        <View style={styles.searchInputView}>
          <Image source={images.iconSearch} style={styles.searchIcon} />
          <TextInput placeholder={'Search Your Favourite Places'} placeholderTextColor={colors.darkGrey} />
        </View>

        <Text style={styles.headingText}>All Places Nearby</Text>

        <ScrollView>
        <Card
          mainImages={images.boardingHuman}
          title={'Visamo Skytouch Pool & Snooker'}
          location={'Navrangpura, Ahmedabad'}
          label={'Book Now'}
        />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default HomeScreen
