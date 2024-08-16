import React from "react";
import pageStyle from "./profile.module.css";
import {
  Input,
  PasswordInput,
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

export function Profile() {
  const [valueLogin, setValueLogin] = React.useState(null);
  const onChangeLogin = (e) => {
    setValueLogin(e.target.value);
  };
  const [valueName, setValueName] = React.useState(null);
  const onChangeName = (e) => {
    setValueName(e.target.value);
  };
  const [valuePassword, setValuePassword] = React.useState(null);
  const onChangePassword = (e) => {
    setValuePassword(e.target.value);
  };

  return (
    <div className={pageStyle.container}>
      <div className={classNames(pageStyle.navigation, "pr-15")}>
        {/* <p
          className={classNames(
            pageStyle.navigationItem,
            "text text_type_main-medium"
          )}
        >
          Профиль
        </p> */}
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            isActive ? pageStyle.navigationItemActive : pageStyle.navigationItem
          }
        >
          Профиль
        </NavLink>
        {/* <p
          className={classNames(
            pageStyle.navigationItem,
            "text text_type_main-medium"
          )}
        >
          История заказов
        </p> */}
        <NavLink
          to={"/profile/orders"}
          className={({ isActive }) =>
            isActive ? pageStyle.navigationItemActive : pageStyle.navigationItem
          }
        >
          История заказов
        </NavLink>
        <p
          className={classNames(
            pageStyle.navigationItem,
            "text text_type_main-medium"
          )}
        >
          Выход
        </p>
        <p
          className={classNames(
            pageStyle.navigationCaption,
            "text text_type_main-default pt-20"
          )}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={pageStyle.editItem}>
        <div className={classNames(pageStyle.input, "pb-6")}>
          <Input
            type={"text"}
            placeholder="Имя"
            onChange={onChangeName}
            value={valueName}
            name={"name"}
            error={false}
            icon={"EditIcon"}
          />
        </div>
        <div className={classNames(pageStyle.input, "pb-6")}>
          <EmailInput
            onChange={onChangeLogin}
            value={valueLogin}
            name={"email"}
            placeholder="Логин"
            isIcon={true}
          />
        </div>
        <div className={classNames(pageStyle.input, "pb-6")}>
          <PasswordInput
            onChange={onChangePassword}
            value={valuePassword}
            name={"password"}
            icon="EditIcon"
          />
        </div>
      </div>
    </div>
  );
}
