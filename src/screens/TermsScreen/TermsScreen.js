import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const TermsScreen = () => {
  return (
    <Text style={styles.termsText}>
      {`You will receive confirmation by SMS.${"\n"}Any kind of cancelation of the bookings will be charged.${"\n"}Under 16 students will be not allow in school uniform.${"\n"}Any kind of damage by user will be charged by vendor.${"\n"}All rights are reserved by snookist.${"\n"}Any kind of changes can be done by snookist.`}
    </Text>
  )
}

export default TermsScreen