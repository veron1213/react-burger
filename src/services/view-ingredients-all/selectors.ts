import {createSelector} from "reselect";
import { RootState } from '../../types/types';

export const getAllIngredients = (state: RootState) => state.viewIngredientsAll.ingredients;

export const getIngredientsType = (name: string) => createSelector(
    getAllIngredients,
    (ingredients) =>
        ingredients.filter((item) => item.type === name)
);