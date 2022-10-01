import { StyleSheet, Text, View, ImageBackground, Button, TouchableOpacity } from 'react-native'
import React ,{useEffect}from 'react'
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';


Notifications.setNotificationHandler({
    handleNotification:async ()=>{
      return{
        shouldShowAlert:true
      }
    }
  })

  
const HomeScreen = ({ navigation }) => {


    useEffect(()=>{
        Notifications.getPermissionsAsync()
        .then((statusObj)=>{
          if(statusObj.status !== 'granted'){
            return Notifications.requestPermissionsAsync()
          }
          return statusObj
        }).then((statusObj)=>{
          if(statusObj.status !== 'granted'){
            return;
          }
        })
      },[])
      
      useEffect(()=>{
       const backgroundSubscribtion = Notifications.addNotificationResponseReceivedListener(  //control notification while the app is not               runing   
       responce => {
        // navigation.navigate(responce.date);
       } 
       )
        const foregroundsubscriber = Notifications.addNotificationReceivedListener( //control notification while the app runing 
          (Notifications)=>{
            
            //we can get notification data and navigate user it specific screen
          }
        );
         return()=>{
          foregroundsubscriber.remove();
          backgroundSubscribtion.remove();
         } 
      },[])
    
      const triggerNotificationHandler=()=>{
        Notifications.scheduleNotificationAsync({
          content:{
            title:"There is an explosion today in the sun",
            body:" let me tell more about this explosion",
            data: { data: 'FlucExpectation' },
          },
         trigger:{
          seconds:2
         }
         
    
        })
      }

    return (
        <View style={styles.containerImage}>
            <ImageBackground source={require('../assets/Milky-Way-From-Canyonlands-National-Park-scaled.jpg')}
                resizeMode="cover" style={styles.image}>

                <TouchableOpacity onPress={() => {
                    navigation.navigate('GameScreen')
                }}>
                    <View style={styles.container}>
                        <Text style={styles.text}>PLay Now</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onpress={() => {
                    navigation.navigate('WeatherScreen')
                }}>
                    <View style={styles.container}>
                        <Text style={styles.text} onPress={()=>{
                             navigation.navigate('WeatherScreen')
                        }}>space Weather</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onpress={() => {
                    navigation.navigate('FlucExpectation')
                }}>
                    <View style={styles.container}>
                        <Text style={styles.text} onPress={()=>{
                             navigation.navigate('FlucExpectation')
                        }}>Flux Expectaion</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.containerSun}>
                    <View style={{ flexDirection: 'row', width: 250, justifyContent: 'space-around' }}>
                        <Button title='see Sun' color={'red'} style={{ borderRadius: 10 }} onpress={() => {

                        }} />
                        <View style={{ borderColor: 'black', borderWidth: 1, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 4 }}>
                                <Text style={{ textAlign: 'center', top: 2, margin: 3 }}>10/02/2022</Text>
                                <Ionicons name="calendar" style={{ top: 2 }} size={23} />
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={{color:"black"}} onPress={triggerNotificationHandler}>click</Text>

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
        fontSize: 25,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }
})