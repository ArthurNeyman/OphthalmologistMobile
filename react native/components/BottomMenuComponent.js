import React from 'react';
import { StyleSheet } from "react-native"
import { BottomNavigation } from 'react-native-material-ui';

import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons"
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import { useSelector, useDispatch } from 'react-redux'
import { GET_CLINIC_INFO,GET_SERVICE_CATEGORIES,GET_STAFF_LIST } from '../redux/actions/types';
import { setActiveScreen } from '../redux/actions/application_actions';
import { CommonActions } from '@react-navigation/native';
import { NavigationActions, StackActions } from 'react-navigation';

const BottomMenuComponent = (props) => {
    
    const {activeScreen}=useSelector(state=>state.data)
    const dispatch=useDispatch()

    return (
        <BottomNavigation>
            <BottomNavigation.Action
                style={{
                    icon: { color: activeScreen == GET_CLINIC_INFO ? "#00ADA8" : "black" },
                    label: { color: activeScreen == GET_CLINIC_INFO ? "#00ADA8" : "black" },
                }}
                key={GET_CLINIC_INFO}
                icon={<SimpleLineIcon size={25} name="home" />}
                label="О нас"
                onPress={() => { dispatch(setActiveScreen(GET_CLINIC_INFO));        
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }]
                   })
                }}
            />
            <BottomNavigation.Action
                style={{
                    icon: { color: activeScreen == GET_SERVICE_CATEGORIES ? "#00ADA8" : "black" },
                    label: { color: activeScreen == GET_SERVICE_CATEGORIES ? "#00ADA8" : "black" },
                }}
                key={GET_SERVICE_CATEGORIES}
                icon={<AntDesignIcon size={25} name="profile" />}
                label="Услуги"
                onPress={() => {
                    dispatch(setActiveScreen(GET_SERVICE_CATEGORIES)); 
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'ServiceCatagoryList' }]
                   })
                }}
            />
            <BottomNavigation.Action
                style={{
                    icon: { color: activeScreen == GET_STAFF_LIST ? "#00ADA8" : "black" },
                    label: { color: activeScreen == GET_STAFF_LIST ? "#00ADA8" : "black" },
                }}
                key={GET_STAFF_LIST}
                icon={<MaterialIcon size={25} name="people-outline" />}
                label="Персонал"
                onPress={() => {
                    dispatch(setActiveScreen(GET_STAFF_LIST))
                    props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'Staff' }]
                   })               
                }}
            />
        </BottomNavigation>
    );
};

const styles = StyleSheet.create({
});

export default BottomMenuComponent;