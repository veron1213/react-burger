import { getOrderNumber } from "../../utils/burger-api.js";
export const ORDER_NUMBER_LOAD_SUCCESS = "ORDER_NUMBER_LOAD_SUCCESS";
export const ORDER_NUMBER_LOAD_ERROR = "ORDER_NUMBER_LOAD_ERROR";
export const ORDER_NUMBER_LOADING = "ORDER_NUMBER_LOADING";


export const loadOrder = (ingredients) => dispatch => {
    dispatch({
        type: ORDER_NUMBER_LOADING,
    });
    getOrderNumber(ingredients)
      .then((data) => {
        dispatch({
            type: ORDER_NUMBER_LOAD_SUCCESS,
            payload: data.order.number,
          });
      })
      .catch((e) => {
        dispatch({
            type: ORDER_NUMBER_LOAD_ERROR,
            payload: e.message,
          });
      });
}