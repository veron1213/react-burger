export const ADD_INGREDIENT_DETAILS = "ADD_INGREDIENT_DETAILS";
export const DELETE_INGREDIENT_DETAILS = "DELETE_INGREDIENT_DETAILS";

export const addIngredientDetails = (detail) => dispatch => {
console.log(detail)
        dispatch({
            type: ADD_INGREDIENT_DETAILS,
            payload: detail,
        })
}

export const removeIngredientDetails = () => dispatch => {

    dispatch({
        type: DELETE_INGREDIENT_DETAILS,
        payload: null,
    })
}