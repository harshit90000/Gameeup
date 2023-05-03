import { View, Text, SafeAreaView, Dimensions, Image, ScrollView,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/colors/colors';
import styles from './styles';
import { images } from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';

const VenueScreen = ({ route,navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { height, width } = Dimensions.get('window')
  const [CurrentIndex, setCurrentIndex] = useState(0)
  const product = useSelector(state => state.productReduce.data.products)
  const id = route.params.courseId;
  // console.log(id);
  const DataManage = product.find((element) => {
    return id === element.id;
  });
  const photos = DataManage.images.map((image) => {
    // console.log(image)
    return (
      <View key={image} onPress={() => setModalVisible(!modalVisible)}>
        <Image style={styles.photoView} source={{ uri: image }} />
      </View>
    );
  })
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[colors.linearBackGroundColor1, colors.linearBackGroundColor2]}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1.2 }} >
      <SafeAreaView>
        <ScrollView
          pagingEnabled={true}
          horizontal
          bounces={false}
          scrollEventThrottle={16}
          style={styles.scrollViewDesign}
          nestedScrollEnabled={true}
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          showsHorizontalScrollIndicator={false}>

          {photos}
        </ScrollView>
        <View style={styles.dotSliderView}>
          {
            photos.map((item, index) => {
              return (
                <View
                  key={index}
                  style={[styles.dotSlider, { backgroundColor: CurrentIndex == index ? colors.solidWhite : colors.borderColor }]}>
                </View>
              )
            })
          }
        </View>
        <View style={styles.carouselView}>
          <TouchableOpacity style={styles.rightArrowView} onPress={()=>navigation.replace(navigationStrings.HOME_SCREEN)}>
            <Image source={images.iconLeftArrow} style={styles.rightIcon} />
          </TouchableOpacity>

            <TouchableOpacity style={styles.rightArrowView}>
              <Image source={images.iconShare} style={styles.rightIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightArrowView}>
              <Image source={images.iconEmptyHeart} style={styles.rightIcon} />
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default VenueScreen