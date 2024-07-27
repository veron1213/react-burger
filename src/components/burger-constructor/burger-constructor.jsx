import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import ViewIngredientsConstructor from "../view-ingredients-constructor/view-ingredients-constructor.jsx";
import ResultSum from "../result-sum/result-sum.jsx";
import burgerConstructorStyle from "./burger-constructor.module.css";
import { burgerPropTypes } from "../../utils/prop-types.js";
import PropTypes from "prop-types";
import { useMemo } from "react";
import classNames from "classnames";

function BurgerConstructor({ burgerIngr }) {
  const { name, price, image } =
    burgerIngr.find((ingr) => ingr._id == "643d69a5c3f7b9001cfa093c") || {};

  const { bun, ingredients } = useMemo(() => {
    return {
      bun: burgerIngr.find((item) => item.type === "bun"),
      ingredients: burgerIngr.filter((item) => item.type !== "bun"),
    };
  }, [burgerIngr]);

  return (
    <div
      className={classNames(burgerConstructorStyle.burgerConstructor, "mt-25")}
    >
      <div
        className={classNames(burgerConstructorStyle.burgerBun, "ml-6 pb-2")}
      >
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${name} (верх)`}
          price={`${price}`}
          thumbnail={`${image}`}
        />
      </div>
      <ViewIngredientsConstructor burgerIngr={ingredients} />
      <div className={classNames(burgerConstructorStyle.burgerBun, "ml-6")}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={`${name} (низ)`}
          price={`${price}`}
          thumbnail={`${image}`}
        />
      </div>
      <ResultSum />
    </div>
  );
}

BurgerConstructor.propTypes = {
  burgerIngr: PropTypes.arrayOf(burgerPropTypes.isRequired).isRequired,
};

export default BurgerConstructor;
