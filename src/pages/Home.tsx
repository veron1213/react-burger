import React from "react";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { IStoreType } from "../types/types";

export function Home() {

  const { ingredients, loading, error } = useSelector(
    (state: IStoreType) => state.viewIngredientsAll
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
