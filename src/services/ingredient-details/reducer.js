import { ADD_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS} from './actions.js';

const initialState = {
    ingredient: null,
};

export const ingredientDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT_DETAILS:
            return {
                ...state,
                ingredient: action.payload,
            }
        case DELETE_INGREDIENT_DETAILS:
            return {
                ...state,
                ingredient: action.payload,
            }
        default:
            return state;
    }
}