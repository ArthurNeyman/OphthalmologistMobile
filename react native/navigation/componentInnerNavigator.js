import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { getHeaderTitle } from '@react-navigation/elements';

import ToolBarMenu from '../components/ToolBarMenuComponent';

import StaffListScreen from "../screens/StaffListScreen"
import HomeScreen from '../screens/HomeScreen';
import ServiceCatagoryListScreen from '../screens/ServiceCategoryListScreen';
import EFIScreen from '../screens/EFIScreen'
import NewsListScreen from '../screens/NewsListScreen'
import ServiceScreen from '../screens/ServiceScreen'
import HowSaveEyesightScreen from '../screens/HowSaveEyesightScreen'
import TreatMethodsScreen from '../screens/EyeTreatmentMethodsScreen'
import AskQuestionScreen from '../screens/AskQuestionScreen'
import NewsScreen from '../screens/NewsScreen';
import ContactsScreen from '../screens/ContacsScreen';
import RouteScreen from '../screens/RouteScreen';

const Stack = createStackNavigator();

const getTitle = (routeName) => {
    if (routeName === "Home") return "О нас"
    else if (routeName === "Staff") return "Персонал"
    else if (routeName === "EFI") return "ЭФИ"
    else if (routeName === "Service") return "Услуги"
    else if (routeName === "HowToSaveEyes") return "Как сохранить зрение"
    else if (routeName === "EyeTreatMethods") return "Методы лечения глаз"
    else if (routeName === "AskQuestion") return "Чат"
    else if (routeName === "News" || routeName === "NewsList") return "Новости"
    else if (routeName === "Contacts" ) return "Наши контакты"
    else if (routeName === "Route" ) return "Как добраться"


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
            <Stack.Screen name="NewsList" component={props => <NewsListScreen {...props} />} />
            <Stack.Screen name="HowToSaveEyes" component={props => <HowSaveEyesightScreen {...props} />} />
            <Stack.Screen name="EyeTreatMethods" component={props => <TreatMethodsScreen {...props} />} />
            <Stack.Screen name="News" component={props => <NewsScreen {...props} />} />
            <Stack.Screen name="Contacts" component={(props)=><ContactsScreen {...props}/>} />
            <Stack.Screen name="Route" component={(props)=><RouteScreen {...props}/>} />
        </Stack.Navigator>
    );
}

export const ServiceStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: header
            }}>
            <Stack.Screen name="Service" component={ServiceCatagoryListScreen} />
            <Stack.Screen name="AskQuestion" component={props => <AskQuestionScreen {...props} />} />
            <Stack.Screen name="SomeService" component={props => <ServiceScreen {...props} />} />
        </Stack.Navigator>
    );
}

export const StaffStackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            header: header,
            animationEnabled: false
        }} >
        <Stack.Screen name="Staff" component={StaffListScreen} />
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




