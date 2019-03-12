import { USER_LOGIN,
    USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, GOOGLE_AUTH, GOOGLE_AUTH_FAILURE} from '../actionTypes';


const initialState = {
    userDetails: {},
    isLoading: false
}

export const authenticate = (state = initialState, action) => {
    switch(action.type){
    case GOOGLE_AUTH:
        return {
            ...state,
            isLoadingGoogle: true
        };
    case GOOGLE_AUTH_FAILURE:
        return {
            ...state,
            isLoadingGoogle: false,
            error: action.error
        };
    case USER_LOGIN:
        return {
            ...state,
            isLoading: true
        };
    case USER_LOGIN_SUCCESS:
        return {
            ...state,
            userDetails: action.data,
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