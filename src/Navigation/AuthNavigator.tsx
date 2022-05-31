import React, { useLayoutEffect, useState } from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import LoginScreen from '../Screens/Auth/LoginScreen';
import { RecoveryPasswordScreen } from '../Screens/Auth/RecoveryPasswordScreen';
import { ChangePasswordScreen } from '../Screens/Auth/ChangePasswordScreen';
import { IntroScreen } from '../Screens/IntroScreen';
import { GenderOption } from '../Screens/GenderOption';
import FormIntroOne from '../Screens/FormIntroOne';
import { LoadingHome } from '../Components/LoadingHome';
import WellCome from '../Components/WellCome';
import { Animated, Easing } from 'react-native';
import Register from '../Screens/Auth/Register';
import Seasons from '../Screens/Seasons';
import Start from '../Screens/Start';
import Gender from '../Screens/Gender';
import VeganOption from '../Screens/VeganOption';
import Age from '../Screens/Age';
import StyleOption from '../Screens/StyleOption';
import ColorHearOption from '../Screens/ColorHearOption';
import { RootTabsNavigator } from './RootTabsNavigator';
import { AllProducts } from '../Screens/AllProducts';
import CategoriesPush from '../Screens/CategoriesPush';
import Altura from '../Screens/Altura';
import LargoDeCuello from '../Screens/LargoDeCuello';
import TipoDeCuerpo from '../Screens/TipoDeCuerpo';
import { DetailProduct } from '../Screens/DetailProduct';
import { DetailProductStore } from '../Screens/DetailProductStore';
import ColorOjos from '../Screens/ColorOjos';
import TipoDeRostro from '../Screens/TipoDeRostro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import newApi from '../Services/LoginApiValues';

const Stack = createStackNavigator();

export const AuthNavigator = () => {

  const config = {
    animation: "timing",
    config: {
      duration: 1000,
    }
  }
  
  const closeConfig = {
    animation: 'timing',
    config: {
      duration: 200,
      easing: Easing.linear,
    }
  }

  

  
  return (
    <Stack.Navigator
    initialRouteName={"Wellcome"}
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: undefined }
    }}>
      <Stack.Screen name="Wellcome" component={WellCome} />
      <Stack.Screen name="LoginScreen" component={LoginScreen}
      options={{
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        gestureDirection:"vertical-inverted",
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}/>
        <Stack.Screen name="Register" component={Register} 
        options={{
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          gestureDirection:"vertical-inverted",
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
        />
        <Stack.Screen name="DetailProduct" component={DetailProduct} 
        options={{
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          gestureDirection:"vertical-inverted",
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
        /> 
        <Stack.Screen name="DetailProductStore" component={DetailProductStore} 
        options={{
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          gestureDirection:"vertical-inverted",
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
        /> 
      <Stack.Screen name="RecoveryPassword" component={RecoveryPasswordScreen}
       options={{
         transitionSpec: {
           open: config,
           close: closeConfig,
          },
          gestureDirection:"vertical-inverted",
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
       />
       {/* <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} /> */}
      <Stack.Screen name="IntroScreen" component={IntroScreen} 
        options={{
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          gestureDirection:"horizontal",
          gestureVelocityImpact:1000,
          cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
        }}      
      />
        <Stack.Screen name="Start" component={Start}
         options={{
           transitionSpec: {
             open: config,
             close: closeConfig,
            },
            gestureDirection:"vertical-inverted",
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen name="Seasons" component={Seasons}
       options={{
         transitionSpec: {
           open: config,
           close: closeConfig,
          },
          gestureDirection:"horizontal",
          gestureVelocityImpact:1000,
          cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
        }}      
        />
        <Stack.Screen name="Gender" component={Gender} 
        options={{
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          gestureDirection:"vertical-inverted",
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}  
          />
           <Stack.Screen name="Age" component={Age}
           options={{
            transitionSpec: {
              open: config,
              close: closeConfig,
             },
             gestureDirection:"vertical-inverted",
             cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
           }}
          />
      <Stack.Screen name="VeganOption" component={VeganOption} 
      options={{
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        gestureDirection:"vertical-inverted",
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
      }}  
      />
          <Stack.Screen name="StyleOption" component={StyleOption} //
           options={{
             transitionSpec: {
               open: config,
               close: closeConfig,
              },
              gestureDirection:"vertical-inverted",
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
          />
           <Stack.Screen name="colorOjos" component={ColorOjos} 
       options={{
        transitionSpec: {
          open: config,
          close: closeConfig,
         },
         gestureDirection:"vertical-inverted",
         cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
       }}
       />
           <Stack.Screen name="TipoDeRostro" component={TipoDeRostro}
           options={{
             transitionSpec: {
               open: config,
               close: closeConfig,
              },
              gestureDirection:"vertical-inverted",
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
          /> 
           <Stack.Screen name="ColorHearOption" component={ColorHearOption}
           options={{
             transitionSpec: {
               open: config,
               close: closeConfig,
              },
              gestureDirection:"vertical-inverted",
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
          />
          
      <Stack.Screen name="LoadingHome" component={LoadingHome}
        options={{
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          gestureDirection:"vertical-inverted",
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
      <Stack.Screen name="Root" component={RootTabsNavigator}
       options={{
        transitionSpec: {
          open: config,
          close: closeConfig,
         },
         gestureDirection:"vertical-inverted",
         cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
       }}
      />
       <Stack.Screen name="AllProducts" component={AllProducts} 
       options={{
        transitionSpec: {
          open: config,
          close: closeConfig,
         },
         gestureDirection:"vertical-inverted",
         cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
       }}
       />
       <Stack.Screen name="CategoriesPush" component={CategoriesPush} 
       options={{
        transitionSpec: {
          open: config,
          close: closeConfig,
         },
         gestureDirection:"vertical-inverted",
         cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
       }}
       />
       <Stack.Screen name="Altura" component={Altura} 
       options={{
        transitionSpec: {
          open: config,
          close: closeConfig,
         },
         gestureDirection:"vertical-inverted",
         cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
       }}
       />
       <Stack.Screen name="LargoDeCuello" component={LargoDeCuello} 
       options={{
        transitionSpec: {
          open: config,
          close: closeConfig,
         },
         gestureDirection:"vertical-inverted",
         cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
       }}
       />
       <Stack.Screen name="TipoDeCuerpo" component={TipoDeCuerpo} 
       options={{
        transitionSpec: {
          open: config,
          close: closeConfig,
         },
         gestureDirection:"vertical-inverted",
         cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
       }}
       />
       {/* <Stack.Screen name="FormIntroOne" component={FormIntroOne} />
    <Stack.Screen name="Home" component={Home} /> 
    <Stack.Screen name="GenderOption" component={GenderOption} />
  */}
        </Stack.Navigator> 
  );
}