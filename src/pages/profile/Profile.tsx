import React from "react";
import pageStyle from "./profile.module.css";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { logout } from "../../services/users/actions";
import { useDispatch } from '../../hooks/selectorDispatch';
import { useLocation } from "react-router-dom";
import { ProfileUser } from "./profile-user";
import { ProfileOrders } from "./profile-orders";

interface IBurgerIngr {
  isActive: boolean;
}

const getNavLinkClassName = ({ isActive }:IBurgerIngr) => {
  const navigationItemStyle = isActive 
    ? pageStyle.navigationItemActive
    : pageStyle.navigationItem;

  return classNames(navigationItemStyle, "text text_type_main-medium");
};

export function Profile() {

  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const logoutOnClick = () => {
    dispatch(logout());
    localStorage.removeItem("resetPassword"); //для логики, если сначала забыли пароль, а потом вошли без сброса
  };

  return (
    <div className={pageStyle.container}>
      <div className={classNames(pageStyle.navigation, "pr-15")}>
        <NavLink to={"/profile"} className={({ isActive  }) =>
                  `text text_type_main-medium ${isActive && pathname === "/profile" ? pageStyle.navigationItemActive : pageStyle.navigationItem}`
                }>
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
        {pathname === "/profile" && (
        <p
          className={classNames(
            pageStyle.navigationCaption,
            "text text_type_main-default pt-20"
          )}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>)}
        {pathname === "/profile/orders" && (
        <p
          className={classNames(
            pageStyle.navigationCaption,
            "text text_type_main-default pt-20"
          )}
        >
          В этом разделе вы можете посмотреть свою историю заказов
        </p>)}
      </div>
      {pathname === "/profile" && <ProfileUser/>}
      {pathname === "/profile/orders" && <ProfileOrders/>}
    </div>
  );
}
