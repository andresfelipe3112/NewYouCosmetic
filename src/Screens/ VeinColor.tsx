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

const imagenA = require('../Assets/Img/moradoAzul.jpeg')
const ImagenB = require('../Assets/Img/venasVerdes.jpeg')
const imagenC = require('../Assets/Img/verdeAzul.jpeg')
const imagenD = require('../Assets/Img/tipo4.jpg')
const imagenE = require('../Assets/Img/tipo5.jpg')
const imagenF = require('../Assets/Img/tipo6.jpg')


const  VeinColor = ({route}) => {
    const navigation = useNavigation();
    const [statusInfo, setstatusInfo] = useState(true);
    const [colorCheckA, setcolorCheckA] = useState(false);
    const [colorCheckB, setsetcolorCheckB] = useState(false);
    const [colorCheckC, setcolorCheckC] = useState(false);
    const [colorCheckD, setcolorCheckD] = useState(false);
    const [colorCheckE, setcolorCheckE] = useState(false);
    const [colorCheckF, setcolorCheckF] = useState(false);
    const [response, setResponse] = useState("");
    
    useEffect(() => {
        console.log(route?.params);
    },[route])
 

    const colorHearOptionApi = async () => {
        try {
            route?.params?.actualizar === true && navigation.goBack();
            const resp = await newApi.post('users/skinColor', { "skinColor": response })
            console.log("colorHearOptionApi", resp.data);
            if (resp) {
                !route?.params?.actualizar && navigation.navigate("StyleOption")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const colorA = () => {
        if (colorCheckA) {
            return setcolorCheckA(false)
        }
      
        setcolorCheckA(true);
        setsetcolorCheckB(false)
        setcolorCheckC(false)
        setcolorCheckD(false)
        setcolorCheckE(false)
        setcolorCheckF(false)
    }
    const colorB = () => {
        if (colorCheckB) {
            return setsetcolorCheckB(false)
        }
     
        setcolorCheckA(false);
        setsetcolorCheckB(true);
        setcolorCheckC(false)
        setcolorCheckD(false)
        setcolorCheckE(false)
        setcolorCheckF(false)
    }
    const colorC = () => {
        if (colorCheckC) {
            return setcolorCheckC(false)
        }
       
        setcolorCheckE(false)
        setcolorCheckA(false);
        setsetcolorCheckB(false);
        setcolorCheckC(true);
        setcolorCheckD(false)
        setcolorCheckF(false)
    }
    const colorD = () => {
        if (colorCheckD) {
            return setcolorCheckD(false)
        }
     
        setcolorCheckE(false)
        setcolorCheckA(false);
        setsetcolorCheckB(false);
        setcolorCheckC(false);
        setcolorCheckD(true);
        setcolorCheckF(false)
    }

    const colorE = () => {
        if (colorCheckE) {
            return setcolorCheckE(false)
        }
      
        setcolorCheckA(false);
        setsetcolorCheckB(false);
        setcolorCheckC(false);
        setcolorCheckD(false);
        setcolorCheckE(true)
        setcolorCheckF(false)
    }
    const colorF = () => {
        if (colorCheckF) {
            return setcolorCheckF(false)
        }
      
        setcolorCheckA(false);
        setsetcolorCheckB(false);
        setcolorCheckC(false);
        setcolorCheckD(false);
        setcolorCheckE(false)
        setcolorCheckF(true)
    }

     useEffect(() => {
         if (route?.params?.data === "tipo1") {
            colorA();
            setResponse("tipo1")
         }
         if (route?.params?.data === "tipo2") {
            colorB();
            setResponse("tipo2")  
         }
         if (route?.params?.data === "tipo3") {
            colorC();
            setResponse("tipo3")  
         }
         if (route?.params?.data === "tipo4") {
            colorD();
            setResponse("tipo4")  
         }
         if (route?.params?.data === "tipo5") {
            colorE();
            setResponse("tipo5")  
         }
         if (route?.params?.data === "tipo6") {
            colorF();
            setResponse("tipo6")  
         }         
     },[route?.params?.data])

    return (
        <View
        >
            <LinearGradient opacity={1} colors={['#378bc1', '#395ea1', '#4847a2']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
            <ScrollView>
                <Text
                    style={styles.textTitle}
                >Selecciona tu color de venas </Text>
                <View
                    style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        width: Dimensions.get("window").width, marginBottom:10
                    }}
                >
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckA ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=>{
                            colorA();
                            setResponse("tipo1")
                        }}
                    >
                        <Image
                            source={imagenA}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}   
                            resizeMode='stretch'                     
                        />
                        <Text
                            style={[styles.text, { color: colorCheckA ? "black" : 'white' }]}
                        >Morado - Azul</Text>
                        </TouchableOpacity>
                           {/* <DawnLogo  render={statusInfo} text="Este tipo de piel es de razas albina, caucásica, de cabello rojo o rubio, ojos azules, con pecas, piel rosada o muy pálida. Común en escandinavos y célticos. Suelen quemarse con mucha facilidad durante la exposición al sol, nunca se broncean, por ello, son los que más cuidados requieren y quienes deben usar los bloqueador solares con la máxima protección, mayor de 75 fps." /> */}
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckB ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=> {
                            colorB();
                            setResponse("tipo2")                        
                        }}
                    >
                        <Image
                            source={ImagenB}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckB ? "black" : 'white' }]}
                        >Tipo ll</Text>
                    </TouchableOpacity>
                    {/* <DawnLogo  render={statusInfo} text="Este tipo de piel es de razas caucásicas, pieles blancas, cabello rubio, ojos azules, verdes o avellana. Suelen quemarse también con facilidad, sin embargo, pueden llegar a broncearse lentamente, llegando a adoptar un tono levemente moreno, casi imperceptible en la mayoría de los casos, requieren protección solar mayor de 50 fps." /> */}
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckC ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=> {
                            colorC();
                            setResponse("tipo3")  
                        }}
                    >
                        <Image
                            source={imagenC}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckC ? "black" : 'white' }]}
                        >Tipo lll</Text>
                    </TouchableOpacity>
                    {/* <DawnLogo text="Este tipo de piel es de razas de Europa central, con tonos aceitunados en algunos mediterráneos y tono amarillo en asiáticos, cabello rubio o castaño claro, color de ojos verdes o marrones, durante la temporada de invierno tienen un tono claro y durante la exposición solar en verano pueden broncearse, requieren protección solar media 35-50 spf."/> */}
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckD ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=> {
                            colorD();
                            setResponse("tipo4")  
                        }}
                    >
                        <Image
                            source={imagenD}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckD ? "black" : 'white' }]}
                        >Tipo lV</Text>
                    </TouchableOpacity>
                    <DawnLogo text="Este tipo de piel es de razas mediterráneas, americanas. Piel morena clara, cabello castaño, ojos marrones. No presenta pecas. Común en mediterráneos con matiz café claro, asiáticos con matices amarillo claro o café claro, latinos con matiz olivo y personas provenientes del Medio Oriente con matices olivo o café claro. No suelen tener problemas para broncearse y su piel adopta una tonalidad dorada con facilidad, requieren protección solar media 15-35 fps"/>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckE ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=> {
                            colorE();
                            setResponse("tipo5")  
                        }}
                    >
                        <Image
                            source={imagenE}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckE ? "black" : 'white' }]}
                        >Tipo V</Text>
                    </TouchableOpacity>
                    <DawnLogo text="Este tipo de piel es de razas del Medio Oriente, Asiáticos y Latinos. Piel morena oscura, ojos y cabello color marrón oscuro o negro. Común en personas provenientes del Medio Oriente con matiz café oscuro, asiáticos con matiz café y latinos con matiz caramelo oscuro. Se broncean con muchísima facilidad y no es necesario que se expongan mucho al sol para estar morenos. Es muy raro que se quemen, requieren una protección solar mínima de 15 fps."/>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckF ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=> {
                            colorF();
                            setResponse("tipo6")  
                        }}
                    >
                        <Image
                            source={imagenF}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        <Text
                            style={[styles.text, { color: colorCheckF ? "black" : 'white' }]}
                        >Tipo Vl</Text>
                    </TouchableOpacity>
                    <DawnLogo text="Este tipo de piel es de razas Africanas y Afroamericanos. Piel negra, ojos y cabello color marrón muy oscuro o negro. Es casi imposible que se quemen, se broncean fácilmente, pues tienen una piel muy pigmentada. Es importante ser conscientes de que el sol es necesario para metabolizar la Vitamina D, por lo que debemos tomar el sol a diario si es posible, el problema está en la excesiva exposición solar, que por lo general sucede en época de verano."/>
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
                { !route?.params?.actualizar && <TouchableOpacity 
                 onPress={()=>colorHearOptionApi()}
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
                        //@ts-ignore
                       
                    />
                </TouchableOpacity>}

                { route?.params?.actualizar === true && <TouchableOpacity 
                 onPress={()=>colorHearOptionApi()}
                style={{
                    width: 100,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <Text
                        style={{ color: 'white', padding:10, borderWidth: 1, borderColor: "gray", borderRadius:10 }}
                    >Actualizar</Text>
                </TouchableOpacity>}
            </View>
        </View>

    )
}

export default VeinColor;

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
        // borderColor: "white",
        // borderWidth: 1,
        margin: 2
        
    },
    containerStyle: {
        width: 130,
        height: 120,
        margin: 15,
        borderRadius: 15,        
    },
    textInput:{
        color: 'white',
        paddingHorizontal:25,
    },
    inputOptions:{
 
    }
})