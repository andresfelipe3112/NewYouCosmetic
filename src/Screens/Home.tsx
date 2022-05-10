import React, { useEffect } from "react";
import { Tab } from "../Components/Tab";
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { DetailComponent } from "../Components/DetailComponent";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Video from "react-native-video";
import VideoPlayer from "react-native-video-controls";
import { Icon } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import { Title } from "../Components/Title";

const otono = require('../Assets/video/otono.mp4');
//
const promo = require('../Assets/video/promo.mp4');
const imageA = require('../Assets/Img/ropaA.jpg');
const imageB = require('../Assets/Img/ropaB.jpg');
const imageC = require('../Assets/Img/ropaC.jpg');
const imageD = require('../Assets/Img/ropaD.jpg');

//Camisas


const data = [
  {
    nombre: "Gafas",
    icono: "home",
  },
  {
    nombre: "Pañuelos",
    icono: "home",
  },
  {
    nombre: "Gorros",
    icono: "home",
  },
  {
    nombre: "Pulseras",
    icono: "home",
  },
  {
    nombre: "Camisas",
    icono: "home",
  },
  {
    nombre: "Gorros",
    icono: "home",
  },
  {
    nombre: "Vestidos",
    icono: "home",
  },
  {
    nombre: "zapatillas",
    icono: "home",
  },
]
const productoObjPañuelos = [
  {
    nombre: "Vestido Galo",
    marca:"Zara",
    image: require('../Assets/Img/panuelos1.jpg')
  },
  {
    nombre: "Chaqueta Polar",
    marca:"Polo",
    image: require('../Assets/Img/panuelos2.jpg')
  },
  {
    nombre: "Camisa Corta",
    marca:"Farabella",
    image: require('../Assets/Img/panuelos3.jpg')
  },
  {
    nombre: "Falda Corta",
    marca:"Sugar Top",
    image: require('../Assets/Img/panuelos4.jpg')
  },
  {
    nombre: "Vestido Galo",
    marca:"Zara",
    image: require('../Assets/Img/panuelos5.jpg')
  },
]
const productoObjCatera = [
  {
    nombre: "Vestido Galo",
    marca:"Zara",
    image: require('../Assets/Img/cartera1.jpg')
  },
  {
    nombre: "Chaqueta Polar",
    marca:"Polo",
    image: require('../Assets/Img/cartera2.jpg')
  },
  {
    nombre: "Camisa Corta",
    marca:"Farabella",
    image: require('../Assets/Img/cartera3.jpg')
  },
  {
    nombre: "Falda Corta",
    marca:"Sugar Top",
    image: require('../Assets/Img/cartera4.jpg')
  },
  {
    nombre: "Vestido Galo",
    marca:"Zara",
    image: require('../Assets/Img/cartera5.jpg')
  },
  {
    nombre: "Chaqueta Polar",
    marca:"Polo",
    image: require('../Assets/Img/cartera6.jpg')
  },
  {
    nombre: "Camisa Corta",
    marca:"Farabella",
    image: require('../Assets/Img/cartera1.jpg')
  },
  {
    nombre: "Falda Corta",
    marca:"Sugar Top",
    image: require('../Assets/Img/cartera2.jpg')
  },
]
const productoObj = [
  {
    nombre: "Vestido Galo",
    marca:"Zara",
    image: imageA
  },
  {
    nombre: "Chaqueta Polar",
    marca:"Polo",
    image: imageB
  },
  {
    nombre: "Camisa Corta",
    marca:"Farabella",
    image: imageC
  },
  {
    nombre: "Falda Corta",
    marca:"Sugar Top",
    image: imageD
  },
  {
    nombre: "Vestido Galo",
    marca:"Zara",
    image: imageA
  },
  {
    nombre: "Chaqueta Polar",
    marca:"Polo",
    image: imageB
  },
  {
    nombre: "Camisa Corta",
    marca:"Farabella",
    image: imageC
  },
  {
    nombre: "Falda Corta",
    marca:"Sugar Top",
    image: imageD
  },
]
const productoObjReloj = [
  {
    nombre: "Vestido Galo",
    marca:"Zara",
    image: require('../Assets/Img/reloj1.jpg')
  },
  {
    nombre: "Chaqueta Polar",
    marca:"Polo",
    image: require('../Assets/Img/reloj2.jpg')
  },
  {
    nombre: "Camisa Corta",
    marca:"Farabella",
    image: require('../Assets/Img/reloj3.jpg')
  },
  {
    nombre: "Falda Corta",
    marca:"Sugar Top",
    image: require('../Assets/Img/reloj4.jpg')
  },
  {
    nombre: "Vestido Galo",
    marca:"Zara",
    image: require('../Assets/Img/reloj5.jpg')
  },
  {
    nombre: "Chaqueta Polar",
    marca:"Polo",
    image: require('../Assets/Img/reloj6.jpg')
  },
]
const productoObjPulseras = [
  {
    nombre: "Vestido Galo",
    marca:"Zara",
    image: require('../Assets/Img/pulsera1.jpg')
  },
  {
    nombre: "Chaqueta Polar",
    marca:"Polo",
    image: require('../Assets/Img/pulsera2.jpg')
  },
  {
    nombre: "Camisa Corta",
    marca:"Farabella",
    image: require('../Assets/Img/pulsera3.jpg')
  },
  {
    nombre: "Falda Corta",
    marca:"Sugar Top",
    image: require('../Assets/Img/pulsera4.jpg')
  },
  {
    nombre: "Vestido Galo",
    marca:"Zara",
    image: require('../Assets/Img/pulsera5.jpg')
  },
  {
    nombre: "Chaqueta Polar",
    marca:"Polo",
    image: require('../Assets/Img/pulsera6.jpg')
  },
]
const productoObjCamisa = [

  {
    nombre: "Vestido Galo",
    marca:"Zara",
    image: require('../Assets/Img/camisa1.jpg')
  },
  {
    nombre: "Chaqueta Polar",
    marca:"Polo",
    image: require('../Assets/Img/camisa2.jpg')
  },
  {
    nombre: "Camisa Corta",
    marca:"Farabella",
    image: require('../Assets/Img/camisa3.jpg')
  },
  {
    nombre: "Falda Corta",
    marca:"Sugar Top",
    image: require('../Assets/Img/camisa4.jpg')
  },
  {
    nombre: "Camisa Corta",
    marca:"Falabella",
    image: imageC
  },
]

