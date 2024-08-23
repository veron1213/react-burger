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
import { useEffect, useState } from "react";

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
  const [valueLogin, setValueLogin] = React.useState(email);
  const onChangeLogin = (e) => {
    setValueLogin(e.target.value);
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const [valueName, setValueName] = React.useState(name);
  const onChangeName = (e) => {
    setValueName(e.target.value);
    setValue({ ...form, [e.target.name]: e.target.value });
  };
  const [valuePassword, setValuePassword] = React.useState(null);
  const onChangePassword = (e) => {
    setValuePassword(e.target.value);
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const logoutOnClick = () => {
    dispatch(logout());
  };

  useEffect(() => {
    setValueName(name);
    setValueLogin(email);
  }, [email, name]);

  const reset = () => {
    setValuePassword("");
    setValueName(name);
    setValueLogin(email);
  };
  const [form, setValue] = useState({
    name: valueName,
    email: valueLogin,

    password: "",
  });
  const updateInfo = () => {
    dispatch(updateInformation(form));
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
        {(valuePassword != null ||
          valueName != name ||
          valueLogin != email) && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
