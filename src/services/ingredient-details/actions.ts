import { IngredientDetailType, AppDispatch, AppThunk } from "../../types/types";
export const ADD_INGREDIENT_DETAILS: "ADD_INGREDIENT_DETAILS" = "ADD_INGREDIENT_DETAILS";
export const DELETE_INGREDIENT_DETAILS: "DELETE_INGREDIENT_DETAILS" = "DELETE_INGREDIENT_DETAILS";

export interface IAddIngredientDetailsAction {
    readonly type: typeof ADD_INGREDIENT_DETAILS;
    readonly detail: IngredientDetailType;
}

export const addIngredientDetailsAction = (detail: IngredientDetailType): IAddIngredientDetailsAction => ({
    type: ADD_INGREDIENT_DETAILS,
    detail,
});

export interface IDeleteIngredientDetailsAction {
    readonly type: typeof DELETE_INGREDIENT_DETAILS;
}

export const deleteIngredientDetailsAction = (): IDeleteIngredientDetailsAction => ({
    type: DELETE_INGREDIENT_DETAILS
});


export type TIngredientDetailsActions = 
    | IAddIngredientDetailsAction
    | IDeleteIngredientDetailsAction;    



export const addIngredientDetails: AppThunk = (detail: IngredientDetailType) => (dispatch: AppDispatch) => {
        dispatch(addIngredientDetailsAction(detail))
}

export const removeIngredientDetails: AppThunk = () => (dispatch: AppDispatch) => {
    dispatch(deleteIngredientDetailsAction());
}