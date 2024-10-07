import { feedOrdersReducer } from "./reducer";
import {
  WS_CONNECTION_SUCCESS_FEED_ORDERS,
  WS_CONNECTION_ERROR_FEED_ORDERS,
  WS_CONNECTION_CLOSED_FEED_ORDERS,
  WS_GET_FEED_ORDERS,
} from "./actions";
import { initialState } from "./reducer";
import { orderUser } from "../valueForTest";

describe("todos feedOrdersReducer", () => {
  it("should return the initial state", () => {
    expect(feedOrdersReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle WS_CONNECTION_SUCCESS_FEED_ORDERS", () => {
    expect(
      feedOrdersReducer(initialState, {
        type: WS_CONNECTION_SUCCESS_FEED_ORDERS,
      })
    ).toEqual({ ...initialState, wsConnected: true });
  });

  it("should handle WS_CONNECTION_CLOSED_FEED_ORDERS", () => {
    expect(
      feedOrdersReducer(initialState, {
        type: WS_CONNECTION_CLOSED_FEED_ORDERS,
      })
    ).toEqual({ ...initialState, wsConnected: false });
  });

  it("should handle WS_CONNECTION_ERROR_FEED_ORDERS", () => {
    expect(
      feedOrdersReducer(initialState, {
        type: WS_CONNECTION_ERROR_FEED_ORDERS,
      })
    ).toEqual({ ...initialState, wsConnected: false });
  });

  it("should handle WS_GET_FEED_ORDERS", () => {
    const order = orderUser;
    expect(
      feedOrdersReducer(initialState, {
        type: WS_GET_FEED_ORDERS,
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
