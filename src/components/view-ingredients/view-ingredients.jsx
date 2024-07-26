import React from "react";
import ViewIngredient from "../view-ingredient/view-ingredient.jsx";
import { burgerPropTypes } from "../../utils/prop-types.js";
import PropTypes from "prop-types";
import viewIngredientsStyle from "./view-ingredients.module.css";

function ViewIngredients({ burgerIngr, name, type }) {
  return (
    <>
      <p className="text text_type_main-medium pb-6">{name}</p>
      <div className={viewIngredientsStyle.rowIngredient}>
        {burgerIngr
          .filter((ingr) => ingr.type == type)
          .map((ingr) => (
            <ViewIngredient ingr={ingr} key={ingr._id} />
          ))}
      </div>
    </>
  );
}

ViewIngredients.propTypes = {
  burgerIngr: PropTypes.arrayOf(burgerPropTypes).isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default ViewIngredients;
