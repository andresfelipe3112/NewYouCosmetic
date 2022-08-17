import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Start from '../Screens/Start';
import { Home } from '../Screens/Home';
import { Perfil } from '../Screens/Perfil';
import StyleOption from '../Screens/StyleOption';
import LinearGradient from 'react-native-linear-gradient';
import { AllProducts } from '../Screens/AllProducts';
import { AllProductsPerfil } from '../Screens/AllProductsPerfil';
import { LoadingHome } from '../Components/LoadingHome';
import newApi from '../Services/LoginApiValues';
import { useIsFocused } from '@react-navigation/native';
import { Info } from '../Screens/Info';

const Tab = createBottomTabNavigator();

export const RootTabsNavigator = ({route}) => {
    const [currentIcon, setCurrentIcon] = useState("Home");
    const [stateCurrent, setStateCurrent] = useState(true);
    const [firtsData, setFirtsData] = useState([]);
    const [renderNewCategoria, setrRenderNewCategoria] = useState(true);
    const [root, setRoot] = useState("Para tí");
    const [user, setUser] = useState({
        username: "",
        email: "",
        _id:"",
    })

    const dataUser = async () => {
        const data =await newApi.get(`/users/profile-user`)
        console.log(data.data.dataUser);
        setUser(data.data.dataUser)
        setTitleLoading(`Bienvenida ${data?.data?.dataUser?.username}, estoy buscando las mejores recomendaciones para ti…`)
    }

    useEffect(() => {
        !route?.params?.reRender && dataUser()
    },[])

    const [titleLoading, setTitleLoading] = useState("");

    useEffect(() => {
        route?.params?.reRender && setTitleLoading("Un momento, estoy buscando las mejores recomendaciones para ti")
    },[route?.params?.reRender])

        
    const firstCategoryData = async () => {
        setStateCurrent(true)
        try {
            const respHome = await newApi.get('home')
            console.log("respHome", respHome);
            if (respHome) {
                setTimeout(() => {
                    setFirtsData(respHome.data)
                    setStateCurrent(false)
                    setrRenderNewCategoria(false)
                }, 1500); 
            }
        } catch (error) {
            console.log(error);
        }
    }
    const firstCategoryDataRefresh = async () => {
        setStateCurrent(true)
        try {
            const dataRefresh =  await newApi.get(`/products/refresh-all`)
            const respHome = await newApi.get('home')
            console.log("respHomeRefresh", respHome);
            if (respHome) {
                setTimeout(() => {
                    setFirtsData(respHome.data)
                    setStateCurrent(false)
                    setrRenderNewCategoria(false)
                }, 1500); 
            }
        } catch (error) {
            console.log(error);
        }
    }

    let focus = useIsFocused()

    
    useEffect(() => {
        route?.params?.reRender === "b15" && setrRenderNewCategoria(true) // camisa
        route?.params?.reRender === "b17" && setrRenderNewCategoria(true) // pantalon
        route?.params?.reRender === "c11" && setrRenderNewCategoria(true) // collares
        route?.params?.reRender === "b24" && setrRenderNewCategoria(true) // botas
        route?.params?.reRender === "b21" && setrRenderNewCategoria(true) // zapatos
        route?.params?.reRender === "b11" && setrRenderNewCategoria(true) // Blusas
        route?.params?.reRender === "b13" && setrRenderNewCategoria(true) // Poleras
        route?.params?.reRender === "c12" && setrRenderNewCategoria(true) // aros
        route?.params?.reRender === "a11" && setrRenderNewCategoria(true) // carteras
        route?.params?.reRender === "a14" && setrRenderNewCategoria(true) // pulseras
        route?.params?.reRender === "a12" && setrRenderNewCategoria(true) // relog
        route?.params?.reRender === "a13" && setrRenderNewCategoria(true) // pañuelos
        console.log(route?.params?.reRender);
    },[route?.params?.reRender])

     useEffect(() => {
        console.log(route?.params?.reRender);
        route?.params?.reRender === "render" && firstCategoryDataRefresh()
     },[route?.params?.reRender])

    useEffect(() => {
        if (renderNewCategoria === true ) {
            setStateCurrent(true);
            firstCategoryData();
        }
    }, [renderNewCategoria])


    if (stateCurrent) {
        return (
            <>
                <LoadingHome title={titleLoading} ></LoadingHome>
            </>
        )
    }
    return (
        <Tab.Navigator initialRouteName={root}
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
                        tabBarInactiveTintColor: 'white',
                        tabBarActiveTintColor: '#FFB266',
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
                            <LinearGradient opacity={1} colors={['#202020','#202020']}
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
            <Tab.Screen name="Mi Perfil" component={Info} listeners={{ tabPress: () => setCurrentIcon("Person") }} />
            <Tab.Screen name="Para tí" component={Home} listeners={{ tabPress: () => setCurrentIcon("Home") }} initialParams={{ firtsData: firtsData }} />
            <Tab.Screen name="Armario" component={AllProductsPerfil} listeners={{ tabPress: () => setCurrentIcon("Outfit") }} />
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
            case "Armario":
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

