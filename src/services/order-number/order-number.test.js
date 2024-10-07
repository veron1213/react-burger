import { orderNumberReducer } from "./reducer";
import {
  ORDER_NUMBER_LOAD_SUCCESS,
  ORDER_NUMBER_LOAD_ERROR,
  ORDER_NUMBER_LOADING,
} from "./actions";
import { initialState } from "./reducer";

describe("todos orderNumberReducer", () => {
  it("should return the initial state", () => {
    expect(orderNumberReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ORDER_NUMBER_LOADING", () => {
    expect(
      orderNumberReducer(initialState, {
        type: ORDER_NUMBER_LOADING,
      })
    ).toEqual({ ...initialState, loading: true });
  });

  it("should handle ORDER_NUMBER_LOAD_SUCCESS", () => {
    expect(
      orderNumberReducer(initialState, {
        type: ORDER_NUMBER_LOAD_SUCCESS,
        payload: 123,
      })
    ).toEqual({ ...initialState, order: 123 });
  });

  it("should handle ORDER_NUMBER_LOAD_ERROR", () => {
    expect(
      orderNumberReducer(initialState, {
        type: ORDER_NUMBER_LOAD_ERROR,
        payload: "Ошибка",
      })
    ).toEqual({ ...initialState, loading: false, error: "Ошибка" });
  });
});
