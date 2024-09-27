import { ADD_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS, TIngredientDetailsActions} from './actions';
import { IngredientDetailType } from "../../types/types";

type TInitialState = {
    ingredient: IngredientDetailType | null,
};

const initialState: TInitialState = {
    ingredient: null,
};

export const ingredientDetailsReducer = (state = initialState, action: TIngredientDetailsActions) => {
    switch (action.type) {
        case ADD_INGREDIENT_DETAILS:
            return {
                ...state,
                ingredient: action.detail,
            }
        case DELETE_INGREDIENT_DETAILS:
            return {
                ...state,
                ingredient: null,
            }
        default:
            return state;
    }
}