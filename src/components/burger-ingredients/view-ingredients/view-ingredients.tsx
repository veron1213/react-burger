import React from "react";
import ViewIngredient from "../view-ingredient/view-ingredient";
import viewIngredientsStyle from "./view-ingredients.module.css";
import { IngredientType } from "../../../types/types";

interface ITypeViewIngredients {
  name: string;
  type: string;
  burgerIngr: IngredientType[];
}

const ViewIngredients = React.forwardRef<HTMLParagraphElement, ITypeViewIngredients>((props, ref) => {
  return (
    <>
      <p className="text text_type_main-medium pb-6" ref={ref}>
        {props.name}
      </p>
      <div className={viewIngredientsStyle.rowIngredient}>
        {props.burgerIngr.map((ingr: IngredientType) => (
          <ViewIngredient ingr={ingr} key={ingr._id} type={props.type} />
        ))}
      </div>
    </>
  );
});

export default ViewIngredients;