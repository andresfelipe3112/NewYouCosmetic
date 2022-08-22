import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Image, Text} from 'react-native-elements';

export const DetailComponentVertical = ({productoObj, index}: any) => {
  const navigation = useNavigation();

  const {nombre, nameProduct, media} = productoObj;

  useEffect(() => {
    console.log('productoObj', productoObj);
  }, []);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('DetailProduct', {dataProduct: productoObj})
      }
      style={{
        display: 'flex',
        flexDirection: 'column',
        width:140,
        height:140,
        borderRadius: 16,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 20,
        shadowColor: '#CECECE',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      }}>
      <Image
                    key={index}
                    style={{ width: 135, height: 135, borderRadius: 16 }}
                    source={{uri:media[0].url}}
                    PlaceholderContent={<ActivityIndicator />}
                ></Image>
      <Text
        style={{
          color: 'gray',
          width: 135,
          textAlign: 'center',
          fontSize: 13,
          marginTop:6,
        }}>
        {nameProduct}
      </Text>
      <Text style={{color: '#99ABC8', fontSize: 12}}>{nombre}</Text>
    </TouchableOpacity>
  );
};
