import { getIngredients } from "../../utils/burger-api.js";
export const INGREDIENTS_LOAD_SUCCESS = "INGREDIENTS_LOAD_SUCCESS";
export const INGREDIENTS_LOAD_ERROR = "INGREDIENTS_LOAD_ERROR";
export const INGREDIENTS_LOADING = "INGREDIENTS_LOADING";


export const loadIngredients = () => dispatch => {
    dispatch({
        type: INGREDIENTS_LOADING,
    });
    getIngredients()
      .then((data) => {
        dispatch({
            type: INGREDIENTS_LOAD_SUCCESS,
            payload: data.data,
          });
      })
      .catch((e) => {
        dispatch({
            type: INGREDIENTS_LOAD_ERROR,
            payload: e.message,
          });
      });
}