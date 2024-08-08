import {createSelector} from "reselect";

export const getAllIngredients = (state) => state.viewIngredientsAll.ingredients;

export const getIngredientsType = (name) => createSelector(
    getAllIngredients,
    (ingredients) =>
        ingredients.filter((item) => item.type === name)
);