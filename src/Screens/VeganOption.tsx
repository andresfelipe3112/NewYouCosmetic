import React, {Component, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
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

const Seasons = ({route}) => {
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
      !route?.params?.actualizar && navigation.navigate('ColorHearOption');
      const resp = await newApi.post('users/vegan', {vegan: response});
      console.log('genderApi', resp.data);
      // if (resp) {
      // }
    } catch (error) {
      console.log(error);
    }
  };

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
    <View style={{width: '100%', height: Dimensions.get('screen').height, backgroundColor:'white'}}>
     
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
          <Text style={styles.textTitle}>¿Eres Vegana?</Text>
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
            ? 50
            : Dimensions.get('window').height < 780 && Dimensions.get('window').height < 740
            ? 55
            : 60,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: Dimensions.get('window').width * 0.9,
          alignSelf: 'center',
        }}>
        <Icon
          name="arrow-left"
          type="evilicon"
          color="#7C8499"
          size={50}
          tvParallaxProperties={undefined}
          onPress={() => navigation.goBack()}
        />
        { response !== '' && !route?.params?.actualizar && (
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
        { route?.params?.actualizar === true && (
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

export default Seasons;

const styles = StyleSheet.create({
  textTitle: {
    color: '#2F2F2F',
    fontWeight: 'bold',
    fontSize: 23,
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
