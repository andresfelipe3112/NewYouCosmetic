import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import newApi from '../Services/LoginApiValues';

export const CurrentResponse = ({navigation}) => {

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
    ]

    const [dataResponse, setDataResponse] = useState<any>([])
    const responses  = async () => {
      const resp = await newApi.get(`users/data-user`)
      console.log("responses",resp.data);
      setDataResponse(resp.data)
    }

    useEffect(() => {
      responses()
      console.log(dataResponse);
    },[])

    const Button =({item, data})=>{
      return(
        <TouchableOpacity
        style={{
          width: "90%",
          height: 50,
          borderRadius: 25,
          borderColor: "white",
          backgroundColor: "white",
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
          style={{ fontSize: 15, fontWeight: "bold" }}
        >{item.pregunta}</Text>
      </TouchableOpacity>
      )
    }


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
          <ScrollView>
            <View>
            {dataResponse?.dataUser?.season && <Button item={data[0]} data={dataResponse?.dataUser?.season} ></Button> }
            {dataResponse?.dataUser?.gender && <Button item={data[1]} data={dataResponse?.dataUser?.gender}></Button> }
            {dataResponse?.dataUser?.height && <Button item={data[7]} data={dataResponse?.dataUser?.height} ></Button> }
            {dataResponse?.dataUser?.neckLength && <Button item={data[8]} data={dataResponse?.dataUser?.neckLength} ></Button> }
            {dataResponse?.dataUser?.skinColor && <Button item={data[4]} data={dataResponse?.dataUser?.skinColor} ></Button> }
            {dataResponse?.dataUser?.style && <Button item={data[3]}  data={dataResponse?.dataUser?.style}></Button> }
            {dataResponse?.dataUser?.typeBody && <Button item={data[6]} data={dataResponse?.dataUser?.typeBody} ></Button> }
            {dataResponse?.dataUser?.typeFace && <Button item={data[5]} data={dataResponse?.dataUser?.typeFace} ></Button> }
            </View>
          </ScrollView>
        </>
    )
}