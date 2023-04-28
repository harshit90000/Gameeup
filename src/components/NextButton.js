import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Svg, { Circle, G, Image } from 'react-native-svg'
import colors from '../assets/colors/colors'
import { scale } from 'react-native-size-matters'
import { images } from '../constants/imagePath'
import { current } from '@reduxjs/toolkit'
const NextButton = ({percentages,scrollTo}) => {
    const size = 120
    const strokeWidth = 2
    const center = size / 2
    const radius = size / 2 - strokeWidth / 2
    const circumFerence = 2 * Math.PI * radius
    const progressAnimation = useRef(new Animated.Value(0)).current
    const progressRef = useRef(null)
    const animation = (toValue) =>{
        return Animated.timing(progressAnimation,{
            toValue,
            duration:250,
            useNativeDriver:true
        }).start()
    }
    useEffect(() =>{
        animation(percentages)
    },[percentages])
    useEffect(()=>{
        progressAnimation.addListener(
            (value) =>{
                const strokeDashoffset = circumFerence - (circumFerence * value.value) / 100;
                if(progressRef?.current){
                    progressRef.current.setNativeProps([strokeDashoffset,])
                }[percentages]
            }
        )
        return () =>{
            progressAnimation.removeAllListeners()
        }
    })
    
    return (
        <View style={styles.container}>
            <Svg width={size} height={size}>
                <G rotation="-90" origin={"center"}>
                    <Circle stroke= {colors.darkBlue} cx={center} cy={center} r={radius} strokeWidth={strokeWidth}/>
                    <Circle 
                    stroke= {colors.solidRed} cx={center} cy={center} r={radius} 
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumFerence}/>
                </G>
            </Svg>
            <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
                <Image source={images.bottomHeart} style={styles.images}/>
            </TouchableOpacity>
        </View>
    )
}
export default NextButton
const styles = StyleSheet.create({
    images: {
        height:scale(50),
        width:scale(50)
    }
})