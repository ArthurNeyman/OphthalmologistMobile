import {
    SET_SCREEN
} from './types'

export function setScreen(screen) {
    return function (dispatch, getState) {
        dispatch({
            type: SET_SCREEN,
            payload: screen
        })
    }
}