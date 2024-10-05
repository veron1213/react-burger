import React from "react";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import { useSelector } from '../hooks/selectorDispatch';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function Home() {

  const { ingredients, loading, error } = useSelector(
    (state) => state.viewIngredientsAll
  );

  return (
    <>
      {!loading && !error && (
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      )}
    </>
  );
}
