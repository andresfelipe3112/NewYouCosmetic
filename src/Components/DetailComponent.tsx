import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, ScrollView, TouchableOpacity, View} from 'react-native';
import {Button, Icon, Image, Text} from 'react-native-elements';

export const DetailComponent = ({productoObj, title, status = ''}: any) => {
  const navigation = useNavigation();

  return (
    <View style={{marginVertical: 5}}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{width: Dimensions.get('window').width}}>
        <View
          style={{
            width: '93%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '100%',
              marginVertical: 0,
              display: 'flex',
              marginBottom: 10,
              paddingHorizontal: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }}>
            <Text
              // style={{fontSize:20, color: "white",fontFamily: "JosefinSans-Italic-VariableFont_wght",}}
              style={{fontSize: 20, color: 'white', fontFamily: 'Dosis'}}>
              {title}{' '}
              {
                <Text
                  style={{fontSize: 15, color: 'yellow', fontWeight: 'bold'}}>
                  {status}
                </Text>
              }
            </Text>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                justifyContent: 'flex-end',
                display: 'flex',
                flexDirection: 'row',
                marginRight: -15,
              }}
              onPress={() =>
                navigation.navigate('AllProducts', {
                  data: productoObj,
                  title: title,
                })
              }>
              <Text style={{color: '#C8D3E5'}}>{`Ver todos`}</Text>
              <Icon
                name="chevron-forward-outline"
                type="ionicon"
                color="white"
                size={19}
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={{width: Dimensions.get('window').width}}
            horizontal={true}>
            {productoObj.map((producto: any, index: any) => {
              return (
                <TouchableOpacity
                  onPress={() =>navigation.navigate('DetailProduct', {dataProduct: producto})}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 135,
                    height: 135,
                    borderRadius: 16,
                    marginRight: 22,
                    marginVertical:6,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 0.5,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                  }}>
                  <Image
                    key={index}
                    style={{
                      width: 130,
                      height: 130,
                      borderRadius: 16,
                      marginRight: 22,
                    }}
                    source={{uri: producto.media[0].url}}></Image>
                  {/* <Text
                                        style={{ color: "#C8D3E5", fontWeight: "bold" }}
                                    >{producto.marca}</Text>
                                    <Text
                                        style={{ color: "#99ABC8", fontSize: 12 }}
                                    >{producto.nombre}</Text> */}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};
