import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Alert,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Platform,
  PermissionsAndroid,
  Animated,
  Easing,
  Pressable,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Icon, Image} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-rbs';
import ImagePicker from 'react-native-image-picker';
import {CustomToast} from '../utils/customToast';
import {Picker} from '@react-native-picker/picker';
import newApi from '../Services/LoginApiValues';

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
}

const includeExtra = true;

export default function LargoDeCuello({route}) {
  const navigation = useNavigation();
  const [itemFoto, setItemFoto] = useState('');
  const bottomSheetModalRef = useRef<RBSheet>(null);
  const {showToast} = CustomToast();
  const [response, setResponse] = React.useState<any>(null);
  const [dataON, setDataOn] = React.useState<any>(true);
  const [state, setState] = React.useState<any>({
    age: 'corto',
  });

  const dawnLogo = require('../Assets/Img/downWhite.png');
  const speed = 500;

  const updateAge = (age: number) => {
    setState({age: age});
  };

  let height = useRef(new Animated.Value(0)).current;
  let heightInput = useRef(new Animated.Value(0)).current;
  let heightInput2 = useRef(new Animated.Value(0)).current;
  let logoRotated = useRef(new Animated.Value(0)).current;
  let logoRotated2 = useRef(new Animated.Value(0)).current;

  const [open, setopen] = useState(false);
  const [open2, setopen2] = useState(false);
  const [valueInput, setvalueInput] = useState('');
  const [valueInput2, setvalueInput2] = useState('');
  const [dataLogin, setdataLogin] = useState<any>('');

  const [categoryName, setCategoryName] = useState();

  useEffect(() => {
    console.log(dataLogin);
  }, [dataLogin]);

  useEffect(() => {
    console.log(route?.params?.actualizar);
  }, [route?.params?.actualizar]);

  useEffect(() => {
    console.log(route?.params?.category);
    setCategoryName(route?.params?.category);
  }, [route]);

  const neckLength = async () => {
    try {
      route?.params?.actualizar === true && navigation.goBack();
      const resp = await newApi.post('users/neckLength', {
        neckLength: dataLogin,
      });
      console.log('camisasApi', resp.data);
      if (resp) {
        !route?.params?.actualizar &&
          navigation.navigate('TipoDeCuerpo', {category: categoryName,  onlySecond: route?.params?.onlySecond,});
      }
    } catch (error) {
      console.log(error);
    }
  };
  //start animation select
  const dawnPosition = () => {
    Animated.timing(heightInput, {
      toValue: 45,
      duration: speed,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  const dawnPosition2 = () => {
    Animated.timing(heightInput2, {
      toValue: 45,
      duration: speed,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  const upPosition = () => {
    Animated.timing(heightInput, {
      toValue: 0,
      duration: speed,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };
  const upPosition2 = () => {
    Animated.timing(heightInput2, {
      toValue: 0,
      duration: speed,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const maxHeightInput = heightInput.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 100], // <-- value that larger than your content's height
  });

  const maxHeightInput2 = heightInput2.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 100], // <-- value that larger than your content's height
  });
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  //fin animation Select

  const RotationUP = () => {
    Animated.timing(logoRotated, {
      toValue: 1,
      duration: speed,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }).start();
  };
  const RotationUP2 = () => {
    Animated.timing(logoRotated2, {
      toValue: 1,
      duration: speed,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }).start();
  };

  const RotationDown = () => {
    Animated.timing(logoRotated, {
      toValue: 0,
      duration: speed,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }).start();
  };
  const RotationDown2 = () => {
    Animated.timing(logoRotated2, {
      toValue: 0,
      duration: speed,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }).start();
  };

  const spin = logoRotated.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const spin2 = logoRotated2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  function active() {
    open ? setopen(false) : setopen(true);
    !open ? RotationUP() : RotationDown();
    !open ? dawnPosition() : upPosition();
  }

  function active2() {
    open2 ? setopen2(false) : setopen2(true);
    !open2 ? RotationUP2() : RotationDown2();
    !open2 ? dawnPosition2() : upPosition2();
  }

  useEffect(() => {
    console.log(route?.params?.data);
    if (route?.params?.data === 'corto') {
      setvalueInput('corto');
      setdataLogin('corto');
    }
    if (route?.params?.data === 'medio') {
      setvalueInput('medio');
      setdataLogin('medio');
    }
    if (route?.params?.data === 'largo') {
      setvalueInput('largo');
      setdataLogin('largo');
    }
  }, [route?.params]);

  useEffect(() => {
    console.log(route?.params);
  },[route?.params])

  return (
    <>
      <LinearGradient
        opacity={0.9}
        colors={['white', 'white', 'white']}
        style={{
          position: 'absolute',
          width: '100%',
          height: Dimensions.get('window').height,
        }}
      />
      <View
        style={{
          width: Dimensions.get('window').width * 0.8,
          alignSelf: 'center',
          marginTop: '50%',
        }}>
        <Text style={styles.textTitle}>Largo de tu cuello</Text>
        <View
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '70%',
              height: 51,
              display: 'flex',
              backgroundColor: '#F9AD47',
              justifyContent: 'center',
              borderRadius: 40,
              marginBottom: 5,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <TextInput
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: 20,
                width: '80%',
                paddingLeft: 30,
              }}
              editable={false}
              value={dataLogin}></TextInput>
            <TouchableOpacity
              style={{padding: 6}}
              onPress={() => {
                active();
              }}>
              <Animated.Image
                style={{transform: [{rotate: spin}], width: 30, height: 30}}
                source={dawnLogo}></Animated.Image>
            </TouchableOpacity>
          </View>
          <AnimatedPressable
            style={[styles.inputOptions, {height: maxHeightInput}]}
            onPress={() => {
              setdataLogin('corto');
              active();
            }}>
            <Text style={styles.textInput}>{'corto'}</Text>
          </AnimatedPressable>
          <AnimatedPressable
            style={[styles.inputOptions, {height: maxHeightInput}]}
            onPress={() => {
              setdataLogin('medio');
              active();
            }}>
            <Text style={styles.textInput}>{'medio'}</Text>
          </AnimatedPressable>
          <AnimatedPressable
            style={[styles.inputOptions, {height: maxHeightInput}]}
            onPress={() => {
              setdataLogin('largo');
              active();
            }}>
            <Text style={styles.textInput}>{'largo'}</Text>
          </AnimatedPressable>
          {/* {!route?.params?.actualizar && <TouchableOpacity
                    type={"clear"}
                    // style={{borderBottom:20, backgroundColor: '#4847a2' }}
                    style={{
                        width: 150,
                        marginHorizontal: "26%",
                        borderRadius: 20,
                        marginTop: 10,
                        borderWidth: 1,
                        borderColor: "white",
                    }}
                    // titleStyle={{ color: 'white', marginHorizontal: 20, fontSize: 15, borderRadius:20 }}
                    //@ts-ignore
                    onPress={() =>{
                        neckLength()
                    }}
                >
                    <Text
                    style={{ color: 'white', fontSize: 15, borderRadius:20, padding:10, textAlign: "center"}}
                    >Siguiente</Text>
                    </TouchableOpacity>} */}
          {/* {route?.params?.actualizar === true && <TouchableOpacity
                    type={"clear"}
                    // style={{borderBottom:20, backgroundColor: '#4847a2' }}
                    style={{
                        width: 150,
                        marginHorizontal: "26%",
                        borderRadius: 20,
                        marginTop: 10,
                        borderWidth: 1,
                        borderColor: "white",
                    }}
                    // titleStyle={{ color: 'white', marginHorizontal: 20, fontSize: 15, borderRadius:20 }}
                    //@ts-ignore
                    onPress={() =>{
                        neckLength()
                    }}
                >
                    <Text
                    style={{ color: 'white', fontSize: 15, borderRadius:20, padding:10, textAlign: "center"}}
                    >Actualizar</Text>
                    </TouchableOpacity>} */}
          <View
            style={{
              position: 'absolute',
              bottom:
              Dimensions.get('window').height > 810
                ? 70
                : Dimensions.get('window').height < 780 && Dimensions.get('window').height < 740
                ? 70
                : 70,
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
              onPress={() => navigation.goBack()}
              tvParallaxProperties={undefined}
            />
            {route?.params?.actualizar !== true && dataLogin !== '' && (
              <Icon
                name="arrow-right"
                type="evilicon"
                color="#7C8499"
                size={50}
                //@ts-ignore
                onPress={() => neckLength()}
                tvParallaxProperties={undefined}
              />
            )}
            {route?.params?.actualizar === true && (
              <TouchableOpacity
                type={'clear'}
                // style={{borderBottom:20, backgroundColor: '#4847a2' }}
                style={{
                  width: 110,
                  backgroundColor:'white',
                  borderRadius: 20,
                  marginTop:-5, 
                  // borderWidth: 1,
                  borderColor: 'gray',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
                // titleStyle={{ color: 'white', marginHorizontal: 20, fontSize: 15, borderRadius:20 }}
                //@ts-ignore
                onPress={() => {
                  neckLength();
                }}>
                <Text
                  style={{
                    color: 'gray',
                    fontSize: 15,
                    borderRadius: 20,
                    padding: 10,
                    textAlign: 'center',
                  }}>
                  Actualizar
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    color: 'gray',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Dosis',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 2,
    height: 50,
    padding: 10,
    borderRadius: 13,
    marginVertical: 8,
    fontSize: 16,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 23,
    fontFamily: 'FredokaOne',
  },
  inputOptions: {
    backgroundColor: '#F8C67F',
    width: '70%',
    marginVertical: 4,
    borderRadius: 20,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    color: 'white',
    marginHorizontal: 20,
    fontSize: 20,
  },
});
