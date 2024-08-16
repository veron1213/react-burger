import React from "react";
import pageStyle from "./pages.module.css";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classNames from "classnames";
import { Link } from "react-router-dom";

export function ForgotPassword() {
  const [valueEmail, setValueEmail] = React.useState(null);
  const onChangeEmail = (e) => {
    setValueEmail(e.target.value);
  };

  return (
    <div className={pageStyle.child}>
      <p className="text text_type_main-medium pb-6">Восстановление пароля</p>
      <div className={classNames(pageStyle.input, "pb-6")}>
        <EmailInput
          onChange={onChangeEmail}
          value={valueEmail}
          name={"email"}
          placeholder="Укажите e-mail"
          isIcon={false}
        />
      </div>
      <Button htmlType="button" type="primary" size="medium">
        Восстановить
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
