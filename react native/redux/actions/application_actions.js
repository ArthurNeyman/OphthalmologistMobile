import {
    SET_LOAD_STATUS,
    SET_SCREEN
} from './types'
import React from 'react'
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons"
import { Linking ,Alert } from "react-native";

export const routes =
{
    Home: {
        routeName: "Home",
        icon: ()=> <SimpleLineIcon size={25} name={"home"}/>,
        iconName: "home",
        viewName: "Главная"
    },
    ServiceList: {
        routeName: "ServiceList",
        icon: ()=> {return <SimpleLineIcon  color={"#00ADA8"} size={30} name={"list"}/>},
        iconName: "list",
        viewName: "Услуги"
    },
    StaffList: {
        routeName: "StaffList",
        icon: ()=> {return <SimpleLineIcon  color={"#00ADA8"} size={30} name={"people"}/>},
        iconName: "people",
        viewName: "Сотрудники"
    }
}


export const setLoadStatus = (status) => {
    return dispatch => {
        dispatch({
            type: SET_LOAD_STATUS,
            payload: status
        })
    }
}

export const setActiveScreen = (screen) => {
    return dispatch => {
        dispatch({
            type: SET_SCREEN,
            payload: routes[screen].viewName
        })
    }
}

export const linkToWhatsApp= (contact) => {
    Linking.canOpenURL("whatsapp://send?phone=" + contact).then(supported => {
        if (supported) {
            Linking.openURL("whatsapp://send?phone=" + contact);
        } else {
            Alert.alert("Ошибка перехода в чат WhatsApp","WhatsApp недоступен.Убедитесь что у вас устновлено приложение.")
        }
    });
}
