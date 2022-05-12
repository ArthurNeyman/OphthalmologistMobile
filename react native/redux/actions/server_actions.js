import {
    GET_NEWS_LIST,
    GET_NEWS,
    GET_SERVICE_LIST,
    GET_SERVICE,
    GET_STAFF_LIST,
    GET_STAFF,
    GET_CLINIC_INFO,
    GET_ANSWERS
} from "./types";

import { setLoadStatus } from "./application_actions";
import { staticState } from "../staticInfo";
import fetchWithTimeout from '@gluons/react-native-fetch-with-timeout';

const URL = "http://82.179.9.51:8080/api"
//--------------------------------------------------------------
const getUrlParamsRow = (params) => {
    let urlParams = ""
    if (params != null) {
        urlParams += "?"
        for (let i = 0; i < params.length; i++)
            Object.keys(params[i]).forEach(el =>
                urlParams += (el + "=" + params[i][el]) + (i != params.length - 1 ? "&" : "")
            )
    }
    console.log("URL_PARAMS", urlParams);
    return urlParams
}
const get = (urlEnd, inType, params) => {
    return async dispatch => {
        await dispatch(setLoadStatus(true))
        await fetchWithTimeout(URL + urlEnd + getUrlParamsRow(params), {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }, { timeout: 700 })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: inType,
                    payload: json
                })
            })
            .catch(error => {
                switch (inType) {
                    case GET_CLINIC_INFO: {
                        dispatch({
                            type: inType,
                            payload: staticState.clinic_info
                        })
                        break
                    }
                    case GET_SERVICE_LIST: {
                        dispatch({
                            type: inType,
                            payload: staticState.serviceList
                        })
                        break
                    }
                    case GET_SERVICE: {
                        dispatch({
                            type: inType,
                            payload: staticState.getServiceById(params[0].serviceId)
                        })
                        break
                    }
                    case GET_STAFF_LIST: {
                        dispatch({
                            type: inType,
                            payload: staticState.staffList
                        })
                        break
                    }
                    case GET_STAFF: {
                        dispatch({
                            type: inType,
                            payload: staticState.getStaffById(params[0].doctorId)
                        })
                        break
                    }
                    case GET_ANSWERS: {
                        dispatch({
                            type: inType,
                            payload: staticState.answers
                        })
                        break
                    }
                }
            })
        setTimeout(() => {
            dispatch(setLoadStatus(false))
        }, 800);
    }
}
const post = (urlEnd, inType, body) => {
    return async dispatch => {
        fetch(URL + urlEnd, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: body
        })
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: inType,
                    payload: json
                })
            })
            .catch(error => {
                console.log("POST_ERROR_FOR_" + inType, error)
            })
    }

}
//-----------------------SERVICES--------------------------------
export const getServiceList = () => {
    return get("/user/services", GET_SERVICE_LIST)
}
export const getServiceById = (serviceId) => {
    return get("/user/services", GET_SERVICE, [{ "serviceId": serviceId }])
}
//---------------------------NEWS--------------------------------
export const getNewsList = () => {
    return get("/user/news", GET_NEWS_LIST)
}
export const getNews = (newsId) => {
    return get("/user/news", GET_NEWS, [{ "newsId": newsId }])
}
//---------------------------STAFFS------------------------------
export const getStaffList = () => {
    return get("/user/doctors", GET_STAFF_LIST)
}
export const getStaff = (staffId) => {
    return get("/user/doctors", GET_STAFF, [{ "doctorId": staffId }])
}
//---------------------------------------------------------------
export const getClinicInfo = () => {
    return get("/user/info-clinic", GET_CLINIC_INFO, [{ "clinicId": 1 }])
}
export const getAnswers = () => {
    return get("/user/faq", GET_ANSWERS)
}