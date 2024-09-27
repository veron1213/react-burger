import React from "react";

import appStyle from "./app.module.css";
import AppHeader from "../header/app-header";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { Registration } from "../../pages/Registration";
import { ForgotPassword } from "../../pages/ForgotPassword";
import { ResetPassword } from "../../pages/ResetPassword";
import { Profile } from "../../pages/profile/Profile";
import IngredientDetails from "../burger-ingredients/ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { loadIngredients } from "../../services/view-ingredients-all/actions";
import { useDispatch, useSelector } from "../../hooks/selectorDispatch";
import { useEffect } from "react";
import { removeIngredientDetails } from "../../services/ingredient-details/actions";
import { checkUserAuth } from "../../services/users/actions";
import { Protected } from "../protected-routes/protected-routes";
import { FeedOrders } from "../../pages/FeedOrders";
import OrderDetailsFeed from "../view-profile-orders/view-order-modal";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCloseModal = () => {
    dispatch(removeIngredientDetails());
    navigate(-1);
  };

  const location = useLocation();

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
          <Route path="/feed" element={<FeedOrders />} />
          <Route path="/feed/:number" element={<OrderDetailsFeed />} />
          <Route
            path="/profile"
            element={<Protected onlyUnAuth={false} component={<Profile />} />}
          />
          <Route
            path="/profile/orders"
            element={<Protected onlyUnAuth={false} component={<Profile />} />}
          />
          <Route
            path="/profile/orders/:number"
            element={
              <Protected onlyUnAuth={false} component={<OrderDetailsFeed />} />
            }
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
            <Route
              path="feed/:number"
              element={
                <Modal onClose={handleCloseModal}>
                  <OrderDetailsFeed />
                </Modal>
              }
            />
            <Route
              path="/profile/orders/:number"
              element={
                <Modal onClose={handleCloseModal}>
                  <OrderDetailsFeed />
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
