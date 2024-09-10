import React from "react";
import {
  ButtonWrapper,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  ProductBtns,
  // CardMain,
} from "./style";
import { StarIcon } from "@/assets/icons/start";
import { useRouter } from "next/router";
import { ActionIcon, Badge, Button } from "@mantine/core";
import { CartIcon } from "@/assets/icons/cart";
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

export const CustomCard = ({ id, item,isAllview, type = "default",isCarousel=false }: any) => {
  const router = useRouter();
  const cart = useStore((state: any) => state.cart);
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
    <Card className={`${router.pathname !== "/" ? "another-card" : ""} ${isCarousel ? 'carousel' : ''}`}>
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
            <NumberFormat value={item?.price ?? 0} />
            <span> {t("card.currency")}</span>
          </div>
          <div
            className="heart-wrapper"
            onClick={(e: any) => {
              setChecked(!checked);
              handleAddWishlist(e);
            }}
          >
            {checked ? <IconHeartFilled /> : <HeartOutlineIcon />}
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
          <ButtonWrapper>
            <Button
              className="add-to-cart-btn"
              onClick={(e) => item?.have_attribute ? router.push(`/product/${item?.slug}`) :   handleAddToCart(e, item)}
            >
              Savatchaga
            </Button>
          </ButtonWrapper>
        )}
      </CardFooter>
      {/* </CardMain> */}
    </Card>
  );
};
