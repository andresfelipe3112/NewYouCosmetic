import React, { Component, useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//@ts-ignore
import Video from "react-native-video";
import LinearGradient from 'react-native-linear-gradient'
import { Image } from 'react-native-elements/dist/image/Image';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const invierno = require('../Assets/video/invierno.mp4');
const otono = require('../Assets/video/otono.mp4');
const primavera = require('../Assets/video/primavera.mp4');
const verano = require('../Assets/video/verano.mp4');


const Seasons = () => {
    const navigation = useNavigation();
    const [season, setSeason] = useState(otono);
    const [active, setActive] = useState(false);
    const [colorCheckVerano, setcolorCheckVerano] = useState(false);
    const [colorCheckInvierno, setcolorCheckInvierno] = useState(false);
    const [colorCheckOtono, setcolorCheckOtono] = useState(false);
    const [colorCheckPrimavera, setcolorCheckPrimavera] = useState(false);


    
    const colorVerano = () => {
        if (colorCheckVerano) {
            return setcolorCheckVerano(false)
        }
        setSeason(verano)
        setcolorCheckVerano(true);
        setcolorCheckInvierno(false)
        setcolorCheckOtono(false)
        setcolorCheckPrimavera(false)

    }
    const colorInvierno = () => {
        if (colorCheckInvierno) {
            return setcolorCheckInvierno(false)
        }
        setSeason(invierno)
        setcolorCheckVerano(false);
        setcolorCheckInvierno(true);
        setcolorCheckOtono(false)
        setcolorCheckPrimavera(false)
    }
    const colorOtono = () => {
        if (colorCheckOtono) {
            return setcolorCheckOtono(false)
        }
        setSeason(otono)
        setcolorCheckVerano(false);
        setcolorCheckInvierno(false);
        setcolorCheckOtono(true);
        setcolorCheckPrimavera(false)
    }
    const colorPrimavera = () => {
        if (colorCheckPrimavera) {
            return setcolorCheckPrimavera(false)
        }
        setSeason(primavera)
        setcolorCheckVerano(false);
        setcolorCheckInvierno(false);
        setcolorCheckOtono(false);
        setcolorCheckPrimavera(true);
    }

    return (
        <View
            style={{ width: '100%', height: Dimensions.get("screen").height }}
        >
            <LinearGradient opacity={0.9} colors={['#378bc1', '#395ea1', '#4847a2']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
            <ScrollView>
                <View
                    style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        width: Dimensions.get("window").width, height: Dimensions.get("window").height, marginTop: -50
                    }}
                >
                    <Text
                        style={styles.textTitle}
                    >¿Eres Vegano?</Text>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckVerano ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={colorVerano}
                    >
                        <Text
                            style={[styles.text, { color: colorCheckVerano ? "black" : 'white' }]}
                        >Si</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckOtono ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={colorOtono}
                    >
                        <Text
                            style={[styles.text, { color: colorCheckOtono ? "black" : 'white' }]}
                        >No</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckPrimavera ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={colorPrimavera}
                    >
                        <Text
                            style={[styles.text, { color: colorCheckPrimavera ? "black" : 'white' }]}
                        >No lo quiero decir</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View
                style={{
                    position: "absolute", top: Dimensions.get("window").height * 0.91, display: "flex", flexDirection: "row",
                    justifyContent: "space-between", width: Dimensions.get("window").width * 0.9, alignSelf: "center",
                }}
            >
                <Icon
                    name='arrow-left'
                    type='evilicon'
                    color='#7C8499'
                    size={50}
                    tvParallaxProperties={undefined}
                    onPress={() => navigation.goBack()}
                />
                <TouchableOpacity 
                  //@ts-ignore
                  onPress={() => navigation.navigate("StyleOption")}
                style={{
                    width: 100,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <Text
                        style={{ color: 'white', }}
                    >Siguiente</Text>
                    <Icon
                        name='arrow-right'
                        type='evilicon'
                        color='#7C8499'
                        size={50}
                        tvParallaxProperties={undefined}
                      
                    />
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Seasons;

const styles = StyleSheet.create({
    textTitle: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
        fontFamily: "Dosis",
        marginVertical: 20,
        borderRadius: 25,
        opacity: 0.6
    },
    text: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    button: {
        width: 200,
        color: 'white',
        height: 45,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "white",
        borderWidth: 1,
        marginVertical: 10
    },
    containerStyle: {
        width: 120,
        height: 120,
        margin: 15,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})