import React, {useEffect, useRef, useState} from 'react';
import {Tab} from '../Components/Tab';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {DetailComponent} from '../Components/DetailComponent';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {Title} from '../Components/Title';
import {FloatingAction} from 'react-native-floating-action';
import newApi from '../Services/LoginApiValues';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RBSheet from 'react-native-rbs';
import { colorA } from '../utils/colors';

const otono = require('../Assets/video/otono.mp4');
//
const promo = require('../Assets/video/promo.mp4');
const promo2 = require('../Assets/video/danni.mp4');
const imageA = require('../Assets/Img/ropaA.jpg');
const imageB = require('../Assets/Img/ropaB.jpg');
const imageC = require('../Assets/Img/ropaC.jpg');
const imageD = require('../Assets/Img/ropaD.jpg');

//Camisas

export const Home = ({route}: any) => {
  const refresh = () => {
    return navigation.navigate('Root', {reRender: 'render'});
  };

  const actions = [
    {
      text: 'Agregar Recomendación',
      icon: require('../Assets/Img/add.png'),
      name: 'Agregar Recomendación',
      position: 1,
      color: colorA,
    },
    {
      text: 'Refrescar categorías',
      icon: require('../Assets/Img/refresh2.png'),
      name: 'Refrescar categorías',
      position: 2,
      color: colorA,
    },
    // {
    //   text: 'Cerrar sesión',
    //   icon: require('../Assets/Img/import.png'),
    //   name: 'Cerrar sesión',
    //   position: 3,
    //   color: '#F9AD47',
    // },
  ];

  const navigation = useNavigation();
  const [dataProduct, setDataProduct] = useState<any>([]);
  const [dataProductFilter, setDataFilter] = useState<any>([]);
  const [filterOn, setFilterON] = useState<any>(false);
  const [category, setCategory] = useState<any>([]);
  const refRBSheet = useRef<any>(null);

  useEffect(() => {
    console.log(route?.params?.firtsData?.productos);
    let array = [];
    let category: any = [];
    for (const key in route?.params?.firtsData?.productos) {
      if (
        Object.prototype.hasOwnProperty.call(
          route?.params?.firtsData?.productos,
          key,
        )
      ) {
        const element = route?.params?.firtsData?.productos[key];
        array.push(element);
        console.log('element', key);
        category.push(key);
      }
    }
    setCategory(category);
    setDataProduct(array);
  }, [route?.params?.firtsData]);

  const changueRecomendations = (type: string) => {
    if (type === 'VER TODAS') {
      return setFilterON(false);
    }
    let newArray = dataProduct.filter(x => x[0].displayName === type);
    setFilterON(true);
    setDataFilter(newArray);
  };

  useEffect(() => {
    console.log('category', category);
  }, [category]);

  const LoginOutThunk = async () => {
    try {
      let keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      console.log(`Keys: ${keys}`); // Just to see what's going on
    } catch (error) {
      console.log('LoginOutThunk', error);
    }
  };

  const [indexShader, setindexShader] = useState<any>(0);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{width: '100%', marginBottom: Platform.OS === 'ios' ? 80 : 50, marginTop:Platform.OS === 'ios' ? 25 : 0}}>
        <Video
          // source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
          source={promo2}
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
            marginTop: 20,
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
              fontWeight: 'bold',
              borderRadius: 5,
              padding: 2,
              margin: 2,
              color:'white'
            }}>
            Patrocinado
          </Text>
          <Text style={{color: '#2F2F2F', fontWeight: 'bold', margin: 2}}>
            {' '}
            danimateluna.cl
          </Text>
          {/* <Text
            style={{ color: "white", margin: 2 }}
          >Polera Adidas</Text> */}
        </View>
        <Title text={'Mis recomendaciones para tí'} />
        <View
          style={{
            marginHorizontal: 10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginTop: -12,
          }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[...['VER TODAS'], ...category].map((categoria, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    changueRecomendations(categoria);
                    setindexShader(index);
                  }}
                  style={[
                    styles.category,
                    {
                      backgroundColor:
                        indexShader === index ? '#2F2F2F' : '#B7B3B8',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.textCategory,
                      {color: indexShader === index ? 'white' : 'white'},
                    ]}>
                    {categoria}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {!filterOn &&
          dataProduct?.map((item: any, index: any) => {
            return (
              <DetailComponent
                title={item[0].displayName}
                productoObj={item}
                status={item.status}
              />
            );
          })}
        {filterOn &&
          dataProductFilter?.map((item: any, index: any) => {
            return (
              <DetailComponent
                title={item[0].displayName}
                productoObj={item}
                status={item.status}
              />
            );
          })}
      </ScrollView>
      <FloatingAction
        floatingIcon={require('../Assets/Img/menu.png')}
        iconHeight={40}
        showBackground={true}
        actions={actions}
        buttonSize={55}
        color={colorA}
        distanceToEdge={{vertical:Platform.OS === 'ios' ? 88 : 70, horizontal: 15}}
        onPressItem={name => {
          if (name === 'Agregar Recomendación') {
            navigation.navigate('CategoriesPush');
          } else if (name === 'Refrescar categorías') {
            refresh();
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    borderRadius: 15,
    margin: 5,
  },
  textCategory: {
    padding: 6,
    fontSize: 11,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
});
