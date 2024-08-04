import React from "react";
import { burgerPropTypes } from "../../utils/prop-types.js";
import ingredientDetailsStyle from "./ingredient-details.module.css";
import classNames from "classnames";

function IngredientDetails({ ingr }) {
  return (
    <div className={classNames(ingredientDetailsStyle.details)}>
      <img
        className={classNames(ingredientDetailsStyle.image, "mb-4")}
        src={ingr.image}
      />
      <h3 className="text text_type_main-medium mb-8">{ingr.name}</h3>
      <div className={classNames(ingredientDetailsStyle.cpfc, "text")}>
        <div>
          <p
            className={classNames(
              ingredientDetailsStyle.textCPFC,
              "text text_type_main-default"
            )}
          >
            Калории, ккал
          </p>
          <p
            className={classNames(
              ingredientDetailsStyle.textCPFC,
              "text text_type_digits-default"
            )}
          >
            {ingr.calories}
          </p>
        </div>
        <div>
          <p
            className={classNames(
              ingredientDetailsStyle.textCPFC,
              "text text_type_main-default"
            )}
          >
            Белки, г
          </p>
          <p
            className={classNames(
              ingredientDetailsStyle.textCPFC,
              "text text_type_digits-default"
            )}
          >
            {ingr.proteins}
          </p>
        </div>
        <div>
          <p
            className={classNames(
              ingredientDetailsStyle.textCPFC,
              "text text_type_main-default"
            )}
          >
            Жиры, г
          </p>
          <p
            className={classNames(
              ingredientDetailsStyle.textCPFC,
              "text text_type_digits-default"
            )}
          >
            {ingr.fat}
          </p>
        </div>
        <div>
          <p
            className={classNames(
              ingredientDetailsStyle.textCPFC,
              "text text_type_main-default"
            )}
          >
            Углеводы, г
          </p>
          <p
            className={classNames(
              ingredientDetailsStyle.textCPFC,
              "text text_type_digits-default"
            )}
          >
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
