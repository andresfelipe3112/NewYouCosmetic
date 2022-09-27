import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Pressable,
  TextInput,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import {Button, Icon, Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import newApi from '../Services/LoginApiValues';
import { colorA, colorB } from '../utils/colors';

const ColorCabello = ({route}) => {
  console.log('route', route);

  const navigation = useNavigation();
  const dawnLogo = require('../Assets/Img/downWhite.png');
  const speed = 500;

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

  const genderApi = async (valueInput: string) => {
    try {
      !route?.params?.actualizar && navigation.navigate('StyleOption');
      route?.params?.actualizar === true && navigation.goBack();
      const resp = await newApi.post('/users/hair', {hair: valueInput});
      console.log('/users/hair', resp.data);
      // if (resp) {
      // }
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
    if (route?.params?.data === 'negro') {
      setvalueInput('negro');
      setvalueInput2('Negro');
      active();
    }
    if (route?.params?.data === 'castañoOscuro') {
      setvalueInput('castañoOscuro');
      setvalueInput2('Castaño Oscuro');
      active();
    }
    if (route?.params?.data === 'castañoClaro') {
      setvalueInput('castañoClaro');
      setvalueInput2('Castaño Claro');
      active();
    }
    if (route?.params?.data === 'rubio') {
      setvalueInput('rubio');
      setvalueInput2('Rubio');
      active();
    }
    if (route?.params?.data === 'otro') {
      setvalueInput('otro');
      setvalueInput2('otro');
      active();
    }
  }, [route?.params]);

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
          marginTop: Platform.OS === 'ios'? '58%' :'50%',
        }}>
        <Text style={[styles.textTitle, {marginTop: -40}]}>
          ¿De que color es tu cabello natural?
        </Text>
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
              height: 60,
              display: 'flex',
              backgroundColor: colorA,
              justifyContent: 'center',
              borderRadius: 30,
              marginBottom: 5,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 23,
            }}>
            <TextInput
              style={{
                alignSelf: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: 16,
                width: '75%',
                paddingLeft: 30,
              }}
              editable={false}
              value={valueInput2}></TextInput>

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
              setvalueInput('negro');
              setvalueInput2('Negro');
              active();
            }}>
            <Text style={styles.textInput}>{'Negro'}</Text>
          </AnimatedPressable>
          <AnimatedPressable
            style={[styles.inputOptions, {height: maxHeightInput}]}
            onPress={() => {
              setvalueInput('castañoOscuro');
              setvalueInput2('Castaño Oscuro');
              active();
            }}>
            <Text style={styles.textInput}>{'Castaño Oscuro'}</Text>
          </AnimatedPressable>
          <AnimatedPressable
            style={[styles.inputOptions, {height: maxHeightInput}]}
            onPress={() => {
              setvalueInput('castañoClaro');
              setvalueInput2('Castaño Claro');
              active();
            }}>
            <Text style={styles.textInput}>{'Castaño Claro'}</Text>
          </AnimatedPressable>
          <AnimatedPressable
            style={[styles.inputOptions, {height: maxHeightInput}]}
            onPress={() => {
              setvalueInput('rubio');
              setvalueInput2('Rubio');
              active();
            }}>
            <Text style={styles.textInput}>{'Rubio'}</Text>
          </AnimatedPressable>
          <AnimatedPressable
            style={[styles.inputOptions, {height: maxHeightInput}]}
            onPress={() => {
              setvalueInput('otro');
              setvalueInput2('otro');
              active();
            }}>
            <Text style={styles.textInput}>{'otro'}</Text>
          </AnimatedPressable>
          {/* { valueInput !== '' && !route?.params?.actualizar&& <Button
                        title="Siguiente"
                        type={"clear"}
                        containerStyle={{
                            width: 150,
                            marginHorizontal: "26%",
                            borderRadius: 10,
                            marginTop: 20,
                            borderWidth: 1,
                            borderColor: "gray"
                        }}
                        titleStyle={{ color: 'gray', marginHorizontal: 20, fontSize: 15 }}
                        //@ts-ignore
                        onPress={() =>{
                            genderApi(valueInput)
                        }}
                    />} */}
          <View
            style={{
              position: 'absolute',
              top:
                Dimensions.get('window').height > 720
                  ? Dimensions.get('window').height * 0.69
                  : Dimensions.get('window').height * 0.63,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: Dimensions.get('window').width * 0.9,
              alignSelf: 'center',
            }}>
            {!route?.params?.actualizar && (
              <Icon
                name="arrow-left"
                type="evilicon"
                color="#7C8499"
                size={50}
                onPress={() => navigation.goBack()}
                tvParallaxProperties={undefined}
              />
            )}
            {route?.params?.actualizar && (
              <Icon
                name="arrow-left"
                type="evilicon"
                color="#7C8499"
                size={50}
                onPress={() => navigation.navigate('CurrentResponse')}
                tvParallaxProperties={undefined}
              />
            )}
            {valueInput !== '' && !route?.params?.actualizar && (
              <Icon
                name="arrow-right"
                type="evilicon"
                color="#7C8499"
                size={50}
                //@ts-ignore
                onPress={() => {
                  genderApi(valueInput);
                }}
                tvParallaxProperties={undefined}
              />
            )}
            {route?.params?.actualizar === true && (
              <Button
                title="Actualizar"
                type={'clear'}
                containerStyle={{
                  width: 120,
                  borderRadius: 20,
                  backgroundColor: 'white',
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
                titleStyle={{color: 'gray', fontSize: 14.5}}
                //@ts-ignore
                onPress={() => {
                  genderApi(valueInput);
                }}
              />
            )}
          </View>
        </View>
      </View>
    </>
  );
};

export default ColorCabello;

const styles = StyleSheet.create({
  textTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17.5,
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
    backgroundColor: colorB,
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
    fontSize: 15,
  },
});
