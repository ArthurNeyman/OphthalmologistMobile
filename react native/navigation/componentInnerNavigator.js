import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import StaffListScreen from "../screens/StaffListScreen"
import HomeScreen from '../screens/HomeScreen';
import ServiceScreen from '../screens/ServiceScreen'
import ContactsScreen from '../screens/ContacsScreen';
import RouteScreen from '../screens/RouteScreen';

import {
    GET_CLINIC_INFO,
    GET_NEWS_LIST,
    GET_SERVICE_CATEGORIES,
    GET_STAFF_LIST
} from '../redux/actions/types'
import ServiceListScreen from '../screens/ServiceListScreen';
import { StaffScreen } from '../screens/StaffScreen';
import QuastionsAndAnswersScreen from '../screens/QuastionsAndAnswersScreen';

const Stack = createStackNavigator();

export const HomeStackNavigator = (props) => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }} >
            <Stack.Screen name="Home" component={props => <HomeScreen {...props} />} />
            <Stack.Screen name="Contacts" component={(props) => <ContactsScreen {...props} />} />
            <Stack.Screen name="Route" component={(props) => <RouteScreen {...props} />} />
            <Stack.Screen name="QuastionsAndAnswers" component={(props) => <QuastionsAndAnswersScreen {...props} />} />
        </Stack.Navigator>
    );
}

export const ServiceStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }} >
            <Stack.Screen name="ServiceList" component={props => <ServiceListScreen {...props} />} />
            <Stack.Screen name="Service" component={props => <ServiceScreen {...props} />} />
            <Stack.Screen name="Staff" component={props => <StaffScreen {...props} />} />
        </Stack.Navigator>
    );
}

export const StaffStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }} >
            <Stack.Screen name="StaffList" component={StaffListScreen} />
            <Stack.Screen name="Staff" component={StaffScreen} />
        </Stack.Navigator>
    );
}





