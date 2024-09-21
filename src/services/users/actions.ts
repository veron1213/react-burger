import { registration, forgotPasswordApi, resetPasswordApi,
         authorizationApi, logoutApi, getUserApi, updateTokenApi,
         updateInformationApi } from "../../utils/burger-api.js";
         
import { AppDispatch, AppThunk } from "../../types/types";

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

export const UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS";
export const UPDATE_TOKEN_ERROR = "UPDATE_TOKEN_ERROR";
export const UPDATE_TOKEN = "UPDATE_TOKEN";

export const SET_USER = "SET_USER";
export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";

export const UPDATE_INFORMATION = "UPDATE_INFORMATION";
export const UPDATE_ERROR = "UPDATE_ERROR";

export const setAuthChecked = (value: boolean) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user: any) => ({
  type: SET_USER,
  payload: user,
});

export const checkUserAuth = () => {
  return (dispatch:any) => {
      if (localStorage.getItem("accessToken")) {
          dispatch(getUser())
            .catch(() => {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                const user= {email: null,
                  name: null,
              };
                dispatch(setUser(user));
             })
            .finally(() => dispatch(setAuthChecked(true)));
      } else {
          dispatch(setAuthChecked(true));
      }
  };
};



export interface IUserRegistrationAction {
  readonly type: typeof USER_REGISTRATION;
}

export const userRegistrationAction = (): IUserRegistrationAction => ({
  type: USER_REGISTRATION
});


export interface IUserRegistrationSuccessAction {
  readonly type: typeof USER_REGISTRATION_SUCCESS;
}

export const userRegistrationSuccessAction = (): IUserRegistrationSuccessAction => ({
  type: USER_REGISTRATION_SUCCESS
});


export interface IUserRegistrationErrorAction {
  readonly type: typeof USER_REGISTRATION_ERROR;
  readonly payload: string;
}

export const userRegistrationErrorAction = (payload: string): IUserRegistrationErrorAction => ({
  type: USER_REGISTRATION_ERROR,
  payload
});


export const userRegistration = (form: any) => (dispatch: AppDispatch) => {
    dispatch(userRegistrationAction());
    registration(form)
      .then((data) => {
        dispatch(userRegistrationSuccessAction());
          localStorage.setItem("accessToken", data.accessToken.split('Bearer ')[1]);
          localStorage.setItem("refreshToken", data.refreshToken);
      })
      .catch((e) => {
        dispatch(userRegistrationErrorAction(e.message));
      });
}



export interface IForgotPasswordAction {
  readonly type: typeof FORGOT_PASSWORD;
}

export const forgotPasswordAction = (): IForgotPasswordAction => ({
  type: FORGOT_PASSWORD
});


export interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

export const forgotPasswordSuccessAction = (): IForgotPasswordSuccessAction => ({
  type: FORGOT_PASSWORD_SUCCESS
});


export interface IForgotPasswordErrorAction {
  readonly type: typeof FORGOT_PASSWORD_ERROR;
  readonly payload: string;
}

export const forgotPasswordErrorAction = (payload: string): IForgotPasswordErrorAction => ({
  type: FORGOT_PASSWORD_ERROR,
  payload
});

export const forgotPassword = (form: any) => (dispatch: AppDispatch) => {

  dispatch(forgotPasswordAction());
  forgotPasswordApi(form)
    .then((data) => {
      dispatch(forgotPasswordSuccessAction());
    })
    .catch((e) => {
      dispatch(forgotPasswordErrorAction(e.message));
    });
}



export interface IResetPasswordAction {
  readonly type: typeof RESET_PASSWORD;
}

export const resetPasswordAction = (): IResetPasswordAction => ({
  type: RESET_PASSWORD
});


export interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export const resetPasswordSuccessAction = (): IResetPasswordSuccessAction => ({
  type: RESET_PASSWORD_SUCCESS
});


