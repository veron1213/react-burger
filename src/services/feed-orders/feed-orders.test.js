import { feedOrdersReducer } from "./reducer";
import {
  WS_CONNECTION_SUCCESS_FEED_ORDERS,
  WS_CONNECTION_ERROR_FEED_ORDERS,
  WS_CONNECTION_CLOSED_FEED_ORDERS,
  WS_GET_FEED_ORDERS,
} from "./actions";
import { initialState } from "./reducer";

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
    const order = {
      orders: {
        ingredients: ["ingredient1", "ingredient2", "ingredient3"],
        _id: "123",
        status: "created",
        number: "604",
        createdAt: "2024-05-12",
        updatedAt: "2024-06-12",
        name: "Бургер с тремя ингредиентами",
      },
      total: 100,
      totalToday: 20,
    };
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
