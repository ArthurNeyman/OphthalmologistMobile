import {
    GET_NEWS_LIST,
    GET_NEWS,
    GET_SERVICE_LIST,
    GET_SERVICE,
    SET_LOAD_STATUS
} from "./types";

const URL = "http://82.179.9.51:8080/api"

const get = (urlEnd, body, inType) => {
    
    try {
        return async dispatch => {
            dispatch({
                type: SET_LOAD_STATUS,
                payload: true
            }) 
            fetch(URL + urlEnd, {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body : Object.keys(body).length == 0 ? null : body
            })
                .then(response => response.json())
                .then(json => {
                    dispatch({
                        type: inType,
                        payload: json
                    })
                    dispatch({
                        type: SET_LOAD_STATUS,
                        payload: false
                    })
                })
        }
    } catch (error) {
        console.log(error)
    }

}

export const getNewsList = () => {
    return get("/user/news", {}, GET_NEWS_LIST)
}

export const getNewsById = (newsId) => {
    return get("/user/news", { "newsId": newsId }, GET_NEWS)
}

export const getServiceList = () => {
    return get("/user/services", {}, GET_SERVICE_LIST)
}

export const getServiceById = (serviceID) => {
    return get("/user/sevices", { "serviceID": serviceID }, GET_SERVICE)
}