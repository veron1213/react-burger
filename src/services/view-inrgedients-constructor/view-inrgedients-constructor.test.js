import { ingredientsConstructorReducer } from "./reducer";
import {
  ADD_INGREDIENTS_CONSTRUCTOR,
  DELETE_INGREDIENTS_CONSTRUCTOR,
  ADD_BUN_CONSTRUCTOR,
  REPLACE_INGREDIENTS,
  CLEAR_CONSTRUCTOR,
} from "./actions";
import { initialState } from "./reducer";

describe("todos ingredientsConstructorReducer", () => {
  it("should return the initial state", () => {
    expect(ingredientsConstructorReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD_INGREDIENTS_CONSTRUCTOR", () => {
    const detail = {
      _id: "60666c42cc7b410027a1a9b5",
      name: "Говяжий метеорит (отбивная)",
      type: "main",
      proteins: 800,
      fat: 800,
      carbohydrates: 300,
      calories: 2674,
      price: 3000,
      image: "https://code.s3.yandex.net/react/code/meat-04.png",
      image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
      __v: 0,
      key: 1,
    };
    expect(
      ingredientsConstructorReducer(initialState, {
        type: ADD_INGREDIENTS_CONSTRUCTOR,
        payload: detail,
      })
    ).toEqual({
      ...initialState,
      ingredients: [...initialState.ingredients, detail],
    });
  });

  it("should handle DELETE_INGREDIENTS_CONSTRUCTOR", () => {
    const key = 1;
    const state = {
      bun: null,
      ingredients: [
        {
          _id: "60666c42cc7b410027a1a9b5",
          name: "Говяжий метеорит (отбивная)",
          type: "main",
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: "https://code.s3.yandex.net/react/code/meat-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-04-large.png",
          __v: 0,
          key: 1,
        },
      ],
    };
    expect(
      ingredientsConstructorReducer(state, {
        type: DELETE_INGREDIENTS_CONSTRUCTOR,
        payload: key,
      })
    ).toEqual({
      ...initialState,
    });
  });

  it("should handle ADD_BUN_CONSTRUCTOR", () => {
    const detail = {
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
    };
    expect(
      ingredientsConstructorReducer(initialState, {
        type: ADD_BUN_CONSTRUCTOR,
        payload: detail,
      })
    ).toEqual({
      ...initialState,
      bun: detail,
    });
  });

  it("should handle CLEAR_CONSTRUCTOR", () => {
    expect(
      ingredientsConstructorReducer(initialState, {
        type: CLEAR_CONSTRUCTOR,
      })
    ).toEqual({
      bun: null,
      ingredients: [],
    });
  });

  it("should handle REPLACE_INGREDIENTS", () => {
    const state = {
      bun: null,
      ingredients: ["ingredient1", "ingredient2", "ingredient3"],
    };

    expect(
      ingredientsConstructorReducer(state, {
        type: REPLACE_INGREDIENTS,
        payload: { dragIndex: 1, hoverIndex: 0 },
      })
    ).toEqual({
      bun: null,
      ingredients: ["ingredient2", "ingredient1", "ingredient3"],
    });
  });
});
