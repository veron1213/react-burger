import {combineReducers} from "redux";
import {viewIngredientsAllReducer} from './view-ingredients-all/reducer.js';
import {ingredientDetailsReducer} from './ingredient-details/reducer.js';
import {ingredientsConstructorReducer} from './view-inrgedients-constructor/reducer.js';
import {orderNumberReducer} from './order-number/reducer.js';
import {userReducer} from './users/reducer.js'

export const rootReducer = combineReducers({
    // viewIngredientsAll: viewIngredientsAllReducer,
    // ingredientDetails: ingredientDetailsReducer,
    // ingredientsConstructor: ingredientsConstructorReducer,
    // orderNumber: orderNumberReducer,
    user: userReducer,
});