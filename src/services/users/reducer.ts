import {
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_ERROR,
  USER_REGISTRATION,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  FORGOT_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD,
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_ERROR,
  AUTHORIZATION,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  LOGOUT,
  SET_USER,
  SET_AUTH_CHECKED,
  TUsersActions,
} from "./actions";

type TInitialState = {
  user: {
    email: string | null;
    name: string | null;
  };
  isAuthChecked: boolean;
  loading: boolean;
  error: string | null;
};

export const initialState: TInitialState = {
  user: {
    email: null,
    name: null,
  },
  isAuthChecked: false,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action: TUsersActions) => {
  switch (action.type) {
    case SET_AUTH_CHECKED:
      return {
        ...state,
        isAuthChecked: action.payload,
      };

    case USER_REGISTRATION:
    case FORGOT_PASSWORD:
    case RESET_PASSWORD:
    case AUTHORIZATION:
    case LOGOUT: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }

    case SET_USER:
      return {
        ...state,
        user: { email: action.payload.email, name: action.payload.name },
        loading: false,
      };
    case USER_REGISTRATION_ERROR:
    case FORGOT_PASSWORD_ERROR:
    case RESET_PASSWORD_ERROR:
    case AUTHORIZATION_ERROR:
    case LOGOUT_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case AUTHORIZATION_SUCCESS:
    case USER_REGISTRATION_SUCCESS:
    case FORGOT_PASSWORD_SUCCESS:
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: {
          email: null,
          name: null,
        },
        loading: false,
      };

    default:
      return state;
  }
};
