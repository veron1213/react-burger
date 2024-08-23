import React from "react";

import appStyle from "./app.module.css";
import AppHeader from "../header/app-header.jsx";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Home } from "../../pages/Home.jsx";
import { Login } from "../../pages/Login.jsx";
import { Registration } from "../../pages/Registration";
import { ForgotPassword } from "../../pages/ForgotPassword";
import { ResetPassword } from "../../pages/ResetPassword";
import { Profile } from "../../pages/Profile";
import IngredientDetails from "../burger-ingredients/ingredient-details/ingredient-details.jsx";
import Modal from "../modal/modal.jsx";
import { loadIngredients } from "../../services/view-ingredients-all/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { removeIngredientDetails } from "../../services/ingredient-details/actions.js";
import { checkUserAuth } from "../../services/users/actions";
import { Protected } from "../protected-routes/protected-routes";

function App() {
  const navigate = useNavigate();
  const handleCloseModal = () => {
    dispatch(removeIngredientDetails());
    navigate(-1);
  };
  const dispatch = useDispatch();
  let location = useLocation();

  let state = location.state && location.state.background;
  const { loading, error } = useSelector((state) => state.viewIngredientsAll);
  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkUserAuth());
  }, []);

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (!loading && error) {
    return <p>Ошибка: {error}</p>;
  }
  return (
    <div className={appStyle.App}>
      <AppHeader />
      <main>
        <Routes location={state || location}>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Protected onlyUnAuth={true} component={<Login />} />}
          />
          <Route
            path="/registration"
            element={
              <Protected onlyUnAuth={true} component={<Registration />} />
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Protected onlyUnAuth={true} component={<ForgotPassword />} />
            }
          />
          <Route
            path="/reset-password"
            element={
              <Protected onlyUnAuth={true} component={<ResetPassword />} />
            }
          />
          <Route
            path="/profile"
            element={<Protected onlyUnAuth={false} component={<Profile />} />}
          />
          <Route path="ingredients/:id" element={<IngredientDetails />} />
        </Routes>

        {state && (
          <Routes>
            <Route
              path="ingredients/:id"
              element={
                <Modal header="Детали ингредиента" onClose={handleCloseModal}>
                  <IngredientDetails />
                </Modal>
              }
            />
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
