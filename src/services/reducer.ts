import {combineReducers} from "redux";
import {viewIngredientsAllReducer} from './view-ingredients-all/reducer';
import {ingredientDetailsReducer} from './ingredient-details/reducer';
import {ingredientsConstructorReducer} from './view-inrgedients-constructor/reducer';
import {orderNumberReducer} from './order-number/reducer';
import {userReducer} from './users/reducer'
import { ordersUserReducer } from "./order-user/reducer";
import { feedOrdersReducer } from './feed-orders/reducer'

export const rootReducer = combineReducers({
    viewIngredientsAll: viewIngredientsAllReducer,
    ingredientDetails: ingredientDetailsReducer,
    ingredientsConstructor: ingredientsConstructorReducer,
    orderNumber: orderNumberReducer,
    user: userReducer,
    ordersUser: ordersUserReducer,
    feedOrders: feedOrdersReducer,
});