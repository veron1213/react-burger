import React from "react";

import appStyle from "./app.module.css";
import AppHeader from "../header/app-header.jsx";

import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home.jsx";
import { Login } from "../../pages/Login.jsx";
import { Registration } from "../../pages/Registration";
import { ForgotPassword } from "../../pages/ForgotPassword";
import { ResetPassword } from "../../pages/ResetPassword";
import { Profile } from "../../pages/Profile";

function App() {
  return (
    <div className={appStyle.App}>
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
