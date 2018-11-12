import { USER_LOGIN,
    USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE} from '../actionTypes';


const initialState = {
    userDetails: {},
    isLoading: false
}

export const authenticate = (state = initialState, action) => {
    switch(action.type){
    case USER_LOGIN:
        return {
            ...state,
            isLoading: true
        };
    case USER_LOGIN_SUCCESS:
        return {
            ...state,
            userDetails: action.payload,
            isLoading: false
        };
    case USER_LOGIN_FAILURE:
        return {
            ...state,
            error: action.error,
            isLoading: false
        };
    default:
    return state;
    }
}

export default authenticate;