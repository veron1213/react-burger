import React from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import "./result-sum.css";
import Modal from "../modal/modal.jsx";
import { useState } from "react";
import OrderDetails from "../order-details/order-details.jsx";

function ResultSum() {
  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const modal = <Modal onClose={handleCloseModal}>{<OrderDetails />}</Modal>;

  return (
    <div className="mt-10 mr-4 sumBlock">
      <div className="pr-2 sum">
        <h3 className="pr-2 text text_type_main-medium">610</h3>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={handleOpenModal}
      >
        Оформить заказ
      </Button>
      {visible && modal}
    </div>
  );
}

export default ResultSum;
