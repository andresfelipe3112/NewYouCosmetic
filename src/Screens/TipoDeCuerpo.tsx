import React, {Component, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Platform,
} from 'react-native';
//@ts-ignore
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native-elements/dist/image/Image';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import DawnLogo from '../Components/DawnLogo';
import newApi from '../Services/LoginApiValues';
import {CustomToast} from '../utils/customToast';
import { colorA } from '../utils/colors';

const videoA = require('../Assets/video/casual.mp4');
const VideoB = require('../Assets/video/formal.mp4');
const VideoC = require('../Assets/video/cocktail.mp4');
const VideoD = require('../Assets/video/blackTie.mp4');
const VideoE = require('../Assets/video/white.mp4');

const imagenA = require('../Assets/Img/Linfatico.jpg');
const ImagenB = require('../Assets/Img/Sanguineo.jpg');
const imagenC = require('../Assets/Img/Biloso.jpg');
const imagenD = require('../Assets/Img/Nervioso.jpg');
const imagenE = require('../Assets/Img/tipo5.jpg');
const imagenF = require('../Assets/Img/tipo6.jpg');

const TipoDeCuerpo = ({route}) => {
  const navigation = useNavigation();
  const {showToast} = CustomToast();
  const [data, setData] = useState('');
  const [statusInfo, setstatusInfo] = useState(true);
  const [colorCheckA, setcolorCheckA] = useState(false);
  const [colorCheckB, setsetcolorCheckB] = useState(false);
  const [colorCheckC, setcolorCheckC] = useState(false);
  const [colorCheckD, setcolorCheckD] = useState(false);
  const [colorCheckE, setcolorCheckE] = useState(false);
  const [colorCheckF, setcolorCheckF] = useState(false);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    console.log('category', route?.params?.category);
    setCategoryName(route?.params?.category);
  }, [route]);

  const addCategory = async () => {
    try {
      route?.params?.actualizar === true && navigation.goBack();
      const resp = await newApi.post('users/typeBody', {
        typeBody: data,
      });
      if (resp) {
        if (route?.params?.onlySecond === false) {
          navigation.navigate('TipoDeRostro', {
            category: categoryName,
            onlySecond: route?.params?.onlySecond,
          });
        } else {
          const respCategori = !route?.params?.actualizar &&
            (await newApi.get(`/products/newCategory/${categoryName}`));
          if (respCategori) {
            !route?.params?.actualizar &&
              navigation.navigate('Root', {reRender: categoryName});
          }
        }
      }
    } catch (error) {
      console.log(error);
      !route?.params?.actualizar && navigation.navigate('Root');
      showToast('Esta categoría aún no tiene productos ');
    }
  };

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  const ColorA = () => {
    if (colorCheckA) {
      setData('');
      return setcolorCheckA(false);
    }
    setData('linfatico');
    setcolorCheckA(true);
    setsetcolorCheckB(false);
    setcolorCheckC(false);
    setcolorCheckD(false);
    setcolorCheckE(false);
    setcolorCheckF(false);
  };
  const colorB = () => {
    if (colorCheckB) {
      return setsetcolorCheckB(false);
    }
    setData('sanguineo');
    setcolorCheckA(false);
    setsetcolorCheckB(true);
    setcolorCheckC(false);
    setcolorCheckD(false);
    setcolorCheckE(false);
    setcolorCheckF(false);
  };
  const colorC = () => {
    if (colorCheckC) {
      setData('');
      return setcolorCheckC(false);
    }
    setData('bilioso');
    setcolorCheckE(false);
    setcolorCheckA(false);
    setsetcolorCheckB(false);
    setcolorCheckC(true);
    setcolorCheckD(false);
    setcolorCheckF(false);
  };
  const colorD = () => {
    if (colorCheckD) {
      setData('');
      return setcolorCheckD(false);
    }
    setData('nervioso');
    setcolorCheckE(false);
    setcolorCheckA(false);
    setsetcolorCheckB(false);
    setcolorCheckC(false);
    setcolorCheckD(true);
    setcolorCheckF(false);
  };

  const colorE = () => {
    if (colorCheckE) {
      return setcolorCheckE(false);
    }

    setcolorCheckA(false);
    setsetcolorCheckB(false);
    setcolorCheckC(false);
    setcolorCheckD(false);
    setcolorCheckE(true);
    setcolorCheckF(false);
  };
  const colorF = () => {
    if (colorCheckF) {
      return setcolorCheckF(false);
    }
    setcolorCheckA(false);
    setsetcolorCheckB(false);
    setcolorCheckC(false);
    setcolorCheckD(false);
    setcolorCheckE(false);
    setcolorCheckF(true);
  };

  useEffect(() => {
    if (route?.params?.data === 'linfatico') {
      ColorA();
      setData('linfatico');
    }
    if (route?.params?.data === 'sanguineo') {
      colorB();
      setData('sanguineo');
    }
    if (route?.params?.data === 'bilioso') {
      colorC();
      setData('bilioso');
    }
    if (route?.params?.data === 'nervioso') {
      colorD();
      setData('nervioso');
    }
    console.log(route?.params);
  }, [route?.params?.data]);

  return (
    <View>
      <LinearGradient
        opacity={1}
        colors={['white', 'white', 'white']}
        style={{
          position: 'absolute',
          width: '100%',
          height: Dimensions.get('window').height,
        }}
      />
      <ScrollView>
        <Text style={styles.textTitle}>
          Selecciona el tipo de cuerpo que tienes{' '}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.get('window').width,
            marginBottom: 100,
          }}>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: colorCheckA ? colorA : 'white'},
            ]}
            //@ts-ignore
            onPress={() => {
              ColorA();
              setData('linfatico');
            }}>
            <Image
              source={imagenA}
              containerStyle={styles.containerStyle}
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text
              style={[styles.text, {color: colorCheckA ? 'white' : 'black'}]}>
              Linfático
            </Text>
          </TouchableOpacity>
          <DawnLogo
            render={statusInfo}
            text="Este tipo de cuerpo se caracteriza por tener hombros más angostos que las caderas, volumen  concentrado en caderas, muslos, cola y abdomen bajo. Son de cintura pronunciada y busto pequeño. Si hay más peso se concentra en los brazos"
          />
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: colorCheckB ? colorA : 'white'},
            ]}
            //@ts-ignore
            onPress={() => {
              colorB();
              setData('sanguineo');
            }}>
            <Image
              source={ImagenB}
              containerStyle={styles.containerStyle}
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text
              style={[styles.text, {color: colorCheckB ? 'white' : 'black'}]}>
              Sanguíneo
            </Text>
          </TouchableOpacity>
          <DawnLogo
            render={statusInfo}
            text="Volumen o grasa se concentra de forma pareja en el cuerpo, en caso de mujer tiene busto y cola, cuerpo curvilíneo, hombros a la misma altura que caderas, en caso de los hombres son cuerpos corpulentos."
          />
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: colorCheckC ? colorA : 'white'},
            ]}
            //@ts-ignore
            onPress={() => {
              colorC();
              setData('bilioso');
            }}>
            <Image
              source={imagenC}
              containerStyle={styles.containerStyle}
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text
              style={[styles.text, {color: colorCheckC ? 'white' : 'black'}]}>
              Biloso
            </Text>
          </TouchableOpacity>
          <DawnLogo text="Espalda más ancha que las caderas, de mucho busto y poca cintura, el volumen se concentra en la zona superior manteniendo caderas mas estrechas, piernas delgadas y poca cola.." />
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: colorCheckD ? colorA : 'white'},
            ]}
            //@ts-ignore
            onPress={() => {
              colorD();
            }}>
            <Image
              source={imagenD}
              containerStyle={styles.containerStyle}
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text
              style={[styles.text, {color: colorCheckD ? 'white' : 'black'}]}>
              Nervioso
            </Text>
          </TouchableOpacity>
          <DawnLogo text="Hombros más anchos que las caderas, de poco busto, pelvis estrecha, cola media, piernas y brazos delgados y largos, poca hay cintura y la concentración de grasa es en el abdomen." />
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom:
          Dimensions.get('window').height > 810
            ? 10
            : Dimensions.get('window').height < 780 && Dimensions.get('window').height < 740
            ? 10
            : 5,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: Dimensions.get('window').width * 0.9,
          alignSelf: 'center',
        }}>
        <LinearGradient
          opacity={0.7}
          colors={['#19181C', '#19181C']}
          style={{
            position: 'absolute',
            width: Dimensions.get('window').width * 1.5,
            height: 100,
            marginHorizontal: -100,
            marginTop: -18,
          }}
        />
        <Icon
          name="arrow-left"
          type="evilicon"
          color="#7C8499"
          size={45}
          tvParallaxProperties={undefined}
          onPress={() => navigation.goBack()}
        />
        {data !== '' && !route?.params?.actualizar && (
          <TouchableOpacity
            //@ts-ignore
            onPress={addCategory}
            //  onPress={() => navigation.navigate("Root", {
            //     screen:"Para tí",
            //     params:{current:"Camisas"}
            // })}
            style={{
              width: 140,
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'flex-end',
              alignItems: 'center',
              justifyContent: 'flex-end',

            
            }}>
            <Text style={{color: 'transparent'}}>{route?.params?.onlySecond === false ? 'Siguiente' : 'Finalizar' }</Text>
            <Icon
              name= {route?.params?.onlySecond === false ? "arrow-right" : 'check'}
              type="evilicon"
              color= {route?.params?.onlySecond === false ?  "#7C8499" : "white"} 
              size={45}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>
        )}
        {route?.params?.actualizar === true && (
          <TouchableOpacity
            //@ts-ignore
            onPress={addCategory}
            style={{
              width: 100,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                borderRadius: 10,
                borderColor: 'gray',
                borderWidth: 1,
                padding: 10,
              }}>
              Actualizar
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TipoDeCuerpo;

const styles = StyleSheet.create({
  textTitle: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Dosis',
    marginVertical: 20,
    borderRadius: 25,
    opacity: 0.6,
    display: 'flex',
    marginTop: 20,
    marginHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  text: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    marginTop: -20,
  },
  button: {
    width: 230,
    color: 'white',
    height: 270,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: "white",
    // borderWidth: 1,
    margin: 2,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  containerStyle: {
    width: 200,
    height: 200,
    margin: 30,
    borderRadius: 15,
  },
  textInput: {
    color: 'white',
    paddingHorizontal: 25,
  },
  inputOptions: {},
});
