import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//@ts-ignore
import Video from "react-native-video";
import LinearGradient from 'react-native-linear-gradient'
import { Image } from 'react-native-elements/dist/image/Image';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import newApi from '../Services/LoginApiValues';


const invierno = require('../Assets/video/invierno.mp4');
const otono = require('../Assets/video/otono.mp4');
const primavera = require('../Assets/video/primavera.mp4');
const verano = require('../Assets/video/verano.mp4');


const Seasons = ({route}) => {
    const navigation = useNavigation();
    const [season, setSeason] = useState(otono);
    const [active, setActive] = useState(false);
    const [colorCheckVerano, setcolorCheckVerano] = useState(false);
    const [colorCheckInvierno, setcolorCheckInvierno] = useState(false);
    const [colorCheckOtono, setcolorCheckOtono] = useState(false);
    const [colorCheckPrimavera, setcolorCheckPrimavera] = useState(false);
    const [loadingLogin, setloadingLogin] = useState<Boolean>(false)
    const [dataLogin, setdataLogin] = useState<any>('')

    console.log("route", route?.params);
    
    const seasonsApi = async (season: string,) => {
        try {
            setloadingLogin(false)
            !route?.params?.actualizar && navigation.navigate("Gender");
            route?.params?.actualizar === true && navigation.goBack();
            const resp = await newApi.post('users/season', { "season": dataLogin })
            console.log("respSeaso", resp.data);
            // if (resp) {
            // }
        } catch (error) {
            console.log(error);
        }
    }

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

     useEffect(() => {
        if (route) {
       
            if (route?.params?.data === "verano" ) {
                colorVerano();
                setdataLogin("verano")
            }
            if (route?.params?.data === "oto??o" ) {
                colorOtono()
                setdataLogin("oto??o")
            }
            if (route?.params?.data === "primavera" ) {
                colorPrimavera();
                setdataLogin("verano")
            }
            if (route?.params?.data === "invierno" ) {
                colorInvierno();
                setdataLogin("invierno")
            }

        }
       
     }, [route?.params])

    return (
        <View
            style={{ width: '100%', height: Dimensions.get("screen").height }}
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
                >Selecciona la estaci??n del a??o. </Text>
                <View
                    style={{
                        display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                        flexWrap: "wrap", width: Dimensions.get("window").width
                    }}
                >

                    <Image
                        source={require("../Assets/Img/imgVerano.jpeg")}
                        containerStyle={styles.containerStyle}
                        PlaceholderContent={<ActivityIndicator />}
                    />

                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckVerano ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={() => {
                            colorVerano();
                            setdataLogin("verano")
                        }}
                    >
                        <Text
                            style={[styles.text, { color: colorCheckVerano ? "black" : 'white' }]}
                        >Verano</Text>
                    </TouchableOpacity>
                    <Image
                        source={require("../Assets/Img/oto.jpeg")}
                        containerStyle={styles.containerStyle}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckOtono ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={() => {
                            colorOtono();
                            setdataLogin("oto??o")
                        }}
                    >
                        <Text
                            style={[styles.text, { color: colorCheckOtono ? "black" : 'white' }]}
                        >Oto??o</Text>
                    </TouchableOpacity>
                    <Image
                        source={require("../Assets/Img/imgPrimavera.jpeg")}
                        containerStyle={styles.containerStyle}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckPrimavera ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={() => {
                            colorPrimavera();
                            setdataLogin("primavera")

                        }}
                    >
                        <Text
                            style={[styles.text, { color: colorCheckPrimavera ? "black" : 'white' }]}
                        >Primavera</Text>
                    </TouchableOpacity>
                    <Image
                        source={require("../Assets/Img/imgInvierno.jpeg")}
                        containerStyle={styles.containerStyle}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                    <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckInvierno ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={() => {
                            colorInvierno();
                            setdataLogin("invierno")
                        }}
                    >
                        <Text
                            style={[styles.text, { color: colorCheckInvierno ? "black" : 'white' }]}
                        >Invierno</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View
                style={{
                    position: "absolute", top: Dimensions.get("window").height * 0.91, display: "flex", flexDirection: "row",
                    justifyContent: "space-between", width: Dimensions.get("window").width * 0.9, alignSelf: "center",
                }}
            >
                { !route?.params?.actualizar && <Icon
                    name='arrow-left'
                    type='evilicon'
                    color='#7C8499'
                    size={50}
                    tvParallaxProperties={undefined}
                    onPress={() => navigation.goBack()}
                />}
                { !route?.params?.actualizar && <TouchableOpacity
                    //@ts-ignore
                    onPress={() =>
                        seasonsApi(dataLogin)
                    }
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
                { route?.params?.actualizar === true && <Icon
                    name='arrow-left'
                    type='evilicon'
                    color='#7C8499'
                    size={50}
                    tvParallaxProperties={undefined}
                    onPress={() => navigation.goBack()}
                />}
                { route?.params?.actualizar === true && <TouchableOpacity
                    //@ts-ignore
                    onPress={() =>
                        seasonsApi(dataLogin)
                    }
                    style={{
                        width: 100,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            borderWidth: 1,
                            borderColor: "white",
                            padding: 7,
                            borderRadius: 10,
                        }}
                    >Actualizar</Text>
                </TouchableOpacity>}
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
        width: 100,
        color: 'white',
        height: 45,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "white",
        borderWidth: 1,
    },
    containerStyle: {
        width: 140,
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