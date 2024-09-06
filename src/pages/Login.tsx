import React from "react";
import pageStyle from "./pages.module.css";
import {
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { authorization } from "../services/users/actions";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { values, handleChange, setValues } = useForm({
    email: "",
    password: "",
  });

  const authorizationOnClick = () => {
    dispatch(authorization(values) as any);
    navigate("/");
  };

  return (
    <div className={pageStyle.child}>
      <p className="text text_type_main-medium pb-6">Вход</p>
      <form onSubmit={authorizationOnClick}>
        <div className={classNames(pageStyle.input, "pb-6")}>
          <EmailInput
            onChange={handleChange}
            value={values.email}
            name={"email"}
            isIcon={false}
          />
        </div>
        <div className={classNames(pageStyle.input, "pb-6")}>
          <PasswordInput
            onChange={handleChange}
            value={values.password}
            name={"password"}
            extraClass="mb-2"
          />
        </div>
        <Button htmlType="submit" type="primary" size="medium">
          Войти
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
          Вы — новый пользователь?
        </p>
        <Link
          to="/registration"
          className={classNames(
            pageStyle.textRight,
            "text text_type_main-default"
          )}
        >
          Зарегистрироваться
        </Link>
      </div>
      <div className={classNames(pageStyle.action, "pt-4")}>
        <p
          className={classNames(
            pageStyle.textLeft,
            "text text_type_main-default"
          )}
        >
          Забыли пароль?
        </p>
        <Link
          to="/forgot-password"
          className={classNames(
            pageStyle.textRight,
            "text text_type_main-default"
          )}
        >
          Восстановить пароль
        </Link>
      </div>
    </div>
  );
}
