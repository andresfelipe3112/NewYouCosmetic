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


export const DetailProduct = ({ route }: any) => {

  const [indexPagination, setIndexPagination] = React.useState(0);
  const isCarousel = React.useRef<any>(null);
  const [iconHeart, setIconHeart] = useState(false);

  const otono = require('../Assets/video/otono.mp4');
  const promo = require('../Assets/video/promo.mp4');
  const imageA = require('../Assets/Img/ropaA.jpg');
  const imageB = require('../Assets/Img/ropaB.jpg');
  const imageC = require('../Assets/Img/ropaC.jpg');
  const imageD = require('../Assets/Img/ropaD.jpg');
  const data = [
    {
      nombre: "Vestido Galo",
      marca: "Zara",
      image: imageA
    },
    {
      nombre: "Chaqueta Polar",
      marca: "Polo",
      image: imageB
    },
    {
      nombre: "Camisa Corta",
      marca: "Farabella",
      image: imageC
    },
    {
      nombre: "Falda Corta",
      marca: "Sugar Top",
      image: imageD
    },
    {
      nombre: "Vestido Galo",
      marca: "Zara",
      image: imageA
    },
    {
      nombre: "Chaqueta Polar",
      marca: "Polo",
      image: imageB
    },
    {
      nombre: "Camisa Corta",
      marca: "Farabella",
      image: imageC
    },
    {
      nombre: "Falda Corta",
      marca: "Sugar Top",
      image: imageD
    },
    {
      nombre: "Falda Corta",
      marca: "Sugar Top",
      image: imageD,
      tipo: "VIDEO"
    },
  ]

  const navigation = useNavigation();

  const _renderItem = ({ item, index }: any) => {

    if (item.tipo === "VIDEO") {
      return (
        <View
          style={{
            width: Dimensions.get('window').width * 0.9,
            height: 400,
            borderRadius: 20
            // backgroundColor:"red"
          }}
        >
          <VideoPlayer
            source={require("../Assets/video/intro2.mp4")}
            // source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
            // source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
            resizeMode={"contain"}
            style={{ borderRadius: 20 }}
            controls={false}
            paused={true}
            disableBack
            // disableVolume
            toggleResizeModeOnFullscreen

            bufferConfig={{
              minBufferMs: 15000,
              maxBufferMs: 50000,
              bufferForPlaybackMs: 2500,
              bufferForPlaybackAfterRebufferMs: 5000
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
      )
    }
    return (

      <Image
        style={{
          width: Dimensions.get('window').width * 0.9,
          height: 390,
        }}
        source={item.image}
        resizeMode="contain"
        containerStyle={{
          backgroundColor: "black", alignSelf: "center", borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
    )
  }

  return (
    <>
      <LinearGradient opacity={1} colors={['#378bc1', '#395ea1', '#4847a2']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
      <ScrollView>

        <View
          style={{
            padding: 20, alignSelf: "center", backgroundColor: "white", height: 630, borderBottomLeftRadius: 30, borderBottomRightRadius: 30,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.30,

            elevation: 13,
          }}
        >
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
            <Text
              style={{ padding: 15, width: Dimensions.get("window").width * 0.6, textAlign: "center", fontSize: 17 }}
            >Nombre del Producto</Text>
            <Icon
                                    name='heart'
                                    size={30}
                                    color={!iconHeart ? 'gray' : 'red'}
                                    type='feather'
                                    tvParallaxProperties={false}
                                    onPress={()=>setIconHeart(!iconHeart )}
                                />
          </View>


          <Carousel
            data={data}
            renderItem={_renderItem}
            ref={isCarousel}
            onSnapToItem={(index) => setIndexPagination(index)}
            sliderWidth={Dimensions.get('window').width * 0.9}
            itemWidth={Dimensions.get('window').width * 0.9}
            sliderHeight={405}
            activeSlideOffset={100}
            callbackOffsetMargin={5}
            enableMomentum={true}
            containerStyle={{ borderRadius: 20 }}
            style={{}}
          />
          <Pagination
            dotsLength={data.length}
            activeDotIndex={indexPagination}
            carouselRef={isCarousel}
            dotStyle={{
              width: 7,
              height: 7,
              borderRadius: 5,
              marginHorizontal: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.92)',
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />
          <View
            style={{
              alignSelf: "center",
              display: 'flex',
              width: Dimensions.get("window").width * 0.8,
              flexDirection: 'row',
              justifyContent: "space-around"
            }}
          >

            <View
              style={styles.containerDetail}
            >
              <Text
                style={styles.textDetail}
              >115</Text>
              <Text
                style={styles.textDetailVentas}
              >Ventas</Text>
            </View>
            <View
              style={styles.containerDetail}
            >
              <Text
                style={styles.textDetail}
              >2540</Text>
              <Text
                style={styles.textDetailVentas}
              >Vistas</Text>
            </View>
            <View
              style={styles.containerDetail}
            >
              <Text
                style={styles.textDetail}
              >5620</Text>
              <Text
                style={styles.textDetailVentas}
              >Favoritos</Text>
            </View>

          </View>

        </View>

        <Button
          title="Ir a tiendas disponibles"
          onPress={() => navigation.navigate('DetailProductStore') }
          containerStyle={{ borderRadius: 10, width: 200, alignSelf: "center", margin: 30, backgroundColor: "white", padding: 5 }}
          titleStyle={{ color: "#6B6871" }}
          buttonStyle={{ backgroundColor: "white" }}
        />

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
  },
  textDetail: {
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "Dosis",
  },
  textDetailVentas: {
    fontSize: 15,
    fontFamily: "FredokaOne",
    textAlign: "center",
  },
  containerDetail: {
    alignSelf: "center",
  }
})