import React from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import resultSumStyle from "./result-sum.module.css";
import Modal from "../../modal/modal";
import { useState } from "react";
import OrderDetails from "../../order-details/order-details";
import classNames from "classnames";
import { useDispatch, useSelector } from '../../../hooks/selectorDispatch';
import { useMemo } from "react";
import { loadOrder } from "../../../services/order-number/actions";
import { useNavigate } from "react-router-dom";
import { IngredientType } from '../../../types/types'

function ResultSum() {
  const isAuthChecked = useSelector((store) => store.user.isAuthChecked);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setVisible(false);
  };

  const { bun, ingredients } = useSelector((store) => ({
    bun: store.ingredientsConstructor.bun,
    ingredients: store.ingredientsConstructor.ingredients,
  }));
  const sum = useMemo(() => {
    let summ = bun ? bun.price * 2 : 0;
    summ +=
      ingredients.length > 0
        ? ingredients.reduce((s: number, i: IngredientType) => (s = s + i.price), 0)
        : 0;
    return summ;
  }, [bun, ingredients]);

  const handleOpenModal = () => {
    if (bun) {
      if (isAuthChecked && user.email != null && user.name != null) {
        const ingredientsOrder = ingredients.map(
          (ingredient: IngredientType) => ingredient._id
        );
        ingredientsOrder.unshift(bun._id);
        ingredientsOrder.push(bun._id);
        dispatch(loadOrder(ingredientsOrder));
        setVisible(true);
      } else navigate("/login");
    }
  };

  return (
    <div className={classNames(resultSumStyle.sumBlock, "mt-10 mr-4")}>
      <div className={classNames(resultSumStyle.sum, "pr-2")}>
        <h3 className="pr-2 text text_type_main-medium">{sum}</h3>
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
