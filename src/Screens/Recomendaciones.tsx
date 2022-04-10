import React from "react";
import { Tab } from "../Components/Tab";
import { useNavigation } from '@react-navigation/native';
import { DetailComponent } from "../Components/DetailComponent";
import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";



export const Recomendaciones = () => {

    const imageA = require('../assets/Img/ropaA.jpg');
    const imageB = require('../assets/Img/ropaB.jpg');
    const imageC = require('../assets/Img/ropaC.jpg');
    const imageD = require('../assets/Img/ropaD.jpg');
    const productoObj = [imageA, imageB, imageC, imageD];
    const navigation = useNavigation();

  return(
      <View
      style={{backgroundColor:"#0d0a1e", width:"100%", height:"100%"}}
      >
      <ScrollView
      style={{backgroundColor:"#0d0a1e", height:"100%", width:"100%"}}
      >
      <Tab textTitle = "Recomendaciones"/>
      <DetailComponent title = "Gafas"productoObj={productoObj}    />
      <DetailComponent title = "Gorros"productoObj={productoObj}   />
      <DetailComponent title = "Pañuelos"productoObj={productoObj} />
      <DetailComponent title = "Pañuelos"productoObj={productoObj} />
      <DetailComponent title = "Pañuelos"productoObj={productoObj} />

      </ScrollView>
    <TouchableOpacity
    style={{backgroundColor:"white", display:"flex", flexDirection:"row",
    justifyContent: "space-around",alignItems: 'center', borderRadius:20,
    height:50,marginHorizontal:15, marginVertical:17,}}
    >
        <Text
        style={{color: "black", fontSize:20}}
        >Agregar Recomendación</Text>
    <Icon
          name='add-outline'
          type='ionicon'
          color='black'
          size={45}
          />
    </TouchableOpacity>
          </View>
  )
}