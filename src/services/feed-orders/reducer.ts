import {
  WS_CONNECTION_SUCCESS_FEED_ORDERS,
  WS_CONNECTION_ERROR_FEED_ORDERS,
  WS_CONNECTION_CLOSED_FEED_ORDERS,
  WS_GET_FEED_ORDERS,
  TFeedOrdersActions,
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

export const feedOrdersReducer = (
  state = initialState,
  action: TFeedOrdersActions
) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS_FEED_ORDERS:
      return {
        ...state,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR_FEED_ORDERS:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED_FEED_ORDERS:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_GET_FEED_ORDERS:
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
