import { StyleSheet, Text, View , ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

const GameScreen = ({navigation}) => {
  return (
    <ImageBackground source={require('../assets/game2.jpg')}
    resizeMode='stretch' style={styles.image}>
 <TouchableOpacity onPress={()=>{
        // navigation.navigate('HomeScreen');
      }}> 
      <Text style={styles.text}>Let's play</Text>
    </TouchableOpacity>
    </ImageBackground>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
      }
})