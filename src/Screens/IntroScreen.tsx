import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Dimensions, SafeAreaView, View } from 'react-native'
import { Image, Text } from 'react-native-elements'
import { Button } from 'react-native-elements/dist/buttons/Button'


const array = [
    {
        title:"CREA TU PERFIL",
        subTitle:"Puedes crear tu perfil, con esto te podre conocer y recomendar lo que necesitas",
        img:require("../assets/Img/pruebaA.jpg"),
        color:"#911757"
    },
    {
        title:"RECIBE ASESORÍA",
        subTitle:"Siempre estaré pendiente de recomendarte lo que a ti te hace brillar",
        img:require("../assets/Img/pruebaB.jpg"),
        color:"#672183"
    },
    {
        title:"ARMA TU OUTFIT",
        subTitle:"Crear tu mejor outfit para aquella ocasión o sino simplemente deja sorprenderte",
        img:require("../assets/Img/pruebaC.jpg"),
        color:"#3c188c"
    },
    {
        title:"CONSIGUE TU ESTILO",
        subTitle:"Ya tienes tu personal shopper, nunca más volverás a no saber qué comprar",
        img:require("../assets/Img/pruebaD.jpg"),
        color:"#1336aa"
    },
]


export const IntroScreen = () => {
    const navigation = useNavigation(); 
    const [first, setfirst] = useState<number>(0)
    const [statusNumber, setstatusNumber] = useState<number>(0)
    
    return (
    <View style={{ backgroundColor:`${array[first].color}`, width: "100%", height: "100%"}}>
        <Text
        style={{color:"white", alignSelf:"center", fontSize: Dimensions.get("window").width * 0.07,
                fontWeight: 'bold', marginTop:"10%"}}
        >
            {array[first].title}
        </Text>
        <Text
        style={{color:"white", alignSelf:"center", textAlign:"center", justifyContent: 'center', marginHorizontal:20,
               fontSize: Dimensions.get("window").width * 0.04, marginTop:"3%", fontFamily:'lucida grande'}}
        >
            {array[first].subTitle}
        </Text>
        <View
        style={{ 
           display:"flex", flexDirection:"column", justifyContent: 'center', alignItems: 'center', width: Dimensions.get("window").width,
        }}
        >
            <View
            style={{
                flexDirection:"row",
            }}
            >
                {[1,2,3,4].map((data,index)=>{
                   
                   if (index === statusNumber ) {
                    return (<View
                    key={index}
                    style={{backgroundColor: "white", width:9, height:9, borderRadius:4.5, marginHorizontal:6, marginTop:"4%",}}>
                    </View>)
                   }
                    return(
                        <View
                        key={index}
                style={{backgroundColor: "gray", width:9, height:9, borderRadius:4.5, marginHorizontal:6, marginTop:"4%",}}>
                </View>
                    )
                })}
              
            </View>
        <Image
        style={{width: Dimensions.get("window").width *0.68, height:Dimensions.get("window").height* 0.75,}}
        source={array[first].img}
        ></Image>
        </View>
        <Button
                title="Siguiente   ->"
                buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)', }}
                type={"clear"}
                containerStyle={{
                  width: 200,
                  marginTop:"-15%",
                  marginHorizontal:"26%",
                  borderRadius:10  
                }}
                titleStyle={{ color: 'white', marginHorizontal: 20, fontSize: 20,}}
                onPress={() =>{ 
                    setfirst((prev:any) =>{ return prev < 3 ? prev = prev + 1 : prev });
                    setstatusNumber((prev:any) =>{ return prev < 3 ? prev = prev + 1 : prev  })
                    //@ts-ignore
                    first === 3 && navigation.navigate('FormIntroOne')
                    
                }
            }
              />
    </View>
    )
}