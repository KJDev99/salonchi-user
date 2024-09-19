import React from "react";
import {
  ButtonWrapper,
  Card,
  CardFooter,
  CardHeader,
  Input,
  ProductBtns,
  // CardMain,
} from "./style";
import { StarIcon } from "@/assets/icons/start";
import { CartIconn } from "@/assets/icons/cartIcon";
import { useRouter } from "next/router";
import { ActionIcon, Badge, Button } from "@mantine/core";
// import { CartIcon } from "@/assets/icons/cart";
import { IProduct } from "@/types/product";
import { NumberFormat } from "../number-format";
import useStore from "@/store";
import { ICardProps } from "@/types/card";
import { IconPlus } from "@/assets/icons/plus";
import { IconMinus } from "@/assets/icons/minus";
import { useReduce } from "./useReduce";
import { HeartOutlineIcon } from "@/assets/icons/heart.outline";
import { IconHeartFilled } from "@/assets/icons/card/heart.filled";
import { Carousel } from "./carousel";
import { useTranslation } from "next-i18next";
import { useViewportSize } from "@mantine/hooks";

export const CustomCard = ({
  id,
  item,
  isAllview,
  type = "default",
  isCarousel = false,
}: any) => {
  const router = useRouter();
  const cart = useStore((state: any) => state.cart);
  // console.log(item);
  const {
    handleAddToCart,
    handleIncrement,
    handleDecrement,
    handleAddWishlist,
    checked,
    setChecked,
    handleChackToCart,
  } = useReduce({
    cart,
    item,
  });
  const { t } = useTranslation("common");
  const { width } = useViewportSize();

  return (
    <Card
      className={`${router.pathname !== "/" ? "another-card" : ""} ${
        isCarousel ? "carousel" : ""
      }`}
    >
      <div
        className="heart-wrapper"
        onClick={(e: any) => {
          setChecked(!checked);
          handleAddWishlist(e);
        }}
      >
        {checked ? <IconHeartFilled /> : <HeartOutlineIcon />}
      </div>
      <CardHeader onClick={() => router.push(`/product/${item?.slug}`)}>
        {item?.photo !== null && <Carousel images={item?.photo} />}
        {type === "cheap" ? (
          <span className="badge">Aksiya</span>
        ) : type === "new" ? (
          <span className="badge">Yangi</span>
        ) : null}
      </CardHeader>
      {/* <CardMain> */}
      <CardFooter>
        <div className="stars-group">
          <div>
            <p>{router.locale == "ru" ? item?.name_ru : item?.name_uz}</p>
            <div className="rating">
              <StarIcon /> <span>4.7 (10 sharhlar)</span>
            </div>
            <div>
              <NumberFormat
                style={{
                  color: "#6C737F",
                  fontWeight: 400,
                  fontSize: "13px",
                  textDecoration: "line-through",
                }}
                value={item?.oldPrice ?? 0}
              />
              <span
                style={{
                  color: "#6C737F",
                  fontWeight: 400,
                  fontSize: "13px",
                  textDecoration: "line-through",
                }}
              >
                {" "}
                {t("card.currency")}
              </span>
            </div>
            <NumberFormat
              style={{ color: "#1F2A37", fontWeight: 500, fontSize: "16px" }}
              value={item?.price ?? 0}
            />
            <span
              style={{ color: "#1F2A37", fontWeight: 500, fontSize: "16px" }}
            >
              {" "}
              {t("card.currency")}
            </span>
          </div>
        </div>
        {cart?.find((el: IProduct) => el?.id === id) ? (
          <ProductBtns>
            <ActionIcon onClick={(e) => handleDecrement(e, item)}>
              <IconMinus />
            </ActionIcon>
            <Input
              value={
                cart?.find((el: IProduct) => el?.id === id)?.productQuantity
              }
              readOnly
            />
            <ActionIcon
              onClick={(e) => {
                handleIncrement(e, item);
              }}
              disabled={
                item?.count ===
                cart?.find((el: IProduct) => el?.id === id)?.productQuantity
                  ? true
                  : false
              }
            >
              <IconPlus />
            </ActionIcon>
          </ProductBtns>
        ) : (
          <div className="btn-group">
            <ButtonWrapper>
              <Button
                className="add-to-cart-btn add-to-cart-btn1"
                onClick={(e) => handleAddToCart(e, item)}
              >
                <CartIconn />
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button
                className="add-to-cart-btn add-to-cart-btn2"
                onClick={() => router.push(`/product/${item?.slug}`)}
              >
                Xarid qilish
              </Button>
            </ButtonWrapper>
          </div>
        )}
      </CardFooter>
      {/* </CardMain> */}
    </Card>
  );
};
