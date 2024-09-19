import React from "react";
import { Body, Form, FlexBtns, Header, ModalContent } from "./style";
import { Button, Divider } from "@mantine/core";
import { IProduct } from "@/types/product";
import { NumberFormat } from "@/components/number-format";
import { useCheckout } from "./useCheckout";
import { Modal } from "@/components/modal";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { IconWarning } from "@/assets/icons/warning";

export interface ICheckoutProps {
  initialCart: IProduct[];
  comment: string;
  open?: any;
  notifOpen?: any;
  notifyClose?: () => void;
  value?: string;
  payType: number;
}

export const Checkout = ({
  initialCart,
  comment,
  value,
  payType,
}: ICheckoutProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [opened, { open, close }] = useDisclosure(false);
  const [notifyOpened, { open: notifOpen, close: notifyClose }] =
    useDisclosure(false);
  const { onCheckout, isLoading } = useCheckout({
    initialCart,
    comment,
    open,
    notifOpen,
    value,
    payType,
  });

  console.log(router.pathname, "router");

  return (
    <Form onSubmit={onCheckout} id="form">
      <Header>
        <h2>{t("all")}:</h2>
        <h2>
          <NumberFormat
            value={initialCart?.reduce(
              (current, item: IProduct) =>
                current + item.productQuantity * item.price,
              0
            )}
          />{" "}
          {t("card.currency")}
        </h2>
      </Header>
      <Body>
        <li>
          <span>{t("value")}:</span>
          <p>
            <NumberFormat
              value={initialCart?.reduce(
                (current, item: IProduct) =>
                  current + item.productQuantity * item.price,
                0
              )}
            />
            <span>{t("card.currency")}</span>
          </p>
        </li>
        <li>
          <span>{t("promo code")}:</span>
          <span>0 {t("card.currency")}</span>
        </li>
        <li>
          <span>{t("used bonus")}:</span>
          <span>0 {t("card.currency")}</span>
        </li>
        <li>
          <span>
            {t("to pay in cash")}
            <br /> {t("commission amount")}
          </span>
          <span>0 %</span>
        </li>
        <li>
          <span>
            {t("delivery")}
            <br /> {t("prices")}
          </span>
          <span>0 {t("card.currency")}</span>
        </li>
        <Divider />
        <li>
          <span>{t("delivery")}:</span>
          <span>{t("by courier")}</span>
        </li>
        <li>
          <span>{t("payment type")}:</span>
          <span>{t("cash")}</span>
        </li>
        <li>
          <span>{t("order type")}:</span>
          <span>{t("pay in full")}</span>
        </li>
        <Button color="red" type="submit" className="order-btn" form="form">
          {t("place an order")}
        </Button>
      </Body>
      <Modal opened={opened} close={close}>
        <ModalContent>
          <IconWarning />
          <p
            style={{
              textAlign: "center",
              fontWeight: "500",
              margin: "18px auto",
              fontSize: 24,
            }}
          >
            {t("please register")}
          </p>
        </ModalContent>

        <FlexBtns>
          <Button
            onClick={() => {
              localStorage.setItem("cart_location", router.pathname);
              router.push("/login");
            }}
            color="red"
            style={{
              fontFamily: "var(--font-readex);",
              fontWeight: "400",
              borderRadius: "5px",
            }}
          >
            {t("log in")}
          </Button>
        </FlexBtns>
      </Modal>
      {/* <Notify notifyOpened={notifyOpened} notifyClose={notifyClose} /> */}
    </Form>
  );
};
