import { IOrdersUser } from "../../types/types";
export const WS_CONNECTION_START_FEED_ORDERS: "WS_CONNECTION_START_FEED_ORDERS" =
  "WS_CONNECTION_START_FEED_ORDERS";
export const WS_CONNECTION_SUCCESS_FEED_ORDERS: "WS_CONNECTION_SUCCESS_FEED_ORDERS" =
  "WS_CONNECTION_SUCCESS_FEED_ORDERS";
export const WS_CONNECTION_ERROR_FEED_ORDERS: "WS_CONNECTION_ERROR_FEED_ORDERS" =
  "WS_CONNECTION_ERROR_FEED_ORDERS";
export const WS_CONNECTION_CLOSED_FEED_ORDERS: "WS_CONNECTION_CLOSED_FEED_ORDERS" =
  "WS_CONNECTION_CLOSED_FEED_ORDERS";
export const WS_GET_FEED_ORDERS: "WS_GET_FEED_ORDERS" = "WS_GET_FEED_ORDERS";

export interface IWSConnectionStartFeedOrdersAction {
  readonly type: typeof WS_CONNECTION_START_FEED_ORDERS;
  readonly payload: string;
}

export const wsConnectionStartAction = (
  url: string
): IWSConnectionStartFeedOrdersAction => ({
  type: WS_CONNECTION_START_FEED_ORDERS,
  payload: url,
});

export interface IWSConnectionSuccessFeedOrdersAction {
  readonly type: typeof WS_CONNECTION_SUCCESS_FEED_ORDERS;
}

export interface IWSConnectionErrorFeedOrdersAction {
  readonly type: typeof WS_CONNECTION_ERROR_FEED_ORDERS;
}

export interface IWSConnectionClosedFeedOrdersAction {
  readonly type: typeof WS_CONNECTION_CLOSED_FEED_ORDERS;
}

export interface IWSGetFeedOrdersAction {
  readonly type: typeof WS_GET_FEED_ORDERS;
  payload: {
    orders: IOrdersUser[];
    total: number;
    totalToday: number;
  };
}

export type TFeedOrdersActions =
  | IWSConnectionStartFeedOrdersAction
  | IWSConnectionSuccessFeedOrdersAction
  | IWSConnectionErrorFeedOrdersAction
  | IWSConnectionClosedFeedOrdersAction
  | IWSGetFeedOrdersAction;
