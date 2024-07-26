import React from "react";
import { useEffect, useState } from "react";
import appStyle from "./app.module.css";
import AppHeader from "../header/app-header.jsx";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";

function App() {
  const [state, setState] = useState({
    ingredientsData: null,
    loading: true,
  });

  useEffect(() => {
    const url = `https://norma.nomoreparties.space/api/ingredients`;
    const getIngredientsData = async () => {
      setState({ ...state, loading: true });
      try {
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          setState({ ingredientsData: data.data, loading: false });
        }
      } catch (e) {
        console.error(e);
      }
    };
    getIngredientsData();
  }, []);

  return (
    <div className={appStyle.App}>
      <AppHeader />
      <main>
        {state.ingredientsData && (
          <>
            <BurgerIngredients burgerIngr={state.ingredientsData} />
            <BurgerConstructor burgerIngr={state.ingredientsData} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
