import React from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import LoginScreen from '../Screens/Auth/LoginScreen';
import { RecoveryPasswordScreen } from '../Screens/Auth/RecoveryPasswordScreen';
import { ChangePasswordScreen } from '../Screens/Auth/ChangePasswordScreen';
import { IntroScreen } from '../Screens/IntroScreen';
import { GenderOption } from '../Screens/GenderOption';
import FormIntroOne from '../Screens/FormIntroOne';
import { Recomendaciones } from '../Screens/Home';
import { LoadingHome } from '../Components/LoadingHome';
import { Home } from '../Screens/HomeB';
import WellCome from '../Components/WellCome';
import { Animated, Easing } from 'react-native';
import Register from '../Screens/Auth/Register';
import Seasons from '../Screens/Seasons';
import Start from '../Screens/Start';
import Gender from '../Screens/Gender';
import VeganOption from '../Screens/VeganOption';
import StyleOption from '../Screens/StyleOption';
import Photo from '../Screens/Photo';
import { RootTabsNavigator } from './RootTabsNavigator';

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
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: undefined }
    }}>
        <Stack.Screen name="Root" component={RootTabsNavigator} />
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
          <Stack.Screen name="StyleOption" component={StyleOption}
           options={{
             transitionSpec: {
               open: config,
               close: closeConfig,
              },
              gestureDirection:"vertical-inverted",
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
          />
          <Stack.Screen name="Photo" component={Photo}
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
       {/* <Stack.Screen name="FormIntroOne" component={FormIntroOne} />
    <Stack.Screen name="Home" component={Home} /> 
    <Stack.Screen name="GenderOption" component={GenderOption} />
  */}
        </Stack.Navigator> 
  );
}