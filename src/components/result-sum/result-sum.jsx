import React from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import resultSumStyle from "./result-sum.module.css";
import Modal from "../modal/modal.jsx";
import { useState } from "react";
import OrderDetails from "../order-details/order-details.jsx";
import classNames from "classnames";

function ResultSum() {
  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  return (
    <div className={classNames(resultSumStyle.sumBlock, "mt-10 mr-4")}>
      <div className={classNames(resultSumStyle.sum, "pr-2")}>
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
      {visible && <Modal onClose={handleCloseModal}>{<OrderDetails />}</Modal>}
    </div>
  );
}

export default ResultSum;
