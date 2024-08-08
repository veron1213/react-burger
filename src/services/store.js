import {applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension";
import {rootReducer} from "./reducer";
import { thunk } from "redux-thunk";


export const configureStore = (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk)),
    );

    return store;
}