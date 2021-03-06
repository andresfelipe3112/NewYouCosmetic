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

// const imagenA = require('../Assets/Img/ovalado.jpg');
// const ImagenB = require('../Assets/Img/rectangularMen.jpg');
// const imagenC = require('../Assets/Img/redondoMen.webp');
// const imagenD = require('../Assets/Img/alargadoMen.webp');
// const imagenE = require('../Assets/Img/triangular.jpg');

//mujer

const imagenA = require('../Assets/Img/ovaladoWoman.jpg');
const ImagenB = require('../Assets/Img/rectangularWoman.webp');
const imagenC = require('../Assets/Img/redondoWomen.jpg');
const imagenD = require('../Assets/Img/alargadoWomen.jpg');
const imagenE = require('../Assets/Img/trianguloWoman.webp');
const imagenF = require('../Assets/Img/trianguloInvertidoWomen.webp');
const imagenG = require('../Assets/Img/diamanteWoman.jpeg');



const TipoDeRostro = ({ route }) => {
    const navigation = useNavigation();
    const [season, setSeason] = useState(videoA);
    const [statusInfo, setstatusInfo] = useState(true);
    const [colorCheckA, setcolorCheckA] = useState(false);
    const [colorCheckB, setsetcolorCheckB] = useState(false);
    const [colorCheckC, setcolorCheckC] = useState(false);
    const [colorCheckD, setcolorCheckD] = useState(false);
    const [colorCheckE, setcolorCheckE] = useState(false);
    const [colorCheckF, setcolorCheckF] = useState(false);
    const [colorCheckG, setcolorCheckG] = useState(false);
    const [data, setData] = useState("");
    const [categoryName, setCategoryName] = useState();

    useEffect(() => {
        console.log(route?.params?.category);
        setCategoryName(route?.params?.category)
    }, [route])

    const addCategory = async () => {
        try {
            route?.params?.actualizar === true && navigation.goBack()
            const resp = await newApi.post('users/typeFace', {
                "typeFace": data
            })
            if (resp) {
                const respCategori = !route?.params?.actualizar && await newApi.get(`products/third-category/${categoryName}`)
                if (respCategori) {
                    !route?.params?.actualizar && navigation.navigate("Root", { reRender: "COLLAR" })
                }
            }
        } catch (error) {
            console.log(error);
        }
    }


    const colorA = (type) => {
        if (colorCheckA) {
            return setcolorCheckA(false)
        }
        setData(type)
        setSeason(videoA)
        setcolorCheckF(false);
        setcolorCheckE(false)
        setcolorCheckA(true);
        setsetcolorCheckB(false)
        setcolorCheckC(false)
        setcolorCheckD(false)
        setcolorCheckG(false);
    }
    const colorB = (type) => {
        if (colorCheckB) {
            return setsetcolorCheckB(false)
        }
        setData(type)
        setSeason(VideoB)
        setcolorCheckF(false);
        setcolorCheckE(false)
        setcolorCheckA(false);
        setsetcolorCheckB(true);
        setcolorCheckC(false)
        setcolorCheckD(false)
    }
    const colorC = (type) => {
        if (colorCheckC) {
            return setcolorCheckC(false);
        }
        setData(type)
        setSeason(VideoC)
        setcolorCheckF(false);
        setcolorCheckE(false);
        setcolorCheckA(false);
        setsetcolorCheckB(false);
        setcolorCheckC(true);
        setcolorCheckD(false);
        setcolorCheckG(false);
    }
    const colorD = (type) => {
        if (colorCheckD) {
            return setcolorCheckD(false);
        }
        setData(type)
        setSeason(VideoD)
        setcolorCheckF(false);
        setcolorCheckE(false);
        setcolorCheckA(false);
        setsetcolorCheckB(false);
        setcolorCheckC(false);
        setcolorCheckD(true);
        setcolorCheckG(false);
    }

    const colorE = (type) => {
        if (colorCheckE) {
            return setcolorCheckE(false);
        }
        setData(type)
        setSeason(VideoE)
        setcolorCheckA(false);
        setsetcolorCheckB(false);
        setcolorCheckC(false);
        setcolorCheckD(false);
        setcolorCheckE(true);
        setcolorCheckF(false);
        setcolorCheckG(false);
    }

    const colorF = (type) => {
        if (colorCheckF) {
            return setcolorCheckF(false);
        }
        setData(type)
        setSeason(VideoE)
        setcolorCheckA(false);
        setsetcolorCheckB(false);
        setcolorCheckC(false);
        setcolorCheckD(false);
        setcolorCheckE(false);
        setcolorCheckF(true);
        setcolorCheckG(false);
    }

    const colorG = (type) => {
        if (colorCheckG) {
            return setcolorCheckG(false);
        }
        setData(type)
        setSeason(VideoE)
        setcolorCheckA(false);
        setsetcolorCheckB(false);
        setcolorCheckC(false);
        setcolorCheckD(false);
        setcolorCheckE(false);
        setcolorCheckF(false);
        setcolorCheckG(true);
    }

    useEffect(() => {
        if (route?.params?.data === "ovalado") {
            colorA("ovalado")
        }
        if (route?.params?.data === "rectangular") {
           colorB("rectangular")  
        }
        if (route?.params?.data === "redondo") {
           colorC("redondo")  
        }
        if (route?.params?.data === "alargado") {
            colorD("alargado")  
        }
        if (route?.params?.data === "triangulo") {
           colorE("triangulo")  
        }
        if (route?.params?.data === "trianguloInvertido") {
           colorG("trianguloInvertido")  
        }
        if (route?.params?.data === "diamante") {
           colorG("diamante")  
        }
           console.log(route?.params?.data);
        
    },[route?.params?.data])


    return (
        <View
        >
            <LinearGradient opacity={1} colors={['#378bc1', '#395ea1', '#4847a2']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
            <ScrollView>
                <Text
                    style={styles.textTitle}
                >Selecciona t?? tipo de rostro.</Text>
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
                            colorA("ovalado");
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

                    <DawnLogo render={statusInfo} text="Al igual que el rostro redondo, nos encontramos con una forma de cara en la que prevalecen las curvas, si bien el rostro es m??s alargado que ancho. La barbilla tiende a ser m??s corta que la frente y suelen marcarse mucho las mejillas." />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckB ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={() => colorB("rectangular")}
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
                    <DawnLogo render={statusInfo} text=" A menudo es dif??cil de distinguir del cuadrado (aunque su barbilla suele ser m??s redondeada) y del ovalado." />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckC ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={() => colorC("redondo")}
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
                    <DawnLogo text="Este tipo de rostro se caracteriza por tener aproximadamente la misma altura que anchura, generando una figura circular en la que no se observan formas angulosas sino curvas y en la que las mejillas se acercan al ment??n, adem??s de p??mulos anchos." />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckD ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={() => colorD("alargado")}
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
                    <DawnLogo text="En ??l vemos una frente por lo general larga, p??mulos altos y rasgos no muy marcados. " />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckE ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={() => colorE("triangulo")}
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
                    <DawnLogo text="El rostro triangular se caracteriza por una mand??bula amplia y una frente estrecha en comparaci??n, con los p??mulos en una situaci??n intermedia." />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckF? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={() => colorF("trianguloInvertido")}
                    >
                        <Image
                            source={imagenF}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckF ? "black" : 'white' }]}
                        >Triangular invertido</Text>
                    </TouchableOpacity>
                    <DawnLogo text="El rostro triangular se caracteriza por una mand??bula amplia y una frente estrecha en comparaci??n, con los p??mulos en una situaci??n intermedia." />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckG? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={() => colorG("diamante")}
                    >
                        <Image
                            source={imagenG}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckG ? "black" : 'white' }]}
                        >Diamante</Text>
                    </TouchableOpacity>
                    <DawnLogo text="El rostro triangular se caracteriza por una mand??bula amplia y una frente estrecha en comparaci??n, con los p??mulos en una situaci??n intermedia." />
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
              { !route?.params?.actualizar && <TouchableOpacity
                    //@ts-ignore
                    onPress={addCategory}
                    //  onPress={() => navigation.navigate("Root", {
                    //     screen:"Para t??",
                    //     params:{current:"Camisas"}
                    // })}
                    style={{
                        width: 200,
                        display: "flex",
                        flexDirection: "row",
                        alignSelf: "flex-end",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        padding: 3,
                        backgroundColor: "#19181C",
                        borderRadius: 20,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 6,
                        },
                        shadowOpacity: 0.37,
                        shadowRadius: 7.49,
                        elevation: 12,
                    }}>
                    <Text
                        style={{ color: '#D4D7EE', }}
                    >Finalizar</Text>
                    <Icon
                        name='arrow-right'
                        type='evilicon'
                        color='#D4D7EE'
                        size={40}
                        tvParallaxProperties={undefined}
                    />
                </TouchableOpacity>}
                {route?.params?.actualizar === true && <TouchableOpacity
                    //@ts-ignore
                    onPress={addCategory}
                    style={{
                        width: 100,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",

                    }}>
                    <Text
                        style={{ color: 'white', borderRadius:10, borderColor: "gray", borderWidth: 1, padding:10}}
                    >Actualizar</Text>
                </TouchableOpacity>}
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