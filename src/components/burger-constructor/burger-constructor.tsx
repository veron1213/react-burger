import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import ViewIngredientsConstructor from "./view-ingredients-constructor/view-ingredients-constructor";
import ResultSum from "./result-sum/result-sum";
import burgerConstructorStyle from "./burger-constructor.module.css";
import classNames from "classnames";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "../../hooks/selectorDispatch";
import {
  addBunConstructor,
  addIngredientsConstructor,
} from "../../services/view-inrgedients-constructor/actions";
import { nanoid } from "nanoid";
import { IngredientType } from "../../types/types";

function BurgerConstructor() {
  const dispatch = useDispatch();
  const { ingredientsAll } = useSelector((store) => ({
    ingredientsAll: store.viewIngredientsAll.ingredients,
  }));

  const [, dropTargetBunTop] = useDrop({
    accept: "bun",
    drop(itemId: IngredientType) {
      const detail =
        ingredientsAll.find((ingr: IngredientType) => ingr._id == itemId._id) ||
        null;
      dispatch(addBunConstructor(detail));
    },
  });

  const [, dropTargetBun] = useDrop({
    accept: "bun",
    drop(itemId: IngredientType) {
      const detail =
        ingredientsAll.find((ingr: IngredientType) => ingr._id == itemId._id) ||
        null;
      dispatch(addBunConstructor(detail));
    },
  });

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemId: IngredientType) {
      const key = nanoid();
      const detail =
        ingredientsAll.find((ingr: IngredientType) => ingr._id == itemId._id) ||
        null;
      if (!detail) {
        return;
      }
      dispatch(addIngredientsConstructor({ ...detail, key }));
    },
  });

  const { bun, ingredients } = useSelector((store) => ({
    bun: store.ingredientsConstructor.bun,
    ingredients: store.ingredientsConstructor.ingredients,
  }));

  return (
    <div
      className={classNames(burgerConstructorStyle.burgerConstructor, "mt-25")}
    >
      <div
        ref={dropTargetBunTop}
        className={classNames(burgerConstructorStyle.burgerBun, "ml-6 pb-2")}
        data-testid={`containerBunTop`}
      >
        {bun ? (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={`${bun.image}`}
          />
        ) : (
          <div
            className={classNames(
              burgerConstructorStyle.emptyBlock,
              burgerConstructorStyle.emptyBlockTop
            )}
          >
            <p>Выберите булки</p>
          </div>
        )}
      </div>
      <div ref={dropTarget} data-testid={`containerIngredients`}>
        {" "}
        {ingredients.length > 0 ? (
          <ViewIngredientsConstructor burgerIngr={ingredients} />
        ) : (
          <div className={classNames(burgerConstructorStyle.emptyBlock)}>
            <p>Выберите начинку</p>
          </div>
        )}
      </div>
      <div
        ref={dropTargetBun}
        className={classNames(burgerConstructorStyle.burgerBun, "ml-6 pt-2")}
        data-testid={`containerBunBottom`}
      >
        {bun ? (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name} (низ)`}
            price={bun.price}
            thumbnail={`${bun.image}`}
          />
        ) : (
          <div
            className={classNames(
              burgerConstructorStyle.emptyBlock,
              burgerConstructorStyle.emptyBlockBottom
            )}
          >
            <p>Выберите булки</p>
          </div>
        )}
      </div>
      <ResultSum />
    </div>
  );
}

export default BurgerConstructor;
