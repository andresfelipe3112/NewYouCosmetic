import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


export default function WellCome({navigation}:any) {

    useEffect(() => {
     setTimeout(() => {
       navigation.navigate("LoginScreen")
     },2000)
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