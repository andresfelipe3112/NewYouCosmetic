import React, { Component, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Animated, Dimensions, Easing, ScrollView, StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native';
//@ts-ignore
import Video from "react-native-video";
import LinearGradient from 'react-native-linear-gradient'
import { Image } from 'react-native-elements/dist/image/Image';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import DawnLogo from '../Components/DawnLogo';


const videoA = require('../Assets/video/casual.mp4');
const VideoB = require('../Assets/video/formal.mp4');
const VideoC = require('../Assets/video/cocktail.mp4');
const VideoD = require('../Assets/video/blackTie.mp4');
const VideoE = require('../Assets/video/white.mp4');

const imagenA = require('../Assets/Img/endomorfo.webp')
const ImagenB = require('../Assets/Img/ectomorfo.webp')
const imagenC = require('../Assets/Img/mesomorfo.webp')
const imagenD = require('../Assets/Img/tipo4.jpg')
const imagenE = require('../Assets/Img/tipo5.jpg')
const imagenF = require('../Assets/Img/tipo6.jpg')


const TipoDeCuerpo = () => {
    const navigation = useNavigation();
    const [season, setSeason] = useState("");
    const [statusInfo, setstatusInfo] = useState(true);
    const [colorCheckA, setcolorCheckA] = useState(false);
    const [colorCheckB, setsetcolorCheckB] = useState(false);
    const [colorCheckC, setcolorCheckC] = useState(false);
    const [colorCheckD, setcolorCheckD] = useState(false);
    const [colorCheckE, setcolorCheckE] = useState(false);
    const [colorCheckF, setcolorCheckF] = useState(false);

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

    // useEffect(() => {
    //     colorA()
    // },[])

    return (
        <View
        >
            <LinearGradient opacity={1} colors={['#378bc1', '#395ea1', '#4847a2']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
            <ScrollView>
                <Text
                    style={styles.textTitle}
                >Selecciona tú tipo de cuerpo </Text>
                <View
                    style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        width: Dimensions.get("window").width, marginBottom:10
                    }}
                >


                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckA ?  "#19181C" : "transparent" }]}
                        //@ts-ignore
                        onPress={()=>{
                            colorA();
                        }}
                    >
                        <Image
                            source={imagenA}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                        </TouchableOpacity>
                           <DawnLogo  render={statusInfo} text="El cuerpo endomorfo se caracteriza por tener un metabolismo lento y por ello, suele acumular más grasa. Normalmente se encuentran arriba del promedio de peso en la población, especialmente si no tienen un estilo de vida balanceado.
El endomorfo es a lo que llamamos “ser de complexión ancha” y necesita rutinas de ejercicio mayormente aeróbicas y una dieta muy estricta para reducir la cantidad de grasa y su acumulación. En el lado positivo, el endomorfo es más propenso a ganar masa y fuerza tras un entrenamiento físico." />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckB ?  "#19181C" : "transparent" }]}
                        //@ts-ignore
                        onPress={colorB}
                    >
                        <Image
                            source={ImagenB}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    
                    </TouchableOpacity>
                    <DawnLogo  render={statusInfo} text="Estas personas son de complexión más delgada y suelen estar debajo del promedio de peso de la población. Tienen una estructura ósea más alargada y un metabolismo acelerado que casi siempre los previene de ganar mucho peso, pero igualmente aprovecha pocos nutrientes.
El cuerpo ectomorfo requiere muy poco ejercicio aeróbico y son más libres en su dieta, ya que difícilmente acumularán grasa; sin embargo, necesitan mucho más esfuerzo en conseguir masa muscular y seguramente requieran una dieta abundante en proteínas y calorías para lograrlo." />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckC ?  "#19181C" : "transparent" }]}
                        //@ts-ignore
                        onPress={colorC}
                    >
                        <Image
                            source={imagenC}
                            containerStyle={styles.containerStyle}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    
                    </TouchableOpacity>
                    <DawnLogo text="Un punto medio entre los otros dos cuerpos somáticos. Más propensos a desarrollar una masa muscular media y una figura atlética. Cuando entrenan el cuerpo y recurren al fisicoculturismo, suelen ser individuos con cuerpo en forma de V (hombres) o de reloj de arena (mujeres). No requieren una dieta excesivamente fija, pero deben balancearla adecuadamente para no acumular grasa."/>
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
                <TouchableOpacity
                 //@ts-ignore
            onPress={() => navigation.navigate("Para tí", {
                current:"new",
            })}
                style={{
          width: 190,
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
          >Agregar categoría</Text>
          <Icon
            name='plus'
            type='evilicon'
            color='#D4D7EE'
            size={40}
            tvParallaxProperties={undefined}
          />
        </TouchableOpacity>
            </View>
        </View>

    )
}

export default TipoDeCuerpo;

const styles = StyleSheet.create({
    textTitle: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
        fontFamily: "Dosis",
        marginVertical: 20,
        borderRadius: 25,
        opacity: 0.6, display: "flex",
        marginTop: 70,
        marginHorizontal:20
    },
    text: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        marginTop:-20
    },
    button: {
        width: 230,
        color: 'white',
        height:230,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: "white",
        // borderWidth: 1,
        margin: 2,
        marginBottom:5
        
    },
    containerStyle: {
        width: 200,
        height: 200,
        margin: 30,
        borderRadius: 15,
        
    },
    textInput:{
        color: 'white',
        paddingHorizontal:25,
    },
    inputOptions:{
 
    }
})