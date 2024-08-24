import React from "react";
import pageStyle from "./pages.module.css";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { forgotPassword } from "../services/users/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";

export function ForgotPassword() {
  const { values, handleChange, setValues } = useForm({
    email: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sendOnEmail = () => {
    dispatch(forgotPassword(values));
    localStorage.setItem("resetPassword", true);
    navigate("/reset-password");
  };

  return (
    <div className={pageStyle.child}>
      <p className="text text_type_main-medium pb-6">Восстановление пароля</p>
      <form onSubmit={sendOnEmail}>
        <div className={classNames(pageStyle.input, "pb-6")}>
          <EmailInput
            onChange={handleChange}
            value={values.email}
            name={"email"}
            placeholder="Укажите e-mail"
            isIcon={false}
          />
        </div>
        <Button htmlType="submit" type="primary" size="medium">
          Восстановить
        </Button>
      </form>
      <div className={classNames(pageStyle.action, "pt-20")}>
        <p
          className={classNames(
            pageStyle.textLeft,
            "text text_type_main-default"
          )}
          style={{ textAlign: "right" }}
        >
          Вспомнили пароль?
        </p>

        <Link
          to="/login"
          className={classNames(
            pageStyle.textRight,
            "text text_type_main-default"
          )}
        >
          Войти
        </Link>
      </div>
    </div>
  );
}
