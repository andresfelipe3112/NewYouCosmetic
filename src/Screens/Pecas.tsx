import React, {Component, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
//@ts-ignore
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native-elements/dist/image/Image';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import newApi from '../Services/LoginApiValues';

const invierno = require('../Assets/video/invierno.mp4');
const otono = require('../Assets/video/otono.mp4');
const primavera = require('../Assets/video/primavera.mp4');
const verano = require('../Assets/video/verano.mp4');

const Pecas = ({route}) => {
  const navigation = useNavigation();
  const [season, setSeason] = useState(otono);
  const [active, setActive] = useState(false);
  const [colorCheckVerano, setcolorCheckVerano] = useState(false);
  const [colorCheckInvierno, setcolorCheckInvierno] = useState(false);
  const [colorCheckOtono, setcolorCheckOtono] = useState(false);
  const [colorCheckPrimavera, setcolorCheckPrimavera] = useState(false);
  const [response, setResponse] = useState<any>('');

  const veganApi = async (response: Boolean) => {
    try {
      route?.params?.actualizar === true && navigation.goBack();
      !route?.params?.actualizar && navigation.navigate('Bronceado');
      const resp = await newApi.post('/users/freckles', {freckles: response});
      console.log('/users/freckles', resp.data);
      // if (resp) {
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('route', route?.params);
  }, [route?.params]);

  useEffect(() => {
    if (route?.params?.data) {
      colorVerano();
      setResponse(true);
    }
    if (route?.params?.data === false) {
      colorOtono();
      setResponse(false);
    }
  }, ['route', route?.params?.data]);

  const colorVerano = () => {
    if (colorCheckVerano) {
      return setcolorCheckVerano(false);
    }
    setSeason(verano);
    setcolorCheckVerano(true);
    setcolorCheckInvierno(false);
    setcolorCheckOtono(false);
    setcolorCheckPrimavera(false);
  };
  const colorInvierno = () => {
    if (colorCheckInvierno) {
      return setcolorCheckInvierno(false);
    }
    setSeason(invierno);
    setcolorCheckVerano(false);
    setcolorCheckInvierno(true);
    setcolorCheckOtono(false);
    setcolorCheckPrimavera(false);
  };
  const colorOtono = () => {
    if (colorCheckOtono) {
      return setcolorCheckOtono(false);
    }
    setSeason(otono);
    setcolorCheckVerano(false);
    setcolorCheckInvierno(false);
    setcolorCheckOtono(true);
    setcolorCheckPrimavera(false);
  };
  const colorPrimavera = () => {
    if (colorCheckPrimavera) {
      return setcolorCheckPrimavera(false);
    }
    setSeason(primavera);
    setcolorCheckVerano(false);
    setcolorCheckInvierno(false);
    setcolorCheckOtono(false);
    setcolorCheckPrimavera(true);
  };

  return (
    <View style={{width: '100%', height: Dimensions.get('screen').height}}>
      <LinearGradient
        opacity={0.9}
        colors={['white', 'white', 'white']}
        style={{
          position: 'absolute',
          width: '100%',
          height: Dimensions.get('window').height,
        }}
      />
      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            marginTop: -50,
          }}>
          <Text style={styles.textTitle}>¿Tienes pecas?</Text>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: colorCheckVerano ? '#F9AD47' : 'transparent'},
            ]}
            //@ts-ignore
            onPress={() => {
              colorVerano();
              setResponse(true);
            }}>
            <Text
              style={[
                styles.text,
                {color: colorCheckVerano ? 'white' : '#F9AD47'},
              ]}>
              Si
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: colorCheckOtono ? '#F9AD47' : 'transparent'},
            ]}
            //@ts-ignore
            onPress={() => {
              colorOtono();
              setResponse(false);
            }}>
            <Text
              style={[
                styles.text,
                {color: colorCheckOtono ? 'white' : '#F9AD47'},
              ]}>
              No
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
                        style={[styles.button, { backgroundColor: colorCheckPrimavera ? 'white' : "transparent" }]}
                        //@ts-ignore
                        onPress={colorPrimavera}
                    >
                        <Text
                            style={[styles.text, { color: colorCheckPrimavera ? "black" : 'white' }]}
                        >No lo quiero decir</Text>
                    </TouchableOpacity> */}
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom:
            Dimensions.get('window').height > 810
              ? Platform.OS === 'ios'? 15 : 50
              : Dimensions.get('window').height < 780 &&
                Dimensions.get('window').height < 740
              ? Platform.OS === 'ios'? 10 : 50
              : 110,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: Dimensions.get('window').width * 0.9,
          alignSelf: 'center',
        }}>
        {route?.params?.actualizar !== true && (
          <Icon
            name="arrow-left"
            type="evilicon"
            color="#7C8499"
            size={50}
            tvParallaxProperties={undefined}
            onPress={() => navigation.goBack()}
          />
        )}
        {route?.params?.actualizar === true && (
          <Icon
            name="arrow-left"
            type="evilicon"
            color="#7C8499"
            size={50}
            tvParallaxProperties={undefined}
            onPress={() => navigation.navigate('CurrentResponse')}
          />
        )}
        {response !== '' && !route?.params?.actualizar && (
          <TouchableOpacity
            //@ts-ignore
            onPress={() => {
              veganApi(response);
            }}
            style={{
              width: 100,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Siguiente</Text>
            <Icon
              name="arrow-right"
              type="evilicon"
              color="#7C8499"
              size={50}
              tvParallaxProperties={undefined}
            />
          </TouchableOpacity>
        )}
        {response !== '' && route?.params?.actualizar === true && (
          <TouchableOpacity
            //@ts-ignore
            onPress={() => {
              veganApi(response);
            }}
            style={{
              width: 100,
              marginTop: -5,
              marginBottom: 5,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              borderRadius: 15,
              backgroundColor: 'white',
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
            <Text style={{color: 'gray', borderColor: 'gray'}}>Actualizar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Pecas;

const styles = StyleSheet.create({
  textTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Dosis',
    marginVertical: 20,
    borderRadius: 25,
    opacity: 0.6,
  },
  text: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    width: 200,
    color: 'white',
    height: 45,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#F9AD47',
    borderWidth: 1,
    marginVertical: 10,
  },
  containerStyle: {
    width: 120,
    height: 120,
    margin: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
