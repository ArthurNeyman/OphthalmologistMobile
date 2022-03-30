import * as React from 'react';

import {useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import DrawerMenuNavigator from './react native/navigation/drawerMenuNavigator';

import { Provider } from "react-redux"
import Store from "./react native/redux/store"

import { StatusBar } from 'react-native';

import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, []);

  return (
    <Provider store={Store}>
                  <StatusBar translucent backgroundColor='transparent' />
      <NavigationContainer>
        <DrawerMenuNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App