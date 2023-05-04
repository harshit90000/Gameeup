import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Pressable, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../assets/colors/colors'
import styles from './styles'
import { images } from '../../constants/imagePath'
import Card from '../../components/card'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, myAxiosData } from '../../redux/ApiReducer'
import navigationStrings from '../../constants/navigationStrings'
import { scale } from 'react-native-size-matters'
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios'

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("")
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  useEffect(() => {
    const loadData = async () => {
      dispatch(myAxiosData())
      dispatch(addProduct)
      await new Promise((r) => setTimeout(r, 100))
    };
    // Geolocation.getCurrentPosition(
    //   position => {
    //     setLatitude(position.coords.latitude)
    //     setLongitude(position.coords.longitude)
    //     fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=ecc9a67e21da9a51b30da4ff717b9e73`)
    //       .then(response => response.json())
    //       .then(json => {
    //         const address_components = json.results[0];
    //         const country = address_components.find(component => component.types.includes('country')).long_name;
    //         const state = address_components.find(component => component.types.includes('administrative_area_level_1')).long_name;
    //         const city = address_components.find(component => component.types.includes('locality')).long_name;
    //         const pin = address_components.find(component => component.types.includes('postal_code')).long_name;
    //         const address = json.results[0].formatted_address;

    //         SetData('Country:', country);
    //         console.log('State:', state);
    //         console.log('City:', city);
    //         console.log('PIN:', pin);
    //         console.log('Address:', address);
    //       }).catch(e => {
    //         console.log("*/*/*/", e)
    //         return e;
    //       });
    //   },
    //   error => console.log(error),
    //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    // );
    loadData();

  }, []);
  const [seletedvalue, setselectValue] = useState(input)
  const [imageFavourite, setImageFavourite] = useState(true)
  const addItem = (item) => {
    dispatch(addProduct({item}))
  }
  const inputField = ({ item }) => {
    if (seletedvalue == "") {
      return (
        <Pressable style={styles.placeView} onPress={() => setselectValue(item.id)}>
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
        </Pressable>
      );
    }
    if (item.brand.toLowerCase().includes(input.toLowerCase())) {
      return (
        <Pressable style={styles.placeView} onPress={() => setselectValue(item.id)}>
          <Image style={styles.placeImage} source={{ uri: item.thumbnail }} />
          <View style={styles.placeBaseView}>
            <Text style={styles.placeName}>{item.title}</Text>
            <Text style={styles.placeLocation}>{item.brand}</Text>
            <View style={styles.placeSelectView}>
              <TouchableOpacity
                onPress={() => navigation.replace(navigationStrings.VENUE_SCREEN, { courseId: item.id })} >
                <LinearGradient
                  colors={[colors.linearButtonColor1, colors.linearButtonColor2]}
                  style={styles.placeButtonView} >
                  <Text style={styles.placeButtonTextView}>Get In</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { addItem(item) }}>
                <Image style={styles.placeFavorite} source={seletedvalue ? images.iconEmptyHeart : images.iconFilledHeart} />
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      )
    }
  }
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
            <TextInput
              placeholder={'Search Your Favourite Places'}
              placeholderTextColor={colors.darkGrey}
              value={input}
              style={styles.searchPlaces}
              onChangeText={(text) => setInput(text)} />
          </View>
        </View>
        <View style={styles.vendorDetails}>
          {/* <Text style={styles.companyName}>{longitude}</ Text>
        <Text style={styles.companyName}>{latitude}</Text> */}
          <Text style={styles.headingText}>All Places Nearby</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={product}
            bounces={false}
            style={styles.venueDetails}
            keyExtractor={(item) => item.id}
            // renderItem={({ item }) => (
            //   <Pressable  onPress={()=>navigation.replace(navigationStrings.VENUE_SCREEN, {
            //     courseId: item.id,
            // })}>
            //   <Card
            //     mainImages={item.thumbnail}
            //     title={item.title}
            //     location={item.brand}
            //   />
            //   </Pressable>
            // )}
            renderItem={inputField}
          />
        </View>
      </View>
    </LinearGradient>
  )
}

export default HomeScreen
