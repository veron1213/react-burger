import React from "react";
import { useEffect, useState } from "react";
import "./app.css";
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
      const res = await fetch(url);
      const data = await res.json();
      setState({ ingredientsData: data.data, loading: false });
    };
    getIngredientsData();
  }, []);

  return (
    <div className="App">
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
