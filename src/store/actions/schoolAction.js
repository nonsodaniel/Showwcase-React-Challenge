import { Get, Put } from '../../apiServices/apiHandler.service'

import {
    LOADING, GET_SCHOOLS, GET_SCHOOLS_ERROR
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
