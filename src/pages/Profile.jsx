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
import { logout } from "../services/users/actions";
import { useDispatch, useSelector } from "react-redux";

const getNavLinkClassName = ({ isActive }) => {
  const navigationItemStyle = isActive
    ? pageStyle.navigationItemActive
    : pageStyle.navigationItem;

  return classNames(navigationItemStyle, "text text_type_main-medium");
};

export function Profile() {
  const { name, email } = useSelector((store) => ({
    name: store.user.user.name,
    email: store.user.user.email,
  }));
  const dispatch = useDispatch();
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

  const logoutOnClick = () => {
    dispatch(logout());
  };

  return (
    <div className={pageStyle.container}>
      <div className={classNames(pageStyle.navigation, "pr-15")}>
        <NavLink to={"/profile"} className={getNavLinkClassName}>
          Профиль
        </NavLink>
        <NavLink to={"/profile/orders"} className={getNavLinkClassName}>
          История заказов
        </NavLink>
        <NavLink
          to={"/login"}
          className={getNavLinkClassName}
          onClick={logoutOnClick}
        >
          Выход
        </NavLink>
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
            value={name}
            name={"name"}
            error={false}
            icon={"EditIcon"}
          />
        </div>
        <div className={classNames(pageStyle.input, "pb-6")}>
          <EmailInput
            onChange={onChangeLogin}
            value={email}
            name={"email"}
            placeholder="Логин"
            icon={"EditIcon"}
          />
        </div>
        <div className={classNames(pageStyle.input, "pb-6")}>
          <PasswordInput
            onChange={onChangePassword}
            value={valuePassword}
            name={"password"}
            placeholder="Пароль"
            icon={"EditIcon"}
          />
        </div>
      </div>
    </div>
  );
}
