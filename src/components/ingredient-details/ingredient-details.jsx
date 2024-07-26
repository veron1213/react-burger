import React from "react";
import { burgerPropTypes } from "../../utils/prop-types.js";
import "./ingredient-details.css";

function IngredientDetails({ ingr }) {
  return (
    <div className="details">
      <img className="image mb-4" src={ingr.image} />
      <h3 className="text text_type_main-medium mb-8">{ingr.name}</h3>
      <div className="cpfc text">
        <div>
          <p className="textCPFC text text_type_main-default">Калории, ккал</p>
          <p className="textCPFC text text_type_digits-default">
            {ingr.calories}
          </p>
        </div>
        <div>
          <p className="textCPFC text text_type_main-default">Белки, г</p>
          <p className="textCPFC text text_type_digits-default">
            {ingr.proteins}
          </p>
        </div>
        <div>
          <p className="textCPFC text text_type_main-default">Жиры, г</p>
          <p className="textCPFC text text_type_digits-default">{ingr.fat}</p>
        </div>
        <div>
          <p className="textCPFC text text_type_main-default">Углеводы, г</p>
          <p className="textCPFC text text_type_digits-default">
            {ingr.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
}

IngredientDetails.propTypes = {
  ingr: burgerPropTypes.isRequired,
};

export default IngredientDetails;
