import { CartIconn } from "@/assets/icons/cartIcon";
import { StarIcon } from "@/assets/icons/start";
import { ActionIcon, Button } from "@mantine/core";
import { useRouter } from "next/router";
import {
  ButtonWrapper,
  Card,
  CardFooter,
  CardHeader,
  Input,
  ProductBtns,
} from "./style";
// import { CartIcon } from "@/assets/icons/cart";
import { IconHeartFilled } from "@/assets/icons/card/heart.filled";
import { HeartOutlineIcon } from "@/assets/icons/heart.outline";
import useStore from "@/store";
import { IProduct } from "@/types/product";
import { useViewportSize } from "@mantine/hooks";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import { NumberFormat } from "../number-format";
import { Carousel } from "./carousel";
import { useReduce } from "./useReduce";

export const CustomCard = ({
  id,
  item,
  isAllview,
  type = "default",
  isCarousel = false,
}: any) => {
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
  const minimumPriceFinder = () => {
    if (item?.variants && item.variants?.length > 0) {
      let min = item?.variants[0]?.price;
      item?.variants?.forEach((variant: any) => {
        if (variant?.price < min) {
          min = variant.price;
        }
      });
      return min;
    } else return item?.price;
  };
  const minimumOldPrice = () => {
    if (item.variants.length === 0 && !item.variants) return item.old_price;
    let min = item.variants[0].old_price;
    item.variants.forEach((variant: any) => {
      if (variant.old_price < min) {
        min = variant.old_price;
      }
    });
    return min;
  };
  const { t } = useTranslation("common");
  const { width } = useViewportSize();
  // console.log(item);
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
        <Carousel images={item?.photo} media={item?.media} />
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
              {item?.rate.count > 0 ? (
                <>
                  <StarIcon />
                  <span>
                    {item?.rate?.rate} ({item?.rate?.count} sharhlar)
                  </span>
                </>
              ) : (
                <span>Новинка!</span>
              )}
            </div>
            {item.old_price ? (
              <div>
                <NumberFormat
                  style={{
                    color: "#6C737F",
                    fontWeight: 400,
                    fontSize: "13px",
                    textDecoration: "line-through",
                  }}
                  value={item?.old_price ?? 0}
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
            ) : (
              ""
            )}
            <NumberFormat
              style={{ color: "#1F2A37", fontWeight: 500, fontSize: "16px" }}
              value={minimumPriceFinder() ?? 0}
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
                onClick={(e) => {
                  if (item.have_attribute) {
                    router.push(`/product/${item?.slug}`);
                  } else {
                    handleAddToCart(e, item);
                  }
                }}
              >
                <CartIconn />
              </Button>
            </ButtonWrapper>
            <ButtonWrapper style={{ width: "100%" }}>
              <Button
                className="add-to-cart-btn add-to-cart-btn2"
                onClick={() => router.push(`/product/${item?.slug}`)}
              >
                {router.locale == "ru" ? "Купить" : "Xarid qilish"}
              </Button>
            </ButtonWrapper>
          </div>
        )}
      </CardFooter>
      {/* </CardMain> */}
    </Card>
  );
};
