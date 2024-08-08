import React from "react";
import { useEffect, useState } from "react";
import appStyle from "./app.module.css";
import AppHeader from "../header/app-header.jsx";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";
import { getIngredients } from "../../utils/burger-api.js";
import { useDispatch, useSelector } from "react-redux";
import { loadIngredients } from "../../services/view-ingredients-all/actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    ingredientsData: null,
  });

  const { ingredients, loading, error } = useSelector(
    (state) => state.viewIngredientsAll
  );

  useEffect(() => {
    dispatch(loadIngredients());
  }, []);

  useEffect(() => {
    getIngredients()
      .then((data) => {
        setState({ ingredientsData: data.data });
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (!loading && error) {
    return <p>Ошибка: {error}</p>;
  }

  if (!loading && ingredients.length === 0) {
    return <p>Нет ингредиентов</p>;
  }

  return (
    <div className={appStyle.App}>
      <AppHeader />
      <main>
        {state.ingredientsData && (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor burgerIngr={state.ingredientsData} />
          </DndProvider>
        )}
      </main>
    </div>
  );
}

export default App;
