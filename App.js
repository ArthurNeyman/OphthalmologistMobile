import * as React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
        <StatusBar
          translucent
          backgroundColor="rgba(0,0,0,0.3)"
          barStyle="light-content" />
        <BottomMenuNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App