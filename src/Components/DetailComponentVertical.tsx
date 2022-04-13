import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Dimensions, ScrollView, TouchableOpacity, View } from 'react-native'
import { Button, Image, Text } from 'react-native-elements'

export const DetailComponentVertical = ({ productoObj, index }: any) => {
    const navigation = useNavigation();

    const { nombre, marca, image } = productoObj;
    return (
            <TouchableOpacity style={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
                margin:20
            }}>
                <Image
                    key={index}
                    style={{ width: 135, height: 135, borderRadius: 16 }}
                    source={image}
                ></Image>
                <Text
                    style={{ color: "#C8D3E5", fontWeight: "bold" }}
                >{marca}</Text>
                <Text
                    style={{ color: "#99ABC8", fontSize: 12 }}
                >{nombre}</Text>
            </TouchableOpacity>
    )
}