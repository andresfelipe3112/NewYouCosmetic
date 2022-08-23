import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import newApi from '../Services/LoginApiValues';

export const CurrentResponse = ({navigation}) => {

  const [loadingLogin, setloadingLogin] = useState<Boolean>(false);

    const data = [
        { pregunta:"Estación del año", navigation:"Seasons"  },
        { pregunta:"Género", navigation:"Gender"},
        { pregunta:"Vegano", navigation:"VeganOption" },
        { pregunta:"Estilo", navigation:"StyleOption" },
        { pregunta:"Tipo de piel", navigation:"ColorHearOption" },
        { pregunta:"Tipo de rostro", navigation:"TipoDeRostro" },
        { pregunta:"Tipo de cuerpo", navigation:"TipoDeCuerpo" },
        { pregunta:"Altura", navigation:"Altura" },
        { pregunta:"Cuello", navigation:"LargoDeCuello" },

        { pregunta:"Color de venas", navigation:"VeinColor" },
        { pregunta:"Bronceado", navigation:"Bronceado" },
        { pregunta:"Pecas", navigation:"Pecas" },
        { pregunta:"Color de cabello", navigation:"ColorCabello" },
    ]

    const [dataResponse, setDataResponse] = useState<any>([])
    const responses  = async () => {
      setloadingLogin(true)
      const resp = await newApi.get(`users/data-user`)
      console.log("responses",resp.data);
      setDataResponse(resp.data)
      setloadingLogin(false)
    }

    let focus = useIsFocused();
    useEffect(() => {
      responses()
      console.log(dataResponse);
      focus=false
    },[focus])

    const Button =({item, data})=>{
      return(
        <TouchableOpacity
        style={{
          width: "90%",
          height: 50,
          borderRadius: 25,
          borderColor: "white",
          backgroundColor: "black",
          borderWidth: 1.5,
          alignSelf: "center",
          margin: 10,
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate(item.navigation, { actualizar: true , data: data })}
      >
        <Text
          style={{ fontSize: 14, fontWeight: "bold", color: "#e1e1e1"}}
        >{item.pregunta}</Text>
      </TouchableOpacity>
      )
    }


    return(
        <>
            <LinearGradient opacity={1} colors={['white', 'white', 'white']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
            <View
            style={{
              width: Dimensions.get('window').width * 0.9,
              flexWrap: "wrap",
              display: "flex",
              flexDirection: "row",
            }}
          >
        <View
         style={{
          position: "absolute",
          height: 50,
          left: Dimensions.get('window').width * 0.4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
        style={{ fontSize:18, color: 'black', fontWeight: 'bold' }}
        >Respuestas</Text>
      </View>
                   <View
               style={{
                 display: 'flex',
                 flexDirection: 'row',
                 justifyContent: 'space-between',
                 width: Dimensions.get('window').width,
                 alignSelf: 'center',
                 height: 45,
                 marginTop: 20,
                 paddingLeft:10,
               }}>    
            <View style={{
                width: 28, height: 28, flexDirection: 'row',
                backgroundColor: 'white', justifyContent: 'center',
                alignItems: 'center', marginBottom: 20, borderRadius: 30, marginTop: 3
            }}>
                <Icon size={18} name='arrow-left' type='feather' tvParallaxProperties={undefined}
                    color='#444444' onPress={() => navigation.goBack()}>
                </Icon>
            </View>
          </View>
          </View>
          {loadingLogin && <ActivityIndicator style={{ alignItems: 'center'}} color={'gray'} />}
          <ScrollView>
            <View>
            {dataResponse?.dataUser?.season && <Button item={data[0]} data={dataResponse?.dataUser?.season} ></Button> }
            {dataResponse?.dataUser?.gender && <Button item={data[1]} data={dataResponse?.dataUser?.gender}></Button> }
            {dataResponse?.dataUser?.height && <Button item={data[7]} data={dataResponse?.dataUser?.realHeight} ></Button> }
            {dataResponse?.dataUser?.neckLength && <Button item={data[8]} data={dataResponse?.dataUser?.neckLength} ></Button> }
            {dataResponse?.dataUser?.skinColor && <Button item={data[4]} data={dataResponse?.dataUser?.skinColor} ></Button> }
            {dataResponse?.dataUser?.style && <Button item={data[3]}  data={dataResponse?.dataUser?.style}></Button> }
            {dataResponse?.dataUser?.typeBody && <Button item={data[6]} data={dataResponse?.dataUser?.typeBody} ></Button> }
            {dataResponse?.dataUser?.typeFace && <Button item={data[5]} data={dataResponse?.dataUser?.typeFace} ></Button> }

            {dataResponse?.dataUser?.veins && <Button item={data[9]} data={dataResponse?.dataUser?.veins} ></Button> }
            {dataResponse?.dataUser?.sunTanning && <Button item={data[10]} data={dataResponse?.dataUser?.sunTanning} ></Button> }
            {dataResponse?.dataUser?.freckles === true || dataResponse?.dataUser?.freckles === false && <Button item={data[11]} data={dataResponse?.dataUser?.freckles} ></Button> }
            {dataResponse?.dataUser?.hair && <Button item={data[12]} data={dataResponse?.dataUser?.hair} ></Button> }

            </View>
          </ScrollView>
        </>
    )
}