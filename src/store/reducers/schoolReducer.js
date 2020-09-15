import {
    LOADING, GET_SCHOOLS, GET_SCHOOLS_ERROR, ADD_PROFILE, GET_PROFILE
} from "../actions/types";

const INTIAL_STATE = {
    schools: []
}

export default (state = INTIAL_STATE, actions) => {
    switch (actions.type) {
        case LOADING:
            return { ...state, loading: true }
        case GET_SCHOOLS:
            return { ...state, schools: actions.payload }
        case GET_SCHOOLS_ERROR:
            return { ...state, schoolError: actions.payload }
        case ADD_PROFILE:
            return { ...state, newProfile: actions.payload }
        case GET_PROFILE:
            return { ...state, profile: actions.payload }

        default:
            return { ...state }
    }
}
