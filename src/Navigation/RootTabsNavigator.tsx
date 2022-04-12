import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Start from '../Screens/Start';
import { Home } from '../Screens/Home';
import { HomeB } from '../Screens/HomeB';
import LinearGradient from 'react-native-linear-gradient';

const Tab = createBottomTabNavigator();

export const RootTabsNavigator = () => {
    const [currentIcon, setCurrentIcon] = useState("Home");
    return (
        <Tab.Navigator initialRouteName="Home"
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
            <Tab.Screen name="Home" component={Home} listeners={{
                tabPress: () => setCurrentIcon("Home")
            }} />
            <Tab.Screen name="Mi Perfil" component={HomeB} listeners={{ tabPress: () => setCurrentIcon("Person") }} />
            {/* 
             <Tab.Screen name="Buscar" component={Start} />
            <Tab.Screen name="Lista Deseos" component={Start} />
            <Tab.Screen name="Mi Carro" component={Start} />   */}



        </Tab.Navigator>

    );


    function screenOptionsAndroid(route: any, color: any) {
        let iconName = '';

        switch (route.name) {
            case "Mi Perfil":
                currentIcon === "Person" ? iconName = "person" : iconName = "person-outline";
                break;
            case "Buscar":
                iconName = "search";
                break;
            case "Home":
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

