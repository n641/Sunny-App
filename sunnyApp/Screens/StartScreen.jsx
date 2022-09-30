import { View, Text, ImageBackground , StyleSheet , TouchableOpacity} from 'react-native'
import React from 'react'

const image = { uri: "https://wallpaperaccess.com/full/4073119.jpg" };

export default function StartScreen({navigation}) {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('HomeScreen');
      }}> 
      <Text style={styles.text}>Sunny</Text>
    </TouchableOpacity>
    </ImageBackground>
  </View>
  )
}

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
});