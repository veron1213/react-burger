import {
  WS_CONNECTION_SUCCESS_ORDERS_USER,
  WS_CONNECTION_ERROR_ORDERS_USER,
  WS_CONNECTION_CLOSED_ORDERS_USER,
  WS_GET_ORDERS_USER,
  TOrderUserActions,
} from "./actions";
import { IOrdersUser } from "../../types/types";

type TInitialState = {
  wsConnected: boolean;
  orders: IOrdersUser[];
  total: number;
  totalToday: number;
};

export const initialState: TInitialState = {
  wsConnected: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

export const ordersUserReducer = (
  state = initialState,
  action: TOrderUserActions
) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS_ORDERS_USER:
      return {
        ...state,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR_ORDERS_USER:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED_ORDERS_USER:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_GET_ORDERS_USER:
      return {
        ...state,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    default:
      return state;
  }
};
