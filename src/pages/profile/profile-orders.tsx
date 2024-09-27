import { useDispatch, useSelector } from "../../hooks/selectorDispatch";
import { wsConnectionStartAction } from "../../services/order-user/actions";
import { useEffect } from "react";
import ViewProfileOrders from "../../components/view-profile-orders/view-profile-orders";
import pageStyle from "./profile.module.css";

export function ProfileOrders() {
  const { orders } = useSelector((store) => ({
    orders: store.ordersUser.orders,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const wsUrl = `wss://norma.nomoreparties.space/orders`;
    dispatch(wsConnectionStartAction(`${wsUrl}?token=${token}`));
    return () => {};
  }, [dispatch]);
  return (
    <div className={pageStyle.ordersContainer}>
      {orders.length > 0 ? (
        <ViewProfileOrders ordersUser={orders} />
      ) : (
        <p>Заказов нет</p>
      )}
    </div>
  );
}
