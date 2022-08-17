import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import { ArrowBackButton } from '../../Components/ArrowBackButton';
import { Input, Icon } from 'react-native-elements';
import { CustomToast } from '../../utils/customToast';
import LinearGradient from 'react-native-linear-gradient';
import newApi from '../../Services/LoginApiValues';

export const ChangePasswordScreen = () => {

    const navigation = useNavigation();

    // Mostrar u ocultar password
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [loadingLogin, setloadingLogin] = useState<Boolean>(false);

    const [colorBordefocusPassword, setcolorBordefocusPassword] = useState<string>('white');
    const [colorBordefocusPasswordConfirm, setcolorBordefocusPasswordConfirm] = useState<string>('white');

    const { setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
        defaultValues: {
            password: '',
            passwordConfirm: '',
        }
    });

    const { showToast } = CustomToast();

    const RecoverPassword = async ( newPassword: number | string , repetirPassword: number | string ) => {
        try {
          setloadingLogin(true);
          const resp = await newApi.post('/auth/recover-password', {
            newPassword: newPassword,
            repetirPassword:repetirPassword
          });
          if (resp) {
            // await AsyncStorage.setItem('tokenNew', resp.data.accessToken);
            setloadingLogin(false);
          }
        } catch (error) {
          setloadingLogin(false);
          console.log('error api', error?.response?.data);
        //   setErrorMessage(error?.response?.data?.realErrorMsg || error?.response?.data?.dataError?.message);
        }
      };

    const onSubmit = async (data: any) => {
        if (data.password !== data.passwordConfirm) {
            console.log(data);
            showToast('Las contraseñas deben coincidir');
        } else {
            await RecoverPassword(data.password, data.passwordConfirm)
            showToast('Cambio de contraseña exitoso');
            //@ts-ignore
            navigation.navigate('LoginScreen');
        }
    };

    const onChange = (arg: any) => {
        return {
            value: arg.nativeEvent.text,
        };
    };

    return (
        <>
        <LinearGradient  colors={['#378bc1', '#395ea1', '#4847a2']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
            <ArrowBackButton route={navigation}></ArrowBackButton>
            <ScrollView>
                <View style={styles.container}>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                placeholder="Nueva contraseña"
                                textContentType="newPassword"
                                secureTextEntry={!showPassword}
                                textAlign="center"
                                containerStyle={[styles.input1, { borderColor: colorBordefocusPassword }]}
                                inputContainerStyle={{ borderBottomWidth: 0, justifyContent: 'center' }}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                onFocus={() => setcolorBordefocusPassword('#9933FF')}
                                onBlur={() => setcolorBordefocusPassword('white')}
                                autoCompleteType={undefined}
                                rightIcon={
                                    <Icon
                                        type="material-community"
                                        name={!showPassword ? "eye-outline" : "eye-off-outline"}
                                        containerStyle={{ paddingRight: 3 }}
                                        onPress={() => setShowPassword(!showPassword)} tvParallaxProperties={undefined}                                    ></Icon>
                                }
                            ></Input>
                        )}
                        name="password"
                        rules={{ required: true }}
                    />
                    {errors.password && <Text style={styles.text2} >La contraseña es requerida.</Text>}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                placeholder="Confirmar contraseña"
                                textContentType="newPassword"
                                secureTextEntry={!showPasswordConfirm}
                                textAlign="center"
                                containerStyle={[styles.input1, { borderColor: colorBordefocusPasswordConfirm }]}
                                inputContainerStyle={{ borderBottomWidth: 0, justifyContent: 'center' }}
                                onChangeText={(value) => onChange(value)}
                                value={value}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                onFocus={() => setcolorBordefocusPasswordConfirm('#9933FF')}
                                onBlur={() => setcolorBordefocusPasswordConfirm('white')}
                                autoCompleteType={undefined}
                                rightIcon={
                                    <Icon
                                        type="material-community"
                                        name={!showPasswordConfirm ? "eye-outline" : "eye-off-outline"}
                                        containerStyle={{ paddingRight: 3 }}
                                        onPress={() => setShowPasswordConfirm(!showPasswordConfirm)} tvParallaxProperties={undefined}                                    ></Icon>
                                }
                            ></Input>
                        )}
                        name="passwordConfirm"
                        rules={{ required: true }}
                    />
                    {errors.passwordConfirm && <Text style={styles.text2} >La confirmación de contraseña es requerida.</Text>}
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit(onSubmit)}
                    >
                        <Text style={styles.text}>
                            Cambiar Contraseña
                        </Text>
                    </TouchableOpacity>
                </View>
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
        // backgroundColor: '#0e101c',
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
        borderRadius: 13,
        marginVertical: 8,
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
        backgroundColor: 'black',
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
});