import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Start from '../Screens/Start';
import { Home } from '../Screens/Home';
import { Perfil } from '../Screens/Perfil';
import  StyleOption  from '../Screens/StyleOption';
import LinearGradient from 'react-native-linear-gradient';
import { AllProducts } from '../Screens/AllProducts';
import { AllProductsPerfil } from '../Screens/AllProductsPerfil';
import { LoadingHome } from '../Components/LoadingHome';
import newApi from '../Services/LoginApiValues';

const Tab = createBottomTabNavigator();

export const RootTabsNavigator = () => {
    const [currentIcon, setCurrentIcon] = useState("Home");
    const [stateCurrent, setStateCurrent] = useState(true);
    const [firtsData, setFirtsData] = useState([]);

    const colorHearOptionApi = async () => {
        try {
            const resp = await newApi.get('products/first-category')
            console.log("colorHearOptionApi", resp.data);
            if (resp) {
                setFirtsData(resp.data)
                setStateCurrent(false)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        colorHearOptionApi()
    },[])

    if (stateCurrent) {
        return(
        <>
        <LoadingHome></LoadingHome>
        </>
        )
    }
    return (
        <Tab.Navigator initialRouteName="Para tí"
            screenOptions={({ route }) => (
                Platform.OS === 'ios' ?

                    {
                        tabBarIcon: ({ color }) => screenOptionsIos(route, color),
                        tabBarBadgeStyle: { backgroundColor: '#DB0A57', },
                        // tabBarInactiveTintColor: '#5A6EAE',
                        // tabBarActiveTintColor: '#BDCBF7',
                        tabBarStyle: {
                            paddingBottom: Dimensions.get('window').height > 800 ? 23 : 5,
                            backgroundColor: "#184679",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            position: 'absolute',
                            borderTopWidth: 0,
                            elevation: 0,
                            width: Dimensions.get('window').width,
                        },
                        headerShown: false,
                    }
                    :
                    {
                        tabBarIcon: ({ color }) => screenOptionsAndroid(route, color),
                        // tabBarBadgeStyle: { backgroundColor: '#DB0A57' },
                        tabBarInactiveTintColor: '#BDCBF7',
                        tabBarActiveTintColor: '#BDCBF7',
                        tabBarStyle: {
                            paddingBottom: 5,
                            // backgroundColor: "#184679",
                            borderTopWidth: 0,
                            // borderTopLeftRadius: 20,
                            // borderTopRightRadius: 20,
                            position: 'absolute',
                            height: 60,
                            zIndex: 8
                        },
                        tabBarBackground: () => (
                            <LinearGradient opacity={1} colors={['#707EF4', "#26339A",]}
                                style={{
                                    position: "absolute", width: Dimensions.get("window").width,
                                    height: 65,
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                }} />
                        ),
                        headerShown: false,
                    }
            )}>
            <Tab.Screen name="Mi Perfil" component={Perfil} listeners={{ tabPress: () => setCurrentIcon("Person") }} />
            <Tab.Screen name="Para tí" component={Home} listeners={{tabPress: () => setCurrentIcon("Home")}} initialParams={{ firtsData: firtsData }} />
            <Tab.Screen name="Placard" component={AllProductsPerfil} listeners={{ tabPress: () => setCurrentIcon("Outfit") }} />
             {/* <Tab.Screen name="Lista Deseos" component={Start} />
            <Tab.Screen name="Mi Carro" component={Start} />   */}

        </Tab.Navigator>

    );


    function screenOptionsAndroid(route: any, color: any) {
        let iconName = '';

        switch (route.name) {
            case "Mi Perfil":
                currentIcon === "Person" ? iconName = "person" : iconName = "person-outline";
                break;
            case "Placard":
                currentIcon === "Outfit" ? iconName = "albums" : iconName = "albums-outline";
                break;
            case "Para tí":
                currentIcon === "Home" ? iconName = "home" : iconName = "home-outline";
                break;
            case "Lista Deseos":
                iconName = "heart";
                break;
            case "Mi Carro":
                iconName = "shopping-cart";
                break;
            default:
                break;
        }
        return <Icon type="ionicon" name={iconName} color={color}></Icon>;
    }


    function screenOptionsIos(route: any, color: any) {

        let iconName = '';

        switch (route.name) {
            case "Mi Perfil":
                iconName = "user-check";
                break;
            case "Buscar":
                iconName = "search";
                break;
            case "Home":
                iconName = "home";
                break;
            case "Lista Deseos":
                iconName = "heart";
                break;
            case "Mi Carro":
                iconName = "shopping-cart";
                break;
            default:
                break;
        }
        return <Icon type="ionicon" name={iconName} color={color}></Icon>;
    }
}

