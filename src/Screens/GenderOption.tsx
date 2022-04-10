import React from "react";
import { View } from "react-native";
import { Button, Image, Text } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';



export const GenderOption = () => {
    const navigation = useNavigation();
    const men = require("../assets/Img/hombre.jpg")
    const women = require("../assets/Img/mujer.jpg")
    return (
        <View
        style={{ width: '100%', height: '100%', backgroundColor: '#0d0a1e',
                 display: 'flex',flexDirection: 'column', alignItems: 'center' }}
        >
            <Text
            style={{fontSize: 30, color: 'white', textAlign:"center",
                    marginVertical:35 }}
            >
                ¿Con qué genero te identificas?
            </Text>

        <Image
        style={{width:200, height:200}}
        source={men}
        ></Image>
        <Button
                title="Hombre"
                buttonStyle={{ backgroundColor: '#2b1361', }}
                type={"clear"}
                containerStyle={{
                    width: 170,
                    marginHorizontal: "26%",
                    borderRadius: 10,
                    marginTop:20,
                    marginBottom:25
                }}
                titleStyle={{ color: 'white', marginHorizontal: 20, fontSize: 20 }}
                //@ts-ignore
                onPress={() => navigation.navigate("LoadingHome")}
            />
        <Image
        style={{width:200, height:200}}
        source={women}
        ></Image>
        <Button
                title="Mujer"
                buttonStyle={{ backgroundColor: '#2b1361', }}
                type={"clear"}
                containerStyle={{
                    width: 170,
                    marginHorizontal: "26%",
                    borderRadius: 10,
                    marginTop:20
                }}
                titleStyle={{ color: 'white', marginHorizontal: 20, fontSize: 20 }}
                //@ts-ignore
                onPress={() => navigation.navigate("LoadingHome")}
            />
          
        </View>
    )
}