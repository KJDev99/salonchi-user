import React, { useEffect, useState } from "react";
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
  selectedOption: string;
  open?: any;
  notifOpen?: any;
  notifyClose?: () => void;
  value?: string;
  payType: number;
  infoUserOpened?: any;
  setInfoUserOpened?: any;
  handleProfileChange?: any;
  checkProfile?: boolean;
}

export const Checkout = ({
  initialCart,
  comment,
  value,
  payType,
  infoUserOpened,
  setInfoUserOpened,
  selectedOption,
  handleProfileChange,
  checkProfile,
}: ICheckoutProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [opened, { open, close }] = useDisclosure(false);
  const [notifyOpened, { open: notifOpen, close: notifyClose }] =
    useDisclosure(false);
  const { onCheckout, isLoading } = useCheckout({
    initialCart,
    comment,
    selectedOption,
    open,
    notifOpen,
    value,
    payType,
  });
  const [isFixed, setIsFixed] = useState(false);
  const [isTop, setIsTop] = useState(false);
  const [openLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const formElement = document.getElementById("form");
      const parentElement = document.querySelector(".parent-container");

      // Check if elements exist before proceeding
      if (!formElement || !parentElement) {
        return;
      }

      const parentBottom = parentElement.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY >= 120) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
      if (parentBottom <= windowHeight - 300) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parent-container">
      <Form
        onSubmit={onCheckout}
        id="form"
        className={`mediaFixed ${isFixed ? "fixedd" : ""} ${
          isTop ? "topCheck" : ""
        } ${infoUserOpened ? "infoUserOpened" : ""}`}
      >
        <Header>
          {!infoUserOpened ? <h2>{t("all")}:</h2> : <h2>Buyurtmangiz</h2>}

          {!infoUserOpened ? (
            <h3>
              <NumberFormat
                value={initialCart?.reduce(
                  (current, item: IProduct) =>
                    current +
                    item.productQuantity *
                      (item?.variant?.price ? item.variant.price : item.price),
                  0
                )}
              />{" "}
              {t("card.currency")}
            </h3>
          ) : (
            <div className="addInfos">
              <div className="addInfo">
                <p>Mahsulotlar ({initialCart.length}): </p>
                <div>
                  <NumberFormat
                    value={initialCart?.reduce(
                      (current, item: IProduct) =>
                        current + item.productQuantity * item.price,
                      0
                    )}
                  />{" "}
                  {t("card.currency")}
                </div>
              </div>
              <div className="addInfo">
                <p>Yetkazib berish: </p>
                <div>
                  <NumberFormat value={45000} /> {t("card.currency")}
                </div>
              </div>
              <div className="addInfo Priceall">
                <p>Jami: </p>
                <div>
                  <div>
                    <NumberFormat
                      value={
                        initialCart?.reduce(
                          (current, item: IProduct) =>
                            current +
                            item.productQuantity *
                              (item?.variant?.price
                                ? item.variant.price
                                : item.price),
                          0
                        ) + 45000
                      }
                    />{" "}
                    {t("card.currency")}
                  </div>
                </div>
              </div>
            </div>
          )}
        </Header>
        <Body>
          {infoUserOpened ? (
            checkProfile ? (
              <Button
                onClick={() => handleProfileChange()}
                color="red"
                type="submit"
                className="order-btn"
                form="form"
              >
                {t("place an order")}
              </Button>
            ) : (
              <Button color="red" className="order-btn order-btn-disable">
                {t("place an order")}
              </Button>
            )
          ) : (
            <Button
              color="red"
              className="order-btn"
              // form="form"
              // type="submit"
              onClick={(e) => {
                const userData = localStorage.getItem("userData");
                if (userData) {
                  e.preventDefault();
                  setInfoUserOpened(true);
                } else {
                  setIsLogin(true);
                }
              }}
            >
              {t("To’lov sahifasiga o’tish")}
            </Button>
          )}
        </Body>
        {openLogin && (
          <Modal opened={openLogin} close={close}>
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
        )}
        <Notify notifyOpened={notifyOpened} notifyClose={notifyClose} />
      </Form>
    </div>
  );
};
