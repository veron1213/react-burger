import { ingredientDetailsReducer } from "./reducer";
import { ADD_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS } from "./actions";
import { initialState } from "./reducer";

describe("todos ingredientDetailsReducer", () => {
  it("should return the initial state", () => {
    expect(ingredientDetailsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD_INGREDIENT_DETAILS", () => {
    const detail = {
      image: "https://code.s3.yandex.net/react/code/bun-02.png",
      name: "Краторная булка N-200i",
      calories: 420,
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
    };
    expect(
      ingredientDetailsReducer(initialState, {
        type: ADD_INGREDIENT_DETAILS,
        detail: detail,
      })
    ).toEqual({
      ingredient: detail,
    });
  });

  it("should handle DELETE_INGREDIENT_DETAILS", () => {
    expect(
      ingredientDetailsReducer(initialState, {
        type: DELETE_INGREDIENT_DETAILS,
      })
    ).toEqual({
      ingredient: null,
    });
  });
});
