import {
  INGREDIENTS_LOAD_SUCCESS,
  INGREDIENTS_LOAD_ERROR,
  INGREDIENTS_LOADING,
  TViewIngredientsAllActions,
} from "./actions";
import { IngredientType } from "../../types/types";

type TInitialState = {
  ingredients: IngredientType[];
  loading: boolean;
  error: string | null;
};

export const initialState: TInitialState = {
  ingredients: [],
  loading: false,
  error: null,
};

export const viewIngredientsAllReducer = (
  state = initialState,
  action: TViewIngredientsAllActions
) => {
  switch (action.type) {
    case INGREDIENTS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case INGREDIENTS_LOAD_SUCCESS:
      return {
        ...state,
        ingredients: action.payload,
        loading: false,
      };
    case INGREDIENTS_LOAD_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
