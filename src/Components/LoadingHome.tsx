import React, { useEffect } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import { FAB, Icon, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

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

    //    useEffect(() => {
    //             setTimeout(() => {
    //                 //@ts-ignore
    //             navigation.navigate("Root")
    //        },3000)
    //    },[])

    return (
        <View
            style={{
                width: "100%", display: "flex", justifyContent: "space-between",
                flexDirection: "column", alignItems: 'center'
            }}
        >
            <LinearGradient opacity={1} colors={['#378bc1', '#3F3E98', '#2E2D89']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
            <Text
                style={{ color: "white", fontSize: 30, fontWeight: "bold", marginTop: 30, fontFamily: 'EvilIcons', }}>BIENVENIDO</Text>
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
                    backgroundColor: "#2E2D89", alignSelf: "center", width: "95%",
                    borderRadius: 10, padding: 10, display: "flex", flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                {/* <Text
                style={{fontSize:20, alignSelf: "center", fontWeight: "bold", marginBottom:15 }}
                >MI PERFIL</Text> */}
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
                    style={[styles.container, { borderBottomWidth: 0 }]}
                >
                    <Text
                        style={styles.text}
                    >Ojos</Text>
                    <Text
                        style={styles.text}
                    >{obj.eyes}</Text>
                </View>
                </View>
                <View
                    style={{ width: "100%", alignItems: 'center', justifyContent: 'center', marginTop:20 }}
                >
                    <Image
                        source={require("../Assets/Img/logo_NewYou.png")}
                        style={{ width: 70, height: 60, }}
                    ></Image>
                </View>

                <Text
                    style={{ color: "white", fontSize: 18, fontWeight: "bold", marginTop: 20, alignSelf: "center",fontFamily:"Fontisto" }}>
                    Creando tu primera recomendación
                </Text>
                <FAB
                    loading
                    visible={visible}
                    icon={{ name: 'add', color: 'white' }}
                    size="large"
                    color='#17165D'
                    style={{ width: 50, height: 50, alignSelf: "center", backgroundColor: "red", marginTop: 20 }}
                />

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        marginBottom: 6,
        color: "white",
        fontWeight: "bold",
        fontFamily:"Fontisto"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 6,
    }
})


