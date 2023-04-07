import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import { images } from '../../constants/imagePath'
import styles from './styles'
import colors from '../../assets/styles/colors/colors'
import AllButton from '../../components/AllButton'
import CustomText from '../../components'

const MyProfile = ({ navigation }) => {
  return (
    <ScrollView>
        <Image  source={images.boardingHuman} style={styles.myProfileImages}/>
        <Image  source={images.myCamera} style={styles.myUpdateImages}/>
    <CustomText text={"FullName"}/>
      <View style={styles.mainProfileView}>
        <Image source={images.myProfile} style={styles.mainImageIcon} />
        <TextInput
          placeholder={"Full Name"}
          placeholderTextColor={colors.placeHolderColor}
          style={styles.textInputView}
        />
      </View>
      <CustomText text={"Phone Number"}/>
      <View style={styles.mainProfileView}>
        <Image source={images.myCall} style={styles.mainImageIcon} />
        <TextInput
          placeholder={"Phone Number"}
          placeholderTextColor={colors.placeHolderColor}
          style={styles.textInputView}
        />
      </View>
      <CustomText text={"Email Address"}/>
      <View style={styles.mainProfileView}>
        <Image source={images.myEmail} style={styles.mainImageIcon} />
        <TextInput
          placeholder={"Email Address"}
          placeholderTextColor={colors.placeHolderColor}
          style={styles.textInputView}
        />
      </View>
      <CustomText text={"Gender"}/>
      <View style={styles.mainProfileView}>
        <Image source={images.myGender} style={styles.mainImageIcon} />
        <TextInput
          placeholder={"Gender"}
          placeholderTextColor={colors.placeHolderColor}
          style={styles.textInputView}
        />
      </View>
      <CustomText text={"BirthDate"}/>
      <View style={styles.mainProfileView}>
        <Image source={images.myDate} style={styles.mainImageIcon} />
        <TextInput
          placeholder={"BirthDate"}
          placeholderTextColor={colors.placeHolderColor}
          style={styles.textInputView}
        />
      </View>
      <CustomText text={"City"}/>
      <View style={styles.mainProfileView}>
        <Image source={images.myCity} style={styles.mainImageIcon} />
        <TextInput
          placeholder={"City"}
          placeholderTextColor={colors.placeHolderColor}
          style={styles.textInputView}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.MENU_SCREEN)}>
        <AllButton label={"Save Changes"} />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default MyProfile