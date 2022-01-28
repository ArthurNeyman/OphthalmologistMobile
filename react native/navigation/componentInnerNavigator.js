import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { getHeaderTitle } from '@react-navigation/elements';

import ToolBarMenu from '../components/ToolBarMenuComponent';

import DoctorsListScreen from "../screens/DoctorsListScreen"
import HomeScreen from '../screens/HomeScreen';
import ServiceListScreen from '../screens/ServiceListScreen';
import EFIScreen from '../screens/EFIScreen'
import NewsScreen from '../screens/NewsScreen'
import ServiceScreen from '../screens/ServiceScreen'
import HowSaveEyesightScreen from '../screens/HowSaveEyesightScreen'
import TreatMethodsScreen from '../screens/EyeTreatmentMethodsScreen'
import AskQuestionScreen from '../screens/AskQuestionScreen'

const Stack = createStackNavigator();

const getTitle = (routeName) => {
    if (routeName === "Home") return "О нас"
    else if (routeName === "Doctors") return "Врачи"
    else if (routeName === "EFI") return "ЭФИ"
    else if (routeName === "Service") return "Услуги"
    else if (routeName === "HowToSaveEyes") return "Как сохранить зрение"
    else if (routeName === "EyeTreatMethods") return "Методы лечения глаз"
    else if (routeName === "AskQuestion") return "Чат"

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
            <Stack.Screen name="News" component={props => <NewsScreen {...props} />} />
            <Stack.Screen name="HowToSaveEyes" component={props => <HowSaveEyesightScreen {...props} />} />
            <Stack.Screen name="EyeTreatMethods" component={props => <TreatMethodsScreen {...props} />} />
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
            <Stack.Screen name="AskQuestion" component={props => <AskQuestionScreen {...props} />} />
            <Stack.Screen name="SomeService" component={props => <ServiceScreen {...props} />} />
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
        <Stack.Screen name="AskQuestion" component={props => <AskQuestionScreen {...props} />} />
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




