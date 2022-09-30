import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.containerImage}>
            <ImageBackground source={require('../assets/Milky-Way-From-Canyonlands-National-Park-scaled.jpg')}
                resizeMode="cover" style={styles.image}>

                <TouchableOpacity onPress={()=>{
                    navigation.navigate('GameScreen')
                }}>
                    <View style={styles.container}>
                        <Text style={styles.text}>PLay Now</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.container}>
                        <Text style={styles.text}>space Weather</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.containerSun}>
                    <View style={{ flexDirection: 'row', width: 250, justifyContent: 'space-around' }}>
                        <Button title='see Sun' color={'red'} style={{ borderRadius: 10 }} onpress={()=>{

                        }} />
                        <View style={{ borderColor: 'black', borderWidth: 1 , borderRadius:10}}>
                            <View style={{flexDirection:'row', alignItems:'center', margin:4}}>
                                <Ionicons name="calendar" style={{top:2}}/>
                                <Text style={{ textAlign: 'center', top: 2, margin: 3 }}>10/02/2022</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    containerImage: {
        flex: 1
    },
    container: {
        width: 200,
        height: 100,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        left: 100,
        top: -5,
        borderRadius: 10
    },
    containerSun: {
        width: 300,
        height: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        left: 50,
        top: 50,
        borderRadius: 10
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 29,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
})