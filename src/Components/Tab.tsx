import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export const Tab = (props: { textTitle: string }) => {

    return (

        <View
            style={{
                backgroundColor: "#0d0a1e", width: Dimensions.get("window").width,
                height: 60, display: "flex", flexDirection: "row", alignItems: 'center', justifyContent: 'center'
            }}
        >
            <Icon
                containerStyle={{ width: "10%", height: 50 }}
                style={{ width: "10%", height: 50 }}
                name="reorder-three-outline"
                type='ionicon'
                color='white'
                size={50}
                onPress={() => console.log("hola")}
            ></Icon>
            <Text
                style={{ color: 'white', fontSize: 25, width: "90%", fontWeight: 'bold', textAlign: "center", marginLeft: -20}}
            > {props.textTitle}</Text>
        </View>
    )
}