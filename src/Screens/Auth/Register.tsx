import React, { useEffect, useState } from 'react'
import { Text, View, TextInput, Button, ScrollView, Alert, Dimensions, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Icon, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient'




export default function Register() {
    const navigation = useNavigation();
    const [colorBordefocusUser, setcolorBordefocusUser] = useState<string>('white')
    const [colorBordefocusPass, setcolorBordefocusPass] = useState<string>('white')

    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            Usuario: '',
            Constraseña: ''
        }
    });
    const onSubmit = (data: any) => {
        console.log(data);
        console.log('errors', errors);
    };

    const onChange = (arg: any) => {
        return {
            value: arg.nativeEvent.text,
        };
    };

    const goForgotPassword = () => {
        //@ts-ignore
        navigation.navigate('RecoveryPassword');
    }


    return (
        <View
        style={{display: 'flex', flexDirection:"column", justifyContent: 'center', alignItems:"center", flex:1}}
        >
            <LinearGradient  opacity={0.9} colors={['#378bc1', '#395ea1', '#4847a2']} style={{ position: "absolute", width: "100%", height: "100%" }} />
            <ScrollView
            // style={{backgroundColor:"black"}}
            >
                <View
                    style={{
                        width: Dimensions.get("window").width * 0.8,
                        display: "flex",
                        flexDirection: "row",
                        alignSelf: "center",
                        marginTop: 170,
                        height: 80,
                        justifyContent:"center",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={styles.textTitle}
                    >Crea una cuenta para guardar tu progreso</Text>
                </View>
                {errors.Usuario && <Text style={styles.textError} >El usuario es requerido.</Text>}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View
                            style={styles.containerInput}
                        >
                            <Icon
                                size={35}
                                name='envelope'
                                type='evilicon'
                                color='white'
                                style={{ marginLeft: 13 }} tvParallaxProperties={undefined} />
                            <TextInput
                                placeholder="Nombre"
                                style={[styles.input, { borderColor: colorBordefocusUser }]}
                                onBlur={onBlur}
                                placeholderTextColor="white"
                                onChangeText={value => onChange(value)}
                                value={value}
                                onFocus={({ nativeEvent: LayoutEvent }) => {
                                    setcolorBordefocusUser('#9933FF');
                                    setcolorBordefocusPass('white')
                                }}
                            >
                            </TextInput>
                        </View>
                    )}
                    name="Usuario"
                    rules={{ required: true }}
                />
                {errors.Usuario && <Text style={styles.textError} >El usuario es requerido.</Text>}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View
                            style={styles.containerInput}
                        >
                            <Icon
                                size={35}
                                name='envelope'
                                type='evilicon'
                                color='white'
                                style={{ marginLeft: 13 }} tvParallaxProperties={undefined} />
                            <TextInput
                                placeholder="Correo electrónico"
                                style={[styles.input, { borderColor: colorBordefocusUser }]}
                                onBlur={onBlur}
                                placeholderTextColor="white"
                                onChangeText={value => onChange(value)}
                                value={value}
                                onFocus={({ nativeEvent: LayoutEvent }) => {
                                    setcolorBordefocusUser('#9933FF');
                                    setcolorBordefocusPass('white')
                                }}
                            >
                            </TextInput>
                        </View>
                    )}
                    name="Usuario"
                    rules={{ required: true }}
                />
                {errors.Usuario && <Text style={styles.textError} >La constraseña es requerida.</Text>}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View
                            style={styles.containerInput}
                        >
                            <Icon
                                size={35}
                                name='lock'
                                type='evilicon'
                                color='white'
                                style={{ marginLeft: 13 }} tvParallaxProperties={undefined} />
                            <TextInput
                                placeholder="Constraseña"
                                style={[styles.input, { borderColor: colorBordefocusUser }]}
                                onBlur={onBlur}
                                placeholderTextColor="white"
                                onChangeText={value => onChange(value)}
                                value={value}
                                onFocus={({ nativeEvent: LayoutEvent }) => {
                                    setcolorBordefocusUser('#9933FF');
                                    setcolorBordefocusPass('white')
                                }}
                            >
                            </TextInput>
                        </View>
                    )}
                    name="Constraseña"
                    rules={{ required: true }}
                />
                <View style={{ marginHorizontal: 10, display: 'flex', flexDirection: "row", alignSelf: "center", alignItems: 'center' }}>
                    <View style={{ width: "42%", backgroundColor: "white", height: 1 }} ></View>
                    <View style={{ height: 10, width: 10, borderRadius: 5, borderColor: "white", borderWidth: 1, marginHorizontal: 10 }}  ></View>
                    <View style={{ width: "42%", backgroundColor: "white", height: 1}} ></View>

                </View>

                <TouchableOpacity
                    style={styles.button}
                    //@ts-ignore
                    onPress={() => navigation.navigate('IntroScreen')}
                >
                    <Text
                        style={styles.text}
                    >Continuar</Text>
                </TouchableOpacity>
                <Text
                    style={{
                        alignSelf: 'center', width: Dimensions.get("window").width * 0.7, fontSize: 14,
                        color: "white", fontFamily: "EvilIcons", textAlign: 'center', marginTop: 25, 
                        height:55
                    }}
                >El uso de NewYou está sugeto a nuestros Términos y a la Política de privacidad </Text>
            </ScrollView>
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
        backgroundColor: 'black',
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#9bafc7",
        marginBottom: 10,
        opacity: 0.5
    },

    button: {
        marginTop: 25,
        color: 'white',
        height: 45,
        // backgroundColor: "#EED4F3",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 100,
        borderColor: "white",
        borderWidth: 1
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
        color: "white",
        fontSize: 25,
        textAlign: "center",
        fontFamily: "Dosis",
        height:85,
        marginBottom:20
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
});


  //login
