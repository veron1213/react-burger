import {applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";
import { thunk } from "redux-thunk";
import { socketMiddleware } from "./middleware/middleware";
import { wsActionsOrdersUser, wsActionsFeedOrders } from "../types/typesWS";

        const wsUrl = `wss://norma.nomoreparties.space/orders`;

export const configureStore = (initialState: any) => {
    const store = createStore(
        rootReducer,
        initialState,
        //composeWithDevTools(applyMiddleware(thunk)),
        composeWithDevTools(applyMiddleware(thunk, socketMiddleware(wsActionsOrdersUser), socketMiddleware(wsActionsFeedOrders)))
    );

    return store;
}