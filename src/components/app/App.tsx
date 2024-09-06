import React from "react";

import appStyle from "./app.module.css";
import AppHeader from "../header/app-header";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { Registration } from "../../pages/Registration";
import { ForgotPassword } from "../../pages/ForgotPassword";
import { ResetPassword } from "../../pages/ResetPassword";
import { Profile } from "../../pages/Profile";
import IngredientDetails from "../burger-ingredients/ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { loadIngredients } from "../../services/view-ingredients-all/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { removeIngredientDetails } from "../../services/ingredient-details/actions.js";
import { checkUserAuth } from "../../services/users/actions.js";
import { Protected } from "../protected-routes/protected-routes";
import {IStoreType} from '../../types/types'

function App() {
  const navigate = useNavigate();
  const handleCloseModal = () => {
    dispatch(removeIngredientDetails() as any);
    navigate(-1);
  };
  const dispatch = useDispatch();
  const location = useLocation();

  let state = location.state && location.state.background;
  const { loading, error } = useSelector((state: IStoreType) => state.viewIngredientsAll);
  useEffect(() => {
    dispatch(loadIngredients() as any);
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkUserAuth() as any);
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
