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
import { logout, updateInformation } from "../services/users/actions";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "../hooks/useForm";

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

  const logoutOnClick = () => {
    dispatch(logout());
    localStorage.removeItem("resetPassword"); //для логики, если сначала забыли пароль, а потом вошли без сброса
  };

  const reset = () => {
    setValues({
      name: name,
      email: email,
      password: "",
    });
  };

  const { values, handleChange, setValues } = useForm({
    name: name,
    email: email,
    password: "",
  });
  const updateInfo = () => {
    dispatch(updateInformation(values));
  };

  return (
    <div className={pageStyle.container}>
      <div className={classNames(pageStyle.navigation, "pr-15")}>
        <NavLink to={"/profile"} className={getNavLinkClassName} end={false}>
          Профиль
        </NavLink>
        <NavLink
          to={"/profile/orders"}
          className={getNavLinkClassName}
          end={false}
        >
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
            onChange={handleChange}
            value={values.name}
            name={"name"}
            error={false}
            icon={"EditIcon"}
          />
        </div>
        <div className={classNames(pageStyle.input, "pb-6")}>
          <EmailInput
            onChange={handleChange}
            value={values.email}
            name={"email"}
            placeholder="Логин"
            icon={"EditIcon"}
          />
        </div>
        <div className={classNames(pageStyle.input, "pb-6")}>
          <PasswordInput
            onChange={handleChange}
            value={values.password}
            name={"password"}
            placeholder="Пароль"
            icon={"EditIcon"}
          />
        </div>
        {(values.password != "" ||
          values.name != name ||
          values.email != email) && (
          <div className={pageStyle.buttonDiv}>
            <Button
              htmlType="button"
              type="secondary"
              size="medium"
              onClick={reset}
            >
              Отмена
            </Button>
            <Button
              htmlType="submit"
              type="primary"
              size="medium"
              onClick={updateInfo}
            >
              Сохранить
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
