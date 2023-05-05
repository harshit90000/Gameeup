import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';
import { deleteProduct } from '../../reduxs/ApiReducer';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/colors/colors';
import { images } from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';

const FavoriteScreen = ({ navigation }) => {
  const product = useSelector(state => state.productReduce.data.products)
  const dispatch = useDispatch();
  const [imageFavourite, setImageFavourite] = useState(true)
  const addItem = (item) => {
    dispatch(deleteProduct({ item }))
    console.log("/*/-*/-", dispatch(deleteProduct({ item })));
  }
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={product}
      bounces={false}
      style={styles.venueDetails}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.placeView} >
            <Image style={styles.placeImage} source={{ uri: item.thumbnail }} />
            <View style={styles.placeBaseView}>
              <Text style={styles.placeName}>{item.title}</Text>
              <Text style={styles.placeLocation}>{item.brand}</Text>
              <View style={styles.placeSelectView}>
                <TouchableOpacity onPress={() => navigation.replace(navigationStrings.VENUE_SCREEN, { courseId: item.id })} >
                  <LinearGradient
                    colors={[colors.linearButtonColor1, colors.linearButtonColor2]}
                    style={styles.placeButtonView} >
                    <Text style={styles.placeButtonTextView}>Get In</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { addItem(item) }}>
                  <Image style={styles.placeFavorite} source={imageFavourite ? images.iconEmptyHeart : images.iconFilledHeart} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );

      }}
    />
  )
}

export default FavoriteScreen