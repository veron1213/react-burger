export const ADD_INGREDIENTS_CONSTRUCTOR = "ADD_INGREDIENTS_CONSTRUCTOR";
export const ADD_BUN_CONSTRUCTOR = "ADD_BUN_CONSTRUCTOR";
export const DELETE_INGREDIENTS_CONSTRUCTOR  = "DELETE_INGREDIENTS_CONSTRUCTOR";
export const REPLACE_INGREDIENTS = "REPLACE_INGREDIENTS"

export const addIngredientsConstructor = (ingredient) => dispatch => {

        dispatch({
            type: ADD_INGREDIENTS_CONSTRUCTOR,
            payload: ingredient,
        })
}

export const replaceIngredients = (numbersObject) => dispatch => {
    dispatch({
        type: REPLACE_INGREDIENTS,
        payload: numbersObject,
    })
}

export const addBunConstructor = (bun) => dispatch => {

    dispatch({
        type: ADD_BUN_CONSTRUCTOR,
        payload: bun,
    })
}

export const removeIngredientsConstructor = (key) => dispatch => {

    dispatch({
        type: DELETE_INGREDIENTS_CONSTRUCTOR,
        payload: key,
    })
}