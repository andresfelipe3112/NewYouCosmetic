import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Modal, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native'
import { Input, Overlay, Icon } from 'react-native-elements';
import { Controller, useForm } from 'react-hook-form';

import { ArrowBackButton } from '../../Components/ArrowBackButton';

export const RecoveryPasswordScreen = () => {

    const navigation = useNavigation();

    const [colorBordefocusCorreo, setcolorBordefocusCorreo] = useState<string>('white');
    const [colorBordefocusCodigo, setcolorBordefocusCodigo] = useState<string>('gray');

    const { setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            correo: '',
            codigo: '',
        }
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const onChange = (arg: any) => {
        return {
            value: arg.nativeEvent.text,
        };
    };

    // Funciones modal código

    const [modal, setModal] = useState(false);

    const [codigo, setCodigo] = useState<string>('');

    const onSubmitCode = () => {
        console.log('change', codigo);
        setModal(false);
        //@ts-ignore
        navigation.navigate('ChangePassword')
    };

    return (
        <>
            <ArrowBackButton route={navigation}></ArrowBackButton>
            <ScrollView>
                <View style={styles.container}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                placeholder="Correo"
                                textContentType="emailAddress"
                                textAlign="center"
                                containerStyle={[styles.input1, { borderColor: colorBordefocusCorreo }]}
                                inputContainerStyle={{ borderBottomWidth: 0, justifyContent: 'center' }}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                onFocus={() => setcolorBordefocusCorreo('#9933FF')}
                                onBlur={() => setcolorBordefocusCorreo('white')}
                                autoCompleteType={undefined}
                                rightIcon={<Icon
                                    type="material-community"
                                    name="email" tvParallaxProperties={undefined}
                                ></Icon>}
                            ></Input>
                        )}
                        name="correo"
                        rules={{ required: true }}
                    />
                    {errors.correo && <Text style={styles.text2} >El correo es requerido.</Text>}
                    <TouchableOpacity
                        style={styles.containerTextCodigo}
                        onPress={() => setModal(true)}
                    >
                        <Text
                            style={styles.text2}
                        >Ya tengo un código</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit(onSubmit)}
                    >
                        <Text style={styles.text}>
                            Recuperar contraseña
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <ScrollView>
                <Overlay
                    isVisible={modal}
                    overlayStyle={styles.overlayModalCode}>
                    <View style={styles.viewCodeContainer}>
                        <Text style={{ color: 'black', fontSize: 15, paddingBottom: 10 }}>Ingrese el código recibido:</Text>
                        <Input
                            placeholder="Codigo"
                            textContentType="creditCardNumber"
                            textAlign="center"
                            containerStyle={[styles.input1, { borderColor: colorBordefocusCodigo, borderWidth: 1 }]}
                            inputContainerStyle={{ borderBottomWidth: 0, justifyContent: 'center' }}
                            onChangeText={(value) => setCodigo(value)}
                            value={codigo}
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            onFocus={() => setcolorBordefocusCodigo('#9933FF')}
                            onBlur={() => setcolorBordefocusCodigo('gray')}
                            autoCompleteType={undefined}
                        ></Input>
                        {/* <Text style={[styles.text2, { color: 'gray', paddingBottom: 10 }]} >El código es requerido.</Text> */}
                    </View>
                    <View style={styles.viewCodeFooter}>
                        <TouchableOpacity
                            style={styles.buttonCancel}
                            onPress={() => setModal(false)}
                        >
                            <Text style={[styles.text, { marginHorizontal: 20 }]}>
                                Cancelar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onSubmitCode}
                        >
                            <Text style={[styles.text, { marginHorizontal: 20 }]}>
                                Validar Código
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Overlay>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    containerTextCodigo: {
        marginTop: 10,
        color: 'white',
        height: 45,
        borderRadius: 13,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    text2: {
        fontSize: 15,
        color: 'white',
    },
    container: {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        padding: 8,
        backgroundColor: '#0e101c',
        marginHorizontal: 40,
        paddingHorizontal: 20,
        marginVertical: "50%",
        borderRadius: 40,
        paddingVertical: 40
    },
    input1: {
        backgroundColor: 'white',
        borderWidth: 2,
        height: 50,
        // padding: 10,
        borderRadius: 13,
        // marginVertical: 8,
        fontSize: 16
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
    button: {
        marginTop: 10,
        color: 'white',
        height: 45,
        backgroundColor: '#9933FF',
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCancel: {
        marginTop: 10,
        color: 'white',
        height: 45,
        backgroundColor: 'gray',
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Modal
    overlayModalCode: {
        height: Dimensions.get('screen').height * 0.25,
        width: '90%',
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    viewCodeContainer: {
        flex: Dimensions.get('screen').height * 0.65,
        alignItems: "center",
        justifyContent: "center",
    },
    viewCodeFooter: {
        flex: Dimensions.get('screen').height * 0.35,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginTop: '2%'
    },
});