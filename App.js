import * as React from 'react';

import {useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import DrawerMenuNavigator from './react native/navigation/drawerMenuNavigator';

import { Provider } from "react-redux"
import Store from "./react native/redux/store"

import SplashScreen from 'react-native-splash-screen'
import { StatusBar } from 'react-native';
import BottomMenuNavigator from './react native/navigation/bottomMenuNavigator';
const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, []);

  return (
    <Provider store={Store}>
      <NavigationContainer>
      <StatusBar translucent backgroundColor='transparent' />
        <BottomMenuNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App