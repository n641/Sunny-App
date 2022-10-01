import { StyleSheet, Text, View, Image , ScrollView , Bu, Button } from 'react-native'
import React from 'react'

const WeatherScreen = () => {
    return (
        <ScrollView style={{ backgroundColor: 'black', flex: 1 }}>
        <View style={{ backgroundColor: 'black', flex: 1 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: "white", fontSize: 24, fontStyle: 'italic' }}>Solar Storm and Space Weather</Text>
            </View>
            <View style={{ alignItems: 'center', margin:10 }}>
                <View>
                    <Text style={styles.text}>1.What is solar activity?</Text>
                </View>

                <View style={styles.card}>
                    <Image source={require('../assets/exp1.jpg')} resizeMode="stretch" style={styles.image} />
                    <Text style={styles.bodyText}  numberOfLines={3}>Solar flares, coronal mass ejections, high-speed solar wind, and solar energetic particles are all forms of solar activity. All solar activity is driven by the solar magnetic field.</Text>
                    <View  style={{justifyContent:'center' , borderRadius:30 , margin:2}}>
                    <Text style={{color:"blue",paddingRight:5 ,textDecorationLine:"underline line",fontSize:18,textAlign:"right"}} onPress={()=>{}}>let Explore the sun</Text>
                    </View>
                </View>
            </View>

            <Text style={{color:'white' , left:40}}>----------------------------------------------------------------------------------</Text>

            <View style={{ alignItems: 'center', margin:10 }}>
                <View>
                    <Text style={styles.text}>2.What is a solar flare?</Text>
                </View>

                <View style={styles.card}>
                    <Image source={require('../assets/exp2.jpg')} resizeMode="stretch" style={styles.image} />
                    <Text style={styles.bodyText}  numberOfLines={3}>A solar flare 
                    is an intense burst of radiation coming from the release of magnetic 
                    energy associated with sunspots. Flares are our solar system’s largest
                     explosive events. They are seen as bright areas on the sun and they can
                      last from minutes to hours. We typically see a solar flare by the photons 
                      (or light) it releases, at most every wavelength of the spectrum. The primary 
                      ways we monitor flares are in x-rays and optical light. Flares are also sites where
                     particles (electrons, protons, and heavier particles) are accelerated.</Text>
                    <View  style={{justifyContent:'center' , borderRadius:30 , margin:2}}>
                    <Text style={{color:"blue,",paddingRight:5 ,textDecorationLine:"underline line",fontSize:18,textAlign:"right"}} onPress={()=>{}}>let Explore the sun</Text>
                    </View>
                </View>
            </View>

            <Text style={{color:'white' , left:40}}>----------------------------------------------------------------------------------</Text>

            
            <View style={{ alignItems: 'center', margin:10 }}>
                <View>
                    <Text style={styles.text}>3.What is a solar prominence?</Text>
                </View>

                <View style={styles.card}>
                    <Image source={require('../assets/exp3.jpg')} resizeMode="stretch" style={styles.image} />
                    <Text style={styles.bodyText}  numberOfLines={3}>A solar prominence (also known as a filament when
                     viewed against the solar disk) is a large, bright feature extending outward from the Sun's
                      surface. Prominences are anchored to the Sun's surface in the photosphere, and extend 
                      outwards into the Sun's hot outer atmosphere, called the corona. A prominence forms over
                       timescales of about a day, and stable prominences may persist in the corona for several
                        months, looping hundreds of thousands of miles into space. Scientists are still researching how 
                        and why prominences are formed.</Text>
                        <View  style={{justifyContent:'center' , borderRadius:30 , margin:2}}>
                    <Text style={{color:"blue",paddingRight:5 ,textDecorationLine:"underline line",fontSize:18,textAlign:"right"}} onPress={()=>{}}>let Explore the sun</Text>
                    </View>
                </View>
            </View>

            <Text style={{color:'white' , left:40}}>----------------------------------------------------------------------------------</Text>

        </View>
        </ScrollView>
    )
}

export default WeatherScreen

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        width: 350,
        height: 200,
        borderRadius: 10,
        // flexDirection: 'row',
        alignContent:'space-between',
        margin:15

    },
    text: {
        color: "white",
        fontSize: 24,
        fontStyle: 'italic',
        backgroundColor: 'blue',
        margin: 20,
        padding:5,
        borderRadius:10
    },
    image: {
        flex: 1,
        alignItems:'flex-start',
        width:350,
        height:130,

    },
    bodyText: {
        color: "black",
        fontSize: 16,
        fontWeight:'bold',
        padding:10,

    },
})