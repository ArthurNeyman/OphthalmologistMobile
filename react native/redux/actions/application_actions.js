import {
    SET_LOAD_STATUS,
    SET_SCREEN
} from './types'

export const setLoadStatus = (status) => {
    return  async dispatch => {
        dispatch({
            type: SET_LOAD_STATUS,
            payload: status
        })
    }
}
export const setActiveScreen = (screen) => {
    console.log("SAS",screen);
    return async dispatch => {
        dispatch({
            type: SET_SCREEN,
            payload: screen
        })
    }
}
