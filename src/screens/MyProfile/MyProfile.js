import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Platform, Modal, SafeAreaView, Pressable, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import navigationStrings from '../../constants/navigationStrings'
import { images } from '../../constants/imagePath'
import styles from './styles'
import colors from '../../assets/colors/colors'
import AllButton from '../../components/AllButton'
import CustomText from '../../components'
import DatePicker from 'react-native-datepicker'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ImagePicker from 'react-native-image-crop-picker';
import { scale } from 'react-native-size-matters'
import { Picker } from '@react-native-picker/picker'


const MyProfile = ({ navigation }) => {
  const [date, setDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Select Date")
  const [gender, setGender] = useState('Unknown');
  const [modalVisible, setModalVisible] = useState(false);
  const [image, SetImage] = useState("https://static.kupindoslike.com/slika-konj-_slika_O_80128845.jpg")
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
  const takePhoto = () => {
    ImagePicker.openCamera({
      width: scale(100),
      height: scale(100),
      // cropping: true,
      // compressImageQuality:0.7,
      // compressImageMaxHeight:100,
      // compressImageMaxWidth:300
    }).then(image => {
      console.log("11345664798798", image.path);
      SetImage(image.path)
      setModalVisible(false)
    });
  }
  const customGallery = () => {
    ImagePicker.openPicker({
      width: scale(100),
      height: scale(100),
      // cropping: true,
      // compressImageQuality:0.7,
      // compressImageMaxHeight:300,
      // compressImageMaxWidth:300
    }).then(image => {
      console.log("123254645", image.path);
      SetImage(image.path)
      setModalVisible(false)
    });
  }
  const cancelButton = () => { setModalVisible(false) }
  return (
    <ScrollView>
        <ImageBackground
          style={styles.myProfileImages}
          source={{uri: image}}/>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={images.myCamera} style={styles.myUpdateImages} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}>
        <View style={styles.modelMainView}>
          <CustomText text="Upload Photo" innerstyle={styles.modelText} />
          <CustomText text="Choose Your Profile Picture" innerstyle={styles.modelSubText} />
          <AllButton innerStyle={styles.modelButton} label={"Take a Photo"} onPress={takePhoto} />
          <AllButton innerStyle={styles.modelButton} label={"Custom Gallery"} onPress={customGallery} />
          <AllButton label="Cancel" onPress={cancelButton} innerStyle={styles.modelButton} />
        </View>
      </Modal>
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
      <Picker
        selectedValue={gender}
        onValueChange={(value, index) => setGender(value)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Select Gender" value="Unknown" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Not Willing" value="NA" />
      </Picker>
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
        <AllButton innerStyle={styles.saveData} 
        onPress={() => navigation.navigate(navigationStrings.MENU_SCREEN)}
        label={"Save Changes"} />
    </ScrollView>
  )
}
export default MyProfile