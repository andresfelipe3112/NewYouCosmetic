import React, {useEffect, useState} from 'react';
import {Tab} from '../Components/Tab';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {DetailComponentVertical} from '../Components/DetailComponentVertical';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
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

export const AllProductsPerfil = ({route}: any) => {
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
  ];
  const navigation = useNavigation();

  const [currentIcon, setCurrentIcon] = useState('Home');
  const [stateCurrent, setStateCurrent] = useState(true);
  const [firtsData, setFirtsData] = useState([]);
  const [renderNewCategoria, setrRenderNewCategoria] = useState(true);

  const allFavorites = async () => {
    try {
      const resp = await newApi.get('users/favorites');
      setFirtsData(resp.data.productsFavorites);
      console.log('allFavorites', resp.data);
      if (resp) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  let focus = useIsFocused();
  useEffect(() => {
    allFavorites();
    focus = false;
  }, [focus]);

  return (
    <View
    style={{ backgroundColor:'white', flex: 1}}
    >
      {/* <LinearGradient
        opacity={1}
        colors={['#378bc1', '#395ea1', '#4847a2']}
        style={{
          position: 'absolute',
          width: '100%',
          height: Dimensions.get('window').height,
        }}
      /> */}
      <View
        style={{
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'white',
        }}>
        <Text
        style={{ fontSize:17, color: 'black'}}
        >Armario</Text>
      </View>
      {firtsData.length > 0 ? (
        <FlatList
          contentContainerStyle={{
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            paddingBottom: 60,
            backgroundColor:'white',
          }}
          numColumns={2}
          data={firtsData}
          renderItem={({item}: any) => (
            <>
              <DetailComponentVertical productoObj={item} />
            </>
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 70,
            color: 'white',
          }}>
          No hay elementos en tu armario
        </Text>
      )}
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
    justifyContent: 'space-between',
  },
});
