import React from "react";
import orderDetailsStyle from "./order-details.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";

function OrderDetails() {
  const { order, loading } = useSelector((store) => ({
    order: store.orderNumber.order,
    loading: store.orderNumber.loading,
  }));
  return (
    <>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div className={classNames(orderDetailsStyle.containerOrder)}>
          <p className="text text_type_digits-large mb-8">{order}</p>
          <p className="text text_type_main-medium mb-30">
            идентификатор заказа
          </p>
          <p className="text text_type_main-default mb-2">
            Ваш заказ начали готовить
          </p>
          <p
            className={classNames(
              orderDetailsStyle.textGray,
              "text text_type_main-default  mb-20"
            )}
          >
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      )}
    </>
  );
}

export default OrderDetails;
