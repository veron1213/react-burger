import { getIngredients } from "../../utils/burger-api.js";
import { AppDispatch, AppThunk, IngredientType } from "../../types/types";
export const INGREDIENTS_LOAD_SUCCESS: "INGREDIENTS_LOAD_SUCCESS" = "INGREDIENTS_LOAD_SUCCESS";
export const INGREDIENTS_LOAD_ERROR: "INGREDIENTS_LOAD_ERROR" = "INGREDIENTS_LOAD_ERROR";
export const INGREDIENTS_LOADING: "INGREDIENTS_LOADING" = "INGREDIENTS_LOADING";

export interface IIngredientsLoadingAction {
  readonly type: typeof INGREDIENTS_LOADING;
}

export const ingredientsLoadingAction = (): IIngredientsLoadingAction => ({
  type: INGREDIENTS_LOADING
});



export interface IIngredientsLoadErrorAction {
  readonly type: typeof INGREDIENTS_LOAD_ERROR;
  readonly payload: string;
}

export const ingredientsLoadErrorAction = (payload: string): IIngredientsLoadErrorAction => ({
  type: INGREDIENTS_LOAD_ERROR,
  payload
});



export interface IIngredientsLoadSuccessAction {
  readonly type: typeof INGREDIENTS_LOAD_SUCCESS;
  readonly payload: IngredientType;
}

export const ingredientsLoadSuccessAction = (payload: IngredientType): IIngredientsLoadSuccessAction => ({
  type: INGREDIENTS_LOAD_SUCCESS,
  payload
});



export type TViewIngredientsAllActions = 
    | IIngredientsLoadingAction
    | IIngredientsLoadSuccessAction
    | IIngredientsLoadErrorAction;   

export const loadIngredients: AppThunk = () => (dispatch: AppDispatch) => {
    dispatch(ingredientsLoadingAction());
    getIngredients()
      .then((data) => {
        dispatch((ingredientsLoadSuccessAction(data.data)));
      })
      .catch((e) => {
        dispatch(ingredientsLoadErrorAction(e.message));
      });
}