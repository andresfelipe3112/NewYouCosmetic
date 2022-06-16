import React from "react";
import { useNavigation } from '@react-navigation/native';
import { DetailComponent } from "../Components/DetailComponent";
import { Tab } from "../Components/Tab";
import { Dimensions, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { Icon, Image, Text } from "react-native-elements";
import { ComponentImag } from "../Components/ComponentImag";
import LinearGradient from "react-native-linear-gradient";


export const Perfil = () => {

    const imageA = require('../Assets/Img/ropaA.jpg');
    const imageB = require('../Assets/Img/ropaB.jpg');
    const imageC = require('../Assets/Img/ropaC.jpg');
    const imageD = require('../Assets/Img/ropaD.jpg');
    const imgPlacard = require('../Assets/Img/placard.jpg');
    const productoObj = [imageA, imageB, imageC, imageD];
    const navigation = useNavigation();

    return (
        <View
            style={{ width: "100%", height: "100%", display:"flex", justifyContent: "center", alignItems: 'center'}}
        >
            <LinearGradient opacity={1} colors={['#378bc1', '#395ea1', '#4847a2']} style={{ position: "absolute", width: "100%", height: "100%"}} />
            <Text style={{
                position: "absolute",
                top:10,
                color: "white",
                fontSize: 20
            }}>Mis Datos</Text>
            <TouchableOpacity
                onPress={()=> navigation.goBack()} 
                style={{ position: "absolute", top: 10, left: 15}}
            >
                <Icon
                    name='arrow-back-outline'
                    type='ionicon'
                    color='white'
                    size={25}
                />
            </TouchableOpacity>

            <Text
                style={{ color: 'white', textAlign: "left", width:"65%", marginTop:-350 }}
            >Nombre:</Text>
            <TextInput
                style={{
                    backgroundColor: "#4952BF", width: "70%", alignSelf: "center", textAlign: "center",
                    borderRadius: 10, borderWidth: 1, borderColor: "white", marginTop: 5
                }}
            >
                <Text
                    style={{
                        color: "white", fontWeight: "bold",
                        fontSize: 14, alignSelf: "center",
                    }}
                >Andrés Felipe</Text>
            </TextInput>


            <Text
                style={{ color: 'white', textAlign: "left", marginTop:15, width:"65%" }}
            >Correo:</Text>
            <TextInput
                style={{
                    backgroundColor: "#4952BF", width: "70%", alignSelf: "center", textAlign: "center", marginTop: 5,
                    borderRadius: 10, borderWidth: 1, borderColor: "white", color: "white", fontWeight: "bold",
                    fontSize: 16
                }}
            >
                      <Text
                      style={{color: "white", fontWeight: "bold",
                      fontSize:14}}
                      >Andresfelipe3112@gmail.com</Text>
                  </TextInput>
        </View>
    )
}