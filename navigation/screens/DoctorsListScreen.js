import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { View, Text } from "react-native";
import SurgeonsScreen from './SurgeonsScreen';
import OKTScreen from "./OKTScreen"

const TopTab = createMaterialTopTabNavigator();

const DoctorsListScreen = () => {

  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Хирурги" component={SurgeonsScreen} />
      <TopTab.Screen name="ОКТ" component={OKTScreen} />
    </TopTab.Navigator>
  );
};

export default DoctorsListScreen;