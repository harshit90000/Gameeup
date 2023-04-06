import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { images } from '../constants/imagePath';
import { scale } from 'react-native-size-matters';
import navigationStrings from '../constants/navigationStrings';
import { FavoriteScreen, HomeScreen, LiveScore, MenuScreen, ScoreBoard } from '../screens';
import colors from '../assets/styles/colors/colors';
const Tab = createBottomTabNavigator();

const BottomStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor:colors.lightWhite,
                    height:"12%"},
            }}>
            <Tab.Screen
                name={navigationStrings.HOME_SCREEN}
                component={HomeScreen}
                options={{
                    headerTitle:"Home",
                    headerTintColor:colors.borderColor,
                    headerTitleStyle:{marginLeft:scale(40),fontSize:scale(20)},
                    headerTitleAlign:"left",
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text
                            style={[styles.bottomText, {
                                color: focused ? colors.borderColor : color,
                                fontSize: focused ?  scale(13) : scale(10),
                                marginBottom: focused ? scale(4) : scale(5)

                            }]}>Home</Text>
                    ),
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image
                                source={images.bottomHome}
                                style={[styles.bottomImage, {
                                    tintColor: focused ? colors.borderColor : color,
                                    height: focused ? scale(30) : scale(25),
                                    width: focused ? scale(30) : scale(25)
                                }]} />
                        )
                    }
                }} />
            <Tab.Screen
                name={navigationStrings.FAVORITE_SCREEN}
                component={FavoriteScreen}
                options={{
                    headerTitle:"Favorite",
                    headerTintColor:colors.borderColor,
                    headerTitleStyle:{marginLeft:scale(40),fontSize:scale(20)},
                    headerTitleAlign:"left",
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text
                            style={[styles.bottomText, {
                                color: focused ? colors.borderColor : color,
                                fontSize: focused ?  scale(13) : scale(10),
                                marginBottom: focused ? scale(4) : scale(5)
                            }]}>Favorite</Text>
                    ),
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image
                                source={images.bottomHeart}
                                style={[styles.bottomImage, {
                                    tintColor: focused ? colors.borderColor : color,
                                    height: focused ? scale(30) : scale(25),
                                    width: focused ? scale(30) : scale(25)
                                }]} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name={navigationStrings.LIVE_SCORE}
                component={LiveScore}
                options={{
                    headerTitle:"LiveScore",
                    headerTintColor:colors.borderColor,
                    headerTitleStyle:{marginLeft:scale(40),fontSize:scale(20)},
                    headerTitleAlign:"left",
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text
                            style={[styles.bottomText, {
                                color: focused ? colors.borderColor : color,
                                fontSize: focused ?  scale(13) : scale(10),
                                marginBottom: focused ? scale(4) : scale(5)
                            }]}>LiveScore</Text>
                    ),
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image
                                source={images.bottomSlideShow}
                                style={[styles.bottomImage, {
                                    tintColor: focused ? colors.borderColor : color,
                                    height: focused ? scale(30) : scale(25),
                                    width: focused ? scale(30) : scale(25)
                                }]} />
                        )
                    }
                }} />
            <Tab.Screen
                name={navigationStrings.SCORE_BOARD}
                component={ScoreBoard}
                options={{
                    headerTitle:"ScoreBoard",
                    headerTintColor:colors.borderColor,
                    headerTitleStyle:{marginLeft:scale(40),fontSize:scale(20)},
                    headerTitleAlign:"left",
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text
                            style={[styles.bottomText, {
                                color: focused ? colors.borderColor : color,
                                fontSize: focused ?  scale(11) : scale(10),
                                marginBottom: focused ? scale(4) : scale(5)
                            }]}>ScoreBoard</Text>
                    ),
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image
                                source={images.bottomScoreboard}
                                style={[styles.bottomImage, {
                                    tintColor: focused ? colors.borderColor : color,
                                    height: focused ? scale(30) : scale(25),
                                    width: focused ?scale(30) : scale(25),
                                }]} />
                        )
                    }
                }} />

            <Tab.Screen name={navigationStrings.MENU_SCREEN}
                component={MenuScreen}
                options={{
                    headerTitle:"Menu",
                    headerTintColor:colors.borderColor,
                    headerTitleStyle:{marginLeft:scale(40),fontSize:scale(20)},
                    headerTitleAlign:"left",
                    tabBarLabel: ({ focused, color, size }) => (
                        <Text
                            style={[styles.bottomText, {
                                color: focused ? colors.borderColor : color,
                                fontSize: focused ? scale(13) : scale(10),
                                marginBottom: focused ? scale(4) : scale(6)
                            }]}>Menu</Text>
                    ),
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image
                                source={images.bottomMenu}
                                style={[styles.bottomImage, {
                                    tintColor: focused ? colors.borderColor : color,
                                    height: focused ? scale(30) : scale(25),
                                    width: focused ? scale(30) : scale(25),
                                }]} />
                        )
                    }
                }}
            />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    bottomImage: {
        // marginHorizontal: scale(0.1),
        // height: scale(20),
        // width: scale(20),
    },
    bottomText: {
        // marginBottom: scale(5),
    }
})

export default BottomStack