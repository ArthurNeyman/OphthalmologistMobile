import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomMenuNavigator from './bottomMenuNavigator';
import DrawerMenuComponent from '../components/DrawerMenuComponent';

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