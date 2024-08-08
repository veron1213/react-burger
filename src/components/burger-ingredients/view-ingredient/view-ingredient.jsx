import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { burgerPropTypes } from "../../../utils/prop-types.js";
import viewInrgedientStyle from "./view-ingredient.module.css";
import Modal from "../../modal/modal.jsx";
import { useState } from "react";
import IngredientDetails from "../ingredient-details/ingredient-details.jsx";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredientDetails,
  removeIngredientDetails,
} from "../../../services/ingredient-details/actions.js";
import { useDrag } from "react-dnd";
import { useMemo } from "react";
import PropTypes from "prop-types";

function ViewIngredient({ ingr, type }) {
  const { _id } = ingr;
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const [, dragRef] = useDrag({
    type: type,
    item: { _id },
  });

  const handleOpenModal = () => {
    setVisible(true);
    const detail = {
      image: ingr.image,
      name: ingr.name,
      calories: ingr.calories,
      proteins: ingr.proteins,
      fat: ingr.fat,
      carbohydrates: ingr.carbohydrates,
    };
    dispatch(addIngredientDetails(detail));
  };

  const handleCloseModal = () => {
    setVisible(false);
    dispatch(removeIngredientDetails());
  };

  const { bun, ingredients } = useSelector((store) => ({
    bun: store.ingredientsConstructor.bun,
    ingredients: store.ingredientsConstructor.ingredients,
  }));
  const countIngredients = useMemo(() => {
    switch (type) {
      case "bun":
        return bun && bun._id == ingr._id ? 2 : 0;
      case "ingredient":
        return ingredients.length > 0 &&
          ingredients.filter((ingredient) => ingredient._id == ingr._id)
            .length > 0
          ? ingredients.filter((ingredient) => ingredient._id == ingr._id)
              .length
          : 0;
      default:
        return 0;
    }
  }, [bun, ingredients]);

  return (
    <div
      ref={dragRef}
      className={classNames(
        viewInrgedientStyle.blockIngredient,
        "pb-10 pl-4 pr-4"
      )}
      onClick={handleOpenModal}
    >
      <img src={ingr.image} />
      {countIngredients > 0 && (
        <Counter count={countIngredients} size="default" extraClass="m-1" />
      )}
      <div className={classNames(viewInrgedientStyle.ingredient)}>
        <h3 className="pr-2">{ingr.price}</h3>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className="text text_type_main-default">{ingr.name}</h3>
      {visible && (
        <Modal header="Детали ингредиента" onClose={handleCloseModal}>
          {<IngredientDetails />}
        </Modal>
      )}
    </div>
  );
}
ViewIngredient.propTypes = {
  ingr: burgerPropTypes.isRequired,
  type: PropTypes.string.isRequired,
};
export default ViewIngredient;
