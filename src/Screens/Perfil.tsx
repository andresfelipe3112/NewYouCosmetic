import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {DetailComponent} from '../Components/DetailComponent';
import {Tab} from '../Components/Tab';
import {
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon, Image, Text} from 'react-native-elements';
import {ComponentImag} from '../Components/ComponentImag';
import LinearGradient from 'react-native-linear-gradient';
import newApi from '../Services/LoginApiValues';

export const Perfil = () => {
  const imageA = require('../Assets/Img/ropaA.jpg');
  const imageB = require('../Assets/Img/ropaB.jpg');
  const imageC = require('../Assets/Img/ropaC.jpg');
  const imageD = require('../Assets/Img/ropaD.jpg');
  const imgPlacard = require('../Assets/Img/placard.jpg');
  const productoObj = [imageA, imageB, imageC, imageD];
  const navigation = useNavigation();
  const [user, setUser] = useState({
    username: '',
    email: '',
    _id: '',
  });

  const dataUser = async () => {
    const data = await newApi.get(`/users/profile-user`);
    console.log(data.data.dataUser);
    setUser(data.data.dataUser);
  };

  useEffect(() => {
    dataUser();
  }, []);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        paddingTop:100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <LinearGradient
        opacity={1}
        colors={['white', 'white', 'white']}
        style={{position: 'absolute', width: '100%', height: '100%'}}
      />
      <Text
        style={{
          position: 'absolute',
          top: 15,
          color: 'black',
          fontSize: 18,
        }}>
        Mis Datos
      </Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
            position: 'absolute', top: 10, left: 15
            }}>
        <View
          style={{
            width: 28,
            height: 28,
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
            borderRadius: 30,
            marginTop: 3,
          }}>
          <Icon
            size={18}
            name="arrow-left"
            type="feather"
            tvParallaxProperties={undefined}
            color="#444444"></Icon>
        </View>
      </TouchableOpacity>

      <Text
        style={{
          color: 'gray',
          textAlign: 'left',
          width: '65%',
        }}>
        Nombre:
      </Text>
      <TextInput
        style={{
          width: '70%',
          alignSelf: 'center',
          textAlign: 'center',
          marginTop: 5,
          backgroundColor: 'black',
          borderRadius: 30,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 14,
            alignSelf: 'center',
          }}>
          {user.username}
        </Text>
      </TextInput>

      <Text
        style={{color: 'gray', textAlign: 'left', marginTop: 15, width: '65%'}}>
        Correo:
      </Text>
      <TextInput
        style={{
          width: '70%',
          alignSelf: 'center',
          textAlign: 'center',
          marginTop: 5,
          borderRadius: 30,
          color: 'white',
          fontWeight: 'bold',
          fontSize: 16,
          backgroundColor: 'black',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 14}}>
          {user.email}
        </Text>
      </TextInput>
    </View>
  );
};
