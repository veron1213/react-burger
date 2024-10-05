import { ORDER_NUMBER_LOAD_SUCCESS, ORDER_NUMBER_LOAD_ERROR, ORDER_NUMBER_LOADING
    , TOrderNumberActions
} from './actions';

type TInitialState = {
    order: number | null,
    loading: boolean,
    error: string | null,
};

const initialState: TInitialState = {
    order: null,
    loading: false,
    error: null,
};

export const orderNumberReducer = (state = initialState, action: TOrderNumberActions) => {
    switch (action.type) {
        case ORDER_NUMBER_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ORDER_NUMBER_LOAD_SUCCESS:
            return {
                ...state,
                order: action.payload,
                loading: false,
            }
        case ORDER_NUMBER_LOAD_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}