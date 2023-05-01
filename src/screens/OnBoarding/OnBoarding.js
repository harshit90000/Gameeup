import { View, Text, Image, FlatList, Animated, SafeAreaView, useWindowDimensions, Dimensions, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Onboarding from "react-native-onboarding-swiper";
import { images } from '../../constants/imagePath';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/colors/colors';
import navigationStrings from '../../constants/navigationStrings';
import { scale } from 'react-native-size-matters';
import AllButton from '../../components/AllButton';

const OnBoarding = () => {
  const navigation = useNavigation()
  const slides = [
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
  const ref = useRef();
  const { width, height } = Dimensions.get('window');
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const Slide = ({ item }) => {
    return (
      <View style={styles.flatScreen}>
        <Image source={item.image} style={styles.onBoardingImages} />
        <Text style={styles.featuresText}>{item.title}</Text>
        <Text style={styles.featuresText}>{item.subtitle}</Text>
      </View>
    );
  };
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };
  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };
  const Footer = () => {
    return (
      <View style={[styles.footerView,{height:height*0.20}]}>
        <View  style={styles.lineView}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: colors.skyBlue,
                  width: scale(25),
                },
              ]}
            />
          ))}
        </View>
        <View style={styles.buttonView}>
          {currentSlideIndex == slides.length - 1 ? (
            <AllButton label="GET STARTED" innerStyle={styles.startedButton} onPress={() => navigation.replace('HomeScreen')} />
          ) : (
            <View style={styles.buttonView}>
              <AllButton label="SKIP" onPress={skip} innerStyle={styles.skipButton} />
              <AllButton label="NEXT" onPress={goToNextSlide} innerStyle={styles.nextButton} />
            </View>
          )}
        </View>
      </View>
    );
  };
  return (
    <LinearGradient
      colors={[colors.linearBackGroundColor1, colors.linearBackGroundColor2]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1.2 }} >
      <SafeAreaView style={styles.mainView}>
        <Image source={images.LogoGame} style={styles.appLogo} />
        {/* <Onboarding
          onSkip={() => .replace(navigationStrings.SIGNUP_EMAIL)}
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
      */}
        <FlatList
          showsVerticalScrollIndicator={false}
          ref={ref}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({ item }) => <Slide item={item} />}
        />
        <Footer />
      </SafeAreaView>
    </LinearGradient>
  );
}
export default OnBoarding