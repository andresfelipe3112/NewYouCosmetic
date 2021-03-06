import React, { useEffect, useState } from "react";
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
import { FloatingAction } from "react-native-floating-action";
import newApi from "../Services/LoginApiValues";

const otono = require('../Assets/video/otono.mp4');
//
const promo = require('../Assets/video/promo.mp4');
const promo2 = require('../Assets/video/danni.mp4');
const imageA = require('../Assets/Img/ropaA.jpg');
const imageB = require('../Assets/Img/ropaB.jpg');
const imageC = require('../Assets/Img/ropaC.jpg');
const imageD = require('../Assets/Img/ropaD.jpg');

//Camisas

export const Home = ({route}:any) => {

const refresh = () => {
 return navigation.navigate("Root", {reRender:"render"})
}

const actions = [
  {
      text: "Agregar Recomendación",
      icon: require("../Assets/Img/add.png"),
      name: "Agregar Recomendación",
      position: 1,
      // color: TERTIARY_COLOR,
  },
  {
      text: "Refrescar categorías",
      icon: require("../Assets/Img/import.png"),
      name: "Refrescar categorías",
      position: 2,
      // color: TERTIARY_COLOR
  },
];

const navigation = useNavigation();
const  [dataProduct, setDataProduct]=useState<any>([])
const  [dataProductFilter, setDataFilter]=useState<any>([])
const  [filterOn, setFilterON]=useState<any>(false)
const  [category, setCategory]=useState<any>([])

useEffect(() => {
  console.log(route?.params?.firtsData?.productos);
  let array = [];
  let category:any = [];
for (const key in route?.params?.firtsData?.productos) {
  if (Object.prototype.hasOwnProperty.call(route?.params?.firtsData?.productos, key)) {
    const element = route?.params?.firtsData?.productos[key];
    array.push(element)   
    console.log("element",key);
    category.push(key)
  }
}
   setCategory(category)
   setDataProduct(array)
},[route?.params?.firtsData])
  
const changueRecomendations = (type:string) => {

  if (type === "VER TODAS") {
    return setFilterON(false)
  } 
  let newArray = dataProduct.filter((x)=> x[0].displayName === type )
  setFilterON(true)
  setDataFilter(newArray)
}

useEffect(() => {
  console.log("category",category);
},[category])

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
         
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
        {/* <TouchableOpacity 
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
        </TouchableOpacity> */}
      </View>

      <ScrollView
        style={{ width: "100%", marginBottom: 50 }}
      >
        <Video
          // source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
          source={promo2}
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
          >  danimateluna.cl
          </Text>
          {/* <Text
            style={{ color: "white", margin: 2 }}
          >Polera Adidas</Text> */}
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
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          >
          
          {
            [...["VER TODAS"],...category].map((categoria, index)=>{
                return (
                  <TouchableOpacity
                  key={index}
                  onPress={() => changueRecomendations(categoria)}
                  style={styles.category}>
                
                    <Text
                      style={styles.textCategory}
                      >{categoria}</Text>
                  </TouchableOpacity>
                )
            })
        }
        </ScrollView>
        </View>
        {!filterOn && dataProduct?.map((item, index) =>{
            return (
              <DetailComponent title={item[0].displayName} productoObj={item} status={item.status}  />
            )
          })
        }
        {
          filterOn && dataProductFilter?.map((item, index) =>{
            return (
              <DetailComponent title={item[0].displayName} productoObj={item} status={item.status}  />
            )
          })
        }
      </ScrollView>
      <FloatingAction
                  showBackground={true}
                  actions={actions}
                  buttonSize={55}
                  color={"#5069B7"}
                  distanceToEdge={{ vertical: 70, horizontal: 15}}
                  onPressItem={ name => {
                      if (name === 'Agregar Recomendación') {
                              navigation.navigate("CategoriesPush")
                          }
                       else if (name === 'Refrescar categorías') {
                        refresh()
                      }
                  }}
              />
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