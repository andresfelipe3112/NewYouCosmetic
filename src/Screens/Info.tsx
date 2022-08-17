import React from "react";
import { useNavigation } from '@react-navigation/native';
import { DetailComponent } from "../Components/DetailComponent";
import { Tab } from "../Components/Tab";
import { Dimensions, ScrollView, TextInput, TouchableOpacity, View } from "react-native";
import { Icon, Image, Text } from "react-native-elements";
import { ComponentImag } from "../Components/ComponentImag";
import LinearGradient from "react-native-linear-gradient";


export const Info = () => {

    const imageA = require('../Assets/Img/ropaA.jpg');
    const imageB = require('../Assets/Img/ropaB.jpg');
    const imageC = require('../Assets/Img/ropaC.jpg');
    const imageD = require('../Assets/Img/ropaD.jpg');
    const imgPlacard = require('../Assets/Img/placard.jpg');
    const productoObj = [imageA, imageB, imageC, imageD];
    const navigation = useNavigation();

    return (
        <View
            style={{ width: "100%", height: "100%", display:"flex", justifyContent: "center", alignItems: 'center',marginTop:-50}}
        >
            <LinearGradient opacity={1} colors={['white', 'white', 'white']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
            
            <Text style={{
                position: "absolute",
                top:70,
                color: "black",
                fontSize: 18,
                fontWeight: "bold"
            }}>Mi Perfil</Text>

            <TouchableOpacity
              onPress={()=>{ navigation.navigate('Perfil') }}
              style={{ display:"flex", flexDirection:"row", justifyContent:"space-between", width:"85%",backgroundColor: '#202020',paddingVertical:13,
              borderRadius:20, borderWidth: 1, padding:10, borderColor: "white", marginBottom:20, marginTop:-300}}
            >
                <Icon
                    name='person-outline'
                    type='ionicon'
                    color='white'
                    size={19}
                    style={{paddingLeft:10,}}
                            />
                <Text
                style={{ color: "white" }}
                > Mis datos </Text>
                <Icon
                    name='chevron-forward-outline'
                    type='ionicon'
                    color='#F9AD47'
                    size={19}
                            />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=> navigation.navigate("CurrentResponse")}
              style={{ display:"flex", flexDirection:"row", justifyContent:"space-between", width:"85%", paddingVertical:13, 
                       borderRadius:20, borderWidth: 1, padding:10, borderColor: "white", backgroundColor: "#202020"}}
            >
                <Icon
                    name='checkmark-outline'
                    type='ionicon'
                    color='white'
                    size={19}
                    style={{paddingLeft:10,}}
                            />
                <Text
                style={{ color: "white"}}
                > Mis respuestas </Text>
                <Icon
                    name='chevron-forward-outline'
                    type='ionicon'
                    color='#F9AD47'
                    size={19}
                            />
            </TouchableOpacity>
        </View>
    )
}