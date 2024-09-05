import React from "react";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import appHeader from "./app-header.module.css";
import { NavLink } from "react-router-dom";

function AppHeader() {
  return (
    <div className={appHeader.header}>
      <div className={appHeader.lsheader}>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? appHeader.lsheaderitemActive : appHeader.lsheaderitem
          }
        >
          {({ isActive }) => (
            <>
              <BurgerIcon type={isActive ? "primary" : "secondary"} />
              <p className="text text_type_main-default ml-2 mr-2">
                Конструктор
              </p>
            </>
          )}
        </NavLink>
        <a href="#" className={appHeader.lsheaderitem}>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default ml-2">Лента заказов</p>
        </a>
      </div>
      <NavLink to={"/"}>
        <Logo />
      </NavLink>
      <NavLink
        to={"/profile"}
        className={({ isActive }) =>
          isActive ? appHeader.rsheaderActive : appHeader.rsheader
        }
        end={false}
      >
        {({ isActive }) => (
          <>
            <ProfileIcon type={isActive ? "primary" : "secondary"} />
            <p className="text text_type_main-default ml-2">Личный кабинет</p>
          </>
        )}
      </NavLink>
    </div>
  );
}

export default AppHeader;
