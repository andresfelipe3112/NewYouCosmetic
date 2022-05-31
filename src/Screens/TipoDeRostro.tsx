import React, { Component, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Animated, Dimensions, Easing, ScrollView, StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native';
//@ts-ignore
import Video from "react-native-video";
import LinearGradient from 'react-native-linear-gradient'
import { Image } from 'react-native-elements/dist/image/Image';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import DawnLogo from '../Components/DawnLogo';
import newApi from '../Services/LoginApiValues';


const videoA = require('../Assets/video/casual.mp4');
const VideoB = require('../Assets/video/formal.mp4');
const VideoC = require('../Assets/video/cocktail.mp4');
const VideoD = require('../Assets/video/blackTie.mp4');
const VideoE = require('../Assets/video/white.mp4');

const imagenA = require('../Assets/Img/ovalado.jpg');
const ImagenB = require('../Assets/Img/rectangular.jpg');
const imagenC = require('../Assets/Img/redondo.jpg');
const imagenD = require('../Assets/Img/alargado.jpg');
const imagenE = require('../Assets/Img/triangular.jpg');


const TipoDeRostro = () => {
    const navigation = useNavigation();
    const [season, setSeason] = useState(videoA);
    const [statusInfo, setstatusInfo] = useState(true);
    const [colorCheckA, setcolorCheckA] = useState(false);
    const [colorCheckB, setsetcolorCheckB] = useState(false);
    const [colorCheckC, setcolorCheckC] = useState(false);
    const [colorCheckD, setcolorCheckD] = useState(false);
    const [colorCheckE, setcolorCheckE] = useState(false);


    const TipoRostroApi = async (season: string,) => {
        try {
            const resp = await newApi.post('users/typeFace', { "typeFace": "tipeFace123" })
            console.log("respSeaso", resp.data);
            if (resp) {
                navigation.navigate("ColorHearOption")
            }
        } catch (error) {
            console.log(error);
        }
    }


    const colorA = () => {
        if (colorCheckA) {
            return setcolorCheckA(false)
        }
        setSeason(videoA)
        setcolorCheckE(false)
        setcolorCheckA(true);
        setsetcolorCheckB(false)
        setcolorCheckC(false)
        setcolorCheckD(false)
    }
    const colorB = () => {
        if (colorCheckB) {
            return setsetcolorCheckB(false)
        }
        setSeason(VideoB)
        setcolorCheckE(false)
        setcolorCheckA(false);
        setsetcolorCheckB(true);
        setcolorCheckC(false)
        setcolorCheckD(false)
    }
    const colorC = () => {
        if (colorCheckC) {
            return setcolorCheckC(false);
        }
        setSeason(VideoC)
        setcolorCheckE(false);
        setcolorCheckA(false);
        setsetcolorCheckB(false);
        setcolorCheckC(true);
        setcolorCheckD(false);
    }
    const colorD = () => {
        if (colorCheckD) {
            return setcolorCheckD(false);
        }
        setSeason(VideoD)
        setcolorCheckE(false);
        setcolorCheckA(false);
        setsetcolorCheckB(false);
        setcolorCheckC(false);
        setcolorCheckD(true);
    }

    const colorE = () => {
        if (colorCheckE) {
            return setcolorCheckE(false);
        }
        setSeason(VideoE)
        setcolorCheckA(false);
        setsetcolorCheckB(false);
        setcolorCheckC(false);
        setcolorCheckD(false);
        setcolorCheckE(true);
    }

    useEffect(() => {
        colorA()
    }, [])

    return (
        <View
        >
            <LinearGradient opacity={1} colors={['#378bc1', '#395ea1', '#4847a2']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
            <ScrollView>
                <Text
                    style={styles.textTitle}
                >Selecciona tú tipo de rostro.</Text>
                <View
                    style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        width: Dimensions.get("window").width, marginBottom: 40
                    }}
                >


                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckA ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={() => {
                            colorA();
                        }}
                    >
                        <Image
                            source={imagenA}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckA ? "black" : 'white' }]}
                        >Ovalado</Text>
                    </TouchableOpacity>
                    <DawnLogo render={statusInfo} text="Al igual que el rostro redondo, nos encontramos con una forma de cara en la que prevalecen las curvas, si bien el rostro es más alargado que ancho. La barbilla tiende a ser más corta que la frente y suelen marcarse mucho las mejillas." />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckB ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={colorB}
                    >
                        <Image
                            source={ImagenB}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckB ? "black" : 'white' }]}
                        >Rectangular</Text>
                    </TouchableOpacity>
                    <DawnLogo render={statusInfo} text=" A menudo es difícil de distinguir del cuadrado (aunque su barbilla suele ser más redondeada) y del ovalado." />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckC ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={colorC}
                    >
                        <Image
                            source={imagenC}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckC ? "black" : 'white' }]}
                        >Redondo</Text>
                    </TouchableOpacity>
                    <DawnLogo text="Este tipo de rostro se caracteriza por tener aproximadamente la misma altura que anchura, generando una figura circular en la que no se observan formas angulosas sino curvas y en la que las mejillas se acercan al mentón, además de pómulos anchos." />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckD ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={colorD}
                    >
                        <Image
                            source={imagenD}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckD ? "black" : 'white' }]}
                        >Alargado</Text>
                    </TouchableOpacity>
                    <DawnLogo text="En él vemos una frente por lo general larga, pómulos altos y rasgos no muy marcados. " />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckE ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={colorE}
                    >
                        <Image
                            source={imagenE}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckE ? "black" : 'white' }]}
                        >Triangular</Text>
                    </TouchableOpacity>
                    <DawnLogo text="El rostro triangular se caracteriza por una mandíbula amplia y una frente estrecha en comparación, con los pómulos en una situación intermedia." />
                </View>
            </ScrollView>
            <View
                style={{
                    position: "absolute", top: Dimensions.get("window").height * 0.015, display: "flex", flexDirection: "row",
                    justifyContent: "space-between", width: Dimensions.get("window").width * 0.9, alignSelf: "center",
                }}
            >
                <LinearGradient opacity={0.7} colors={['#19181C', '#19181C']}
                    style={{
                        position: "absolute", width: Dimensions.get("window").width * 1.5,
                        height: 65,
                        marginHorizontal: -100,
                        marginTop: -13
                    }} />
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
                    onPress={() => TipoRostroApi()}
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

export default TipoDeRostro;

const styles = StyleSheet.create({
    textTitle: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
        fontFamily: "Dosis",
        marginVertical: 20,
        borderRadius: 25,
        opacity: 0.6, display: "flex",
        marginTop: 70
    },
    text: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    button: {
        width: 170,
        color: 'white',
        height: 200,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "white",
        borderWidth: 1,
        margin: 10
    },
    containerStyle: {
        width: 110,
        height: 110,
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
    },
    textInput: {
        color: 'white',
        paddingHorizontal: 25,
    },
    inputOptions: {

    }
})