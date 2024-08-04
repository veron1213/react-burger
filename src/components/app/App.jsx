import React from "react";
import { useEffect, useState } from "react";
import appStyle from "./app.module.css";
import AppHeader from "../header/app-header.jsx";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";
import { getIngredients } from "../../utils/burger-api.js";

function App() {
  const [state, setState] = useState({
    ingredientsData: null,
  });

  useEffect(() => {
    getIngredients()
      .then((data) => {
        setState({ ingredientsData: data.data });
      })
      .catch((e) => {
        console.error(e);
      });
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
