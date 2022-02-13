import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BottomMenuComponent from '../components/BottomMenuComponent';
import { EFIStackNavigator, ServiceStackNavigator, HomeStackNavigator, StaffStackNavigator } from './componentInnerNavigator';

export const Tab = createBottomTabNavigator();

const BottomMenuNavigator = ({ active }) => {
    return (
        <Tab.Navigator
            initialRouteName={active}
            tabBar={props => <BottomMenuComponent {...props} />}
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="StaffList" component={StaffStackNavigator} />
            <Tab.Screen name="ServiceList" component={ServiceStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomMenuNavigator;