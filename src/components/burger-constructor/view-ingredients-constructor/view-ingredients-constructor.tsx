import React from "react";

import viewIngredientsConstructorStyle from "./view-ingredients-constructor.module.css";
import { burgerPropTypes } from "../../../utils/prop-types.js";
import PropTypes from "prop-types";
import { IngredientConstructorType } from '../../../types/types.js'

import classNames from "classnames";

import ViewIngredientConstructor from "../view-ingredient-constructor/view-ingredient-constructor";

interface IBurgerIngr {
  burgerIngr: IngredientConstructorType[];
}

function ViewIngredientsConstructor({ burgerIngr }: IBurgerIngr ) {
  return (
    <div className={classNames(viewIngredientsConstructorStyle.scroll)}>
      {burgerIngr.map((ingr: IngredientConstructorType, i) => (
        <ViewIngredientConstructor ingr={ingr} key={ingr.key} index={i} />
      ))}
    </div>
  );
}

ViewIngredientsConstructor.propTypes = {
  burgerIngr: PropTypes.arrayOf(burgerPropTypes.isRequired).isRequired,
};

export default ViewIngredientsConstructor;
