import React from "react";
import Tabs from "../tabs/tabs.jsx";
import ViewIngredients from "./view-ingredients/view-ingredients.jsx";
import burgerIngredientsStyle from "./burger-ingredients.module.css";
import { useSelector } from "react-redux";
import { getIngredientsType } from "../../services/view-ingredients-all/selectors.js";
import { createRef } from "react";
import { useState } from "react";

function BurgerIngredients() {
  const buns = useSelector(getIngredientsType("bun"));

  const mains = useSelector(getIngredientsType("main"));

  const sauces = useSelector(getIngredientsType("sauce"));

  const [nameMin, setNameMin] = useState("bun");
  const tabRef = createRef();
  const bunRef = createRef();
  const mainRef = createRef();
  const saucesRef = createRef();

  const handleScroll = () => {
    const tabRefParent = tabRef.current.getBoundingClientRect();
    const bunRefElement = bunRef.current.getBoundingClientRect();
    const mainRefElement = mainRef.current.getBoundingClientRect();
    const saucesRefElement = saucesRef.current.getBoundingClientRect();

    const yBun = Math.abs(bunRefElement.top - tabRefParent.bottom);
    const yMain = Math.abs(mainRefElement.top - tabRefParent.bottom);
    const ySauces = Math.abs(saucesRefElement.top - tabRefParent.bottom);

    let min;
    if (yBun > yMain) {
      min = yMain;
      setNameMin("main");
    } else {
      min = yBun;
      setNameMin("bun");
    }

    if (min > ySauces) {
      min = ySauces;
      setNameMin("sauces");
    }
  };

  return (
    <div>
      <p className="text text_type_main-large pt-10">Соберите бургер</p>
      <Tabs tabRef={tabRef} nameMin={nameMin} />
      <div
        className={burgerIngredientsStyle.ingredients}
        onScroll={handleScroll}
      >
        <ViewIngredients
          burgerIngr={buns}
          name="Булки"
          type="bun"
          ref={bunRef}
        />
        <ViewIngredients
          burgerIngr={mains}
          name="Начинки"
          type="ingredient"
          ref={mainRef}
        />
        <ViewIngredients
          burgerIngr={sauces}
          name="Соусы"
          type="ingredient"
          ref={saucesRef}
        />
      </div>
    </div>
  );
}

export default BurgerIngredients;