export interface IResetPasswordErrorAction {
  readonly type: typeof RESET_PASSWORD_ERROR;
  readonly payload: string;
}

export const resetPasswordErrorAction = (payload: string): IResetPasswordErrorAction => ({
  type: RESET_PASSWORD_ERROR,
  payload
});

export const resetPassword = (form: any) => (dispatch: AppDispatch) => {
  dispatch(resetPasswordAction());
  resetPasswordApi(form)
    .then(() => {
      dispatch(resetPasswordSuccessAction());
    })
    .catch((e) => {
      dispatch(resetPasswordErrorAction(e.message));
    });
}

export const authorization = (form: any) => (dispatch: AppDispatch) => {
  dispatch({
      type: AUTHORIZATION,
  });
  authorizationApi(form)
    .then((data) => {
      dispatch({
          type: AUTHORIZATION_SUCCESS,
        });
      localStorage.setItem("accessToken", data.accessToken.split('Bearer ')[1]);
      localStorage.setItem("refreshToken", data.refreshToken);
      dispatch(setUser(data.user));
      dispatch(setAuthChecked(true));
    })
    .catch((e) => {
      dispatch({
          type: AUTHORIZATION_ERROR,
          payload: e.message,
        });
    });
}


export const logout = () => (dispatch: AppDispatch) =>  {  
  dispatch({
      type: LOGOUT,
  });
  logoutApi()
    .then(() => {

      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      const user= {email: null,
                      name: null,
                  };
      dispatch(setUser(user));
      dispatch({
        type: LOGOUT_SUCCESS,
      });

    })
    .catch((e) => {
      dispatch({
          type: LOGOUT_ERROR,
          payload: e.message,
        });
    });
}

export const getUser = () => {
  return (dispatch) => {
    return getUserApi().then((data) => {
      dispatch(setUser(data.user));
    });
  };
};

export const updateInformation = (form) => (dispatch: AppDispatch) =>{
  dispatch({
    type: UPDATE_INFORMATION,
});
updateInformationApi(form)
  .then((data) => {
    dispatch(setUser(data.user));
    })
  .catch((e) => {
    if (e.message === "jwt expired") {
      updateToken();
      dispatch(updateInformation(form))
  } else {
    dispatch({
        type: UPDATE_ERROR,
        payload: e.message,
      });
  }});
}



export interface IUpdateTokenAction {
  readonly type: typeof UPDATE_TOKEN;
}

export const updateTokenAction = (): IUpdateTokenAction => ({
  type: UPDATE_TOKEN
});


export interface IUpdateTokenSuccessAction {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
}

export const updateTokenSuccessAction = (): IUpdateTokenSuccessAction => ({
  type: UPDATE_TOKEN_SUCCESS
});


export interface IUpdateTokenErrorAction {
  readonly type: typeof UPDATE_TOKEN_ERROR;
  readonly payload: string;
}

export const updateTokenErrorAction = (payload: string): IUpdateTokenErrorAction => ({
  type: UPDATE_TOKEN_ERROR,
  payload
});

export const updateToken = () => (dispatch: AppDispatch) => {
  dispatch(updateTokenAction());
  updateTokenApi()
    .then((data) => {
      dispatch({
          type: UPDATE_TOKEN_SUCCESS,
          payload: data.user,
        });
        localStorage.setItem("accessToken", data.accessToken.split('Bearer ')[1]);
        localStorage.setItem("refreshToken", data.refreshToken);
    })
    .catch((e) => {
      dispatch(updateTokenErrorAction(e.message));
    });
}


export type TUsersActions = 
    | IUserRegistrationAction
    | IUserRegistrationSuccessAction
    | IUserRegistrationErrorAction
    | IForgotPasswordAction
    | IForgotPasswordSuccessAction
    | IForgotPasswordErrorAction
    | IResetPasswordAction
    | IResetPasswordSuccessAction
    | IResetPasswordErrorAction
    | IUpdateTokenAction
    | IUpdateTokenErrorAction;    