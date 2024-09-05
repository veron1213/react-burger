import { registration, forgotPasswordApi, resetPasswordApi,
         authorizationApi, logoutApi, getUserApi, updateTokenApi,
         updateInformationApi } from "../../utils/burger-api.js";

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

export const setAuthChecked = (value) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const checkUserAuth = () => {
  return (dispatch) => {
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

export const userRegistration = (form) => dispatch => {

    dispatch({
        type: USER_REGISTRATION,
    });
    registration(form)
      .then((data) => {
        dispatch({
            type: USER_REGISTRATION_SUCCESS,
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
         // payload: data.data,
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
  console.log(123)
  resetPasswordApi(form)
    .then(() => {
      dispatch({
          type: RESET_PASSWORD_SUCCESS,
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


export const logout = () => dispatch=>  {  

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

export const updateInformation = (form) => dispatch=>{
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

export const updateToken = () => dispatch => {
  dispatch({
      type: UPDATE_TOKEN,
  });
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
      dispatch({
          type: UPDATE_TOKEN_ERROR,
          payload: e.message,
        });
    });
}