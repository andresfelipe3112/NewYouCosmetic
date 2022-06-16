import React from 'react';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

export const CurrentResponse = ({navigation}) => {

    const data = [
        { pregunta:"Estación del año", navigation:"Seasons" },
        { pregunta:"Género", navigation:"Gender" },
        { pregunta:"Vegano", navigation:"VeganOption" },
        { pregunta:"Estílo", navigation:"StyleOption" },
        { pregunta:"Tipo de piel", navigation:"ColorHearOption" },
        { pregunta:"Tipo de rostro", navigation:"TipoDeRostro" },
        { pregunta:"Tipo de cuerpo", navigation:"TipoDeCuerpo" },
        { pregunta:"Altura", navigation:"Altura" },
        { pregunta:"Cuello", navigation:"LargoDeCuello" },
    ]

    return(
        <>
            <LinearGradient opacity={1} colors={['#378bc1', '#395ea1', '#4847a2']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
            <View
            style={{
              width: Dimensions.get('window').width * 0.9,
              flexWrap: "wrap",
              display: "flex",
              flexDirection: "row",
              marginBottom: 10
            }}
          >
            <TouchableOpacity
            onPress={()=>navigation.goBack()}
              style={{
                padding: 10,
                width: 60
              }}
            >
              <Icon
                name='arrow-left'
                type='evilicon'
                color='#DED4E5'
                size={38}
                tvParallaxProperties={undefined}
                //@ts-ignore
                />
            </TouchableOpacity>
          </View>
            <View>
                {data.map((item, index) => {
                    return (
                        <TouchableOpacity
                        key={index}
                        style={{
                            width: "90%",
                            height: 50,
                            borderRadius:25,
                            borderColor:"white",
                            backgroundColor:"white",
                            borderWidth: 1.5,
                            alignSelf: "center",
                            margin:10,
                            display: "flex",
                            alignContent:"center",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onPress={() => navigation.navigate(item.navigation, {actualizar:true}) }
                        >
                            <Text
                            style={{ fontSize:15, fontWeight: "bold"}}
                            >{item.pregunta}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </>
    )
}