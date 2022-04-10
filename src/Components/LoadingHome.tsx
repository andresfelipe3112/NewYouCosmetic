import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { FAB, Icon, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

let obj = {
    name: "Andres Felipe",
    email: "Andresfelipe@gmail.com",
    gender: "Hombre",
    eyes: "Verdes",
    cabello: "Castaño",
}

export const LoadingHome = (props: any) => {

    const [visible, setVisible] = React.useState(true);
    const navigation = useNavigation();

 useEffect(() => {
          setTimeout(() => {
              //@ts-ignore
          navigation.navigate("Recomendaciones")
     },3000)
 },[])

    return (
        <View
            style={{
                backgroundColor: "#0d0a1e", width: "100%", height: "100%", display: "flex",
                flexDirection: "column", alignItems: 'center'
            }}
        >
            <Text
                style={{ color: "white", fontSize: 30, fontWeight: "bold", marginTop: 30 }}>
                {"BIENVENIDO"}
            </Text>
            <View
                style={{ width: 120, height: 120, backgroundColor: "white", borderRadius: 70, marginTop: 30 }}
            ></View>
            <Text
                style={{
                    color: "white", fontSize: 22, fontWeight: "bold", marginTop: 20,
                    textAlign: "center", marginBottom: 30
                }}>
                {obj.name}
            </Text>
            <View
                style={{
                    backgroundColor: "white", alignSelf: "center", width: "90%", height: 230,
                    borderRadius: 30, paddingHorizontal: 15, paddingTop: 15
                }}
            >
                <Text
                style={{fontSize:20, alignSelf: "center", fontWeight: "bold", marginBottom:15 }}
                >MI PERFIL</Text>
                <View
                    style={styles.container}
                >
                    <Text
                        style={styles.text}
                    >Correo</Text>
                    <Text
                        style={styles.text}
                    >{obj.email}</Text>
                </View>
                <View
                    style={styles.container}
                >
                    <Text
                        style={styles.text}
                    >Género</Text>
                    <Text
                        style={styles.text}
                    >{obj.gender}</Text>
                </View>
                <View
                    style={styles.container}
                >
                    <Text
                        style={styles.text}
                    >Cabello</Text>
                    <Text
                        style={styles.text}
                    >{obj.cabello}</Text>
                </View>
                <View
                    style={[styles.container, {borderBottomWidth:0}]}
                >
                    <Text
                        style={styles.text}
                    >Ojos</Text>
                    <Text
                        style={styles.text}
                    >{obj.eyes}</Text>
                </View>
                <View
                  style={{width:"100%", alignItems: 'center', height:"60%", justifyContent: 'center'}}                
                >
                <Image
                source={require("../assets/Img/logo_NewYou.png")}
                style={{width:70, height: 60,}}
                ></Image>
                </View>

                <Text
                style={{ color: "white", fontSize: 18, fontWeight: "bold", marginTop:-25, alignSelf: "center",}}>
                {"Creando tu primera recomendación"}
            </Text>
            <FAB
          loading
          visible={visible}
          icon={{ name: 'add', color: 'white' }}
          size="large"
          color='#3b0252'
          style={{width:50, height:50, alignSelf: "center", backgroundColor:"red", marginTop: 15 }}
        />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginBottom:6
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical:6,
        borderBottomWidth:0.5,
    }
})


