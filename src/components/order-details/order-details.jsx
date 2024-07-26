import React from "react";
import "./order-details.css";

function OrderDetails() {
  return (
    <div className="containerOrder">
      <p className="text text_type_digits-large mb-8">034536</p>
      <p className="text text_type_main-medium mb-30">идентификатор заказа</p>
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default textGray mb-20">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
