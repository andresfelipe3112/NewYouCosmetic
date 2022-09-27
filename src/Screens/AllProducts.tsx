import React, {useEffect, useState} from 'react';
import {Tab} from '../Components/Tab';
import {useNavigation} from '@react-navigation/native';
import {DetailComponentVertical} from '../Components/DetailComponentVertical';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {Title} from '../Components/Title';
import newApi from '../Services/LoginApiValues';
import { colorA } from '../utils/colors';

export const AllProducts = ({route}: any) => {
  const data = route?.params;
  const [dataParams, setDataParams] = useState(data);
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    setDataParams(route.params);
    console.log('router', data.title);
  }, [route.params]);

  useEffect(() => {
    route?.params?.title === 'CAMISAS' && setCategory('b15'); // camisa
    route?.params?.title === 'PANTALONES' && setCategory('b17'); // pantalon
    route?.params?.title === 'COLLARES' && setCategory('c11'); // collares
    route?.params?.title === 'BOTAS' && setCategory('b24'); // botas
    route?.params?.title === 'ZAPATOS' && setCategory('b21'); // zapatos
    route?.params?.title === 'BLUSAS' && setCategory('b11'); // Blusas
    route?.params?.title === 'POLERAS' && setCategory('b13'); // Poleras
    route?.params?.title === 'CARTERAS' && setCategory('a11'); // aros
    route?.params?.title === 'PULSERAS' && setCategory('a14'); // aros
    route?.params?.title === 'RELOGES' && setCategory('a12'); // aros
    route?.params?.title === 'PAÑUELOS' && setCategory('a13'); // aros
  }, []);

  const deleteCategory = async () => {
    navigation.navigate('Root', {reRender: category});
    const data = await newApi.delete(`products/deleteCategory/${category}`);
  };

  const otono = require('../Assets/video/otono.mp4');
  const promo = require('../Assets/video/promo.mp4');
  const imageA = require('../Assets/Img/ropaA.jpg');
  const imageB = require('../Assets/Img/ropaB.jpg');
  const imageC = require('../Assets/Img/ropaC.jpg');
  const imageD = require('../Assets/Img/ropaD.jpg');

  return (
    <>
      <LinearGradient
        opacity={1}
        colors={['white', 'white', 'white']}
        style={{
          position: 'absolute',
          width: '100%',
          height: Dimensions.get('window').height,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: Dimensions.get('window').width,
          alignSelf: 'center',
          height: 65,
          marginTop: Platform.OS === 'ios' ? 40 : 5,
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
        <TouchableOpacity
          onPress={() => deleteCategory()}
          style={{
            width: 190,
            // display: "flex",
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: 3,
            backgroundColor: colorA,
            borderRadius: 20,
            margin: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
          }}>
          <Text style={{color: 'white'}}>Eliminar Categoria</Text>
          <Icon
            name="minus"
            type="evilicon"
            color="white"
            size={40}
            tvParallaxProperties={undefined}
            //@ts-ignore
            onPress={() => navigation.navigate('Photo')}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        ListHeaderComponent={() => (
          <>
            <Video
              // source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
              source={promo}
              resizeMode={'stretch'}
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
                bufferForPlaybackAfterRebufferMs: 5000,
              }}
              style={{
                width: Dimensions.get('window').width * 0.95,
                height: 200,
                alignSelf: 'center',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,
                elevation: 12,
              }}
            />
            <View
              style={{
                width: Dimensions.get('window').width * 0.95,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                margin: 4,
              }}>
              <Text
                style={{
                  backgroundColor: colorA,
                  color:'white',
                  fontWeight: 'bold',
                  borderRadius: 5,
                  padding: 2,
                  margin: 2,
                }}>
                Patrocinado
              </Text>
              <Text style={{color: 'gray', fontWeight: 'bold', margin: 2}}>
                {' '}
                ADIDAS
              </Text>
              <Text style={{color: 'gray', margin: 2}}>Polera Adidas</Text>
            </View>
            <Title text={dataParams.title} />
            <View
              style={{
                marginHorizontal: 10,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}></View>
          </>
        )}
        contentContainerStyle={{
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'center',

        }}
        style={{marginBottom:40}}
        numColumns={2}
        data={dataParams.data}
        renderItem={({item}: any) => (
          <>
            <DetailComponentVertical productoObj={item} />
          </>
        )}
        keyExtractor={item => item.id}
      />
    </>
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
});

