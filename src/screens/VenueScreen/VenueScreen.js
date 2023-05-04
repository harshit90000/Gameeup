import { View, Text, SafeAreaView, Dimensions, Image, TouchableOpacity, ScrollView, FlatList, Modal } from 'react-native'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/colors/colors';
import styles from './styles';
import { images } from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import { scale } from 'react-native-size-matters';
import Line from '../../components/Line/line';

const VenueScreen = ({ route, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
  const multipleGames = DataManage.images.map((image) => {
    // console.log(image)
    return (
      // <TouchableOpacity key={image} onPress={() => setModalVisible(!modalVisible)}>
      //   <Image style={styles.photoView} source={{ uri: image }} />
      // </TouchableOpacity>
        <TouchableOpacity key={image} style={styles.showingGameBaseView}
         onPress={() => navigation.navigate(navigationStrings.GAME_SCREEN,{ courseId: DataManage.id})}>
          <Image source={{ uri: image }} style={styles.gameImageView} />
          <View style={styles.textViewGame}>
            <Text style={styles.gameNameText}>Pool</Text>
          </View>
        </TouchableOpacity>
    );
  })
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[colors.linearBackGroundColor1, colors.linearBackGroundColor2]}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1.2 }} >
      <SafeAreaView style={styles.scrollViewDesign} >
        <ScrollView
          bounces={false}
          nestedScrollEnabled={true}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}>
          <ScrollView
            pagingEnabled={true}
            horizontal
            bounces={false}
            scrollEventThrottle={16}
            onMomentumScrollEnd={event => {
              const viewSize = event.nativeEvent.layoutMeasurement.width
              const contentOffSet = event.nativeEvent.contentOffset.x
              const selectedIndex = Math.floor(contentOffSet / viewSize)
              setCurrentIndex(selectedIndex)
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
            <TouchableOpacity style={styles.rightArrowView} onPress={() => navigation.replace(navigationStrings.HOME_SCREEN)}>
              <Image source={images.iconLeftArrow} style={styles.rightIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightArrowView}>
              <Image source={images.iconShare} style={styles.rightIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.baseView}>
            <Text style={styles.placeName}>{DataManage.title}</Text>
            <View style={styles.placeTimeView}>
              <View style={styles.rightArrowView}>
                <Image style={styles.rightIcon} source={images.iconDownArrow} />
              </View>
              <Text style={styles.placeTime}>{DataManage.brand}</Text>
              <Text style={styles.placeTimeArrow}>-</Text>
              <Text style={styles.placeTimePM}>{DataManage.brand}</Text>
            </View>
            <View style={styles.placeAddressView}>
              <View style={styles.rightArrowView}>
                <Image style={styles.rightIcon} source={images.iconLocation} />
              </View>
              <Text style={styles.placeAddress}>{DataManage.description}</Text>
            </View>
            <TouchableOpacity style={styles.placeGoogleMapView}>
              <View style={styles.placeGoogleImageView}>
                <Image style={styles.rightIcon} source={images.iconGoogleMap} />
              </View>
              <Text style={styles.placeGoogleMapText}>Show in Map</Text>
            </TouchableOpacity>
          </View>
          <Line />
          <Text style={styles.availableGame}>Available Games</Text>
          <View style={styles.showingGameView}>
          {multipleGames}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default VenueScreen