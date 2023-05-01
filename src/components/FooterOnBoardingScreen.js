import { Animated, Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import colors from '../../assets/colors/colors'
import styles from './style';

const Footer = ({ slides }) => {
  const { width, height } = Dimensions.get('window');
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
  return (
    <View
      style={{
        height: height * 0.25,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentSlideIndex == index && {
                backgroundColor: colors.solidBlack,
                width: 25,
              },
            ]}
          />
        ))}
      </View>
      <View style={{ marginBottom: 20 }}>
        {currentSlideIndex == slides.length - 1 ? (
          <View style={{ height: 50 }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.replace('HomeScreen')}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                GET STARTED
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.btn,
                {
                  borderColor: colors.white,
                  borderWidth: 1,
                  backgroundColor: 'transparent',
                },
              ]}
              onPress={skip}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: colors.white,
                }}>
                SKIP
              </Text>
            </TouchableOpacity>
            <View style={{ width: 15 }} />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={goToNextSlide}
              style={styles.btn}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                }}>
                NEXT
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};
export default Footer