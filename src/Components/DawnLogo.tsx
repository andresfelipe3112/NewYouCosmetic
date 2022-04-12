import React, { Component, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Animated, Dimensions, Easing, ScrollView, StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native';
import { Image } from 'react-native-elements/dist/image/Image';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const DawnLogo = ({ text, render }: any) => {

    const dawnLogo = require('../Assets/Img/down.png');
    const speed = 500;

    let height = useRef(new Animated.Value(0)).current;
    let heightInput = useRef(new Animated.Value(0)).current;
    let heightInput2 = useRef(new Animated.Value(0)).current;
    let logoRotated = useRef(new Animated.Value(0)).current;
    let logoRotated2 = useRef(new Animated.Value(0)).current;

    const [open, setopen] = useState(false)
    const [open2, setopen2] = useState(false)
    const [renderA, setrenderA] = useState(true)
    const [valueInput, setvalueInput] = useState("")
    const [valueInput2, setvalueInput2] = useState("")

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
        outputRange: [0, 270]  // <-- value that larger than your content's height
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

    const active = () => {
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
                <TouchableOpacity
                    style={{ padding: 6, marginTop:-10, }}
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
                <AnimatedPressable
                    style={[{ height: maxHeightInput }]}
                    onPress={() => {
                        active()
                    }}>
                    <Text
                        style={styles.textInput}
                    >{text}</Text>
                </AnimatedPressable>
            </>
        )
}

export default DawnLogo

const styles = StyleSheet.create({
    textTitle: {
        color: "white",
        fontSize: 25,
        textAlign: "center",
        fontFamily: "Dosis",
        marginVertical: 20,
        borderRadius: 25,
        opacity: 0.6, display: "flex",
        marginTop: 70
    },
    text: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    button: {
        width: 170,
        color: 'white',
        height: 200,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "white",
        borderWidth: 1,
        margin: 10
    },
    containerStyle: {
        width: 110,
        height: 110,
        margin: 15,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        color: 'white',
        paddingHorizontal: 25,
    },
})