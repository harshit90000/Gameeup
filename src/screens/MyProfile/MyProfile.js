import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, Platform, Modal, SafeAreaView, Pressable, ImageBackground, Alert } from 'react-native'
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
import ModalPicker from '../../components/ModalPicker'
import { useNavigation } from '@react-navigation/native'


const MyProfile = () => {
  const navigation = useNavigation()
  const [date, setDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Select Date")

  const [modalVisible, setModalVisible] = useState(false);
  const [image, SetImage] = useState("https://static.kupindoslike.com/slika-konj-_slika_O_80128845.jpg")

  const [chooseDate, setChooseData] = useState("Select Gender")
  const [isModelVisible, setIsModelVisible] = useState(false)

  const [userName, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [checkEmail, setCheckEmail] = useState(false)
  const [checkUsername, setCheckUsername] = useState(false)
  const [checkPhone, setCheckPhone] = useState(false)
  const [checkCity, setCheckCity] = useState(false)

  onChange: {
    username = (text) => {
      let result = /^(?=.*[A-Z]){1}(?=.*[a-z])(?=.*[a-zA-Z0-9]){3,20}/;
      setUsername(text);
      if (result.test(text)) {
        setCheckUsername(false);
      } else {
        setCheckUsername(true);
      }
    },
      emailvalid = (text) => {
        let re = /(?=.*[a-z])/
        let result = /\S+@([A-Z|a-z])+\S+\.([A-Z|a-z]){2,3}$/;
        re.test(String(email).toLowerCase())
        result.test(String(email).toLowerCase())

        setEmail(text);
        if (result.test(text) && re.test(text)) {
          setCheckEmail(false);
        } else {
          setCheckEmail(true);
        }
        re.test(String(email).toLowerCase())
        result.test(String(email).toLowerCase())

      },
      phonevaild = (text) => {
        let re = /(?<!\d)\d{10}(?!\d)/;
        setPhone(text)
        if (re.test(text)) {
          setCheckPhone(false)
        } else {
          setCheckPhone(true);
        }
      },
      cityvaild = (text) => {
        let result = /^(?=.*[A-Z]){1}(?=.*[a-z])(?=.*[a-zA-Z0-9]){3,20}/;
        setCity(text);
        if (result.test(text)) {
          setCheckCity(false);
        } else {
          setCheckCity(true);
        }
      }
  }
  const changeModel = (bool) => {
    setIsModelVisible(bool)
  }
  const setData = (option) => {
    setChooseData(option)
  }
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
  const validation = () => {
    if (userName == '' || phone == '' || email == '' || city == '' ||
     selectedDate == null || image == null || isModelVisible ==  null) {
      alert('Please Enter Details');
    }
    else if (checkCity == true || checkEmail == true
      || checkUsername == true || checkPhone == true) {
      alert('Please Enter Details Correctly');
    }
    else {
      Alert.alert("Success Your Profile",
        "Click to Process to Continue",
        [
          { text: 'Cancel', onPress: () => (console.log('Cancel Pressed')) },
          {
            text: 'OK', onPress: () => {
              navigation.navigate(navigationStrings.HOME_SCREEN) 
            }
          }
        ])
    };
    setEmail("");
    setCity("")
    setUsername("")
    setPhone("")
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}>
      <ImageBackground
        onError={() => setValid(false)}
        style={styles.myProfileImages}
        source={{ uri: image}} />
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
          value={userName}
          onChangeText={username}
        />
      {
        checkUsername
          ?
          <Image source={images.boardingHuman} style={styles.imageStyle} />
          :
          <View style={styles.imageStyle} />
      }
       </View>
      <CustomText text={"Phone Number"} />
      <View style={styles.mainProfileView}>
        <Image source={images.myCall} style={styles.mainImageIcon} />
        <TextInput
          placeholder={"Phone Number"}
          keyboardType='numeric'
          placeholderTextColor={colors.placeHolderColor}
          style={styles.textInputView}
          value={phone}
          onChangeText={phonevaild}
        />
        {
          checkPhone
            ?
            <Image source={images.boardingHuman} style={styles.imageStyle} />
          :
          <View style={styles.imageStyle} />
        }
      </View>
      <CustomText text={"Email Address"} />
      <View style={styles.mainProfileView}>
        <Image source={images.myEmail} style={styles.mainImageIcon} />
        <TextInput
          placeholder={"Email Address"}
          keyboardType="email-address"
          placeholderTextColor={colors.placeHolderColor}
          style={styles.textInputView}
          value={email}
          onChangeText={emailvalid}
        />
      {
        checkEmail
          ?
          <Image source={images.boardingHuman} style={styles.imageStyle} />
          :
          <View style={styles.imageStyle} />
      }
        </View>
      <CustomText text={"Gender"} />
      <TouchableOpacity style={styles.mainProfileView} onPress={() => { changeModel(true) }}>
        <Image source={images.myGender} style={styles.mainImageIcon} />
        <Text style={styles.dobDate}>{chooseDate}</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isModelVisible}
        onRequestClose={() => changeModel(false)}>
        <ModalPicker changeModel={changeModel} setData={setData} />
      </Modal>
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
          value={city}
          onChangeText={cityvaild}
        />
      {
        checkCity
          ?
          <Image source={images.boardingHuman} style={styles.imageStyle} />
          :
          <View style={styles.imageStyle} />
      }
      </View>
      <AllButton innerStyle={styles.saveData}
        onPress={() => validation()}
        label={"Save Changes"} />
    </ScrollView>
  )
}
export default MyProfile