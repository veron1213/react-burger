import { ordersUserReducer } from "./reducer";
import {
  WS_CONNECTION_SUCCESS_ORDERS_USER,
  WS_CONNECTION_ERROR_ORDERS_USER,
  WS_CONNECTION_CLOSED_ORDERS_USER,
  WS_GET_ORDERS_USER,
} from "./actions";
import { initialState } from "./reducer";
import { orderUser } from "../valueForTest";

describe("todos ordersUserReducer", () => {
  it("should return the initial state", () => {
    expect(ordersUserReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle WS_CONNECTION_SUCCESS_ORDERS_USER", () => {
    expect(
      ordersUserReducer(initialState, {
        type: WS_CONNECTION_SUCCESS_ORDERS_USER,
      })
    ).toEqual({ ...initialState, wsConnected: true });
  });

  it("should handle WS_CONNECTION_CLOSED_ORDERS_USER", () => {
    expect(
      ordersUserReducer(initialState, {
        type: WS_CONNECTION_CLOSED_ORDERS_USER,
      })
    ).toEqual({ ...initialState, wsConnected: false });
  });

  it("should handle WS_CONNECTION_ERROR_ORDERS_USER", () => {
    expect(
      ordersUserReducer(initialState, {
        type: WS_CONNECTION_ERROR_ORDERS_USER,
      })
    ).toEqual({ ...initialState, wsConnected: false });
  });

  it("should handle WS_GET_ORDERS_USER", () => {
    const order = orderUser;
    expect(
      ordersUserReducer(initialState, {
        type: WS_GET_ORDERS_USER,
        payload: order,
      })
    ).toEqual({
      ...initialState,
      orders: order.orders,
      total: order.total,
      totalToday: order.totalToday,
    });
  });
});
