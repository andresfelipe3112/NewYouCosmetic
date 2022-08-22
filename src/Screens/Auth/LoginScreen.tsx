import React, {useEffect, useState} from 'react';
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
  ActivityIndicator,
  Image,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Icon, Input, Overlay} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import WellCome from '../../Components/WellCome';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import newApi from '../../Services/LoginApiValues';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [colorBordefocusUser, setcolorBordefocusUser] =
    useState<string>('white');
  const [colorBordefocusPass, setcolorBordefocusPass] =
    useState<string>('white');
  const [loadingLogin, setloadingLogin] = useState<Boolean>(false);
  const [dataLogin, setdataLogin] = useState<any>('');
  const [showPassword, setShowPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [modal, setModal] = useState(false);
  const [colorBordefocusCorreo, setcolorBordefocusCorreo] =
    useState<string>('white');
  const [colorBordefocusCodigo, setcolorBordefocusCodigo] =
    useState<string>('gray');
  const [codigo, setCodigo] = useState<string>('');

  useEffect(() => {
    GoogleSignin.configure({
      //  androidClientId: "809801253751-q5bod5pd5l8oa5t45jibje1nrnmd8fq4.apps.googleusercontent.com",//debug
      androidClientId:
        '434136853035-etvgruinh9jlr444v560j51st7n1ho5a.apps.googleusercontent.com',
    });
  }, []);

  const signGoogle = async () => {
    try {
      setloadingLogin(true);
      await GoogleSignin.hasPlayServices();
      const {user}: any = await GoogleSignin.signIn();
      console.log('userInfo', user);
      const resp: any = await newApi.post('auth/googleAuth-user', {
        name: user.name,
        id: user.id,
        email: user.email,
      });
      console.log('auth/googleAuth-user', resp);
      if (resp) {
        await AsyncStorage.setItem('tokenNew', resp.data.accessToken);
        const respAnswers = await newApi.get('users/check-first-answers');
        if (respAnswers?.data?.isComplete === true) {
          setloadingLogin(false);
          console.log('respAnswers', respAnswers, 'pasa');
          navigation.navigate('Root',{render:"initialRender"});
        } else {
          setloadingLogin(false);
          navigation.navigate('IntroScreen');
        }
      }
      // setTimeout(() => {
      //     Alert.alert("token recibido datos correctos desde firebase",userInfo.idToken )
      // }, 1000);
      // signInGoogle(userInfo);
    } catch (error: any) {
      console.log('errores', error);

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Login cancelado');
        setloadingLogin(false);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        setloadingLogin(false);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        setloadingLogin(false);
        console.log('No cuentas con los servicios de Google');
      } else {
        // some other error happened
        setloadingLogin(false);
        console.log('errores else', error);
        // Alert.alert('error')
      }
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setloadingLogin(true);
      const resp = await newApi.post('auth/login-user', {
        email: email,
        password: password,
      });
      await AsyncStorage.setItem('tokenNew', resp.data.accessToken);
      console.log('resp.data)', resp.data.accessToken);
      if (resp) {
        const respAnswers = await newApi.get('users/check-first-answers');
        if (respAnswers?.data?.isComplete === true) {
          setloadingLogin(false);
          console.log('respAnswers', respAnswers, 'pasa');
          navigation.navigate('Root',{render:"initialRender"});
        } else {
          setloadingLogin(false);
          navigation.navigate('IntroScreen');
        }
      }
    } catch (error) {
      setloadingLogin(false);
      console.log('error api', error?.response?.data);
      setErrorMessage(
        error?.response?.data?.realErrorMsg ||
          error?.response?.data?.dataError?.message,
      );
    }
  };
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      Gmail: '',
      Contraseña: '',
    },
  });
  const onSubmit = (data: any) => {
    login(data.Gmail, data.Contraseña);
    console.log(data);
    console.log('errors', errors);
  };

  const goForgotPassword = () => {
    //@ts-ignore
    navigation.navigate('RecoveryPassword');
  };

  useEffect(() => {
    dataLogin && navigation.navigate('IntroScreen');
  }, []);

  return (
    <>
      {/* <Video
        // source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
        source={require('../../Assets/video/intro2.mp4')}
        resizeMode={'stretch'}
        opacity={0.5}
        controls={false}
        paused={false}
        mute={true}
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
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      /> */}
      <LinearGradient
        opacity={0.7}
        colors={['white', 'white', 'white']}
        style={{
          position: 'absolute',
          width: '100%',
          height: Dimensions.get('window').height,
        }}
      />
      <ScrollView
      // style={{backgroundColor:"black"}}
      >
        <View
          style={{
            width: Dimensions.get('window').width * 0.8,
            alignSelf: 'center',
            marginBottom: 20,
            marginTop: 110,
          }}>
          <Text style={styles.textTitle}>
            Inicia sesión en tu cuenta de NewYou
          </Text>
        </View>
        {errors.Gmail && (
          <Text style={styles.textError}>El usuario es requerido.</Text>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.containerInput}>
              <Icon
                size={27}
                name="envelope"
                type="evilicon"
                color="white"
                style={{marginLeft: 13, marginRight: 20}}
                tvParallaxProperties={undefined}
              />
              <TextInput
                placeholder="Correo electrónico"
                style={[styles.input, {borderColor: colorBordefocusUser}]}
                onBlur={onBlur}
                placeholderTextColor="white"
                onChangeText={onChange}
                value={value}
                onFocus={({nativeEvent: LayoutEvent}) => {
                  setcolorBordefocusUser('#9933FF');
                  setcolorBordefocusPass('white');
                }}
              />
            </View>
          )}
          name="Gmail"
          rules={{required: true}}
        />
        {errors.Contraseña && (
          <Text style={styles.textError}>La constraseña es requerida.</Text>
        )}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.containerInput}>
              {/* <Icon
                size={35}
                name="lock"
                type="evilicon"
                color="#9bafc7"
                style={{marginLeft: 13}}
                tvParallaxProperties={undefined}
              /> */}
              {showPassword ? (
                <TouchableOpacity
                  style={{padding: 6}}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}>
                  <Image
                    style={{margin: 15}}
                    source={require('../../Assets/Img/unShowPassword.png')}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{padding: 6}}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}>
                  <Image
                    style={{margin: 15}}
                    source={require('../../Assets/Img/showPassword.png')}
                  />
                </TouchableOpacity>
              )}
              <TextInput
                secureTextEntry={showPassword}
                placeholder="Contraseña"
                style={[styles.input, {borderColor: colorBordefocusUser}]}
                onBlur={onBlur}
                placeholderTextColor="white"
                onChangeText={onChange}
                value={value}
                onFocus={({nativeEvent: LayoutEvent}) => {
                  setcolorBordefocusUser('#9933FF');
                  setcolorBordefocusPass('white');
                }}></TextInput>
            </View>
          )}
          name="Contraseña"
          rules={{required: true}}
        />
        <Text style={{alignSelf: 'center', color: 'gray'}}>
          {errorMessage}
        </Text>
        <TouchableOpacity
          style={styles.buttonConstraseñaOlvido}
          onPress={goForgotPassword}>
          <Text style={styles.textOlvidoContraseña}>
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginHorizontal: 10,
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{width: '42%', backgroundColor: 'gray', height: 1}}></View>
          {loadingLogin ? <ActivityIndicator color={'gray'} /> :
          
          <View
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            borderColor: 'gray',
            borderWidth: 1,
            marginHorizontal: 10,
          }}></View>
        }
          <View
            style={{width: '42%', backgroundColor: 'gray', height: 1}}></View>
        </View>
        <TouchableOpacity
          style={styles.button}
          //@ts-ignore
          onPress={handleSubmit(onSubmit)}>
          <Text style={styles.text}>Iniciar Sesión</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.buttonGoogle}
          onPress={handleSubmit(onSubmit)}>
          <Icon
            size={40}
            name="social-facebook"
            type="foundation"
            color="#3559ae"
            style={{marginHorizontal: 13}}
            tvParallaxProperties={undefined}
          />
          <Text style={styles.textGoogle}>Iniciar sesión con Facebook</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.buttonGoogle} onPress={signGoogle}>
          <Icon
            size={26}
            name="google"
            type="fontisto"
            color="#ad7704"
            style={{marginHorizontal: 13}}
            tvParallaxProperties={undefined}
          />
          <Text style={styles.textGoogle}>Iniciar sesión con Google</Text>
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            width: Dimensions.get('window').width * 0.7,
            fontSize: 14,
            color: 'gray',
            fontFamily: 'EvilIcons',
            textAlign: 'center',
            marginTop: 25,
            height: 55,
          }}>
          El uso de NewYou está sugeto a nuestros Términos y a la Política de
          privacidad{' '}
        </Text>
        <TouchableOpacity
          style={styles.buttonConstraseñaOlvido}
          //@ts-ignore
          onPress={() => navigation.navigate('Register')}>
          <Text
            style={{
              ...styles.textOlvidoContraseña,
              textDecorationLine: 'none',
              fontSize: 14,
              marginTop: -5,
            }}>
            ¿Necesitas una cuenta?{' '}
            <Text style={{textDecorationLine: 'underline'}}>Registrate</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },

  containerInput: {
    width: Dimensions.get('window').width * 0.9,
    height: 55,
    marginVertical:5,
    backgroundColor: '#FFA31E',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 40,
    borderColor: '#9bafc7',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  button: {
    marginTop: 25,
    color: 'white',
    height: 45,
    // backgroundColor: "#4245a0",
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 18,
    backgroundColor: '#F9AD47',
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonFacebook: {
    marginTop: 10,
    color: 'white',
    height: 45,
    backgroundColor: '#0000CC',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#1B1A18',
  },
  buttonGoogle: {
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    marginTop: 10,
    color: 'white',
    height: 45,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textGoogle: {
    fontSize: 15,
    color: '#061b36',
    fontWeight: 'bold',
    fontFamily: 'MontserratIItalic',
  },
  button2: {
    marginTop: 10,
    color: 'white',
    height: 45,
    borderRadius: 13,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginBottom: 50,
  },
  textTitle: {
    color: 'gray',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Dosis',
    fontWeight:'bold',
  },
  buttonConstraseñaOlvido: {
    marginVertical: 10,
    padding: 12,
    width: 300,
    alignSelf: 'center',
  },
  textOlvidoContraseña: {
    textDecorationLine: 'underline',
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Dosis',
    alignSelf: 'center',
  },
  text: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  textFacebook: {
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
  },
  textError: {
    fontSize: 18,
    color: 'gray',
    fontFamily: 'Dosis',
    alignSelf: 'center',
    marginBottom: 3,
  },
  container: {
    width: Dimensions.get('window').width,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#0e101c',
    borderRadius: 40,
  },
  input: {
    width: Dimensions.get('window').width * 0.85,
    height: 50,
    padding: 10,
    fontSize: 18,
    color: 'white',
  },
  input2: {
    backgroundColor: 'white',
    borderWidth: 2,
    height: 50,
    padding: 10,
    borderRadius: 13,
    marginVertical: 8,
    fontSize: 16,
  },
});

//login
