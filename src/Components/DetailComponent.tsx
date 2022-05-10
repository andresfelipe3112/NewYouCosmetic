import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Dimensions, ScrollView, TouchableOpacity, View } from 'react-native'
import { Button, Image, Text } from 'react-native-elements'

export const DetailComponent = ({ productoObj, title, status="" }: any) => {
    const navigation = useNavigation();

    return (
        <View
            style={{ marginVertical: 15 }}
        >
            <ScrollView
            showsHorizontalScrollIndicator={false}
                style={{ width: Dimensions.get("window").width, }}
            >

                <View
                    style={{
                        width: "93%", alignSelf: "center",
                    }}
                >
                    <View
                        style={{
                            width: "100%", marginVertical: 0, display: "flex", marginBottom: 10, paddingHorizontal: 5,
                            flexDirection: "row", justifyContent: "space-between", alignSelf: "center",
                        }}
                    >
                        <Text
                            // style={{fontSize:20, color: "white",fontFamily: "JosefinSans-Italic-VariableFont_wght",}}
                            style={{ fontSize: 20, color: "white", fontFamily: "Dosis", }}
                        >{title} {<Text style={{ fontSize:15,color :"yellow", fontWeight: "bold"}}>{status}</Text>} 
                        </Text>
                        <TouchableOpacity
                            style={{ alignSelf: "flex-end", justifyContent: "flex-end" }}
                            onPress={() => navigation.navigate("AllProducts", {
                                data: productoObj,
                                title: title,
                            })}
                        >
                            <Text
                                style={{ color: "#C8D3E5" }}
                            >{`Ver todos >`}</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        style={{ width: Dimensions.get("window").width, }}
                        horizontal={true}
                    >
                        {productoObj.map((producto: any, index: any) => {
                            return (
                                <View style={{ 
                                    display: "flex",
                                     flexDirection: "column",
                                     }}>
                                    <Image
                                        key={index}
                                        style={{ width: 130, height: 130, borderRadius: 16, marginRight: 22, }}
                                        source={producto.image}
                                    ></Image>
                                    <Text
                                        style={{ color: "#C8D3E5", fontWeight: "bold" }}
                                    >{producto.marca}</Text>
                                    <Text
                                        style={{ color: "#99ABC8", fontSize: 12 }}
                                    >{producto.nombre}</Text>
                                </View>
                            )
                        })}
                    </ScrollView>

                </View>
            </ScrollView>
        </View>
    )
}