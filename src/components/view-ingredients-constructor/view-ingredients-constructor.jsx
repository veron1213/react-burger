import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import viewIngredientsConstructorStyle from "./view-ingredients-constructor.module.css";
import { burgerPropTypes } from "../../utils/prop-types.js";
import PropTypes from "prop-types";
import classNames from "classnames";

function ViewIngredientsConstructor({ burgerIngr }) {
  return (
    <div className={classNames(viewIngredientsConstructorStyle.scroll, "pb-2")}>
      {burgerIngr.map((ingr) => (
        <div
          className={classNames(viewIngredientsConstructorStyle.ingr)}
          key={ingr._id}
        >
          <DragIcon type="primary" />
          <ConstructorElement
            text={ingr.name}
            price={ingr.price}
            thumbnail={ingr.image}
          />
        </div>
      ))}
    </div>
  );
}

ViewIngredientsConstructor.propTypes = {
  burgerIngr: PropTypes.arrayOf(burgerPropTypes.isRequired).isRequired,
};

export default ViewIngredientsConstructor;
