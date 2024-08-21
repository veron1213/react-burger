import { registration, forgotPasswordApi, resetPasswordApi,
         authorizationApi, logoutApi, getUserApi } from "../../utils/burger-api.js";

export const USER_REGISTRATION_SUCCESS = "USER_REGISTRATION_SUCCESS";
export const USER_REGISTRATION_ERROR = "USER_REGISTRATION_ERROR";
export const USER_REGISTRATION = "USER_REGISTRATION";

export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR = "FORGOT_PASSWORD_ERROR";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";

export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const RESET_PASSWORD = "RESET_PASSWORD";

export const AUTHORIZATION_SUCCESS = "AUTHORIZATION_SUCCESS";
export const AUTHORIZATION_ERROR = "AUTHORIZATION_ERROR";
export const AUTHORIZATION = "AUTHORIZATION";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR = "LOGOUT_ERROR";
export const LOGOUT = "LOGOUT";

export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USER = "GET_USER";


export const userRegistration = (form) => dispatch => {

    dispatch({
        type: USER_REGISTRATION,
    });
    registration(form)
      .then((data) => {
        dispatch({
            type: USER_REGISTRATION_SUCCESS,
            payload: data.user,
          });

          localStorage.setItem("accessToken", data.accessToken.split('Bearer ')[1]);
          localStorage.setItem("refreshToken", data.refreshToken);
      })
      .catch((e) => {
        dispatch({
            type: USER_REGISTRATION_ERROR,
            payload: e.message,
          });
      });
}

export const forgotPassword = (form) => dispatch => {

  dispatch({
      type: FORGOT_PASSWORD,
  });
  forgotPasswordApi(form)
    .then((data) => {
      dispatch({
          type: FORGOT_PASSWORD_SUCCESS,
          payload: data.data,
        });

    })
    .catch((e) => {
      dispatch({
          type: FORGOT_PASSWORD_ERROR,
          payload: e.message,
        });
    });
}

export const resetPassword = (form) => dispatch => {
  dispatch({
      type: RESET_PASSWORD,
  });
  resetPasswordApi(form)
    .then((data) => {
      dispatch({
          type: RESET_PASSWORD_SUCCESS,
          payload: data.data,
        });
    })
    .catch((e) => {
      dispatch({
          type: RESET_PASSWORD_ERROR,
          payload: e.message,
        });
    });
}

export const authorization = (form) => dispatch => {
  dispatch({
      type: AUTHORIZATION,
  });
  authorizationApi(form)
    .then((data) => {
      dispatch({
          type: AUTHORIZATION_SUCCESS,
          payload: data.user,
        });
      localStorage.setItem("accessToken", data.accessToken.split('Bearer ')[1]);
      localStorage.setItem("refreshToken", data.refreshToken);
    })
    .catch((e) => {
      dispatch({
          type: AUTHORIZATION_ERROR,
          payload: e.message,
        });
    });
}


export const logout = () => dispatch => {
  dispatch({
      type: LOGOUT,
  });
  logoutApi()
    .then((data) => {
      dispatch({
          type: LOGOUT_SUCCESS,
          payload: data,
        });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    })
    .catch((e) => {
      dispatch({
          type: LOGOUT_ERROR,
          payload: e.message,
        });
    });
}

export const getUser = () => dispatch => {
  dispatch({
      type: GET_USER,
  });
  logoutApi()
    .then((data) => {
      dispatch({
          type: GET_USER_SUCCESS,
          payload: data.user,
        });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    })
    .catch((e) => {
      dispatch({
          type: GET_USER_ERROR,
          payload: e.message,
        });
    });
}