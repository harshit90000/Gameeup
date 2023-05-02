import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import colors, { solidBlack, solidRed, solidWhite } from '../assets/colors/colors'
import { scale } from 'react-native-size-matters';

export default OtpInput = ({  onChangeText, value = [], noOfInput=4, backgroundColor }) => {

    const pins = []
    for ( let i = 0; i < noOfInput; i++){
        pins[i] = i;
    }
    const nextInput = (e, index) => {
        if (e == "" && index > 0 ) {
            pins[index-1].focus()
            return
        }
        if (e != "" && index < noOfInput-1 ){
            pins[index+1].focus()
        }
    }
    return(
        <View style={styles.input}>
            {
                pins.map( ( blank , index) => (
                    <View
                        key= {index} 
                        style={[styles.box, {backgroundColor : backgroundColor || solidWhite}] }   >
                        <TextInput 
                            style={styles.inputBox}
                            onChangeText={e => {
                                    onChangeText(e, index)
                                    nextInput(e, index)
                                }  
                            }
                            value= {value[index]}
                            keyboardType= "number-pad"
                            maxLength= {1}
                            ref= { e =>  pins[index]=e }
                            disableFullscreenUI= {true}
                        />   
                    </View>
                ))
            }
        </View>
    
)}
const styles = StyleSheet.create({
    input:{
        alignItems: "center",
        marginVertical: scale(10),
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
        padding:scale(10),    
    },
    box:{
        height: scale(40),
        width: scale(40),
        borderRadius: scale(10),
        justifyContent: "center",
        alignItems: "center", 
        marginHorizontal: scale(20),
        borderColor: colors.peacockBlue,
        borderWidth: scale(2)
    },

    inputBox:{   
        fontSize: scale(40),
        fontSize:scale(15),
        fontWeight: '700',
        color: colors.solidBlack,
        textAlign: "center"
    },
})