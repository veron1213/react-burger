import React from "react";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import appHeader from "./app-header.module.css";

function AppHeader() {
  return (
    <div className={appHeader.header}>
      <div className={appHeader.lsheader}>
        <a href="#" className={appHeader.lsheaderitem}>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default ml-2 mr-2">Конструктор</p>
        </a>
        <a href="#" className={appHeader.lsheaderitem}>
          <ListIcon type="secondary" />
          <p className="text text_type_main-default ml-2">Лента заказов</p>
        </a>
      </div>
      <Logo />
      <a href="#" className={appHeader.rsheader}>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default ml-2">Личный кабинет</p>
      </a>
    </div>
  );
}

export default AppHeader;
