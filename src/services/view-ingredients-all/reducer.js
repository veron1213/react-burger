import { INGREDIENTS_LOAD_SUCCESS, INGREDIENTS_LOAD_ERROR, INGREDIENTS_LOADING} from './actions.js';

const initialState = {
    ingredients: [],
    loading: false,
    error: null,
};

export const viewIngredientsAllReducer = (state = initialState, action) => {
    switch (action.type) {
        case INGREDIENTS_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case INGREDIENTS_LOAD_SUCCESS:
            return {
                ...state,
                ingredients: action.payload,
                loading: false,
            }
        case INGREDIENTS_LOAD_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}