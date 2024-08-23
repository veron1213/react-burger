import { USER_REGISTRATION_SUCCESS, USER_REGISTRATION_ERROR, USER_REGISTRATION,
         FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD,
         RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR, RESET_PASSWORD,
         AUTHORIZATION_SUCCESS, AUTHORIZATION_ERROR, AUTHORIZATION,
         LOGOUT_SUCCESS, LOGOUT_ERROR, LOGOUT,
         GET_USER_SUCCESS, GET_USER_ERROR, GET_USER,
         SET_USER, SET_AUTH_CHECKED
} from './actions.js';

const initialState = {
    user: {
            email: null, 
            name: null,
        },
    isAuthChecked: false,
    loading: false,
    error: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_CHECKED:
      return {
        ...state,
        isAuthChecked: action.payload
      }

        case USER_REGISTRATION:
        case FORGOT_PASSWORD:
        case RESET_PASSWORD:
        case AUTHORIZATION:
        case LOGOUT:
        case GET_USER:
            return {
                ...state,
                loading: true,
                error: null,
            }
       
        case SET_USER:
            return {
                ...state,
                user: {email: action.payload.email,
                    name: action.payload.name,
                },
                loading: false,
            }
        case USER_REGISTRATION_ERROR:
        case FORGOT_PASSWORD_ERROR:
        case RESET_PASSWORD_ERROR:
        case AUTHORIZATION_ERROR:
        case LOGOUT_ERROR:
        case GET_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        
        case AUTHORIZATION_SUCCESS:
        case USER_REGISTRATION_SUCCESS:
        case GET_USER_SUCCESS:
        case FORGOT_PASSWORD_SUCCESS:
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
            }


        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: {
                    email: null, 
                    name: null,
                },
                loading: false,
            }
            
        default:
            return state;
    }
}