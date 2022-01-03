import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from 'react-native';

import BottomMenuNavigator from './bottomMenuNavigator';
/*Навигатор бокового меню */

import DrawerMenuComponent from '../DrawerMenuComponent';
import { HomeStackNavigator } from './componentInnerNavigator';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const DrawerNavigator = createDrawerNavigator();

const DrawerMenuNavigator = (props) => {

  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
      drawerContent={(props) => <DrawerMenuComponent {...props} />}
    >
      <DrawerNavigator.Screen name="Hosme" component={() => <BottomMenuNavigator />} />
    </DrawerNavigator.Navigator>
  )
}

const mapStateToProps = state => {
  return {
    user: state.data.user
  }
}

function matchTo(dispatch) {
  return bindActionCreators({}, dispatch)
}


export default connect(mapStateToProps, matchTo)(DrawerMenuNavigator);