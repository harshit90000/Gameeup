import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, TextInput, FlatList, ActivityIndicator, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../assets/colors/colors'
import styles from './styles'
import { images } from '../../constants/imagePath'
import Card from '../../components/card'
import { useDispatch, useSelector } from 'react-redux'
import { myAxiosData } from '../../redux/ApiReducer'
import navigationStrings from '../../constants/navigationStrings'
const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(myAxiosData())
  }, [])
 
  const product = useSelector(state => state.productReduce.data.products)
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[colors.linearBackGroundColor1, colors.linearBackGroundColor2]}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1.2 }} >
      <View style={{ flex: 1 }}>
        <View style={styles.baseView}>
          <View style={styles.profileView}>
            <Image source={images.menuProfile} style={styles.profileImage} />
            <Text style={styles.profileName}>Hello, Harshit</Text>
            <View style={styles.rightArrowView}>
              <Image source={images.iconRightArrow} style={styles.rightIcon} />
            </View>
          </View>
          <View style={styles.searchInputView}>
            <Image source={images.myStickBalls} style={styles.searchIcon} />
            <TextInput placeholder={'Search Your Favourite Places'} placeholderTextColor={colors.darkGrey} />
          </View>
        </View>
        <View style={styles.vendorDetails}>
          <Text style={styles.headingText}>All Places Nearby</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={product}
            style={styles.venueDetails}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable  onPress={()=>navigation.replace(navigationStrings.VENUE_SCREEN, {
                courseId: item.id,
            })}>
              <Card
                mainImages={item.thumbnail}
                title={item.title}
                location={item.brand}
              />
              </Pressable>

            )}
          />
        </View>
      </View>
    </LinearGradient>
  )
}

export default HomeScreen
