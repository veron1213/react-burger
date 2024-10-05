import React from "react";
import { IOrdersUser, IngredientType } from "../../types/types";
import viewOrderStyle from "./view-order.module.css";
import classNames from "classnames";
import { useSelector } from "../../hooks/selectorDispatch";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, Link } from "react-router-dom";

interface ITypeOrder {
  order: IOrdersUser;
}

const orderStatusClassName = (status: string) => {
  const orderStatusStyle =
    status === "Выполнен" ? viewOrderStyle.done : viewOrderStyle.notDone;

  return classNames(
    orderStatusStyle,
    "text text_type_main-default pt-2 pr-6 pl-6"
  );
};

function ViewOrder({ order }: ITypeOrder) {
  const { ingredients } = useSelector((store) => ({
    ingredients: store.viewIngredientsAll.ingredients,
  }));

  const result = order.ingredients.reduce((acc, id) => {
    const found = acc.find((item) => item.id === id);

    if (found) {
      found.count++;
    } else {
      acc.push({ id, count: 1 });
    }
    return acc;
  }, [] as { id: string; count: number }[]);

  let summ = 0;
  const filteredIngredients = result.map((countItem) => {
    const additionalInfo = ingredients.find(
      (item) => item._id === countItem.id
    );
    const price = additionalInfo ? additionalInfo.price : 0;
    summ += price * countItem.count; // Вычисляем общую цену
    return {
      ...countItem,
      ...additionalInfo,
    };
  });

  const images_mobile = filteredIngredients.map(
    (ingredient) => ingredient.image_mobile
  );
  let countIngredients = 0;

  if (images_mobile && images_mobile.length > 5) {
    countIngredients = images_mobile.length - 5;
  }

  var status = "";
  switch (order.status) {
    case "done":
      status = "Выполнен";
      break;
    case "created":
      status = "Создан";
      break;
    case "pending":
      status = "Готовится";
      break;
  }
  const location = useLocation();
  const pathname = useLocation().pathname;

  return (
    <Link
      to={`${pathname}/${order.number}`}
      state={{ background: location }}
      className={viewOrderStyle.divelement}
    >
      <div className={classNames(viewOrderStyle.container, "p-6")}>
        <p className="text text_type_digits-default">#{order.number}</p>
        <p
          className={classNames(
            viewOrderStyle.time,
            "text text_type_main-default"
          )}
        >
          <FormattedDate date={new Date(order.createdAt)} />
        </p>
      </div>
      <p
        className={classNames(
          viewOrderStyle.nameOrder,
          "text text_type_main-medium pt-6"
        )}
      >
        {order.name}
      </p>
      {pathname === "/profile/orders" ? (
        <p className={orderStatusClassName(status)}>{status}</p>
      ) : (
        ""
      )}
      <div className={classNames(viewOrderStyle.container, "pt-6 pb-6")}>
        <div className="pl-2">
          <div className={viewOrderStyle.imageStackWrapper}>
            {images_mobile
              .slice(0, 5)
              .map((image: string | undefined, index) => (
                <img
                  key={index}
                  src={image}
                  className={viewOrderStyle.circularImage}
                  style={{
                    zIndex: images_mobile.length - index,
                    left: index * 50,
                  }}
                />
              ))}
            {countIngredients > 0 ? (
              <div
                className={classNames(viewOrderStyle.lastImage)}
                style={{
                  zIndex: images_mobile.length - 5,
                }}
              >
                <img
                  key={5}
                  src={images_mobile[5]}
                  className={viewOrderStyle.circularImageLast}
                />
                <p
                  className={classNames(
                    viewOrderStyle.lastImageCount,
                    "text text_type_main-default"
                  )}
                >
                  +{countIngredients}
                </p>
              </div>
            ) : null}
          </div>
        </div>
        <div className={classNames(viewOrderStyle.container, "pr-6")}>
          <p className="text text_type_digits-default pr-2">{summ}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </Link>
  );
}

export default ViewOrder;
