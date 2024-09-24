import React, { useEffect, useState } from "react";
import {
  CardUI,
  ContentHeader,
  ContentLeft,
  ContentRight,
  ProductInfo,
} from "./style";
import { ActionIcon, Image, Rating } from "@mantine/core";
import { Operations } from "../operations";
import { Carousel } from "../carousel";
import useStore from "@/store";
import { NumberFormat } from "@/components/number-format";
import { useTranslation } from "next-i18next";
import { Color } from "@/screens/product/components/colors/style";
import { IconTrash } from "@/assets/icons/trash";
import { HeartOutlineIcon } from "@/assets/icons/heart.outline";
import { IconHeartFilled } from "@/assets/icons/card/heart.filled";
import { StarIcon } from "@/assets/icons/star";

export const Card = ({ item }: any) => {
  const { t } = useTranslation("common");
  const [checked, setChecked] = useState(false);
  const wishlist = useStore((state: any) => state.wishlist);
  const removeItem = useStore((state: any) => state.removeItem);
  const addToWishList = useStore((state: any) => state.addToWishList);
  const removeWishList = useStore((state: any) => state.removeWishList);
  const [quantity, setQuantity] = useState(1);
  const handleRemove = (id: string | number) => {
    removeItem(id);
  };

  const handleAddWishlist = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (!checked) {
      addToWishList(item);
    } else {
      removeWishList(item.id);
    }
  };

  useEffect(() => {
    if (wishlist?.find((v: any) => v.id == item.id)?.hasWishList) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [wishlist, item.id]);

  return (
    <CardUI>
      <ContentLeft>
        {/* <Carousel images={item?.photo || item?.media} /> */}
        <div className="image-container">
          <Image
            src={item?.photo || item?.media}
            alt={item?.name_uz}
            width={112}
            h={112}
          />
        </div>
        <ProductInfo>
          <h4>{item?.name_uz}</h4>
          {/* <h2 style={{ fontWeight: "300", fontSize: 20 }}>
            <NumberFormat value={item?.price ?? 0} /> {t("card.currency")}
          </h2> */}
          <div className="rating">
            <StarIcon />
            <span>{item.rate.rate}</span>
            <span>({item.rate.count} sharhlar)</span>
          </div>
          {item?.color && (
            <p
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              {t("color")}:{" "}
              <Color
                color={
                  item?.colors?.find((itm: any) => itm.id === item?.color)?.code
                }
                className={`color-swatch active`}
              />
            </p>
          )}
        </ProductInfo>
      </ContentLeft>
      <ContentRight>
        <ContentHeader>
          {/* <div
            className="heart-wrapper"
            onClick={(e: any) => {
              setChecked(!checked);
              handleAddWishlist(e);
            }}
          >
            {checked ? <IconHeartFilled /> : <HeartOutlineIcon />}
          </div> */}
        </ContentHeader>
        <div className="operations">
          <Operations count={item.productQuantity} id={item.id} />
          <div className="prices">
            <div>
              <h4 style={{ fontWeight: "300", fontSize: 16 }}>
                <NumberFormat
                  value={item?.price * item?.productQuantity ?? 0}
                />{" "}
                {t("card.currency")}
              </h4>
            </div>
            <div>
              <h4
                style={{
                  fontWeight: "300",
                  fontSize: 14,
                  color: "#6C737F",
                  whiteSpace: "nowrap",
                }}
              >
                <NumberFormat value={item?.price ?? 0} /> {t("card.currency")}
                /donasi
              </h4>
            </div>
          </div>
          <ActionIcon onClick={() => handleRemove(item.id)}>
            <IconTrash />
          </ActionIcon>
        </div>
      </ContentRight>
    </CardUI>
  );
};
