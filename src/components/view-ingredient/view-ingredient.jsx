import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { burgerPropTypes } from "../../utils/prop-types.js";
import "./view-ingredient.css";
import Modal from "../modal/modal.jsx";
import { useState, useEffect } from "react";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";

function ViewIngredient({ ingr }) {
  const [visible, setVisible] = useState(false);

  const handleOpenModal = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  /*useEffect(() => {
    document.addEventListener("keydown", trackMousePos);

    return () => {
      document.removeEventListener("keydown", trackMousePos);
    };
  }, []);

  const trackMousePos = (e) => {
    e.key === "Escape" && handleCloseModal;
  };*/

  const modal = (
    <Modal header="Детали ингредиента" onClose={handleCloseModal}>
      {<IngredientDetails ingr={ingr} />}
    </Modal>
  );
  return (
    <div className="pb-10 pl-4 pr-4 blockIngredient" onClick={handleOpenModal}>
      <img src={ingr.image} />
      <Counter count={1} size="default" extraClass="m-1" />
      <div className="ingredient">
        <h3 className="pr-2">{ingr.price}</h3>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className="text text_type_main-default">{ingr.name}</h3>
      {visible && modal}
    </div>
  );
}
ViewIngredient.propTypes = {
  ingr: burgerPropTypes.isRequired,
};
export default ViewIngredient;
