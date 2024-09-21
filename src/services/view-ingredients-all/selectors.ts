import {createSelector} from "reselect";
import { IStoreType } from "../../types/types";

export const getAllIngredients = (state: IStoreType) => state.viewIngredientsAll.ingredients;

export const getIngredientsType = (name: string) => createSelector(
    getAllIngredients,
    (ingredients) =>
        ingredients.filter((item) => item.type === name)
);