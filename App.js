import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import DrawerMenuNavigator from './react native/navigation/drawerMenuNavigator';

import { Provider } from "react-redux"
import Store from "./react native/redux/store"

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <DrawerMenuNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App