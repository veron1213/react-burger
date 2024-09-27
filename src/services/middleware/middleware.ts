import type { Middleware, MiddlewareAPI } from 'redux';

import type { TApplicationActions, AppDispatch, RootState, IOrders } from '../../types/types';
import { updateToken } from '../users/actions';


export const socketMiddleware = (wsActions: any): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

    return next => (action: TApplicationActions) => {

      const { dispatch } = store;
      const { type } = action;
      if (type === wsActions.wsInit) {
            // объект класса WebSocket
        const wsUrl = (action as { payload: string }).payload
        socket = new WebSocket(wsUrl);
      }
      if (socket) {

                // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch({ type: wsActions.onOpen, payload: event });
        };

                // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch({ type: wsActions.onError, payload: event });
        };

                // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          const orders  = JSON.parse(data)
          if (orders.message === "Invalid or missing token") {
            updateToken();
        } else {
          dispatch({ type: wsActions.onMessage, payload: orders });
        }
        };
                // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch({ type: wsActions.onClose, payload: event });
        };
      }
      next(action);
    };
    }) as Middleware;
};