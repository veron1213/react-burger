import React from "react";
import ingredientDetailsStyle from "./ingredient-details.module.css";
import classNames from "classnames";
import { useDispatch,useSelector } from "../../../hooks/selectorDispatch"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { addIngredientDetails } from "../../../services/ingredient-details/actions";

function IngredientDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { ingredientsAll, isLoading } = useSelector((store) => ({
    ingredientsAll: store.viewIngredientsAll.ingredients,
    isLoading: store.viewIngredientsAll.loading,
  }));
  const { ingredient } = useSelector((state) => state.ingredientDetails);
  const ingrForId = ingredientsAll.find((ingr) => ingr._id == id);

  useEffect(() => {
    if (ingrForId) {
      const detail = {
        image: ingrForId.image,
        name: ingrForId.name,
        calories: ingrForId.calories,
        proteins: ingrForId.proteins,
        fat: ingrForId.fat,
        carbohydrates: ingrForId.carbohydrates,
      };
      dispatch(addIngredientDetails(detail));
    }
  }, [ingrForId]);

  if (isLoading || !ingredient) return <div>Загрузка</div>;
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
