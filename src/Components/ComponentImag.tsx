import React from 'react';
import { View } from 'react-native';
import { Image, Text } from 'react-native-elements';

export const ComponentImag = ({ title, color, photoName, marginBottom }:
    { title: string, color: string, photoName: any, marginBottom?: number }) => {

    return (
        <View
            style={{
                backgroundColor: color, width: "90%", height: 200, alignSelf: "center", marginTop: 35,
                borderRadius: 20, marginBottom:marginBottom
            }}
        >
            <Image
                style={{ width: "100%", height: 150, borderTopLeftRadius: 20 }}
                source={photoName}
                resizeMode="cover"
            ></Image>
            <View
                style={{
                    backgroundColor: color, width: "100%", height: 50, borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                }}
            >
                <Text
                    style={{
                        fontSize: 22, fontWeight: "bold", color: "white", alignSelf: "center", alignItems: 'center',
                        paddingTop: 10, justifyContent: 'center'
                    }}
                >{title}</Text>
            </View>


        </View>
    )
}