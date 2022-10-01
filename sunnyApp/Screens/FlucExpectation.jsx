import { StyleSheet, Text, View, ImageBackground , ScrollView } from 'react-native'
import React from 'react'

const FlucExpectation = () => {
    const data = [
        {
            "date": "2022-09-30",
            "tencmfcst_1_day": 140,
            "tencmfcst_2_day": 140,
            "tencmfcst_3_day": 135
        },
        {
            "date": "2022-09-29",
            "tencmfcst_1_day": 148,
            "tencmfcst_2_day": 146,
            "tencmfcst_3_day": 146
        },
        {
            "date": "2022-09-28",
            "tencmfcst_1_day": 135,
            "tencmfcst_2_day": 130,
            "tencmfcst_3_day": 130
        },
        {
            "date": "2022-09-27",
            "tencmfcst_1_day": 135,
            "tencmfcst_2_day": 135,
            "tencmfcst_3_day": 130
        },
        {
            "date": "2022-09-26",
            "tencmfcst_1_day": 135,
            "tencmfcst_2_day": 140,
            "tencmfcst_3_day": 140
        },
        {
            "date": "2022-09-25",
            "tencmfcst_1_day": 140,
            "tencmfcst_2_day": 142,
            "tencmfcst_3_day": 145
        },
        {
            "date": "2022-09-24",
            "tencmfcst_1_day": 148,
            "tencmfcst_2_day": 152,
            "tencmfcst_3_day": 155
        },]
    return (
        <ImageBackground source={require('../assets/Milky-Way-From-Canyonlands-National-Park-scaled.jpg')}
            resizeMode="cover" style={styles.image}>
            <ScrollView style={{}}>
            <Text style={styles.text}>Expectaion Flux</Text>
                {
                    data.map((e,i) => (
                        <View key={i} style={{backgroundColor:"black" , margin:10 , borderRadius:10 , borderColor:"white" , borderWidth:2 , padding:10}}>
                            <Text style={{ color: "red"  , fontSize:20}}>date: {e.date}</Text>
                            <Text style={{ color: "white" }}>tencmfcst_1_Day: {e.tencmfcst_1_day}</Text>
                            <Text style={{ color: "white" }}>tencmfcst_2_Day: {e.tencmfcst_2_day}</Text>
                            <Text style={{ color: "white" }}>tencmfcst_3_Day: {e.tencmfcst_3_day}</Text>


                        </View>

                    ))
                }

            </ScrollView>
        </ImageBackground>
    )
}

export default FlucExpectation

const styles = StyleSheet.create({
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