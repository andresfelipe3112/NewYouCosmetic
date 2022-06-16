import React, { useRef, useState } from "react";
import { View, StyleSheet, Animated, Easing, Pressable, TextInput, ScrollView, Dimensions } from "react-native";
import { Button, Icon, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import newApi from "../Services/LoginApiValues";

const Gender = () => {
    const navigation = useNavigation();
    const dawnLogo = require('../Assets/Img/down.png');
    const speed = 500;

    let height = useRef(new Animated.Value(0)).current;
    let heightInput = useRef(new Animated.Value(0)).current;
    let heightInput2 = useRef(new Animated.Value(0)).current;
    let logoRotated = useRef(new Animated.Value(0)).current;
    let logoRotated2 = useRef(new Animated.Value(0)).current;

    const [open, setopen] = useState(false)
    const [open2, setopen2] = useState(false)
    const [valueInput, setvalueInput] = useState("")
    const [valueInput2, setvalueInput2] = useState("")
    const [dataLogin, setdataLogin] = useState<any>('')

    const genderApi = async (valueInput: string,) => {
        try {
            navigation.navigate("VeganOption")
            const resp = await newApi.post('users/gender', { "gender": valueInput === "Mujer"? "F" : "M" })
            console.log("genderApi", resp.data);
            // if (resp) {
            // }
        } catch (error) {
            console.log(error);
        }
    }

    //start animation select
    const dawnPosition = () => {
        Animated.timing(
            heightInput,
            {
                toValue: 45,
                duration: speed,
                easing: Easing.ease,
                useNativeDriver: false
            }
        ).start()
    }
    const dawnPosition2 = () => {
        Animated.timing(
            heightInput2,
            {
                toValue: 45,
                duration: speed,
                easing: Easing.ease,
                useNativeDriver: false
            }
        ).start()
    }
    const upPosition = () => {
        Animated.timing(
            heightInput,
            {
                toValue: 0,
                duration: speed,
                easing: Easing.ease,
                useNativeDriver: false
            }
        ).start()
    }
    const upPosition2 = () => {
        Animated.timing(
            heightInput2,
            {
                toValue: 0,
                duration: speed,
                easing: Easing.ease,
                useNativeDriver: false
            }
        ).start()
    }

    const maxHeightInput = heightInput.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 100]  // <-- value that larger than your content's height
    });

    const maxHeightInput2 = heightInput2.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 100]  // <-- value that larger than your content's height
    });
    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
    //fin animation Select


    const RotationUP = () => {
        Animated.timing(
            logoRotated,
            {
                toValue: 1,
                duration: speed,
                easing: Easing.linear, // Easing is an additional import from react-native
                useNativeDriver: true  // To make use of native driver for performance
            }
        ).start()
    }
    const RotationUP2 = () => {
        Animated.timing(
            logoRotated2,
            {
                toValue: 1,
                duration: speed,
                easing: Easing.linear, // Easing is an additional import from react-native
                useNativeDriver: true  // To make use of native driver for performance
            }
        ).start()
    }

    const RotationDown = () => {
        Animated.timing(
            logoRotated,
            {
                toValue: 0,
                duration: speed,
                easing: Easing.linear, // Easing is an additional import from react-native
                useNativeDriver: true  // To make use of native driver for performance
            }
        ).start()
    }
    const RotationDown2 = () => {
        Animated.timing(
            logoRotated2,
            {
                toValue: 0,
                duration: speed,
                easing: Easing.linear, // Easing is an additional import from react-native
                useNativeDriver: true  // To make use of native driver for performance
            }
        ).start()
    }

    const spin = logoRotated.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })
    const spin2 = logoRotated2.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })

    function active() {
        open ? setopen(false) : setopen(true);
        !open ? RotationUP() : RotationDown();
        !open ? dawnPosition() : upPosition();
    }

    function active2() {
        open2 ? setopen2(false) : setopen2(true);
        !open2 ? RotationUP2() : RotationDown2();
        !open2 ? dawnPosition2() : upPosition2();
    }
    return (
        <>
            <LinearGradient opacity={0.9} colors={['#378bc1', '#395ea1', '#4847a2']} style={{ position: "absolute", width: "100%", height: Dimensions.get("window").height }} />
            <View
                style={{
                    width: Dimensions.get("window").width * 0.8,
                    alignSelf: "center",
                    marginTop: "50%",
                }}
            >
                <Text
                    style={styles.textTitle}
                >¿Con que género te identificas?</Text>
                <View
                    style={{
                        display: 'flex', width: '100%', height: '100%',
                        flexDirection: 'column', alignItems: 'center',
                    }}
                >

                    <View
                        style={{
                            width: "70%", height: 60, display: "flex", backgroundColor: '#434C6B', justifyContent: 'center',
                            borderRadius: 10, marginBottom: 5, flexDirection: "row", alignItems: "center", marginTop: 50
                        }}
                    >
                        <TextInput
                            style={{
                                alignSelf: "center", alignItems: "center", color: "white", fontSize: 24,
                                width: "80%", paddingLeft: 30,
                            }}
                            editable={false}
                            value={valueInput}
                        ></TextInput>

                        <TouchableOpacity
                            style={{ padding: 6 }}
                            onPress={() => {
                                active()
                            }}
                        >
                            <Animated.Image
                                style={{ transform: [{ rotate: spin }], width: 30, height: 30 }}
                                source={dawnLogo}
                            >
                            </Animated.Image>
                        </TouchableOpacity>
                    </View>
                    <AnimatedPressable
                        style={[styles.inputOptions, { height: maxHeightInput }]}
                        onPress={() => {
                            setvalueInput("Mujer")
                            active()
                        }}>
                        <Text
                            style={styles.textInput}
                        >{'Mujer'}</Text>
                    </AnimatedPressable>
                    <AnimatedPressable
                        style={[styles.inputOptions, { height: maxHeightInput }]}
                        onPress={() => {
                            setvalueInput("Hombre");
                            active()
                        }}>
                        <Text
                            style={styles.textInput}
                        >{'Hombre'}</Text>
                    </AnimatedPressable>

                    <Button
                        title="Siguiente"
                        type={"clear"}
                        containerStyle={{
                            width: 150,
                            marginHorizontal: "26%",
                            borderRadius: 10,
                            marginTop: 20,
                            borderWidth: 1,
                            borderColor: "white"
                        }}
                        titleStyle={{ color: 'white', marginHorizontal: 20, fontSize: 15 }}
                        //@ts-ignore
                        onPress={() =>{
                            genderApi(valueInput)
                        }}
                    />
                     <View
                style={{
                    position: "absolute", top: Dimensions.get("window").height * 0.6, display: "flex", flexDirection: "row",
                    justifyContent: "space-between", width: Dimensions.get("window").width * 0.9, alignSelf: "center",
                }}
            >
                <Icon
                    name='arrow-left'
                    type='evilicon'
                    color='#7C8499'
                    size={50}
                    onPress={() => navigation.goBack()}
                    tvParallaxProperties={undefined}
                />
                {/* <Icon
                    name='arrow-right'
                    type='evilicon'
                    color='#7C8499'
                    size={50}
                    //@ts-ignore
                    onPress={() => navigation.navigate("Seasons")}
                    tvParallaxProperties={undefined}
                /> */}
            </View>
                </View>
            </View>

        </>
    );
}

export default Gender;

const styles = StyleSheet.create({
    textTitle: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
        fontFamily: "Dosis"
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 2,
        height: 50,
        padding: 10,
        borderRadius: 13,
        marginVertical: 8,
        fontSize: 16
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 23,
        fontFamily: "FredokaOne",
    },
    inputOptions: {
        backgroundColor: '#434C6B',
        width: "70%",
        marginVertical: 4,
        borderRadius: 20,
        position: "relative",
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        color: 'white',
        marginHorizontal: 20,
        fontSize: 20
    }
})