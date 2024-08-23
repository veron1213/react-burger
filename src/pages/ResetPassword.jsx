import React from "react";
import pageStyle from "./pages.module.css";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetPassword } from "../services/users/actions";
import { useState } from "react";
import { useEffect } from "react";

export function ResetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setValue] = useState({
    password: "",
    token: "",
  });
  const [valuePassword, setValuePassword] = React.useState(null);
  const onChangePassword = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const [valueToken, setValueToken] = React.useState(null);
  const onChangeToken = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const resetPasswordOnClick = () => {
    dispatch(resetPassword(form));
    localStorage.removeItem("resetPassword");
    navigate("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("resetPassword") === null) {
      navigate("/forgot-password");
    }
  }, [navigate]);

  return (
    <div className={pageStyle.child}>
      <p className="text text_type_main-medium pb-6">Восстановление пароля</p>
      <form onSubmit={resetPasswordOnClick}>
        <div className={classNames(pageStyle.input, "pb-6")}>
          <PasswordInput
            onChange={onChangePassword}
            value={valuePassword}
            name={"password"}
            placeholder="Введите новый пароль"
            extraClass="mb-2"
          />
        </div>
        <div className={classNames(pageStyle.input, "pb-6")}>
          <Input
            type={"text"}
            placeholder="Введите код из письма"
            onChange={onChangeToken}
            value={valueToken}
            name={"token"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="ml-1"
          />
        </div>
        <Button htmlType="submit" type="primary" size="medium">
          Сохранить
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
