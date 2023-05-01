import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../assets/colors/colors";
import { scale } from "react-native-size-matters";
const CustomText = ({ text }) => {
  return (
    <Text
      style={{
        marginStart:scale(17),
        fontWeight: "500",
        fontSize: scale(16),
        color: colors.skyBlue
      }} >
      {text}
    </Text>
  );
};

export default CustomText;
