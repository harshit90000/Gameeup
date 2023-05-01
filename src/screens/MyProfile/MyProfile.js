import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Platform, Modal, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import navigationStrings from '../../constants/navigationStrings'
import { images } from '../../constants/imagePath'
import styles from './styles'
import colors from '../../assets/colors/colors'
import AllButton from '../../components/AllButton'
import CustomText from '../../components'
import DatePicker from 'react-native-datepicker'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const MyProfile = ({ navigation }) => {
  const [date, setDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Select Date")
  const showDatePicker = () => {
    setDate(true);
  };
  const hideDatePicker = () => {
    setDate(false);
  };
  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    const dt = new Date(date)
    const x = dt.toISOString().split('T')
    const x1 = x[0].split("-")
    console.log(x1[2] + "/" + x1[1] + '/' + x1[0])
    setSelectedDate(x1[2] + "/" + x1[1] + '/' + x1[0])
    hideDatePicker();
  };
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
      <TouchableOpacity style={styles.mainProfileView} onPress={showDatePicker}>
        <Image source={images.myDate} style={styles.mainImageIcon} />
        <Text style={styles.dobDate}>{selectedDate}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={date}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
      />

      {/* <DatePicker
          style={{ width: 200 }}
          date={date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => { this.setState({ date: date }) }}
        /> */}

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
        <AllButton innerStyle={styles.saveData} label={"Save Changes"} />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default MyProfile