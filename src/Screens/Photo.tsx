import React, { useEffect, useRef, useState } from 'react'
import { Text, View, TextInput, Button, ScrollView, Alert, Dimensions, StyleSheet, TouchableOpacity, ImageBackground, Platform, PermissionsAndroid } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Icon, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from 'react-native-rbs';
import ImagePicker from 'react-native-image-picker';
import { CustomToast } from '../utils/customToast';

interface Action {
    title: string;
    type: 'capture' | 'library';
    options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
  }

  const includeExtra = true;
  
export default function Start() {
    const navigation = useNavigation();
    const [itemFoto, setItemFoto] = useState('');
    const bottomSheetModalRef = useRef<RBSheet>(null);
    const { showToast } = CustomToast()
    const [response, setResponse] = React.useState<any>(null);


    return (
        <View>
            <LinearGradient opacity={0.9} colors={['#378bc1', '#395ea1', '#4847a2']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
            <View
                style={{
                    width: Dimensions.get("window").width * 0.8,
                    height: Dimensions.get("window").height,
                    alignSelf: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                 <Text
                    style={{ color: 'white', fontSize: 30 }}
                >¡Una foto!</Text>
                <Text
                    style={styles.textTitle}
                >("puedes omitir este paso").</Text>
                <View
                     opacity={0.7}
                style={{ width: Dimensions.get("window").width,
                 display: "flex",
                  flexDirection: "row",
                 alignItems: "center",
                 justifyContent: "center",
                 marginTop: 40,
                }}
                >
                <TouchableOpacity 
                style={{
                    width:110, 
                    height:110,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin:4,
                    borderRadius:15,
                    borderWidth: 1,
                    borderColor: "white",
                }}
                 onPress={async() => await ImagePicker.launchCamera({mediaType:"photo"},setResponse)}
                >
                            <View style={styles.buttonModal}>
                                <Icon name="camera"
                                    size={50}
                                    color="white"
                                    type='feather'>
                                </Icon>
                                <Text
                                style={{color: "white"}}
                                >Abrir Camara</Text>
                            </View>
                        </TouchableOpacity>
                        {/* <TouchableOpacity 
                          style={{
                            width:110, 
                            height:110,
                            backgroundColor:"#817988",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin:4,
                            borderRadius:15
                        }}
                        onPress={() => onButtonPress(type, options)}
                        >
                            <View style={styles.buttonModal}>
                                <Icon name="image"
                                    size={50}
                                    color="white"
                                    type='feather'>
                                </Icon>
                                <Text
                                style={{color: "white"}}
                                >Abrir Galleria</Text>
                            </View>
                        </TouchableOpacity> */}
                   </View>
            </View>
            
            <View
                style={{
                    position: "absolute", top: Dimensions.get("window").height * 0.91, display: "flex", flexDirection: "row",
                    justifyContent: "space-between", width: Dimensions.get("window").width * 0.9, alignSelf: "center",
                }}
            >
                <Icon
                    name='arrow-left'
                    type='evilicon'
                    color='#7C8499'
                    size={50}
                    onPress={() => navigation.goBack()}
                    tvParallaxProperties={undefined}
                />
                <Icon
                    name='arrow-right'
                    type='evilicon'
                    color='#7C8499'
                    size={50}
                    //@ts-ignore
                    onPress={() => navigation.navigate("LoadingHome")}
                    tvParallaxProperties={undefined}
                />
            </View>            
        </View>
    );

};

const styles = StyleSheet.create({
    backgroundVideo: {
        height: Dimensions.get("window").height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    },

    containerInput: {
        width: Dimensions.get("window").width * 0.90,
        height: 55,
        backgroundColor: '#2d507a',
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#9bafc7",
        marginBottom: 10
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
        borderColor: "white",
        borderWidth: 1
    },
    buttonModal: {
        alignItems: "center",
        backgroundColor: 'transparent',
        padding: 10
    },
    buttonFacebook: {
        marginTop: 10,
        color: 'white',
        height: 45,
        backgroundColor: '#0000CC',
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: "flex-start",
        flexDirection: "row"
    },
    buttonGoogle: {
        width: Dimensions.get("window").width * 0.90,
        alignSelf: "center",
        marginTop: 10,
        color: 'white',
        height: 45,
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingLeft: 15
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
        marginBottom: 50
    },
    textTitle: {
        marginTop: 10,
        color: "white",
        fontSize: 23,
        textAlign: "center",
        fontFamily: "Dosis"
    },
    buttonConstraseñaOlvido: {
        marginVertical: 10,
        padding: 12,
        width: 300,
        alignSelf: "center",
    },
    textOlvidoContraseña: {
        textDecorationLine: 'underline',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: "Dosis",
        alignSelf: "center",
    },
    text: {
        fontSize: 15,
        color: "white",
        fontWeight: 'bold',
    },
    textFacebook: {
        fontSize: 13,
        color: 'white',
        fontWeight: 'bold',
    },
    textError: {
        fontSize: 18,
        color: 'white',
        fontFamily: "Dosis",
        alignSelf: "center",
        marginBottom: 3
    },
    container: {
        width: Dimensions.get("window").width,
        display: "flex",
        justifyContent: 'center',
        backgroundColor: '#0e101c',
        borderRadius: 40,
    },
    input: {
        width: Dimensions.get("window").width * 0.85,
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
        fontSize: 16
    },
    image: {
        borderRadius: 10,
        width:'25%',
        height: 90,
    },
    cardContainer: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderRadius: 10,
        margin: 5
    },
});


  //login
  interface Action {
    title: string;
    type: 'capture' | 'library';
    options: ImagePicker.CameraOptions | ImagePicker.ImageLibraryOptions;
  }
  
  const actions: Action[] = [
    {
      title: 'Take Image',
      type: 'capture',
      options: {
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
        includeExtra,
      },
    },
    {
      title: 'Select Image',
      type: 'library',
      options: {
        maxHeight: 200,
        maxWidth: 200,
        selectionLimit: 0,
        mediaType: 'photo',
        includeBase64: false,
        includeExtra,
      },
    },
    {
      title: 'Take Video',
      type: 'capture',
      options: {
        saveToPhotos: true,
        mediaType: 'video',
        includeExtra,
      },
    },
    {
      title: 'Select Video',
      type: 'library',
      options: {
        selectionLimit: 0,
        mediaType: 'video',
        includeExtra,
      },
    },
    {
      title: `Select Image or Video\n(mixed)`,
      type: 'library',
      options: {
        selectionLimit: 0,
        mediaType: 'mixed',
        includeExtra,
      },
    },
  ];

  