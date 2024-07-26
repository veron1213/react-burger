import React from "react";
import { burgerPropTypes } from "../../utils/prop-types.js";
import "./ingredient-details.css";

function IngredientDetails({ ingr }) {
  return (
    <div className="details">
      <img src={ingr.image} />
      <h3>{ingr.name}</h3>
      <div className="cpfc mb-15">
        <div>
          <p>Калории, ккал</p>
          <p>{ingr.calories}</p>
        </div>
        <div>
          <p>Белки, г</p>
          <p>{ingr.proteins}</p>
        </div>
        <div>
          <p>Жиры, г</p>
          <p>{ingr.fat}</p>
        </div>
        <div>
          <p>Углеводы, г</p>
          <p>{ingr.carbohydrates}</p>
        </div>
      </div>
    </div>
  );
}

IngredientDetails.propTypes = {
  ingr: burgerPropTypes.isRequired,
};

export default IngredientDetails;