let array:any = [
  {
    categoria:"Pulseras",
    dataProduct:productoObjPulseras
  },
  {
    categoria:"Pañuelos",
    dataProduct:productoObjPañuelos
  },
  {
    categoria:"Carteras",
    dataProduct:productoObjCatera
  },
  {
    categoria:"Relojes",
    dataProduct:productoObjReloj
  },

];
export const Home = ({route}:any) => {

  
  var focus = useIsFocused();
  useEffect(() => {
   focus === true && route.params?.current === "new";
   array.unshift( {
    categoria:"Camisas",
    dataProduct:productoObjCamisa,
    status:"new"
  })

  },[])


  const navigation = useNavigation();

  return (
    <>
      <LinearGradient opacity={1} colors={['#378bc1', '#395ea1', '#4847a2']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
      <View
        style={{
          display: "flex", flexDirection: "row",
          justifyContent: "space-between", width: Dimensions.get("window").width, alignSelf: "center",
          height: 65,
          marginTop: 5
        }}
      >
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: 10,
          }}>
          <Icon
            name='envelope'
            type='evilicon'
            color='#DED4E5'
            size={28}
            tvParallaxProperties={undefined}
            //@ts-ignore
            // onPress={() => navigation.navigate("CategoriesPush")}
          />
        </TouchableOpacity>
        <TouchableOpacity 
           //@ts-ignore
           onPress={() => navigation.navigate("CategoriesPush")}
        style={{
          width: 220,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: 3,
          backgroundColor: "#0B72A9",
          borderRadius: 20,
          margin: 5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
          elevation: 12,
        }}>
          <Text
            style={{ color: '#D4D7EE', }}
          >Agregar recomendacion</Text>
          <Icon
            name='plus'
            type='evilicon'
            color='#D4D7EE'
            size={40}
            tvParallaxProperties={undefined}

          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ width: "100%", marginBottom: 50 }}
      >
        <Video
          // source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
          source={promo}
          resizeMode={"stretch"}
          opacity={1}
          controls={false}
          paused={false}
          volume={0}
          muted={true}
          disableBack
          disableVolume
          toggleResizeModeOnFullscreen
          repeat={true}
          bufferConfig={{
            minBufferMs: 15000,
            maxBufferMs: 50000,
            bufferForPlaybackMs: 2500,
            bufferForPlaybackAfterRebufferMs: 5000
          }}
          style={{
            width: Dimensions.get("window").width * 0.95,
            height: 200,
            alignSelf: "center",
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
          }}
        />
        <View style={{
          width: Dimensions.get("window").width * 0.95, display: "flex", justifyContent: "center",
          flexDirection: "row", margin: 4
        }}>
          <Text style={{ backgroundColor: "#809BBB", fontWeight: "bold", borderRadius: 5, padding: 2, margin: 2 }}>Patrocinado</Text>
          <Text
            style={{ color: "white", fontWeight: "bold", margin: 2 }}
          >  ADIDAS
          </Text>
          <Text
            style={{ color: "white", margin: 2 }}
          >Polera Adidas</Text>
        </View>
        <Title text={"Mis recomendaciones para tí"} />
        <View
          style={{
            marginHorizontal: 10, display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: -12
          }}
        >
          {data.map(({ nombre, icono }, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.category}>
                <Text
                  style={styles.textCategory}
                >{nombre}</Text>
              </TouchableOpacity>
            )
          }
          )
          }
        </View>
        {
          array.map((item, index) =>{
            return (
              <DetailComponent title={item.categoria} productoObj={item.dataProduct} status={item.status} />
            )
          })
        }
      </ScrollView>

    </>
  )
}

const styles = StyleSheet.create({
  category: {
    borderColor: "white",
    backgroundColor: "#1F366C",
    borderWidth: 0.8,
    borderRadius: 10,
    margin: 5,
  },
  textCategory: {
    padding: 5,
    paddingHorizontal: 10,
    color: "white",
    fontWeight: "bold"
  }
})