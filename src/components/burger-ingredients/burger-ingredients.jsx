import React from "react";
//import burgerIngr from "../../utils/data.js";
import Tabs from "../tabs/tabs.jsx";
import ViewIngredients from "../view-ingredients/view-ingredients.jsx";
import burgerIngredientsStyle from "./burger-ingredients.module.css";
import { burgerPropTypes } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

function BurgerIngredients({ burgerIngr }) {
  return (
    <div>
      <p className="text text_type_main-large pt-10">Соберите бургер</p>
      <Tabs />
      <div className={burgerIngredientsStyle.ingredients}>
        <ViewIngredients burgerIngr={burgerIngr} name="Булки" type="bun" />
        <ViewIngredients burgerIngr={burgerIngr} name="Соусы" type="sauce" />
        <ViewIngredients burgerIngr={burgerIngr} name="Начинки" type="main" />
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  burgerIngr: PropTypes.arrayOf(burgerPropTypes).isRequired,
};

export default BurgerIngredients;
