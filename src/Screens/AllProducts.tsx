import React, { useEffect, useState } from "react";
import { Tab } from "../Components/Tab";
import { useNavigation } from '@react-navigation/native';
import { DetailComponentVertical } from "../Components/DetailComponentVertical";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Video from "react-native-video";
import VideoPlayer from "react-native-video-controls";
import { Icon } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import { Title } from "../Components/Title";


export const AllProducts = ({route}:any) => {


    const data = route?.params;
    const [dataParams, setDataParams] = useState(data)

    useEffect(() => {
        setDataParams(route.params)
        console.log("router",data);
    },[route.params])
    
   const otono = require('../Assets/video/otono.mp4');
   const promo = require('../Assets/video/promo.mp4');
   const imageA = require('../Assets/Img/ropaA.jpg');
   const imageB = require('../Assets/Img/ropaB.jpg');
   const imageC = require('../Assets/Img/ropaC.jpg');
   const imageD = require('../Assets/Img/ropaD.jpg');

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
            name='arrow-left'
            type='evilicon'
            color='#DED4E5'
            size={38}
            tvParallaxProperties={undefined}
            //@ts-ignore
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: 190,
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
          >Eliminar Categoria</Text>
          <Icon
            name='minus'
            type='evilicon'
            color='#D4D7EE'
            size={40}
            tvParallaxProperties={undefined}
            //@ts-ignore
            onPress={() => navigation.navigate("Photo")}
          />
        </TouchableOpacity>
      </View>

         
        <FlatList
         ListHeaderComponent={()=>(
             <>
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
           <Title text={dataParams.title} />
           <View
             style={{
                 marginHorizontal: 10, display: "flex",
                 flexDirection: "row",
                 alignItems: "center",
                 flexWrap: "wrap",
             }}
             >
           </View>
         </>
         )}
        contentContainerStyle={{ 
            flexDirection: 'column',
            display: "flex",
            alignItems: "center",
        }}
        numColumns={2}
        data={dataParams.data}
        renderItem={({ item }:any) => (
            <>
            <DetailComponentVertical productoObj={item} />
            </>
          )}
        keyExtractor={item => item.id}
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