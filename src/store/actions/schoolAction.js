import { Get } from '../../apiServices/apiHandler.service'

import {
    LOADING, GET_SCHOOLS, GET_SCHOOLS_ERROR, ADD_PROFILE, GET_PROFILE
} from "./types";


export const getSchools = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING, payload: true });
            dispatch({ type: GET_SCHOOLS, payload: null })
            dispatch({ type: GET_SCHOOLS_ERROR, payload: null })

            const response = await Get(`search?name=`)
            const { status } = response;
            if (status === 200) {
                dispatch({ type: GET_SCHOOLS, payload: response.data })
                dispatch({ type: LOADING, payload: false });
            }
        }
        catch (error) {
            dispatch({ type: GET_SCHOOLS_ERROR, payload: error })
            dispatch({ type: LOADING, payload: false })
        }
    }
}

export const getProfile = () => {
    return async (dispatch) => {
        const response = await JSON.parse(localStorage.getItem('profile'))
        if (response && response.length > 0) {
            dispatch({ type: GET_PROFILE, payload: response })
        } else {
            dispatch({ type: GET_PROFILE, payload: [] })
        }
    }
}

export const saveProfile = async (postObj) => {
    return async (dispatch) => {
        const response = await JSON.parse(localStorage.getItem('profile'))
        if (response && response.length > 0) {
            let newData = [...response, postObj]
            dispatch({ type: ADD_PROFILE, payload: newData })
            localStorage.setItem('profile', JSON.stringify(newData))

        } else {
            localStorage.setItem('profile', JSON.stringify([postObj]))
            dispatch({ type: ADD_PROFILE, payload: [postObj] })
        }
    }
}



