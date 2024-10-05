import { ADD_INGREDIENTS_CONSTRUCTOR, DELETE_INGREDIENTS_CONSTRUCTOR, ADD_BUN_CONSTRUCTOR, REPLACE_INGREDIENTS, CLEAR_CONSTRUCTOR
    , TViewIngredientsConstructorActions} from './actions';
import { IngredientType, IngredientConstructorType } from "../../types/types";

type TInitialState = {
    bun: IngredientType | null,
    ingredients: IngredientConstructorType[],
};

const initialState: TInitialState = {
    bun: null,
    ingredients: [],
};

export const ingredientsConstructorReducer = (state = initialState, action: TViewIngredientsConstructorActions) => {
    switch (action.type) {
        case ADD_INGREDIENTS_CONSTRUCTOR:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload],
            }
        case ADD_BUN_CONSTRUCTOR:
            return {
                ...state,
                bun: action.payload,
            }
        case DELETE_INGREDIENTS_CONSTRUCTOR:
            return {
                ...state,
                ingredients: state.ingredients.filter(ingredient => ingredient.key !== action.payload),
            }
            case REPLACE_INGREDIENTS:
                const ingredients = [...state.ingredients];
                ingredients.splice(action.payload.dragIndex, 0, ingredients.splice(action.payload.hoverIndex,1)[0]);
                return {
                    ...state,
                    ingredients: ingredients

                }
            case CLEAR_CONSTRUCTOR:
                return {
                    bun: null,
                    ingredients: [],
                }
        default:
            return state;
    }
}