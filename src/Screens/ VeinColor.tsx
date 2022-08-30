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
} from 'react-native';
//@ts-ignore
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native-elements/dist/image/Image';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import DawnLogo from '../Components/DawnLogo';
import newApi from '../Services/LoginApiValues';

const videoA = require('../Assets/video/casual.mp4');
const VideoB = require('../Assets/video/formal.mp4');
const VideoC = require('../Assets/video/cocktail.mp4');
const VideoD = require('../Assets/video/blackTie.mp4');
const VideoE = require('../Assets/video/white.mp4');

const imagenA = require('../Assets/Img/Morado_azul.png');
const ImagenB = require('../Assets/Img/Verde.png');
const imagenC = require('../Assets/Img/Verde_Azul.png');
const imagenD = require('../Assets/Img/tipo4.jpg');
const imagenE = require('../Assets/Img/tipo5.jpg');
const imagenF = require('../Assets/Img/tipo6.jpg');

const VeinColor = ({route}) => {
  const navigation = useNavigation();
  const [statusInfo, setstatusInfo] = useState(true);
  const [colorCheckA, setcolorCheckA] = useState(false);
  const [colorCheckB, setsetcolorCheckB] = useState(false);
  const [colorCheckC, setcolorCheckC] = useState(false);
  const [colorCheckD, setcolorCheckD] = useState(false);
  const [colorCheckE, setcolorCheckE] = useState(false);
  const [colorCheckF, setcolorCheckF] = useState(false);
  const [response, setResponse] = useState('');
  const [loadingLogin, setloadingLogin] = useState<Boolean>(false);

  useEffect(() => {
    console.log('route', route?.params);
  }, [route]);

  const colorHearOptionApi = async () => {
    try {
      setloadingLogin(true);
      route?.params?.actualizar === true && navigation.goBack();
      const resp = await newApi.post('/users/veins', {veins: response});
      console.log('/users/veins', resp.data);
      setloadingLogin(false);
      if (resp) {
        !route?.params?.actualizar && navigation.navigate('Pecas');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const colorA = () => {
    if (colorCheckA) {
      return setcolorCheckA(false);
    }

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

    setcolorCheckA(false);
    setsetcolorCheckB(true);
    setcolorCheckC(false);
    setcolorCheckD(false);
    setcolorCheckE(false);
    setcolorCheckF(false);
  };
  const colorC = () => {
    if (colorCheckC) {
      return setcolorCheckC(false);
    }

    setcolorCheckE(false);
    setcolorCheckA(false);
    setsetcolorCheckB(false);
    setcolorCheckC(true);
    setcolorCheckD(false);
    setcolorCheckF(false);
  };
  const colorD = () => {
    if (colorCheckD) {
      return setcolorCheckD(false);
    }

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
    if (route?.params?.data === 'verdeMorado') {
      colorA();
      setResponse('verdeMorado');
    }
    if (route?.params?.data === 'verde') {
      colorB();
      setResponse('verde');
    }
    if (route?.params?.data === 'verdeAzul') {
      colorC();
      setResponse('verdeAzul');
    }
    if (route?.params?.data === 'tipo4') {
      colorD();
      setResponse('tipo4');
    }
    if (route?.params?.data === 'tipo5') {
      colorE();
      setResponse('tipo5');
    }
    if (route?.params?.data === 'tipo6') {
      colorF();
      setResponse('tipo6');
    }
  }, [route?.params?.data]);

  return (
    <View>
      <LinearGradient
        opacity={1}
        colors={['white', 'white']}
        style={{
          position: 'absolute',
          width: '100%',
          height: Dimensions.get('window').height,
        }}
      />
      <ScrollView>
        <Text style={styles.textTitle}>Selecciona tu color de venas </Text>
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
              {backgroundColor: colorCheckA ? '#F9AD47' : 'white'},
            ]}
            //@ts-ignore
            onPress={() => {
              colorA();
              setResponse('verdeMorado');
            }}>
            <Image
              source={imagenA}
              containerStyle={styles.containerStyle}
              PlaceholderContent={<ActivityIndicator />}
              resizeMode="stretch"
            />
            <Text
              style={[styles.text, {color: colorCheckA ? 'white' : 'gray'}]}>
              Morado - Azul
            </Text>
          </TouchableOpacity>
          {/* <DawnLogo  render={statusInfo} text="Este tipo de piel es de razas albina, caucásica, de cabello rojo o rubio, ojos azules, con pecas, piel rosada o muy pálida. Común en escandinavos y célticos. Suelen quemarse con mucha facilidad durante la exposición al sol, nunca se broncean, por ello, son los que más cuidados requieren y quienes deben usar los bloqueador solares con la máxima protección, mayor de 75 fps." /> */}
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: colorCheckB ? '#F9AD47' : 'white'},
            ]}
            //@ts-ignore
            onPress={() => {
              colorB();
              setResponse('verde');
            }}>
            <Image
              resizeMode="stretch"
              source={ImagenB}
              containerStyle={styles.containerStyle}
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text
              style={[styles.text, {color: colorCheckB ? 'white' : 'gray'}]}>
              Verdes
            </Text>
          </TouchableOpacity>
          {/* <DawnLogo  render={statusInfo} text="Este tipo de piel es de razas caucásicas, pieles blancas, cabello rubio, ojos azules, verdes o avellana. Suelen quemarse también con facilidad, sin embargo, pueden llegar a broncearse lentamente, llegando a adoptar un tono levemente moreno, casi imperceptible en la mayoría de los casos, requieren protección solar mayor de 50 fps." /> */}
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: colorCheckC ? '#F9AD47' : 'white'},
            ]}
            //@ts-ignore
            onPress={() => {
              colorC();
              setResponse('verdeAzul');
            }}>
            <Image
              source={imagenC}
              containerStyle={styles.containerStyle}
              resizeMode="stretch"
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text
              style={[styles.text, {color: colorCheckC ? 'white' : 'gray'}]}>
              Verde - Azul
            </Text>
          </TouchableOpacity>
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
            : 10,
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
        {!route?.params?.actualizar && (
          <Icon
            name="arrow-left"
            type="evilicon"
            color="#7C8499"
            size={50}
            tvParallaxProperties={undefined}
            onPress={() => navigation.goBack()}
          />
        )}
        {route?.params?.actualizar && (
          <Icon
            name="arrow-left"
            type="evilicon"
            color="#7C8499"
            size={50}
            tvParallaxProperties={undefined}
            onPress={() => navigation.navigate('CurrentResponse')}
          />
        )}
        {loadingLogin && (
          <ActivityIndicator style={{marginLeft: 165}} color={'white'} />
        )}
        {response !== '' && !route?.params?.actualizar && (
          <TouchableOpacity
            onPress={() => colorHearOptionApi()}
            style={{
              width: 100,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{color: 'transparent'}}>Siguiente</Text>
            <Icon
              name="arrow-right"
              type="evilicon"
              color="#7C8499"
              size={50}
              tvParallaxProperties={undefined}
              //@ts-ignore
            />
          </TouchableOpacity>
        )}

        {response !== '' && route?.params?.actualizar === true && (
          <TouchableOpacity
            onPress={() => colorHearOptionApi()}
            style={{
              width: 100,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                padding: 10,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 10,
              }}>
              Actualizar
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default VeinColor;

const styles = StyleSheet.create({
  textTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Dosis',
    marginVertical: 20,
    borderRadius: 25,
    opacity: 0.6,
    display: 'flex',
    marginTop: 30,
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    width: 150,
    color: 'white',
    height: 180,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: "white",
    margin: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 8,
    marginBottom: 30,
  },
  containerStyle: {
    width: 110,
    height: 110,
    margin: 15,
    padding: 2,
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 6,
  },
  textInput: {
    color: 'white',
    paddingHorizontal: 25,
  },
  inputOptions: {},
});
