import React, {useEffect, useState} from 'react';
import {Tab} from '../Components/Tab';
import {useNavigation} from '@react-navigation/native';
import {DetailComponentVertical} from '../Components/DetailComponentVertical';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import {Button, Icon, Image} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {Title} from '../Components/Title';
import newApi from '../Services/LoginApiValues';

export const DetailProduct = ({route}: any) => {
  const [indexPagination, setIndexPagination] = React.useState(0);
  const isCarousel = React.useRef<any>(null);
  const [iconHeart, setIconHeart] = useState(false);
  const [dataShop, setDataShop] = useState(false);

  const {dataProduct} = route?.params;
  // const [dataParams, setDataParams] = useState(dataRoute)

  const getShop = async () => {
    const data = await newApi.get(`shops/get-shopData/${dataProduct?._id}`);
    console.log('dataTienda', data?.data);
    setDataShop(data?.data?.shopData);
  };

  useEffect(() => {
    // setDataParams(route.params)
    console.log('dataProduct', dataProduct);
  }, [route.params]);

  useEffect(() => {
    getShop();
  }, []);

  const otono = require('../Assets/video/otono.mp4');
  const promo = require('../Assets/video/promo.mp4');
  const imageA = require('../Assets/Img/ropaA.jpg');
  const imageB = require('../Assets/Img/ropaB.jpg');
  const imageC = require('../Assets/Img/ropaC.jpg');
  const imageD = require('../Assets/Img/ropaD.jpg');
  const data = [
    {
      nombre: 'Vestido Galo',
      marca: 'Zara',
      image: imageA,
    },
    {
      nombre: 'Chaqueta Polar',
      marca: 'Polo',
      image: imageB,
    },
    {
      nombre: 'Camisa Corta',
      marca: 'Farabella',
      image: imageC,
    },
    {
      nombre: 'Falda Corta',
      marca: 'Sugar Top',
      image: imageD,
    },
    {
      nombre: 'Vestido Galo',
      marca: 'Zara',
      image: imageA,
    },
    {
      nombre: 'Chaqueta Polar',
      marca: 'Polo',
      image: imageB,
    },
    {
      nombre: 'Camisa Corta',
      marca: 'Farabella',
      image: imageC,
    },
    {
      nombre: 'Falda Corta',
      marca: 'Sugar Top',
      image: imageD,
    },
    {
      nombre: 'Falda Corta',
      marca: 'Sugar Top',
      image: imageD,
      tipo: 'VIDEO',
    },
  ];

  const navigation = useNavigation();

  const addFavorite = async () => {
    try {
      const resp = newApi.post(`users/favorites/${dataProduct._id}`);
      console.log('addFavorite', resp);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteFavorite = async () => {
    try {
      const resp = newApi.delete(`users/favorites/${dataProduct._id}`);
      console.log('deleteFavorite', resp);
    } catch (error) {
      console.log(error);
    }
  };

  const onFavorite = async () => {
    try {
      const resp = await newApi.get(`users/check-favorite/${dataProduct._id}`);
      console.log('onFavorite', resp.data.inFavorite);
      resp.data.inFavorite === true ? setIconHeart(true) : setIconHeart(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onFavorite();
  }, []);

  const _renderItem = ({item, index}: any) => {
    if (item.tipo === 'VIDEO') {
      return (
        <View
          style={{
            width: Dimensions.get('window').width * 0.9,
            height: 350,
            borderRadius: 20,
            // backgroundColor:"red"
          }}>
          <VideoPlayer
            source={require('../Assets/video/intro2.mp4')}
            // source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
            // source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
            resizeMode={'contain'}
            style={{borderRadius: 20}}
            controls={false}
            paused={true}
            disableBack
            // disableVolume
            toggleResizeModeOnFullscreen
            bufferConfig={{
              minBufferMs: 15000,
              maxBufferMs: 50000,
              bufferForPlaybackMs: 2500,
              bufferForPlaybackAfterRebufferMs: 5000,
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
      );
    }
    return (
      <Image
        style={{
          width: Dimensions.get('window').width,
          height: 360,
        }}
        // source={{uri: item.url}}
        source={require('../Assets/Img/pruebaCImg.jpeg')}
        resizeMode="stretch"
        containerStyle={{
          backgroundColor: 'black',
          alignSelf: 'center',
          borderRadius: 20,
          // shadowColor: "#000",
          // shadowOffset: {
          //   width: 0,
          //   height: 3,
          // },
          // shadowOpacity: 0.27,
          // shadowRadius: 4.65,
          // elevation: 6,
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
    );
  };

  return (
    <View style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
       <View
          style={{
            width: Dimensions.get('window').width * 0.9,
            flexWrap: 'wrap',
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width:30,
              borderRadius: 50,
              marginLeft: 45,
              marginTop: 50,
              backgroundColor: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <Icon
              containerStyle={{borderRadius: 50, width: 40}}
              name="arrow-left"
              type="evilicon"
              color="gray"
              size={40}
              tvParallaxProperties={undefined}
              //@ts-ignore
            />
          </TouchableOpacity>
        </View>
      <ScrollView>
      {
        dataProduct.media.map((item:any,index:any)=>{
          return(
            <View
            style={{
              alignSelf: 'center',
              height: Dimensions.get('window').height * 0.85,
              backgroundColor: 'white',
              marginBottom: 30,
            }}>
            <Image
              containerStyle={{
                padding: 15,
                width: Dimensions.get('window').width,
              }}
              style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height * 0.85,
                // borderBottomLeftRadius: 60,
                // borderBottomRightRadius: 60,
                // position: 'absolute',
              }}
                  source={{uri: item.url}}
              //  source={require('../Assets/Img/pruebaImg.jpg')}
              //  source={require('../Assets/Img/pruebaCImg.jpeg')}
              // resizeMode="stretch"
              // PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          )
        })
      }
      </ScrollView>
      <LinearGradient
        opacity={1}
        colors={[
          'transparent',
          // '#FFE5CC',
          'white',
        ]}
        style={{
          position: 'absolute',
          width: '100%',
          // height: Dimensions.get('window').height * 0.8,
          height: 140,
          bottom: 190,
          // borderBottomLeftRadius: 60,
          // borderBottomRightRadius: 60,
          // shadowColor: '#000',
          // shadowOffset: {
          //   width:0,
          //   height: 0,
          // },
          // shadowOpacity: 0.25,
          // shadowRadius: 3.84,
          // elevation: 5,
        }}
      />
      <Button
        title="Buscar tiendas"
        onPress={() =>
          navigation.navigate('DetailProductStore', {data: dataShop})
        }
        containerStyle={{
          borderRadius: 30,
          width: 200,
          alignSelf: 'center',
          margin: 30,
          backgroundColor: '#FFB266',
          padding: 5,
          position: 'absolute',
          bottom: 0,
        }}
        titleStyle={{color: 'white'}}
        buttonStyle={{backgroundColor: '#FFB266'}}
      />
      <Button
        onPress={() => {
          setIconHeart(!iconHeart);
          iconHeart ? deleteFavorite() : addFavorite();
        }}
        title={''}
        containerStyle={{
          borderRadius: 20,
          borderColor: !iconHeart ? '#1A0349' : 'white',
          position: 'absolute',
          right: 0,
          marginTop: 8,
          marginRight: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 4,
        }}
        buttonStyle={{
          backgroundColor: !iconHeart ? 'white' : '#FF9933',
          borderRadius: 20,
          borderColor: !iconHeart ? '#1A0349' : 'white',
          width: 60,
          height: 35,
        }}
        icon={
          <Icon
            name="checkroom"
            size={24}
            color={!iconHeart ? '#1A0349' : 'white'}
            type="material"
            style={{marginTop: -3}}
            tvParallaxProperties={false}
          />
        }></Button>
      <View
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          top: Dimensions.get('window').height * 0.7,
          paddingBottom: 36,
        }}>
        <Text
          style={{
            width: Dimensions.get('window').width,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          {dataProduct?.nameProduct}
        </Text>
        <Text
          style={{
            width: Dimensions.get('window').width,
            paddingHorizontal: 25,
            textAlign: 'center',
            fontSize: 15,
          }}>
          Prenda exterior de vestir , con mangas y abierta por delante , que
          llega por debajo de la cadera .
        </Text>
      </View>
      <Icon
        containerStyle={{
          width: 30,
          position: 'absolute',
          top: 10,
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 5,
          left: 10,
        }}
        size={18}
        name="arrow-left"
        type="feather"
        tvParallaxProperties={undefined}
        color="#444444"
        onPress={() => navigation.goBack()}></Icon>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    borderColor: 'white',
    backgroundColor: '#1F366C',
    borderWidth: 0.8,
    borderRadius: 10,
    margin: 5,
  },
  textCategory: {
    padding: 5,
    paddingHorizontal: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  textDetail: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Dosis',
  },
  textDetailVentas: {
    fontSize: 15,
    fontFamily: 'FredokaOne',
    textAlign: 'center',
  },
  containerDetail: {
    alignSelf: 'center',
  },
});
