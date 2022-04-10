import React from 'react'
import { Dimensions, ScrollView, View } from 'react-native'
import { Button, Image, Text } from 'react-native-elements'

export const DetailComponent = (props: any) => {
    console.log(props);
    
    return(
        <View
        style={{backgroundColor:'#0d0a1e', marginVertical:20}}
        >
        <ScrollView
        style={{width: Dimensions.get("window").width, }}
        >

        <View
        style={{ width: "93%", alignSelf: "center",
    }}
    >
            <View
            style={{width:"100%",marginVertical:0, display: "flex", marginBottom:20,
             flexDirection: "row", justifyContent: "space-between", alignSelf:"center",}}
            >

            <Text
            style={{fontSize:25, color: "white", marginLeft: 20, fontWeight: "bold"}}
            >{props.title}</Text>
            <Button
            style={{alignSelf: "center", justifyContent: "center"}}
            containerStyle={{
                width:100, height:35, borderRadius:20
            }}
            buttonStyle={{
                backgroundColor: 'rgba(78, 116, 289, 1)',
                justifyContent: "center", display: "flex",
                flexDirection: "column",
            }}
            title="Ver mas"
            titleStyle={{
                color: 'white',
                fontSize: 14, 
            }}
            ></Button>
            </View>
            
            <ScrollView
            horizontal={true}
            style={{ backgroundColor:'#0d0a1e'}}
            >
            {props.productoObj.map((producto:any, index:any)=>{
                return(
                    
                    <Image
                    style={{width: 105, height: 105, borderRadius:16, marginRight:22,}}
                    source={producto}
                    ></Image>
                    )
                })}
            </ScrollView>

        </View>
            </ScrollView>
                </View>
    )
}