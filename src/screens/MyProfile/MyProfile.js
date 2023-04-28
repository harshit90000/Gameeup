import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import navigationStrings from '../../constants/navigationStrings'
import { images } from '../../constants/imagePath'
import styles from './styles'
import colors from '../../assets/colors/colors'
import AllButton from '../../components/AllButton'
import CustomText from '../../components'
import DatePicker from 'react-native-datepicker';

const MyProfile = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  return (
    <ScrollView>
      <Image source={images.boardingHuman} style={styles.myProfileImages} />
      <Image source={images.myCamera} style={styles.myUpdateImages} />
      <CustomText text={"FullName"} />
      <View style={styles.mainProfileView}>
        <Image source={images.myProfile} style={styles.mainImageIcon} />
        <TextInput
          placeholder={"Full Name"}
          placeholderTextColor={colors.placeHolderColor}
          style={styles.textInputView}
        />
      </View>
      <CustomText text={"Phone Number"} />
      <View style={styles.mainProfileView}>
        <Image source={images.myCall} style={styles.mainImageIcon} />
        <TextInput
          placeholder={"Phone Number"}
          keyboardType='numeric'
          placeholderTextColor={colors.placeHolderColor}
          style={styles.textInputView}
        />
      </View>
      <CustomText text={"Email Address"} />
      <View style={styles.mainProfileView}>
        <Image source={images.myEmail} style={styles.mainImageIcon} />
        <TextInput
          placeholder={"Email Address"}
          keyboardType="email-address"
          placeholderTextColor={colors.placeHolderColor}
          style={styles.textInputView}
        />
      </View>
      <CustomText text={"Gender"} />
      <View style={styles.mainProfileView}>
        <Image source={images.myGender} style={styles.mainImageIcon} />
        <TextInput
          placeholder={"Gender"}
          placeholderTextColor={colors.placeHolderColor}
          style={styles.textInputView}
        />
      </View>
      <CustomText text={"BirthDate"} />
      <View style={styles.mainProfileView}>
        <Image source={images.myDate} style={styles.mainImageIcon} />
        <TextInput
          placeholder={"BirthDate"}
          placeholderTextColor={colors.placeHolderColor}
          style={styles.textInputView}
        />
      </View>
      <View style={styles.mainProfileView}>
        <Image source={images.myDate} style={styles.mainImageIcon} />
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="BirthDate"
          placeholderTextColor={colors.placeHolderColor}
          format="DD-MM-YYYY"
          // minDate="01-01-1958"
          // maxDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          useNativeDriver = {true}
          showIcon={false}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
      <CustomText text={"City"} />
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