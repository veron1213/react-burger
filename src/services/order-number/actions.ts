import { AppDispatch, AppThunk } from "../../types/types";
import { getOrderNumber } from "../../utils/burger-api";
import { CLEAR_CONSTRUCTOR } from "../view-inrgedients-constructor/actions";
export const ORDER_NUMBER_LOAD_SUCCESS: "ORDER_NUMBER_LOAD_SUCCESS" =
  "ORDER_NUMBER_LOAD_SUCCESS";
export const ORDER_NUMBER_LOAD_ERROR: "ORDER_NUMBER_LOAD_ERROR" =
  "ORDER_NUMBER_LOAD_ERROR";
export const ORDER_NUMBER_LOADING: "ORDER_NUMBER_LOADING" =
  "ORDER_NUMBER_LOADING";

export interface IOrderNumberLoadSuccessAction {
  readonly type: typeof ORDER_NUMBER_LOAD_SUCCESS;
  readonly payload: number;
}

export const orderNumberLoadSuccessAction = (
  payload: number
): IOrderNumberLoadSuccessAction => ({
  type: ORDER_NUMBER_LOAD_SUCCESS,
  payload,
});

export interface IOrderNumberLoadErrorAction {
  readonly type: typeof ORDER_NUMBER_LOAD_ERROR;
  readonly payload: string;
}

export const orderNumberLoadErrorAction = (
  payload: string
): IOrderNumberLoadErrorAction => ({
  type: ORDER_NUMBER_LOAD_ERROR,
  payload,
});

export interface IOrderNumberLoadingAction {
  readonly type: typeof ORDER_NUMBER_LOADING;
}

export const orderNumberLoadingAction = (): IOrderNumberLoadingAction => ({
  type: ORDER_NUMBER_LOADING,
});

export type TOrderNumberActions =
  | IOrderNumberLoadSuccessAction
  | IOrderNumberLoadErrorAction
  | IOrderNumberLoadingAction;

export const loadOrder: AppThunk =
  (ingredients: string[]) => (dispatch: AppDispatch) => {
    dispatch(orderNumberLoadingAction());
    getOrderNumber(ingredients)
      .then((data) => {
        dispatch(orderNumberLoadSuccessAction(data.order.number));
        dispatch({
          type: CLEAR_CONSTRUCTOR,
        });
      })
      .catch((e) => {
        dispatch(orderNumberLoadErrorAction(e.message));
      });
  };
