import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export const Title = ({text}:{text:string}) => {
    return (
        <View
        style={{width: Dimensions.get("window").width * 0.95, display:"flex", justifyContent: "center", alignItems: "center",
                marginTop:30, marginBottom:30, flexDirection:"row", alignSelf: "center", borderRadius:10}}
        >
            {/* <LinearGradient opacity={1} colors={[ '#7368C0', '#8744A4']} style={{ position: "absolute", width: "100%", height: 43, borderRadius:10 }} /> */}
        <Text style={styles.textTitle}> {text}</Text>
          </View>
    )
}
const styles = StyleSheet.create({
    textTitle:{
      fontSize:20,
      color: '#DDDBEC',
      fontFamily: "Dosis"
    }
  })