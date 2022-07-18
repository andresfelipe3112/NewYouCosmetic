import React, { Component, useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//@ts-ignore
import Video from "react-native-video";
import LinearGradient from 'react-native-linear-gradient'
import { Image } from 'react-native-elements/dist/image/Image';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import newApi from '../Services/LoginApiValues';
import { CustomToast } from '../utils/customToast';

const invierno = require('../Assets/video/invierno.mp4');
const otono = require('../Assets/video/otono.mp4');
const primavera = require('../Assets/video/primavera.mp4');
const verano = require('../Assets/video/verano.mp4');

const CategoriesPush = () => {
    const { showToast } = CustomToast()
    const navigation = useNavigation();
    const [season, setSeason] = useState(otono);
    const [active, setActive] = useState(false);
    const [colorCheckVerano, setcolorCheckVerano] = useState(false);
    const [colorCheckInvierno, setcolorCheckInvierno] = useState(false);
    const [colorCheckOtono, setcolorCheckOtono] = useState(false);
    const [colorCheckPrimavera, setcolorCheckPrimavera] = useState(false);
    const [checkA, setcheckA] = useState(false);
    const [checkB, setcheckB] = useState(false);
    const [checkC, setcheckC] = useState(false);
    const [checkD, setcheckD] = useState(false);
    
    const pantalones = (type) => {
        if (colorCheckVerano) {
            return setcolorCheckVerano(false)
        }
        categoriesApi(type)
        setSeason(verano)
        setcolorCheckVerano(true);
        setcolorCheckInvierno(false)
        setcolorCheckOtono(false)
        setcolorCheckPrimavera(false)
        setcheckA(false)
        setcheckB(false)
        setcheckC(false)
        setcheckD(false)
    }
    const botas = (type) => {
        if (colorCheckInvierno) {
            return setcolorCheckInvierno(false)
        }
        categoriesApi(type)
        setSeason(invierno)
        setcolorCheckVerano(false);
        setcolorCheckInvierno(true);
        setcolorCheckOtono(false)
        setcolorCheckPrimavera(false)
        setcheckB(false)
        setcheckA(false)
        setcheckC(false)
        setcheckD(false)
    }

    const collares = (type) => {
        if (colorCheckOtono) {
            return setcolorCheckOtono(false)
        }
        categoriesApiThird(type)
        setSeason(otono)
        setcolorCheckVerano(false);
        setcolorCheckInvierno(false);
        setcolorCheckOtono(true);
        setcolorCheckPrimavera(false)
        setcheckA(false)
        setcheckB(false)
        setcheckC(false)
    }
    const camisas = (type) => {
        if (colorCheckPrimavera) {
            return setcolorCheckPrimavera(false)
        }
        categoriesApi(type)
        setSeason(primavera)
        setcolorCheckVerano(false);
        setcolorCheckInvierno(false);
        setcolorCheckOtono(false);
        setcolorCheckPrimavera(true);
        setcheckA(false)
        setcheckB(false)
        setcheckC(false)
        setcheckD(false)
    }

    const zapatos = (type) => {
        if (checkA) {
            return setcolorCheckPrimavera(false)
        }
        categoriesApi(type)
        setSeason(primavera)
        setcolorCheckVerano(false);
        setcolorCheckInvierno(false);
        setcolorCheckOtono(false);
        setcolorCheckPrimavera(false);
        setcheckA(true)
        setcheckC(false)
        setcheckB(false)
        setcheckD(false)
    }

    const blusas = (type) => {
        if (checkB) {
            return setcolorCheckPrimavera(false)
        }
        categoriesApi(type)
        setSeason(primavera)
        setcolorCheckVerano(false);
        setcolorCheckInvierno(false);
        setcolorCheckOtono(false);
        setcolorCheckPrimavera(false);
        setcheckA(false)
        setcheckC(false)
        setcheckB(true)
        setcheckD(false)
    }

    const Poleras = (type) => {
        if (checkB) {
            return setcolorCheckPrimavera(false)
        }
        categoriesApi(type)
        setSeason(primavera)
        setcolorCheckVerano(false);
        setcolorCheckInvierno(false);
        setcolorCheckOtono(false);
        setcolorCheckPrimavera(false);
        setcheckA(false)
        setcheckB(false)
        setcheckC(true)
        setcheckD(false)
    }

    const Aros = (type) => {
        if (checkB) {
            return setcolorCheckPrimavera(false)
        }
        categoriesApi(type)
        setSeason(primavera)
        setcolorCheckVerano(false);
        setcolorCheckInvierno(false);
        setcolorCheckOtono(false);
        setcolorCheckPrimavera(false);
        setcheckA(false)
        setcheckB(false)
        setcheckC(false)
        setcheckD(true)
    }

    const categoriesApi = async (type) => {
        try {
            const data = await newApi.get(`users/check-second-answers`)
            console.log("data check-second-answers", data.data);
            
            if (data?.data?.isComplete === false) {
                if (data?.data?.check?.height === false) {
                 return  navigation.navigate("Altura",{category:type})
                }
                if (data?.data?.check?.neckLength === false) {
                    return  navigation.navigate("LargoDeCuello", {category:type})
                }
                if (data?.data?.check?.typeBody === false) {
                   return navigation.navigate("TipoDeCuerpo", {category:type})
                }
            } else {
                const resp = await newApi.get(`/products/newCategory/${type}`)
                console.log("Api", resp.data);
                if (resp) {
                    navigation.navigate("Root", {reRender:type})
                }
            }
        } catch (error) {
            console.log(error);
            showToast('Esta categoría aún no tiene productos ');
        }
    }

    const categoriesApiThird = async (type) => {
        try {
            const data = await newApi.get(`users/check-third-answers`)
            console.log("data check-third-answers", data.data);
            
            if (data?.data?.isComplete === false) {
                if (data?.data?.check?.height === false) {
                 return  navigation.navigate("Altura",{category:type})
                }
                if (data?.data?.check?.neckLength === false) {
                    return  navigation.navigate("LargoDeCuello", {category:type})
                }
                if (data?.data?.check?.typeBody === false) {
                   return navigation.navigate("TipoDeCuerpo", {category:type})
                }
                if (data?.data?.check?.typeFace === false) {
                   return navigation.navigate("TipoDeRostro", {category:type})
                }
            } else {
                const resp = await newApi.get(`/products/newCategory/${type}`)
                console.log("Api", resp.data);
                    navigation.navigate("Root", {reRender:type})
                
            }
        } catch (error) {
            console.log(error);
            showToast('Esta categoría aún no tiene productos ');
        }
    }


    return (
        <View
            style={{ width: '100%', height: Dimensions.get("screen").height }}
        >
            <LinearGradient opacity={0.9} colors={['#378bc1', '#395ea1', '#4847a2']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
                <View
                    style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        width: Dimensions.get("window").width, height: Dimensions.get("window").height,  marginTop:50,
                    }}
                    >
                    <Text
                        style={styles.textTitle}
                        >¿Qué quieres que te recomendemos?</Text>
                    <Text
                    style={{ 
                        marginHorizontal:10,
                        alignSelf: "center",
                        textAlign: "center",
                        color: "#BFCEE0",
                        marginBottom:13
                    }}
                    >Te solicitaremos alguna información adicional</Text>
                    <ScrollView
                    contentContainerStyle={{
                            display: "flex",
                            width: Dimensions.get("window").width,
                            flexWrap: "wrap",
                            flexDirection: "row",
                            justifyContent: "center",
                        
                    }}
                    >
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckPrimavera ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=> camisas("b15")}
                    >
                        <Text
                            style={[styles.text, { color: colorCheckPrimavera ? "black" : 'white' }]}
                        >Camisas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckVerano ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=>{
                            pantalones("b17")
                            }}
                    >
                        <Text
                            style={[styles.text, { color: colorCheckVerano ? "black" : 'white' }]}
                        >Pantalones</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckInvierno ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=> botas("b24")}
                    >
                        <Text
                            style={[styles.text, { color: colorCheckInvierno ? "black" : 'white' }]}
                        >Botas-botines</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckOtono ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=>collares("c11")}
                        >
                        <Text
                            style={[styles.text, { color: colorCheckOtono ? "black" : 'white' }]}
                            >Collares</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            style={[styles.button, { backgroundColor: checkA ? 'white' : "transparent" }]}
                            //@ts-ignore
                            onPress={()=>zapatos("b21")}
                            >
            
                        <Text
                            style={[styles.text, { color: checkA ? "black" : 'white' }]}
                            >Zapatos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: checkB ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={()=>blusas("b11")}
                        >
                        <Text
                           style={[styles.text, { color: checkB ? "black" : 'white' }]}
                           >Blusas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                           style={[styles.button, { backgroundColor: checkC? 'white' : "transparent" }]}
                           //@ts-ignore
                           onPress={()=> Poleras("b13")}
                           >
                        <Text
                            style={[styles.text, { color: checkC ? "black" : 'white' }]}
                            >Poleras</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: checkD? 'white' : "transparent" }]}
                        //@ts-ignore
                          onPress={()=> Aros("c12")}
                        >
                        <Text
                            style={[styles.text, { color: checkD ? "black" : 'white' }]}
                        >Aros</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: "transparent" }]}
                        //@ts-ignore
                        // onPress={()=>blusas("b11")}
                    >
                        <Text
                            style={[styles.text, { color: 'white' }]}
                        >otro</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor:"transparent" }]}
                        //@ts-ignore
                        // onPress={colorPrimavera}
                    >
                        <Text
                            style={[styles.text, { color:'white' }]}
                        >Shorts</Text>
                    </TouchableOpacity>
            </ScrollView>
                </View>
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
                    // onPress={camisasApi}
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

export default CategoriesPush;

const styles = StyleSheet.create({
    textTitle: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 5,
        borderRadius: 25,
        opacity: 0.6, display: "flex",
        marginBottom:10
    },
    text: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    button: {
        width: 150,
        margin:7,
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