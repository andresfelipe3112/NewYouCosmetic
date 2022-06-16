import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import newApi from '../Services/LoginApiValues';


export default function WellCome() {

  const navigation = useNavigation()
  const [rootState, setRootState] = useState<string | null>(null)

  const Question = async () => {
    const resp = await newApi.get('users/check-first-answers')
    console.log("Question",resp);
    if (resp.data.isComplete) {
     navigation.navigate("Root")
    }else {
      navigation.navigate("IntroScreen")
    }
  }
  
  const getTokens = async() =>{
    const token = await AsyncStorage.getItem('tokenNew');
    if (token) {
      console.log(token);
      setRootState(token)    
    }else {
     navigation.navigate("LoginScreen")
    }
  }

    useLayoutEffect(()=>{
      rootState === null && getTokens()
      rootState !== null && Question()
      },[rootState])

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