import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastProvider } from 'react-native-toast-notifications';

import { AuthNavigator } from './src/Navigation/AuthNavigator';

LogBox.ignoreLogs(['react-native-gesture-handler'])

const App = () => {

  {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */ }
  return (
    <SafeAreaProvider>
      <ToastProvider>
        <NavigationContainer>
          <AuthNavigator></AuthNavigator>
        </NavigationContainer>
      </ToastProvider>
    </SafeAreaProvider>
  );
};

export default App;
