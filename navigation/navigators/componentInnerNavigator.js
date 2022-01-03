import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import ToolBarMenu from '../ToolBarMenuComponent';
import { getHeaderTitle } from '@react-navigation/elements';

//screens
import DoctorsListScreen from "../screens/DoctorsListScreen"
import HomeScreen from '../screens/HomeScreen';
import ServiceListScreen from '../screens/ServiceListScreen';
import EFIScreen from '../screens/EFIScreen'



const Stack = createStackNavigator();

const getTitle = (routeName) => {
    if (routeName === "Home") return "О нас"
    else if (routeName === "Doctors") return "Врачи"
    else if (routeName === "EFI") return "ЭФИ"
    else if (routeName === "Service") return "Услуги"
}

const header = ({ navigation, route, options }) => {
    return <ToolBarMenu title={getTitle(getHeaderTitle(options, route.name))} />
}

export const HomeStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: header,
                animationEnabled: false
            }} >
            <Stack.Screen name="Home" component={props => <HomeScreen {...props} />} />
        </Stack.Navigator>
    );
}

export const ServiceStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: header
            }}>
            <Stack.Screen name="Service" component={ServiceListScreen} />
        </Stack.Navigator>
    );
}

export const DoctorsStackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            header: header,
            animationEnabled: false
        }} >
        <Stack.Screen name="Doctors" component={DoctorsListScreen} />
    </Stack.Navigator>
    );
}

export const EFIStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: header
            }}
        >
            <Stack.Screen name="EFI" component={EFIScreen} />
        </Stack.Navigator>
    );
}




