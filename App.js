import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import DrawerMenuNavigator from './navigation/navigators/drawerMenuNavigator';

import { Provider } from "react-redux"
import Store from "./redux/store"

import { init_async_storage_data } from './redux/actions/server_actions';

import AsyncStorage from '@react-native-async-storage/async-storage';

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