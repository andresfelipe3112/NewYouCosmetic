import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import {Button, Icon, Text} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export default function FormIntroOne() {
  const navigation = useNavigation();
  const dawnLogo = require('../assets/Img/down.png');
  const speed = 700;

  let height = useRef(new Animated.Value(0)).current;
  let heightInput = useRef(new Animated.Value(0)).current;
  let heightInput2 = useRef(new Animated.Value(0)).current;
  let logoRotated = useRef(new Animated.Value(0)).current;
  let logoRotated2 = useRef(new Animated.Value(0)).current;

  const [open, setopen] = useState(false);
  const [open2, setopen2] = useState(false);
  const [valueInput, setvalueInput] = useState('');
  const [valueInput2, setvalueInput2] = useState('');

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

  return (
    <View
      style={{
        display: 'flex',
        backgroundColor: '#0f0524',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Text style={[styles.title, {marginTop: 35}]}>
        Iniciaremos creando tu perfil
      </Text>
      <Text style={styles.title}>Cuéntame algo de ti</Text>
      <Text
        style={[
          styles.title,
          {fontWeight: 'normal', fontSize: 25, marginTop: 70, marginBottom: 10},
        ]}>
        Color de tus ojos
      </Text>
      <View
        style={{
          width: '70%',
          height: 60,
          display: 'flex',
          backgroundColor: '#2b1361',
          justifyContent: 'center',
          borderRadius: 10,
          marginBottom: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: 24,
            width: '80%',
          }}
          editable={false}
          value={valueInput}></TextInput>

        <TouchableOpacity
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
          setvalueInput('Azules');
          active();
        }}>
        <Text style={styles.textInput}>{'Azules'}</Text>
      </AnimatedPressable>
      <AnimatedPressable
        style={[styles.inputOptions, {height: maxHeightInput}]}
        onPress={() => {
          setvalueInput('Verdes');
          active();
        }}>
        <Text style={styles.textInput}>{'Verdes'}</Text>
      </AnimatedPressable>
      <AnimatedPressable
        style={[styles.inputOptions, {height: maxHeightInput}]}
        onPress={() => {
          setvalueInput('Cafes');
          active();
        }}>
        <Text style={styles.textInput}>{'Cafes'}</Text>
      </AnimatedPressable>
      <AnimatedPressable
        style={[styles.inputOptions, {height: maxHeightInput}]}
        onPress={() => {
          setvalueInput('Negros');
          active();
        }}>
        <Text style={styles.textInput}>{'Negros'}</Text>
      </AnimatedPressable>

      <Text
        style={[
          styles.title,
          {fontWeight: 'normal', fontSize: 25, marginTop: 30, marginBottom: 10},
        ]}>
        Color de cabello natural
      </Text>
      <View
        style={{
          width: '70%',
          height: 60,
          display: 'flex',
          backgroundColor: '#2b1361',
          justifyContent: 'center',
          borderRadius: 10,
          marginBottom: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: 24,
            width: '80%',
          }}
          editable={false}
          value={valueInput2}></TextInput>

        <TouchableOpacity
          onPress={() => {
            active2();
          }}>
          <Animated.Image
            style={{transform: [{rotate: spin2}], width: 30, height: 30}}
            source={dawnLogo}></Animated.Image>
        </TouchableOpacity>
      </View>
      <AnimatedPressable
        style={[styles.inputOptions, {height: maxHeightInput2}]}
        onPress={() => {
          setvalueInput2('Rubio');
          active2();
        }}>
        <Text style={styles.textInput}>{'Rubio'}</Text>
      </AnimatedPressable>
      <AnimatedPressable
        style={[styles.inputOptions, {height: maxHeightInput2}]}
        onPress={() => {
          setvalueInput2('Rojo');
          active2();
        }}>
        <Text style={styles.textInput}>{'Rojo'}</Text>
      </AnimatedPressable>
      <AnimatedPressable
        style={[styles.inputOptions, {height: maxHeightInput2}]}
        onPress={() => {
          setvalueInput2('Castaño');
          active2();
        }}>
        <Text style={styles.textInput}>{'Castaño'}</Text>
      </AnimatedPressable>
      <AnimatedPressable
        style={[styles.inputOptions, {height: maxHeightInput2}]}
        onPress={() => {
          setvalueInput2('Negro');
          active2();
        }}>
        <Text style={styles.textInput}>{'Negro'}</Text>
      </AnimatedPressable>

      <AnimatedPressable
        style={[styles.inputOptions, {height: maxHeightInput2}]}
        onPress={() => {
          setvalueInput2('Gris');
          active2();
        }}>
        <Text style={styles.textInput}>{'Gris'}</Text>
      </AnimatedPressable>

      <Button
        title="Siguiente"
        buttonStyle={{backgroundColor: '#2b1361'}}
        type={'clear'}
        containerStyle={{
          width: 200,
          marginHorizontal: '26%',
          borderRadius: 10,
          marginTop: 40,
        }}
        titleStyle={{color: 'white', marginHorizontal: 20, fontSize: 20}}
        //@ts-ignore
        onPress={() => navigation.navigate('GenderOption')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: '#7a23cb',
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
    fontSize: 24,
  },
});
