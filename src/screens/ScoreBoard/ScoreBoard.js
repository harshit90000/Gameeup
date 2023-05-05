import { View, Text, TextInput, Button, TouchableOpacity, Modal, SafeAreaView, Image, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/colors/colors';
import ModalPicker from '../../components/ModalPicker';
import { images } from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';


const ScoreBoard = ({ navigation }) => {
  const [isModelVisible, setIsModelVisible] = useState(false)
  const changeModel = (bool) => {
    setIsModelVisible(bool)
  }
  const [firstName, setFirstName] = useState("")
  const [SecondName, setSecondName] = useState("")

  const [threeName, setThreeName] = useState("")
  const [fourName, setFourName] = useState("")
  const [fiveName, setFiveName] = useState("")

  const [checkName, setCheckName] = useState(false)
  const [checkSecondName, setSecondCheckName] = useState(false)
  const [checkThreeName, setThreeCheckName] = useState(false)
  const [checkFourName, setFourCheckName] = useState(false)
  const [checkFiveName, setCheckFiveName] = useState(false)
  const userNameRegex = /^(?=[a-zA-Z0-9._]{2,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
  onChange: {
    validationPlayer = (text) => {
      let result = userNameRegex;
      setFirstName(text);
      if (result.test(text)) {
        setCheckName(false);
      } else {
        setCheckName(true);
      }
      result.test(String(firstName).toLowerCase())
    },
      validationPlayerSecond = (text) => {
        let result = userNameRegex;
        setSecondName(text)
        if (result.test(text)) {
          setSecondCheckName(false)
        } else {
          setSecondCheckName(true)
        }
        result.test(String(SecondName).toLowerCase())
      }
    validationPlayerThree = (text) => {
      let result = userNameRegex;
      setThreeName(text)
      if (result.test(text)) {
        setThreeCheckName(false)
      } else {
        setThreeCheckName(true)
      }
      result.test(String(threeName).toLowerCase())
    },
      validationPlayerFour = (text) => {
        let result = userNameRegex;
        setFourName(text)
        if (result.test(text)) {
          setFourCheckName(false)
        } else {
          setFourCheckName(true)
        }
        result.test(String(threeName).toLowerCase())
      },
      validationPlayerFive = (text) => {
        let result = userNameRegex;
        setFiveName(text)
        if (result.test(text)) {
          setCheckFiveName(false)
        } else {
          setCheckFiveName(true)
        }
        result.test(String(threeName).toLowerCase())
      }
  }
  const validation = () => {
    if (firstName == '' || SecondName == "") {
      alert('Please Enter Details');
    }
    else if (checkName == true || checkSecondName == true || checkThreeName == true || checkFourName == true || checkFiveName == true) {
      alert('Please Enter Details Correctly');
    }
    else {
      changeModel(false)
      navigation.navigate(navigationStrings.SCOREBOARD_NAME, {
        paramKey: firstName,
        paramKeyTwo: SecondName,
        paramKeyThree: threeName,
        paramKeyFour: fourName,
        paramKeyFive: fiveName,
      })
    };
    setFirstName("")
    setSecondName("")
    setThreeName("")
    setFourName("")
    setFiveName("")
  }
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[colors.linearBackGroundColor1, colors.linearBackGroundColor2]}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1.2 }} >
      <SafeAreaView>
        <TouchableOpacity style={styles.startButtonView} onPress={() => { changeModel(true) }} >
          <LinearGradient
            colors={[colors.linearButtonColor1, colors.linearButtonColor2]}
            style={styles.placeButtonView} >
            <Image source={images.iconPlus} style={styles.iconView} />
            <Text style={styles.placeButtonTextView}>Start New Game</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModelVisible}
          onRequestClose={() => changeModel(false)}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            style={styles.model}>
            <View style={styles.modelPlayer}>
              <Text style={styles.modelPlayerNames}>Add Players</Text>
              <TouchableOpacity onPress={() => changeModel(false)}>
                <Image source={images.remove} style={styles.iconView} />
              </TouchableOpacity>
            </View>
            <View style={styles.mainProfileView}>
              <TextInput
                placeholder={"First Player Name"}
                placeholderTextColor={colors.placeHolderColor}
                style={styles.textInputView}
                value={firstName}
                onChangeText={validationPlayer}
              />
              {
                checkName
                  ?
                  <Image source={images.boardingHuman} style={styles.imageStyle} />
                  :
                  <View style={styles.imageStyle} />
              }
            </View>
            <View style={styles.mainProfileView}>
              <TextInput
                placeholder={"Second Player Name"}
                placeholderTextColor={colors.placeHolderColor}
                style={styles.textInputView}
                value={SecondName}
                onChangeText={validationPlayerSecond}
              />
              {
                checkSecondName
                  ?
                  <Image source={images.boardingHuman} style={styles.imageStyle} />
                  :
                  <View style={styles.imageStyle} />
              }
            </View>
            <View style={styles.mainProfileView}>
              <TextInput
                placeholder={"Third Player Name"}
                placeholderTextColor={colors.placeHolderColor}
                style={styles.textInputView}
                value={threeName}
                onChangeText={validationPlayerThree}
              />
              {
                checkThreeName
                  ?
                  <Image source={images.boardingHuman} style={styles.imageStyle} />
                  :
                  <View style={styles.imageStyle} />
              }
            </View>
            <View style={styles.mainProfileView}>
              <TextInput
                placeholder={"Four Player Name"}
                placeholderTextColor={colors.placeHolderColor}
                style={styles.textInputView}
                value={fourName}
                onChangeText={validationPlayerFour}
              />
              {
                checkFourName
                  ?
                  <Image source={images.boardingHuman} style={styles.imageStyle} />
                  :
                  <View style={styles.imageStyle} />
              }
            </View>
            <View style={styles.mainProfileView}>
              <TextInput
                placeholder={"Five Player Name"}
                placeholderTextColor={colors.placeHolderColor}
                style={styles.textInputView}
                value={fiveName}
                onChangeText={validationPlayerFive}
              />
              {
                checkFiveName
                  ?
                  <Image source={images.boardingHuman} style={styles.imageStyle} />
                  :
                  <View style={styles.imageStyle} />
              }
            </View>
            <TouchableOpacity style={styles.saveButtonViewData}
              onPress={() => validation()} >
              <LinearGradient
                colors={[colors.linearButtonColor1, colors.linearButtonColor2]}
                style={styles.saveButtonView} >
                <Text style={styles.placeButtonTextView}>Save</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </Modal>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default ScoreBoard