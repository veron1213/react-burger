import React from "react";
import ingredientDetailsStyle from "./ingredient-details.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";

function IngredientDetails() {
  const { ingredient } = useSelector((state) => state.ingredientDetails);
  return (
    <div className={classNames(ingredientDetailsStyle.details)}>
      <img
        className={classNames(ingredientDetailsStyle.image, "mb-4")}
        src={ingredient.image}
      />
      <h3 className="text text_type_main-medium mb-8">{ingredient.name}</h3>
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
            {ingredient.calories}
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
            {ingredient.proteins}
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
            {ingredient.fat}
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
            {ingredient.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;
