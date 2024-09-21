import { IngredientType, IngredientConstructorType } from "../../types/types";
import { AppDispatch, AppThunk } from "../../types/types";
export const ADD_INGREDIENTS_CONSTRUCTOR: "ADD_INGREDIENTS_CONSTRUCTOR" = "ADD_INGREDIENTS_CONSTRUCTOR";
export const ADD_BUN_CONSTRUCTOR: "ADD_BUN_CONSTRUCTOR" = "ADD_BUN_CONSTRUCTOR";
export const DELETE_INGREDIENTS_CONSTRUCTOR: "DELETE_INGREDIENTS_CONSTRUCTOR" = "DELETE_INGREDIENTS_CONSTRUCTOR";
export const REPLACE_INGREDIENTS: "REPLACE_INGREDIENTS" = "REPLACE_INGREDIENTS";
export const CLEAR_CONSTRUCTOR: "CLEAR_CONSTRUCTOR" = "CLEAR_CONSTRUCTOR";

export interface IAddIngredientsConstructorAction {
    readonly type: typeof ADD_INGREDIENTS_CONSTRUCTOR;
    readonly payload: IngredientConstructorType;
  }
  
export const AddIngredientsConstructorAction = (payload: IngredientConstructorType): IAddIngredientsConstructorAction => ({
    type: ADD_INGREDIENTS_CONSTRUCTOR,
    payload
});

export const addIngredientsConstructor = (ingredient: IngredientConstructorType) => (dispatch: AppDispatch) => {

    dispatch(AddIngredientsConstructorAction(ingredient))
}


export interface IReplaceIngredientsAction {
    readonly type: typeof REPLACE_INGREDIENTS;
    readonly payload: any;
  }
  
export const replaceIngredientsAction = (payload: any): IReplaceIngredientsAction => ({
    type: REPLACE_INGREDIENTS,
    payload
});

export const replaceIngredients = (numbersObject: any) => (dispatch: AppDispatch) => {
    dispatch(replaceIngredientsAction(numbersObject))
}


export interface IAddBunConstructorAction {
    readonly type: typeof ADD_BUN_CONSTRUCTOR;
    readonly payload: IngredientType | {};
  }
  
export const addBunConstructorAction = (payload: IngredientType | {}): IAddBunConstructorAction => ({
    type: ADD_BUN_CONSTRUCTOR,
    payload
});

export const addBunConstructor = (bun: IngredientType | {}) => (dispatch: AppDispatch) => {
    dispatch(addBunConstructorAction(bun))
}


export interface IRemoveIngredientsConstructorAction {
    readonly type: typeof DELETE_INGREDIENTS_CONSTRUCTOR;
    readonly payload: string;
}
  
export const removeIngredientsConstructorAction = (payload: string): IRemoveIngredientsConstructorAction => ({
    type: DELETE_INGREDIENTS_CONSTRUCTOR,
    payload
});

export const removeIngredientsConstructor = (key: string) => (dispatch: AppDispatch) => {

    dispatch(removeIngredientsConstructorAction(key))
}

export interface IClearConstructorAction {
    readonly type: typeof CLEAR_CONSTRUCTOR;
}



export type TViewIngredientsConstructorActions = 
    | IAddIngredientsConstructorAction
    | IReplaceIngredientsAction
    | IAddBunConstructorAction
    | IRemoveIngredientsConstructorAction
    | IClearConstructorAction;   