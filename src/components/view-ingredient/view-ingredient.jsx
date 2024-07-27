import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { burgerPropTypes } from "../../utils/prop-types.js";
import viewInrgedientStyle from "./view-ingredient.module.css";
import Modal from "../modal/modal.jsx";
import { useState } from "react";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import classNames from "classnames";

function ViewIngredient({ ingr }) {
  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  return (
    <div
      className={classNames(
        viewInrgedientStyle.blockIngredient,
        "pb-10 pl-4 pr-4"
      )}
      onClick={handleOpenModal}
    >
      <img src={ingr.image} />
      <Counter count={1} size="default" extraClass="m-1" />
      <div className={classNames(viewInrgedientStyle.ingredient)}>
        <h3 className="pr-2">{ingr.price}</h3>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className="text text_type_main-default">{ingr.name}</h3>
      {visible && (
        <Modal header="Детали ингредиента" onClose={handleCloseModal}>
          {<IngredientDetails ingr={ingr} />}
        </Modal>
      )}
    </div>
  );
}
ViewIngredient.propTypes = {
  ingr: burgerPropTypes.isRequired,
};
export default ViewIngredient;
