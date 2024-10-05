import React from "react";
import classNames from "classnames";
import { useSelector } from "../../hooks/selectorDispatch";
import { useParams } from "react-router-dom";
import viewOrderModalStyle from "./view-order-modal.module.css";
import { IngredientType, IOrdersUser } from "../../types/types";
import {
  CurrencyIcon,
  FormattedDate,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { getOrdersApi } from "../../utils/burger-api";
import { useEffect } from "react";
import { useState } from "react";

const orderStatusClassName = (status: string) => {
  const orderStatusStyle =
    status === "Выполнен"
      ? viewOrderModalStyle.done
      : viewOrderModalStyle.textAlign;

  return classNames(orderStatusStyle, "text text_type_main-default pb-15");
};

const getOrder = (
  ordersUser: IOrdersUser[],
  feedOrders: IOrdersUser[],
  number: string | undefined
) => {
  let orderForId = ordersUser.find((order) => order.number == Number(number));

  if (orderForId) {
    return Promise.resolve(orderForId);
  }

  orderForId = feedOrders.find((order) => order.number == Number(number));

  if (orderForId) {
    return Promise.resolve(orderForId);
  }

  return getOrdersApi(number)
    .then((data) => {
      orderForId = data.orders[0];
      return orderForId;
    })
    .catch((e) => {
      console.log("Ошибка при попытке получения");
    });
};

function OrderDetailsFeed() {
  const { number } = useParams();
  const { ordersUser, feedOrders, ingredients } = useSelector((store) => ({
    ordersUser: store.ordersUser.orders,
    feedOrders: store.feedOrders.orders,
    ingredients: store.viewIngredientsAll.ingredients,
  }));
  const [orderForId, orderForIdSet] = useState<IOrdersUser>();
  useEffect(() => {
    getOrder(ordersUser, feedOrders, number).then((data) => {
      if (data) orderForIdSet(data);
    });
  }, []);

  if (!orderForId) {
    return <p className="text text_type_main-medium">Загрузка...</p>;
  } else {
    var status = "";
    switch (orderForId.status) {
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

    const result = orderForId.ingredients.reduce((acc, id) => {
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

    return (
      <div className={classNames(viewOrderModalStyle.details)}>
        <p
          className="text text_type_digits-default mb-10"
          style={{ width: "100%" }}
        >
          #{orderForId.number}
        </p>
        <p
          className={classNames(
            viewOrderModalStyle.textAlign,
            "text text_type_main-medium mb-3"
          )}
        >
          {orderForId.name}
        </p>
        <p className={orderStatusClassName(status)}>{status}</p>
        <p
          className={classNames(
            viewOrderModalStyle.textAlign,
            "text text_type_main-medium mb-6"
          )}
        >
          Состав:
        </p>
        <div className={classNames(viewOrderModalStyle.scroll, "mb-10")}>
          {filteredIngredients.map((ingredient) => (
            <div
              className={classNames(viewOrderModalStyle.composition)}
              key={ingredient._id}
            >
              <div className={classNames(viewOrderModalStyle.composition)}>
                <img
                  src={ingredient.image_mobile}
                  className={classNames(
                    viewOrderModalStyle.circularImage,
                    "mb-4 mr-4"
                  )}
                />

                <p
                  className={classNames(
                    viewOrderModalStyle.textAlign,
                    "text text_type_main-default mr-4"
                  )}
                >
                  {ingredient.name}
                </p>
              </div>
              <div
                className={classNames(viewOrderModalStyle.composition, "pr-6")}
              >
                <p className="text text_type_digits-default mr-1">
                  {ingredient.count} x {ingredient.price}
                </p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          ))}
        </div>
        <div className={classNames(viewOrderModalStyle.compositionPrice)}>
          <FormattedDate date={new Date(orderForId.createdAt)} />
          <div className={classNames(viewOrderModalStyle.composition)}>
            <p className="text text_type_digits-default pr-2">{summ}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    );
  }
}

export default OrderDetailsFeed;
