import React from "react";
import { useEffect } from "react";
import BurgerIngredients from "../components/burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../components/burger-constructor/burger-constructor.jsx";
import { useDispatch, useSelector } from "react-redux";
import { loadIngredients } from "../services/view-ingredients-all/actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function Home() {
  const dispatch = useDispatch();

  const { ingredients, loading, error } = useSelector(
    (state) => state.viewIngredientsAll
  );

  // useEffect(() => {
  //   dispatch(loadIngredients());
  // }, []);

  // if (loading) {
  //   return <p>Загрузка...</p>;
  // }

  // if (!loading && error) {
  //   return <p>Ошибка: {error}</p>;
  // }

  // if (!loading && ingredients.length === 0) {
  //   return <p>Нет ингредиентов</p>;
  // }

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
