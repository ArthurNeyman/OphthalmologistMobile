//ГОСТЬ
    //получить список врачей список врачей
    //получить список  услуг
    //получить инофрмацию о клинике 
    //регистрация
    //авторизация

//Авторизированный
    //выйти с кабинета- просто удалить токен
    //Управление профилем
    //

//Врач
    //Список пациентов
    //Личный кабинет
    //Изменить свои настройки
    //Выйти с акаунта
    //


import {
    GET_CLINIC_INFO,
    SET_SCREEN
} from './types'

import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../reducers/reducer';

export function setScreen(screen) {
    return function (dispatch, getState) {
        dispatch({
            type: SET_SCREEN,
            payload: screen
        })
    }
}

export function get_clinic_info() {
    return async function (dispatch, getState) {
       await fetch("data.js")
       .then(response=>response.json())
       .then(json=>data.clinic_info) 
       .catch(error=>alert(error))
    }
}

export async function init_async_storage_data() {
    try {
        await AsyncStorage.setItem('@clinic_info', clinic_info(
            {
                mainContact: { name: "Заведующий отделением № 7, Хатминский Николай Юрьевич", contact: "+7 913 123-88-81" },
                constacts: [
                    {
                        name: "Сall центр",
                        contact: "39-65-33"
                    },
                    {
                        name: " Отделение № 7",
                        contact: "39-60-58"
                    },
                    {
                        name: " Отделение № 7",
                        contact: "68-10-96"
                    }
                ],
                adress: "650066, г. Кемерово, пр-т Октябрьский, 22"
            }
        ))
    } catch (e) {

    }
}
