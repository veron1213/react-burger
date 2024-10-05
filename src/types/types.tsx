import { Dispatch } from 'redux';
import { TIngredientDetailsActions } from '../services/ingredient-details/actions';
import { TOrderNumberActions } from '../services/order-number/actions';
import { TViewIngredientsAllActions } from '../services/view-ingredients-all/actions';
import { TViewIngredientsConstructorActions } from '../services/view-inrgedients-constructor/actions';
import { TUsersActions } from '../services/users/actions';
import { TOrderUserActions } from '../services/order-user/actions'
import { TFeedOrdersActions } from '../services/feed-orders/actions';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { configureStore } from '../services/store'


export interface IngredientType {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
}

export interface IngredientDetailType {
    image: string;
    name: string;
    calories: number;
    proteins: number;
    fat: number;
    carbohydrates: number;
}

export interface IngredientConstructorType extends IngredientType{
    key: string;
}

interface IIngredientsConstructorType {
    bun: IngredientType | null;
    ingredients: IngredientConstructorType[] ;
}

interface IViewIngredientsAllType {
    ingredients: IngredientType[];
    loading: boolean;
    error: string;
}

interface IUserType {
    user: {
        email: string, 
        name: string,
    },
isAuthChecked: boolean,
loading: boolean,
error: string,
}

interface IIngredientDetailsType {
    ingredient: IngredientType;
}

interface IOrderNumberType {
    order: string;
    loading: boolean;
    error: string;
}

export interface IStoreType {
    ingredientsConstructor: IIngredientsConstructorType;
    viewIngredientsAll: IViewIngredientsAllType;
    user: IUserType;
    ingredientDetails: IIngredientDetailsType;
    orderNumber: IOrderNumberType;
}

export type TApplicationActions = 
| TIngredientDetailsActions 
| TOrderNumberActions
| TViewIngredientsAllActions
| TViewIngredientsConstructorActions
| TUsersActions
| TOrderUserActions
| TFeedOrdersActions;
export type AppDispatch = Dispatch<TApplicationActions>; 
const store = configureStore({});
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>; 

export interface IOrders {
  success: boolean;
  orders: IOrdersUser[];
  total: number;
  totalToday: number;
}

export interface IOrdersUser {
    ingredients: string[],
    _id: string,
    status: string,
    number: number,
    createdAt: string,
    updatedAt: string,
    name: string,
}

