import React from "react";
import { useNavigation } from '@react-navigation/native';
import { DetailComponent } from "../Components/DetailComponent";
import { Tab } from "../Components/Tab";
import { Dimensions, ScrollView, TouchableOpacity, View } from "react-native";
import { Icon, Image, Text } from "react-native-elements";
import { ComponentImag } from "../Components/ComponentImag";


export const HomeB = () => {

    const imageA = require('../Assets/Img/ropaA.jpg');
    const imageB = require('../Assets/Img/ropaB.jpg');
    const imageC = require('../Assets/Img/ropaC.jpg');
    const imageD = require('../Assets/Img/ropaD.jpg');
    const imgPlacard = require('../Assets/Img/placard.jpg');
    const productoObj = [imageA, imageB, imageC, imageD];
    const navigation = useNavigation();

    return (
        <View
            style={{ backgroundColor: "#0d0a1e", width: "100%", height: "100%" }}
        >
            <Tab textTitle="Home" />
            <ScrollView
                style={{ backgroundColor: "#0d0a1e", height: "100%", width: "100%", marginTop:30, }}
            >
                <View
                    style={{ display: "flex", flexDirection: "row", width: "100%" ,
                             justifyContent:"space-between", paddingHorizontal:10  }}
                >
                    <Image
                        style={{ backgroundColor: "white", width: 125, height: 125, borderRadius: 65 }}
                        source={""}
                    ></Image>
                    <View style={{ width: "60%", display: "flex", flexDirection: "column", alignItems: 'flex-end'}}>
                        <Text style={{ fontSize: 22, fontWeight: "bold", color: "white" }} >Francisco Jimenez</Text>
                        <Text style={{ fontSize: 16, color: "white" }} >Editar Perfil</Text>
                    </View>
                </View>

                <ComponentImag title="Para ti" color="#7704a5" photoName={imgPlacard}  />
                <ComponentImag title="Placard" color="#c703c7" photoName={imgPlacard}  />
                <ComponentImag title="Outfitts" color="#0393c7" marginBottom={35} photoName={imgPlacard}   />
            </ScrollView>
        </View>
    )
}