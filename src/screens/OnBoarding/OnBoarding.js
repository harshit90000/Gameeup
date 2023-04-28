import { View, Text, Image, FlatList, Animated, SafeAreaView, useWindowDimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Onboarding from "react-native-onboarding-swiper";
import { images } from '../../constants/imagePath';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/colors/colors';
import navigationStrings from '../../constants/navigationStrings';
import { scale } from 'react-native-size-matters';
import Paginator from '../../components/Paginator';
import NextButton from '../../components/NextButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OnBoarding = () => {
  const navigation = useNavigation()
  const Data = [
    {
      id: 1,
      title: "Get the best experience with bookings &",
      subtitle: "premium tables by your time.",
      image: images.boardingTable
    },
    {
      id: 2,
      title: "Get the best experience with bookings &",
      subtitle: "premium tables by your time.",
      image: images.boardingLocation
    },
    {
      id: 3,
      title: "Get the best experience with bookings &",
      subtitle: "premium tables by your time.",
      image: images.boardingHuman
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const viewableItemsChanges = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index)
  }).current
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
  const slideRef = useRef(null)
  const scrollTo = ()=>{
      if(currentIndex < Data.length - 1){
        slideRef.current.scrollToIndex({index :currentIndex + 1})
      }
      else{
        console.log("Last Item");
      }
  
  }
  return (
    <LinearGradient
      colors={[colors.linearBackGroundColor1, colors.linearBackGroundColor2]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1.2 }} >
      <SafeAreaView style={styles.mainView}>
        <Image source={images.LogoGame} style={styles.appLogo} />
        <Onboarding
          onSkip={() => navigation.replace(navigationStrings.SIGNUP_EMAIL)}
          onDone={() => navigation.replace(navigationStrings.SIGNUP_EMAIL)}
          pages={[
            {
              image: <Image source={images.boardingTable} style={styles.onBoardingImages} />,
              subtitle: 'Get the best experience with bookings & premium tables by your time',
            },
            {
              image: <Image source={images.boardingLocation} style={styles.onBoardingImages} />,
              subtitle: 'Get the best experience with bookings & premium tables by your time',

            },
            {
              image: <Image source={images.boardingHuman} style={styles.onBoardingImages} />,
              subtitle: 'Get the best experience with bookings & premium tables by your time',

            },
          ]}
        />
        {/* <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onViewableItemsChanged={viewableItemsChanges}
          viewabilityConfig={viewConfig}
          ref={slideRef}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false
          })}
          data={Data}
          renderItem=
          {({ item }) =>
            <View style={styles.flatScreen}>
              <View>
                <Image source={item.image} style={styles.onBoardingImages} />
                <Text style={styles.featuresText}>{item.title}</Text>
                <Text style={styles.featuresText}>{item.subtitle}</Text>
              </View>
            </View>
          } />
        <Paginator data={Data} scrollX={scrollX} />  */}
      
      {/* <NextButton scrollTo={scrollTo} percentages={(currentIndex + 1) * (100 / Data.length)} /> */}
      </SafeAreaView>
    </LinearGradient>

  );
}

export default OnBoarding