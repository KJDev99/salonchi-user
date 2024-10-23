import React from "react";
import dayjs from "dayjs";
import {
  MyOrdersProvider,
  OrderCard,
  OrderCardBody,
  OrderCardHeader,
  OrderCardFooter,
} from "./style";
import { Badge, Grid } from "@mantine/core";
import { CustomizedAccordion } from "@/components/accordion";
import { NumberFormat } from "@/components/number-format";
import { useQuery } from "@tanstack/react-query";
import { getOrder } from "@/shared/modules/order";
import EmptyCart from "@/assets/images/cart.png";
import Image from "next/image";
import { getStatus, tagStatus } from "@/utils/status";
import { useTranslation } from "next-i18next";

export const MyOrders = () => {
  const { t } = useTranslation("common");
  const { data: orders = [] } = useQuery({
    queryKey: ["get-order-list"],
    queryFn: getOrder,
    select: (res) => res.data?.results,
  });
  return (
    <MyOrdersProvider>
      <Grid>
        {orders?.map((item: any, i: number) => {
          return (
            <Grid.Col span={12} md={12} sm={12} key={i}>
              <OrderCard>
                {/* <OrderCardHeader>
                  <h2>
                    {t("order_id")} {item?.id}
                  </h2>
                </OrderCardHeader> */}
                <OrderCardBody>
                  <ul className="order-body-left">
                    <li>{t("order_id")}</li>
                    <li>{t("status")}</li>
                    <li>{t("order date")}</li>
                    {/* <li>{t('delivery date')}</li>
                    <li>{t('pick-up point')}</li> */}
                    <li>{t("order price")}</li>
                    <li>{t("comment")}</li>
                  </ul>
                  <ul className="order-body-right">
                    <li> {item?.id}</li>
                    <li>
                      <Badge color={tagStatus(item?.status)?.color}>
                        {getStatus(item?.status)?.label}
                      </Badge>
                    </li>
                    <li>{dayjs(item?.created_at).format("DD-MM-YYYY")}</li>
                    {/* <li>{new Date().getDay()}</li>
                    <li>{new Date().getDay()}</li> */}
                    <li>
                      <NumberFormat value={item?.amount} /> <span>so`m</span>{" "}
                    </li>
                    <li>{item?.comment || "Izoh yo`q"}</li>
                  </ul>
                </OrderCardBody>

                {item?.order_items && item?.order_items.length > 0 ? (
                  <OrderCardFooter key={item.id}>
                    <CustomizedAccordion
                      data={item.order_items}
                      status={item?.status}
                    />
                  </OrderCardFooter>
                ) : null}
              </OrderCard>
            </Grid.Col>
          );
        })}
        {orders.length === 0 && (
          <div className="empty-cart">
            <Image
              src={EmptyCart}
              alt="empty-cart"
              className="empty-cart-image"
            />
          </div>
        )}
      </Grid>
    </MyOrdersProvider>
  );
};
