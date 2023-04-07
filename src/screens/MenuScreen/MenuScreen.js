import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import SimpleView from '../../components/simpleView'
import { images } from '../../constants/imagePath'
import { scale } from 'react-native-size-matters'
import navigationStrings from '../../constants/navigationStrings'
const MenuScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => { navigation.navigate(navigationStrings.MY_PROFILE) }}>
        <SimpleView
          image={images.menuProfile}
          label={"My Profile"}
          innerStyle={{ marginTop: scale(30) }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate(navigationStrings.BOOKING_SCREEN) }}>
      <SimpleView
        image={images.menuBooking}
        label={"My Bookings"}
        innerStyle={{ marginVertical: scale(20) }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate(navigationStrings.TERMS_SCREEN) }}>
      <SimpleView
        image={images.menuTerm}
        label={"Terms & Conditions"}
        innerStyle={{ marginBottom: scale(0) }} />
        </TouchableOpacity>
      <TouchableOpacity >
      <SimpleView
        image={images.menuSignOut}
        label={"Sign Out"}
        innerStyle={{ marginVertical: scale(20) }} />
        </TouchableOpacity>
    </View>
  )
}
export default MenuScreen