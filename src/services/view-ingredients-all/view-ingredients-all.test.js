import { viewIngredientsAllReducer } from "./reducer";
import {
  INGREDIENTS_LOAD_SUCCESS,
  INGREDIENTS_LOAD_ERROR,
  INGREDIENTS_LOADING,
} from "./actions";
import { initialState } from "./reducer";

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
    const ingredient = [
      {
        _id: "60666c42cc7b410027a1a9b1",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
      },
    ];
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
