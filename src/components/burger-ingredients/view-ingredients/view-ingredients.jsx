import React from "react";
import ViewIngredient from "../view-ingredient/view-ingredient.jsx";
import { burgerPropTypes } from "../../../utils/prop-types.js";
import PropTypes from "prop-types";
import viewIngredientsStyle from "./view-ingredients.module.css";

const ViewIngredients = React.forwardRef((props, ref) => {
  return (
    <>
      <p className="text text_type_main-medium pb-6" ref={ref}>
        {props.name}
      </p>
      <div className={viewIngredientsStyle.rowIngredient}>
        {props.burgerIngr.map((ingr) => (
          <ViewIngredient ingr={ingr} key={ingr._id} type={props.type} />
        ))}
      </div>
    </>
  );
});

ViewIngredients.propTypes = {
  burgerIngr: PropTypes.arrayOf(burgerPropTypes.isRequired).isRequired,
  name: PropTypes.string.isRequired,
};

export default ViewIngredients;
