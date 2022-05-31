import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


export default function WellCome() {

  const navigation = useNavigation()
    useLayoutEffect(()=>{
        const questionsAPI = async () => {
          // try {
          //   // setloadingLogin(false)
          //     const resp = await newApi.get('users/data-user')
          //     //  await AsyncStorage.setItem('token', resp.data.accessToken);
          //     // setdataLogin(resp.data)
          //     // setloadingLogin(true)
          //     console.log("respquestionsAPI.data)",resp);
          // } catch (error) {
        
          // }
            }
         const getTokens = async() =>{
           const token = await AsyncStorage.getItem('tokenNew');
           if (token) {
             navigation.navigate('Root')
           }else{
            navigation.navigate("LoginScreen")
           }
         }
         getTokens()
        // questionsAPI()
      },[])

    return (
              <LinearGradient colors={['#4578bd', '#4228a3']} style={styles.linearGradient}>
                <Text style={styles.SubText}>
                     Bienvenidos a NewYou
                </Text>  
                </LinearGradient>
    )
}


var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    Text: {
        fontSize:27,
        fontWeight: 'bold',
        fontFamily: 'Octicons',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
    SubText: {
        fontSize:27,
        fontFamily: 'Dosis',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',  
    }
});