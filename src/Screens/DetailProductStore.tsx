import React, { useEffect, useState } from "react";
import { Tab } from "../Components/Tab";
import { useNavigation } from '@react-navigation/native';
import { DetailComponentVertical } from "../Components/DetailComponentVertical";
import { ActivityIndicator, Dimensions, StyleSheet, Text, View } from "react-native";
import { FlatList, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Video from "react-native-video";
import VideoPlayer from "react-native-video-controls";
import { Button, Icon, Image } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import { Title } from "../Components/Title";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


export const DetailProductStore = ({ route }: any) => {

  const [indexPagination, setIndexPagination] = React.useState(0)
  const isCarousel = React.useRef<any>(null)

  const imageA = require('../Assets/Img/tiendaA.png');
  const imageB = require('../Assets/Img/tiendaB.jpg');
  const imageC = require('../Assets/Img/tiendaC.png');
  const imageD = require('../Assets/Img/tiendaD.jpg');
  const imageE = require('../Assets/Img/tiendaE.jpg');
  const data = [
    {
      nombre: "ADIDAS",
      city: 'Santiago de Chile',
      image: imageA,
      position:{latitude:-33.452190,
        longitude: -70.682445}
      },
      {
        nombre: "COMPANY",
        city: 'Santiago de Chile',
        image: imageB,
        position:{latitude:-33.413333,
          longitude: -70.581575}
    },
    {
      nombre: "FASHION",
      city: 'Santiago de Chile',
      image: imageC,
      position:{latitude:-33.353709,
      longitude:-70.748244}
    },
    {
      nombre: "MELA MODA",
      city: 'Santiago de Chile',
      image: imageD,
      position:{latitude:-33.430658,
        longitude:-70.535465}
    },
    {
      nombre: "KAROL KLOSS",
      city: 'Santiago de Chile',
      image: imageE,
      position:{latitude:-33.503141,
      longitude:-70.625260}
    },
  ]

  const navigation = useNavigation();
  const [origin, setOrigin] = React.useState<any>(data[0].position)

  const _renderItem = ({ item, index }: any) => {
    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 15,
          width: Dimensions.get('window').width * 0.8,
          height: 150,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}
      >
        <View style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

        }}>

          <Image
            style={{
              width: Dimensions.get('window').width * 0.28,
              height: 110,
              borderRadius: 15,
              marginLeft: 10
            }}
            source={item.image}
            resizeMode="contain"
            containerStyle={{
              margin: 5
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>

        <View
          style={{
            // backgroundColor: "blue",
            width: Dimensions.get('window').width * 0.38,
            height: 150,
          }}
        >
          <Text
            style={{ fontSize: 18, fontWeight: "bold", alignSelf: "center", marginTop: 10 }}
          >{item.nombre}</Text>
          <Text
            style={{ fontSize: 14, alignSelf: "center", }}
          >{item.city}</Text>
          <Text
            style={{ fontSize: 12, alignSelf: "center", }}
          ></Text>
          <Text
            style={{ fontSize: 12, alignSelf: "center", }}
          >Stock disponible: 10</Text>
          <Text
            style={{ fontSize: 12, alignSelf: "center", }}
          >Descuento Actual:20% </Text>
          <Button
            title="ir a la URL"
            containerStyle={{ padding: 15 }}
            buttonStyle={{ backgroundColor: "#0E4B78", borderRadius: 7 }}
          />
        </View>
      </View>
    )
  }

  return (
    <>
      <View
        style={{
          width: Dimensions.get('window').width * 0.9,
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
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
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
      <MapView
        customMapStyle={[]}
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        region={{
          latitude: origin.latitude,
          longitude:origin.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        initialRegion={{
          latitude: origin.latitude,
          longitude:origin.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
      >
     <Marker
     coordinate={origin}

     ></Marker>

      </MapView>
    </View>

      <View
        style={{
          padding: 20,
          alignSelf: "center",
          height: 200,
          position: "absolute",
          bottom: 30,
          

        }}
      >
        <Carousel
          data={data}
          renderItem={_renderItem}
          ref={isCarousel}
          onSnapToItem={(index: number) => {
            setIndexPagination(index);
            setOrigin(data[index].position) 
          }}
          sliderWidth={Dimensions.get('window').width * 0.95}
          itemWidth={Dimensions.get('window').width * 0.8}
          sliderHeight={220}
          activeSlideOffset={100}
          callbackOffsetMargin={5}
          enableMomentum={true}
          contentContainerCustomStyle={{
            borderRadius: 20,
          }}
        />
      </View>
    </>
  )
}

// shadowColor: "#000",
//             shadowOffset: {
//             width: 0,
//             height: 3,
//             },
//             shadowOpacity: 0.27,
//             shadowRadius: 4.65,
//             elevation: 6,

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});