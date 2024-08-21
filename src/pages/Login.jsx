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
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setValue] = useState({
    email: "",
    password: "",
  });
  const [valuePassword, setValuePassword] = React.useState(null);
  const onChangePassword = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const [valueEmail, setValueEmail] = React.useState(null);
  const onChangeEmail = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const authorizationOnClick = () => {
    dispatch(authorization(form));
    navigate("/");
  };

  return (
    <div className={pageStyle.child}>
      <p className="text text_type_main-medium pb-6">Вход</p>
      <div className={classNames(pageStyle.input, "pb-6")}>
        <EmailInput
          onChange={onChangeEmail}
          value={valueEmail}
          name={"email"}
          isIcon={false}
        />
      </div>
      <div className={classNames(pageStyle.input, "pb-6")}>
        <PasswordInput
          onChange={onChangePassword}
          value={valuePassword}
          name={"password"}
          extraClass="mb-2"
        />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        onClick={authorizationOnClick}
      >
        Войти
      </Button>
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
