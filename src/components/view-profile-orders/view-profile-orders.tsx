import React from "react";

import viewProfileOrdersStyle from "./view-profile-orders.module.css";
import { IOrdersUser } from "../../types/types";

import classNames from "classnames";

import ViewOrder from "./view-order";

interface IOrderUser {
  ordersUser: IOrdersUser[];
}

function ViewProfileOrders({ ordersUser }: IOrderUser) {
  return (
    <div className={classNames(viewProfileOrdersStyle.scroll)}>
      {ordersUser.map((order: IOrdersUser, i) => (
        <ViewOrder order={order} key={order._id} />
      ))}
    </div>
  );
}

export default ViewProfileOrders;
