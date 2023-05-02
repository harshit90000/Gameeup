import { View, Text, TouchableOpacity, Image, SafeAreaView, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import navigationStrings from '../../constants/navigationStrings'
import { images } from '../../constants/imagePath'
import styles from './styles'
import colors from '../../assets/colors/colors'
import LinearGradient from 'react-native-linear-gradient'
import SmallButton from '../../components/SmallButton'

const SignupEmail = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [checkEmail, setCheckEmail] = useState(false)

  onChange :{
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
    }
  }
  const validation = () => {
    if (email == '') {
      alert('Please Enter Details');
    }
    else if (checkEmail == true ) {
      alert('Please Enter Details Correctly');
    }
    else {
      Alert.alert("Success Your Email Address",
        "Click to Process to Continue",
        [
          { text: 'Cancel', onPress: () => (console.log('Cancel Pressed')) },
          {
            text: 'OK', onPress: () => {
              navigation.navigate(navigationStrings.SIGNUP_OTP,{paramKey:email})
            }
          }
        ])
    };
    setEmail("");
  }
  return (
    <LinearGradient
      colors={[colors.linearBackGroundColor1, colors.linearBackGroundColor2]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }} end={{ x: 1, y: 1.2 }} >
      <View style={styles.mainView}>

        <Text style={styles.headingText1}>Enter Your Email Address</Text>
        <Text style={styles.headingText2}>We Will Send a confirmation code to your email.</Text>
        
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
        <TouchableOpacity style={styles.nextButton} 
        onPress={()=>validation()}
        >
          <SmallButton />
        </TouchableOpacity>
        <Image source={images.LogoGame} style={styles.appLogo} />
      </View>
    </LinearGradient>
  )
}

export default SignupEmail