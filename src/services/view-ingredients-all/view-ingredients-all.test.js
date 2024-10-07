import { viewIngredientsAllReducer } from "./reducer";
import {
  INGREDIENTS_LOAD_SUCCESS,
  INGREDIENTS_LOAD_ERROR,
  INGREDIENTS_LOADING,
} from "./actions";
import { initialState } from "./reducer";
import { order } from "../valueForTest";

describe("todos viewIngredientsAllReducer", () => {
  it("should return the initial state", () => {
    expect(viewIngredientsAllReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle INGREDIENTS_LOADING", () => {
    expect(
      viewIngredientsAllReducer(initialState, {
        type: INGREDIENTS_LOADING,
      })
    ).toEqual({ ...initialState, loading: true });
  });

  it("should handle INGREDIENTS_LOAD_SUCCESS", () => {
    const ingredient = [order];
    expect(
      viewIngredientsAllReducer(initialState, {
        type: INGREDIENTS_LOAD_SUCCESS,
        payload: ingredient,
      })
    ).toEqual({ ...initialState, ingredients: ingredient });
  });

  it("should handle INGREDIENTS_LOAD_ERROR", () => {
    expect(
      viewIngredientsAllReducer(initialState, {
        type: INGREDIENTS_LOAD_ERROR,
        payload: "Ошибка",
      })
    ).toEqual({ ...initialState, loading: false, error: "Ошибка" });
  });
});
