import {IOrdersUser} from '../../types/types'
export const WS_CONNECTION_START_ORDERS_USER: 'WS_CONNECTION_START_ORDERS_USER' = 'WS_CONNECTION_START_ORDERS_USER';
export const WS_CONNECTION_SUCCESS_ORDERS_USER: 'WS_CONNECTION_SUCCESS_ORDERS_USER' = 'WS_CONNECTION_SUCCESS_ORDERS_USER';
export const WS_CONNECTION_ERROR_ORDERS_USER: 'WS_CONNECTION_ERROR_ORDERS_USER' = 'WS_CONNECTION_ERROR_ORDERS_USER';
export const WS_CONNECTION_CLOSED_ORDERS_USER: 'WS_CONNECTION_CLOSED_ORDERS_USER' = 'WS_CONNECTION_CLOSED_ORDERS_USER';
export const WS_GET_ORDERS_USER: 'WS_GET_ORDERS_USER' = 'WS_GET_ORDERS_USER';


export interface IWSConnectionStartAction {
    readonly type: typeof WS_CONNECTION_START_ORDERS_USER;
    readonly payload: string;
}

export const wsConnectionStartAction = (url: string): IWSConnectionStartAction => ({
    type: WS_CONNECTION_START_ORDERS_USER,
    payload: url,
})



export interface IWSConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS_ORDERS_USER;
}

export interface IWSConnectionErrorAction {
    readonly type: typeof WS_CONNECTION_ERROR_ORDERS_USER;
}

export interface IWSConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED_ORDERS_USER;
}

export interface IWSGetOrdersUserAction {
    readonly type: typeof WS_GET_ORDERS_USER;
    payload: {
        orders: IOrdersUser[],
        total: number,
        totalToday: number
    }
}

export type TOrderUserActions = 
    | IWSConnectionStartAction
    | IWSConnectionSuccessAction
    | IWSConnectionErrorAction
    | IWSConnectionClosedAction
    | IWSGetOrdersUserAction;  