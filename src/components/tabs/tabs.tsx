import React, { FC } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import tabsStyle from "./tabs.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";

interface ITypeTabs {
  nameMin: string;
  tabRef: React.ForwardedRef<HTMLDivElement>;
}

const Tabs: FC<ITypeTabs> = ({ tabRef, nameMin }) => {
  const [current, setCurrent] = React.useState("one");
  return (
    <div
      className={classNames(tabsStyle.tabContainer, "pt-5 mb-10")}
      ref={tabRef}
    >
      <Tab value="one" active={nameMin === "bun"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={nameMin === "main"} onClick={setCurrent}>
        Начинки
      </Tab>
      <Tab value="three" active={nameMin === "sauces"} onClick={setCurrent}>
        Соусы
      </Tab>
    </div>
  );
};

Tabs.propTypes = {
  nameMin: PropTypes.string.isRequired,
};

export default Tabs;
