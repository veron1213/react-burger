import { useDispatch, useSelector } from "../hooks/selectorDispatch";
import { wsConnectionStartAction } from "../services/feed-orders/actions";
import { useEffect } from "react";
import ViewProfileOrders from "../components/view-profile-orders/view-profile-orders";
import pageStyle from "./pages.module.css";
import classNames from "classnames";

export function FeedOrders() {
  const { feedOrders, total, totalToday } = useSelector((store) => ({
    feedOrders: store.feedOrders.orders,
    total: store.feedOrders.total,
    totalToday: store.feedOrders.totalToday,
  }));

  const doneOrders = feedOrders
    .filter((feedOrders) => feedOrders.status === "done")
    .slice(0, 14)
    .map((feedOrders) => feedOrders.number);

  const pendingOrders = feedOrders
    .filter((feedOrders) => feedOrders.status === "pending")
    .slice(0, 14)
    .map((feedOrders) => feedOrders.number);

  const dispatch = useDispatch();
  useEffect(() => {
    const wsUrl = `wss://norma.nomoreparties.space/orders/all`;
    dispatch(wsConnectionStartAction(`${wsUrl}`));
    return () => {};
  }, [dispatch]);
  return (
    <div className={pageStyle.blockFeed}>
      <p
        className={classNames(
          pageStyle.textAlign,
          "text text_type_main-large pt-10"
        )}
      >
        Лента заказов
      </p>

      {feedOrders.length > 0 ? (
        <div className={pageStyle.container} style={{ height: "100%" }}>
          <div className="pr-15 mt-10">
            <ViewProfileOrders ordersUser={feedOrders} />
          </div>
          <div>
            <div className={pageStyle.containerRight}>
              <div className={classNames(pageStyle.containerColumn, "mr-9")}>
                <p
                  className={classNames(
                    pageStyle.textAlign,
                    "text text_type_main-medium pb-6"
                  )}
                >
                  Готовы:
                </p>
                <div className={pageStyle.container}>
                  <div>
                    {doneOrders.slice(0, 7).map((order: number) => (
                      <p
                        key={order}
                        className={classNames(
                          pageStyle.doneNumber,
                          "text text_type_digits-default pb-2"
                        )}
                      >
                        {order}
                      </p>
                    ))}
                  </div>
                  <div>
                    {doneOrders.slice(7, 14).map((order: number) => (
                      <p
                        key={order}
                        className={classNames(
                          pageStyle.doneNumber,
                          "text text_type_digits-default pb-2"
                        )}
                      >
                        {order}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className={pageStyle.containerColumn}>
                <p
                  className={classNames(
                    pageStyle.textAlign,
                    "text text_type_main-medium pb-6"
                  )}
                >
                  В работе:
                </p>
                <div className={pageStyle.container}>
                  <div>
                    {pendingOrders.slice(0, 7).map((order: number) => (
                      <p
                        key={order}
                        className={classNames(
                          "text text_type_digits-default pb-2"
                        )}
                      >
                        {order}
                      </p>
                    ))}
                  </div>
                  <div>
                    {pendingOrders.slice(7, 14).map((order: number) => (
                      <p
                        key={order}
                        className={classNames(
                          "text text_type_digits-default pb-2"
                        )}
                      >
                        {order}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-15">
              <p
                className={classNames(
                  pageStyle.textAlign,
                  "text text_type_main-medium"
                )}
              >
                Выполнено за все время
              </p>
              <p
                className={classNames(
                  pageStyle.textAlign,
                  "text text_type_digits-large"
                )}
              >
                {total}
              </p>
            </div>
            <div className="pt-15">
              <p
                className={classNames(
                  pageStyle.textAlign,
                  "text text_type_main-medium"
                )}
              >
                Выполнено за сегодня
              </p>
              <p
                className={classNames(
                  pageStyle.textAlign,
                  "text text_type_digits-large"
                )}
              >
                {totalToday}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text text_type_main-large">Заказов нет</p>
      )}
    </div>
  );
}
