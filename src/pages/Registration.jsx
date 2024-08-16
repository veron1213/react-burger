import React from "react";
import pageStyle from "./pages.module.css";
import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classNames from "classnames";
import { Link } from "react-router-dom";

export function Registration() {
  const [valuePassword, setValuePassword] = React.useState(null);
  const onChangePassword = (e) => {
    setValuePassword(e.target.value);
  };
  const [valueEmail, setValueEmail] = React.useState(null);
  const onChangeEmail = (e) => {
    setValueEmail(e.target.value);
  };
  const [valueName, setValueName] = React.useState(null);
  const onChangeName = (e) => {
    setValueName(e.target.value);
  };
  return (
    <div className={pageStyle.child}>
      <p className="text text_type_main-medium pb-6">Регистрация</p>
      <div className={classNames(pageStyle.input, "pb-6")}>
        <Input
          type={"text"}
          placeholder="Имя"
          onChange={onChangeName}
          value={valueName}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
        />
      </div>
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
      <Button htmlType="button" type="primary" size="medium">
        Зарегистрироваться
      </Button>
      <div className={classNames(pageStyle.action, "pt-20")}>
        <p
          className={classNames(
            pageStyle.textLeft,
            "text text_type_main-default"
          )}
          style={{ textAlign: "right" }}
        >
          Уже зарегистрированы?
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
