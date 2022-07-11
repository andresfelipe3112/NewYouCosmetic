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

const imagenA = require('../Assets/Img/casual.jpeg')
const ImagenB = require('../Assets/Img/formal.jpeg')
const imagenC = require('../Assets/Img/cocktail.jpeg')
const imagenD = require('../Assets/Img/blackTie.jpeg')
const imagenE = require('../Assets/Img/whiteTie.jpeg')


const StyleOption = ({route}) => {
    const navigation = useNavigation();
    const [season, setSeason] = useState(videoA);
    const [statusInfo, setstatusInfo] = useState(true);
    const [colorCheckA, setcolorCheckA] = useState(false);
    const [colorCheckB, setsetcolorCheckB] = useState(false);
    const [colorCheckC, setcolorCheckC] = useState(false);
    const [colorCheckD, setcolorCheckD] = useState(false);
    const [colorCheckE, setcolorCheckE] = useState(false);

    const [response, setResponse] = useState("");

    const idDressApi = async (response: Boolean,) => {
        try {
            route?.params?.actualizar === true && navigation.goBack();
            const resp = await newApi.post('users/style', { "style": "style1" })
            resp && await newApi.get('products/first-category')
            !route?.params?.actualizar  && navigation.navigate("Root")
            console.log("idDressApi", resp.data);
            // if (resp) {
            // }
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
            return setcolorCheckC(false)
        }
        setSeason(VideoC)
        setcolorCheckE(false)
        setcolorCheckA(false);
        setsetcolorCheckB(false);
        setcolorCheckC(true);
        setcolorCheckD(false)
    }
    const colorD = () => {
        if (colorCheckD) {
            return setcolorCheckD(false)
        }
        setSeason(VideoD)
        setcolorCheckE(false)
        setcolorCheckA(false);
        setsetcolorCheckB(false);
        setcolorCheckC(false);
        setcolorCheckD(true);
    }

    const colorE = () => {
        if (colorCheckE) {
            return setcolorCheckE(false)
        }
        setSeason(VideoE)
        setcolorCheckA(false);
        setsetcolorCheckB(false);
        setcolorCheckC(false);
        setcolorCheckD(false);
        setcolorCheckE(true)
    }

    useEffect(() => {
        if (route?.params?.data === "style1") {
           colorA();
           setResponse("style")
        }
        if (route?.params?.data === "style2") {
           colorB();
           setResponse("style2")  
        }
        if (route?.params?.data === "style3") {
           colorC();
           setResponse("style3")  
        }
        if (route?.params?.data === "style4") {
           colorD();
           setResponse("style4")  
        }
        if (route?.params?.data === "style5") {
           colorE();
           setResponse("style5")  
        }     
        
    },[route?.params?.data])

    return (
        <View
        >
            <LinearGradient colors={['#544D60', '#19181C', '#19181C']} style={{ position: "absolute", width: "100%", height: "100%" }} />
            <Video
                // source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
                source={season}
                resizeMode={"stretch"}
                opacity={0.3}
                controls={false}
                paused={false}
                volume={0}
                muted={false}
                disableBack
                disableVolume
                toggleResizeModeOnFullscreen
                repeat={true}
                bufferConfig={{
                    minBufferMs: 15000,
                    maxBufferMs: 50000,
                    bufferForPlaybackMs: 2500,
                    bufferForPlaybackAfterRebufferMs: 5000
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                }}
            />
            <ScrollView>
                <Text
                    style={styles.textTitle}
                >Selecciona tú estilo. </Text>
                <View
                    style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        width: Dimensions.get("window").width, marginBottom:40
                    }}
                >


                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckA ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=>{
                            colorA();
                            setResponse("style1");
                        }}
                    >
                        <Image
                            source={imagenA}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckA ? "black" : 'white' }]}
                        >Casual</Text>
                        </TouchableOpacity>
                           <DawnLogo  render={statusInfo} text="En el caso del look casual no hay demasiadas reglas, debiendo primar el sentido común. Para ello hay que fijarse en dónde y cuándo es la celebración. Tanto en el caso de los hombres como de las mujeres se pueden admitir unos jeans, que ellas combinarían con accesorios que reflejen su personalidad, y ellos con una camisa de mangas cortas o un polo, por ejemplo." />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckB ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=>{
                            colorB();
                            setResponse("style2");
                        }}
                    >
                        <Image
                            source={ImagenB}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckB ? "black" : 'white' }]}
                        >Formal</Text>
                    </TouchableOpacity>
                    <DawnLogo  render={statusInfo} text="Para eventos de noche y elegantes, sin llegar a la etiqueta. Un look femenino apropiado pasaría por un vestido largo de tela fina, zapatillas altas y algún accesorio como un clutch. El hombre tiene que optar por un traje y corbata, con acabados distintos a los que utilizaría de día." />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckC ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=>{
                            colorC();
                            setResponse("style3");
                        }}
                    >
                        <Image
                            source={imagenC}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckC ? "black" : 'white' }]}
                        >Cocktail</Text>
                    </TouchableOpacity>
                    <DawnLogo text="Es el dress code adecuado para un evento formal de día, de tarde o incluso en algunos casos, de noche. Para la mujer, lo más recomendable es un vestido por las rodillas y zapatillas, aunque también se puede optar por una falda en combinación con una blusa que aporte distinción. El hombre tendría que ir de traje, siendo opcional ponerse corbata."/>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckD ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=>{
                            colorD();
                            setResponse("style4");
                        }}
                    >
                        <Image
                            source={imagenD}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckD ? "black" : 'white' }]}
                        >Black Tie</Text>
                    </TouchableOpacity>
                    <DawnLogo text="Etiqueta simple. La idea es vestir elegante, para un evento también de noche. La mujer debe ir con vestido largo y con estilo, tacones y accesorios que añadan un plus de elegancia. Los hombres tienen que decantarse por el esmoquin."/>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckE ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=>{
                            colorE();
                            setResponse("style5");
                        }}
                    >
                        <Image
                            source={imagenE}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckE ? "black" : 'white' }]}
                        >White Tie</Text>
                    </TouchableOpacity>
                    <DawnLogo text="Etiqueta 100%. Exige lucir tus mejores galas para un look de noche. Las mujeres deben optar por vestido largo combinado con zapatos muy elegantes (siempre altos). En el caso del hombre, las opciones permitidas son el frac, o el traje combinado con chaleco y corbata de moño."/>
                </View>
            </ScrollView>
            <View
                style={{
                    position: "absolute", top: Dimensions.get("window").height * 0.015, display: "flex", flexDirection: "row",
                    justifyContent: "space-between", width: Dimensions.get("window").width * 0.9, alignSelf: "center",
                }}
            >
                 <LinearGradient opacity={0.7} colors={['#19181C', '#19181C']} 
                 style={{ position: "absolute", width: Dimensions.get("window").width * 1.5 ,
                  height: 65,
                  marginHorizontal:-100,
                  marginTop:-13
                  }} />
                <Icon
                    name='arrow-left'
                    type='evilicon'
                    color='#7C8499'
                    size={50}
                    tvParallaxProperties={undefined}
                    onPress={() => navigation.goBack()}
                />
               { !route?.params?.actualizar  && <TouchableOpacity 
                     //@ts-ignore
                     onPress={() => idDressApi()}
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
                </TouchableOpacity>}
               { route?.params?.actualizar === true && <TouchableOpacity 
                     //@ts-ignore
                     onPress={() => idDressApi()}
                style={{
                    width: 100,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <Text
                        style={{ color: 'white', borderRadius:10, borderColor:"gray", borderWidth:1, padding:10}}
                    >Actualizar</Text>
                </TouchableOpacity>}
            </View>
        </View>

    )
}

export default StyleOption;

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
    textInput:{
        color: 'white',
        paddingHorizontal:25,
    },
    inputOptions:{
 
    }
})