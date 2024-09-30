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
import { Notify } from "./notify";

export interface ICheckoutProps {
  initialCart: IProduct[];
  comment: string;
  open?: any;
  notifOpen?: any;
  notifyClose?: () => void;
  value?: string;
  payType: number;
  infoUserOpened?: any;
  setInfoUserOpened?: (value: boolean) => void;
}

export const Checkout = ({
  initialCart,
  comment,
  value,
  payType,
  infoUserOpened,
  setInfoUserOpened,
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

  console.log(value, "router");

  return (
    <Form onSubmit={onCheckout} id="form">
      <Header>
        {!infoUserOpened ? <h2>{t("all")}:</h2> : <h2>Buyurtmangiz</h2>}
        <h3>
          <NumberFormat
            value={initialCart?.reduce(
              (current, item: IProduct) =>
                current + item.productQuantity * item.price,
              0
            )}
          />{" "}
          {t("card.currency")}
        </h3>
      </Header>
      <Body>
        {infoUserOpened ? (
          <Button color="red" type="submit" className="order-btn" form="form">
            {t("To’lov sahifasiga o’tish")}
          </Button>
        ) : (
          <Button
            color="red"
            className="order-btn"
            form="form"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (setInfoUserOpened) {
                setInfoUserOpened(true);
              }
            }}
          >
            {t("place an order")}
          </Button>
        )}
      </Body>
      {infoUserOpened && (
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
              {t("please register")}asdf
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
              {t("log in")}12
            </Button>
          </FlexBtns>
        </Modal>
      )}
      {/* <Notify notifyOpened={notifyOpened} notifyClose={notifyClose} /> */}
    </Form>
  );
};
