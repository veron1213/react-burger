import React, { FC } from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import viewInrgedientStyle from "./view-ingredient.module.css";
import classNames from "classnames";
import { useSelector } from '../../../hooks/selectorDispatch';
import { useDrag } from "react-dnd";
import { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { IngredientType } from "../../../types/types";

type TTypeViewIngredient  = {
  type: string;
  ingr: IngredientType;
} 

export const ViewIngredient: FC<TTypeViewIngredient> = ({ ingr, type }) => {
  const location = useLocation();
  const { _id } = ingr;

  const [, dragRef] = useDrag({
    type: type,
    item: { _id },
  });

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
    <Link
      to={`/ingredients/${ingr._id}`}
      state={{ background: location }}
      ref={dragRef}
      className={classNames(
        viewInrgedientStyle.blockIngredient,
        "pb-10 pl-4 pr-4"
      )}
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
    </Link>
  );
}

export default ViewIngredient;
