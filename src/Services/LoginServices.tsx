import React, { useEffect } from "react";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import { LoginManager, AccessToken } from 'react-native-fbsdk-next';


export const LoginServices = (props: any) => {

    useEffect(() => {
        GoogleSignin.configure({
            // webClientId: "860712937151-iu52q67a4t84ijn3bsh1d6tqfng6nra5.apps.googleusercontent.com",
        })
    }, [])

    // Inicio de Sesión con Google
    const signGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo: any = await GoogleSignin.signIn();
            console.log("userInfo", userInfo);
        } catch (error: any) {
            console.log('errores', error)
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('Login cancelado');
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log('No cuentas con los servicios de Google');
            } else {
                // some other error happened
                console.log('errores else', error)
                // Alert.alert('error')
            }
        }
    };

    //Inicio de Sesión con Facebook
    // const loginFacebook = async () => {
    //     // if (Platform.OS === "android") {
    //     //     LoginManager.setLoginBehavior("web_only")
    //     // }
    //     await LoginManager.logInWithPermissions(["public_profile", "email"]).then(
    //         function (result) {
    //             if (result.isCancelled) {
    //                 //@ts-ignore
    //                 alert("El inicio de sesión por facebook se ha cancelado")
    //             } else {
    //                 // alert("Login success with  permisssions: " + result.grantedPermissions.toString());
    //                 // alert("Login Success " + result.toString());
    //                 AccessToken.getCurrentAccessToken().then(
    //                     (data: any) => {
    //                         console.log("token", data.accessToken.toString())
    //                         console.log("token", typeof data.accessToken.toString())
    //                     }
    //                 )
    //             }
    //         },
    //         function (error) {
    //             //@ts-ignore
    //             alert("Login ha fallado: " + error);
    //             console.log(error.message);
    //         }
    //     )
    // }
    return {
        // loginFacebook,
        signGoogle
    }

}