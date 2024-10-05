import { registration, forgotPasswordApi, resetPasswordApi,
         authorizationApi, logoutApi, getUserApi, updateTokenApi,
         updateInformationApi } from "../../utils/burger-api";
         
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

export const UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS";
export const UPDATE_TOKEN_ERROR = "UPDATE_TOKEN_ERROR";
export const UPDATE_TOKEN = "UPDATE_TOKEN";

export const SET_USER = "SET_USER";
export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";

export const UPDATE_INFORMATION = "UPDATE_INFORMATION";
export const UPDATE_ERROR = "UPDATE_ERROR";


export interface ISetAuthCheckedAction {
  readonly type: typeof SET_AUTH_CHECKED;
  readonly payload: boolean;
}

export const setAuthCheckedAction = (payload: boolean): ISetAuthCheckedAction => ({
  type: SET_AUTH_CHECKED,
  payload
});



export interface ISetUserAction {
  readonly type: typeof SET_USER;
  readonly payload: any;
}

export const setUserAction = (payload: any): ISetUserAction => ({
  type: SET_USER,
  payload
});



export const checkUserAuth: AppThunk = () => {
  return (dispatch: any) => {
      if (localStorage.getItem("accessToken")) {
          dispatch(getUser())
            .catch(() => {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                const user= {email: null,
                  name: null,
              };
                dispatch(setUserAction(user));
             })
            .finally(() => dispatch(setAuthCheckedAction(true)));
      } else {
          dispatch(setAuthCheckedAction(true));
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


export const userRegistration: AppThunk = (form: {email: string, password: string, name: string}) => (dispatch: AppDispatch) => {
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

export const forgotPassword: AppThunk = (form: {email: string}) => (dispatch: AppDispatch) => {

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

export const resetPassword: AppThunk = (form: {token: string, password: string}) => (dispatch: AppDispatch) => {
  dispatch(resetPasswordAction());
  resetPasswordApi(form)
    .then(() => {
      dispatch(resetPasswordSuccessAction());
    })
    .catch((e) => {
      dispatch(resetPasswordErrorAction(e.message));
    });
}



export interface IAuthorizationAction {
  readonly type: typeof AUTHORIZATION;
}

export const authorizationAction = (): IAuthorizationAction => ({
  type: AUTHORIZATION
});


export interface IAuthorizationSuccessAction {
  readonly type: typeof AUTHORIZATION_SUCCESS;
}

export const authorizationSuccessAction = (): IAuthorizationSuccessAction => ({
  type: AUTHORIZATION_SUCCESS
});


export interface IAuthorizationErrorAction {
  readonly type: typeof AUTHORIZATION_ERROR;
  readonly payload: string;
}

export const authorizationErrorAction = (payload: string): IAuthorizationErrorAction => ({
  type: AUTHORIZATION_ERROR,
  payload
});

export const authorization: AppThunk = (form: {email: string, password: string}) => (dispatch: AppDispatch) => {
  dispatch(authorizationAction());
  authorizationApi(form)
    .then((data) => {
      dispatch(authorizationSuccessAction());
      localStorage.setItem("accessToken", data.accessToken.split('Bearer ')[1]);
      localStorage.setItem("refreshToken", data.refreshToken);
      dispatch(setUserAction(data.user));
      dispatch(setAuthCheckedAction(true));
    })
    .catch((e) => {
      dispatch(authorizationErrorAction(e.message));
    });
}



export interface ILogoutAction {
  readonly type: typeof LOGOUT;
}

export const logoutAction = (): ILogoutAction => ({
  type: LOGOUT
});


export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
}

export const logoutSuccessAction = (): ILogoutSuccessAction => ({
  type: LOGOUT_SUCCESS
});


export interface ILogoutErrorAction {
  readonly type: typeof LOGOUT_ERROR;
  readonly payload: string;
}

export const logoutErrorAction = (payload: string): ILogoutErrorAction => ({
  type: LOGOUT_ERROR,
  payload
});


export const logout: AppThunk = () => (dispatch: AppDispatch) =>  {  
  dispatch(logoutAction());
  logoutApi()
    .then(() => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      const user= {email: null,
                      name: null,
                  };
      dispatch(setUserAction(user));
      dispatch(logoutSuccessAction());

    })
    .catch((e) => {
      dispatch(logoutErrorAction(e.message));
    });
}


export const getUser: AppThunk = () => {
  return (dispatch: AppDispatch) => {
    return getUserApi().then((data) => {
      dispatch(setUserAction(data.user));
    });
  };
};



export interface IUpdateInformationAction {
  readonly type: typeof UPDATE_INFORMATION;
}

export const updateInformationAction = (): IUpdateInformationAction => ({
  type: UPDATE_INFORMATION
});


export interface IUpdateErrorAction {
  readonly type: typeof UPDATE_ERROR;
  readonly payload: string;
}

export const updateErrorAction = (payload: string): IUpdateErrorAction => ({
  type: UPDATE_ERROR,
  payload
});

export const updateInformation: AppThunk = (form: {name: string, email: string, password: string}) => (dispatch: AppDispatch) =>{
  dispatch(updateInformationAction());
updateInformationApi(form)
  .then((data) => {
    dispatch(setUserAction(data.user));
    })
  .catch((e) => {
    if (e.message === "jwt expired") {
      updateToken();
      // dispatch(updateInformation(form))
  } else {
    dispatch(updateErrorAction(e.message));
  }});
}



export interface IUpdateTokenAction {
  readonly type: typeof UPDATE_TOKEN;
}

export const updateTokenAction = (): IUpdateTokenAction => ({
  type: UPDATE_TOKEN
});


export interface IUpdateTokenSuccessAction {
  readonly type: typeof UPDATE_TOKEN_SUCCESS
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

export const updateToken: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(updateTokenAction());
  updateTokenApi()
    .then((data) => {
      dispatch(updateTokenSuccessAction());
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
    | IUpdateTokenErrorAction
    | ISetAuthCheckedAction
    | ISetUserAction
    | IAuthorizationAction
    | IAuthorizationSuccessAction
    | IAuthorizationErrorAction
    | ILogoutAction
    | ILogoutSuccessAction
    | ILogoutErrorAction
    | IUpdateInformationAction
    | IUpdateErrorAction
    | IUpdateTokenSuccessAction;    