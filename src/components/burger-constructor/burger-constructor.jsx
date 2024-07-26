import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import ViewIngredientsConstructor from "../view-ingredients-constructor/view-ingredients-constructor.jsx";
import ResultSum from "../result-sum/result-sum.jsx";
import "./burger-constructor.css";
import { burgerPropTypes } from "../../utils/prop-types.js";
import PropTypes from "prop-types";

function BurgerConstructor({ burgerIngr }) {
  const { name, price, image } =
    burgerIngr.find((ingr) => ingr._id == "643d69a5c3f7b9001cfa093c") || {};
  return (
    <div className="mt-25 burger-constructor">
      <div className="ml-6 pb-2 burger-bun">
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${name} (верх)`}
          price={`${price}`}
          thumbnail={`${image}`}
        />
      </div>
      <ViewIngredientsConstructor burgerIngr={burgerIngr} />
      <div className="ml-6 burger-bun">
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
  burgerIngr: PropTypes.arrayOf(burgerPropTypes).isRequired,
};

export default BurgerConstructor;
