import React from "react";

import viewIngredientsConstructorStyle from "./view-ingredients-constructor.module.css";
import { IngredientConstructorType } from '../../../types/types'

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

export default ViewIngredientsConstructor;
