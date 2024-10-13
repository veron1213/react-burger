import { userReducer } from "./reducer";
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
} from "./actions";
import { initialState } from "./reducer";

describe("todos userReducer", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle USER_REGISTRATION", () => {
    expect(
      userReducer(initialState, {
        type: USER_REGISTRATION,
      })
    ).toEqual({ ...initialState, loading: true });
  });
  it("should handle FORGOT_PASSWORD", () => {
    expect(
      userReducer(initialState, {
        type: FORGOT_PASSWORD,
      })
    ).toEqual({ ...initialState, loading: true });
  });
  it("should handle RESET_PASSWORD", () => {
    expect(
      userReducer(initialState, {
        type: RESET_PASSWORD,
      })
    ).toEqual({ ...initialState, loading: true });
  });
  it("should handle AUTHORIZATION", () => {
    expect(
      userReducer(initialState, {
        type: AUTHORIZATION,
      })
    ).toEqual({ ...initialState, loading: true });
  });
  it("should handle LOGOUT", () => {
    expect(
      userReducer(initialState, {
        type: LOGOUT,
      })
    ).toEqual({ ...initialState, loading: true });
  });

  it("should handle SET_AUTH_CHECKED", () => {
    expect(
      userReducer(initialState, {
        type: SET_AUTH_CHECKED,
        payload: false,
      })
    ).toEqual({ ...initialState, isAuthChecked: false });
  });
  it("should handle SET_USER", () => {
    const user = {
      email: "email@mail.ru",
      name: "Виктор",
    };
    expect(
      userReducer(initialState, {
        type: SET_USER,
        payload: user,
      })
    ).toEqual({
      ...initialState,
      user: { email: user.email, name: user.name },
    });
  });
  it("should handle USER_REGISTRATION_ERROR", () => {
    expect(
      userReducer(initialState, {
        type: USER_REGISTRATION_ERROR,
        payload: "Ошибка",
      })
    ).toEqual({ ...initialState, error: "Ошибка" });
  });
  it("should handle FORGOT_PASSWORD_ERROR", () => {
    expect(
      userReducer(initialState, {
        type: FORGOT_PASSWORD_ERROR,
        payload: "Ошибка",
      })
    ).toEqual({ ...initialState, error: "Ошибка" });
  });

  it("should handle RESET_PASSWORD_ERROR", () => {
    expect(
      userReducer(initialState, {
        type: RESET_PASSWORD_ERROR,
        payload: "Ошибка",
      })
    ).toEqual({ ...initialState, error: "Ошибка" });
  });
  it("should handle AUTHORIZATION_ERROR", () => {
    expect(
      userReducer(initialState, {
        type: AUTHORIZATION_ERROR,
        payload: "Ошибка",
      })
    ).toEqual({ ...initialState, error: "Ошибка" });
  });
  it("should handle LOGOUT_ERROR", () => {
    expect(
      userReducer(initialState, {
        type: LOGOUT_ERROR,
        payload: "Ошибка",
      })
    ).toEqual({ ...initialState, error: "Ошибка" });
  });

  it("should handle AUTHORIZATION_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: AUTHORIZATION_SUCCESS,
      })
    ).toEqual(initialState);
  });
  it("should handle USER_REGISTRATION_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: USER_REGISTRATION_SUCCESS,
      })
    ).toEqual(initialState);
  });
  it("should handle FORGOT_PASSWORD_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: FORGOT_PASSWORD_SUCCESS,
      })
    ).toEqual(initialState);
  });
  it("should handle RESET_PASSWORD_SUCCESS", () => {
    expect(
      userReducer(initialState, {
        type: RESET_PASSWORD_SUCCESS,
      })
    ).toEqual(initialState);
  });

  it("should handle LOGOUT_SUCCESS", () => {
    const user = {
      user: {
        email: "qwert@mail.ru",
        name: "Борис",
      },
      isAuthChecked: true,
      loading: false,
      error: null,
    };
    expect(
      userReducer(initialState, {
        type: LOGOUT_SUCCESS,
      })
    ).toEqual(initialState);
  });
});
