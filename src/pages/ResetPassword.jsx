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

export function ResetPassword() {
  const [valuePassword, setValuePassword] = React.useState(null);
  const onChangePassword = (e) => {
    setValuePassword(e.target.value);
  };
  const [valueCode, setValueCode] = React.useState(null);
  const onChangeCode = (e) => {
    setValueCode(e.target.value);
  };

  return (
    <div className={pageStyle.child}>
      <p className="text text_type_main-medium pb-6">Восстановление пароля</p>
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
          onChange={onChangeCode}
          value={valueCode}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="ml-1"
        />
      </div>
      <Button htmlType="button" type="primary" size="medium">
        Сохранить
      </Button>
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
