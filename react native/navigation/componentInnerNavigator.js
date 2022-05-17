import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { getHeaderTitle } from '@react-navigation/elements';

import ToolBarMenu from '../components/ToolBarMenuComponent';

import StaffListScreen from "../screens/StaffListScreen"
import HomeScreen from '../screens/HomeScreen';
import ServiceCatagoryListScreen from '../screens/ServiceCategoryListScreen';
import NewsListScreen from '../screens/NewsListScreen'
import ServiceScreen from '../screens/ServiceScreen'
import HowSaveEyesightScreen from '../screens/HowSaveEyesightScreen'
import TreatMethodsScreen from '../screens/EyeTreatmentMethodsScreen'
import AskQuestionScreen from '../screens/AskQuestionScreen'
import NewsScreen from '../screens/NewsScreen';
import ContactsScreen from '../screens/ContacsScreen';
import RouteScreen from '../screens/RouteScreen';

import { useSelector, useDispatch } from 'react-redux'

import {
    GET_CLINIC_INFO,
    GET_NEWS,
    GET_NEWS_LIST,
    GET_SERVICE_CATEGORIES,
    GET_STAFF_LIST
} from '../redux/actions/types'
import ServiceListScreen from '../screens/ServiceListScreen';
import { StaffScreen } from '../screens/StaffScreen';
import AbouteScreen from '../screens/AboutScreen';
import QuastionsAndAnswersScreen from '../screens/QuastionsAndAnswersScreen';

const Stack = createStackNavigator();

const getTitleForToolBar = (selectedScreen) => {
    switch (selectedScreen) {
        case GET_CLINIC_INFO: return "О нас"
        case GET_NEWS_LIST: return "Новости"
        case GET_SERVICE_CATEGORIES: return "Услуги"
        case GET_STAFF_LIST: return "Сотрудники"
    }
}

const header = () => {
    const { activeScreen } = useSelector(state => state.data)
    return <ToolBarMenu title={getTitleForToolBar(activeScreen)} />
}

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
            <Stack.Screen name="Aboute" component={(props) => <AbouteScreen {...props} />} />
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





