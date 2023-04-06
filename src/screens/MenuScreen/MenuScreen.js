import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SimpleView from '../../components/simpleView'
import { images } from '../../constants/imagePath'
import { scale } from 'react-native-size-matters'
const MenuScreen = () => {
  return (
    <View>
      <SimpleView
        image={images.menuProfile}
        label={"My Profile"}
        innerStyle={{ marginTop: scale(30) }} />
      <SimpleView
        image={images.menuBooking}
        label={"My Bookings"}
        innerStyle={{ marginVertical: scale(20) }} />
      <SimpleView
        image={images.menuTerm}
        label={"Terms & Conditions"}
        innerStyle={{ marginBottom: scale(0) }} />
      <SimpleView
        image={images.menuSignOut}
        label={"Sign Out"}
        innerStyle={{ marginVertical: scale(20) }} />
    </View>
  )
}

export default MenuScreen