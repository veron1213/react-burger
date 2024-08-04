import React from "react";
import { useMemo } from "react";
import Tabs from "../tabs/tabs.jsx";
import ViewIngredients from "../view-ingredients/view-ingredients.jsx";
import burgerIngredientsStyle from "./burger-ingredients.module.css";
import { burgerPropTypes } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

function BurgerIngredients({ burgerIngr }) {
  const buns = useMemo(
    () => burgerIngr.filter((item) => item.type === "bun"),
    [burgerIngr]
  );
  const mains = useMemo(
    () => burgerIngr.filter((item) => item.type === "main"),
    [burgerIngr]
  );
  const sauces = useMemo(
    () => burgerIngr.filter((item) => item.type === "sauce"),
    [burgerIngr]
  );

  return (
    <div>
      <p className="text text_type_main-large pt-10">Соберите бургер</p>
      <Tabs />
      <div className={burgerIngredientsStyle.ingredients}>
        <ViewIngredients burgerIngr={buns} name="Булки" />
        <ViewIngredients burgerIngr={mains} name="Соусы" />
        <ViewIngredients burgerIngr={sauces} name="Начинки" />
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  burgerIngr: PropTypes.arrayOf(burgerPropTypes.isRequired).isRequired,
};

export default BurgerIngredients;
