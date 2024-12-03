import React, { useEffect, useState } from "react";
import { ActionIcon, Button, Image, Menu } from "@mantine/core";
import useStore from "@/store";
// import { IProduct } from '@/types/product';
import { Wrapper } from "./style";
import { IconDelete } from "@/assets/icons/delete";
import { NumberFormat } from "../number-format";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const CartMenu = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const cart = useStore((state: any) => state.cart);
  const removeItem = useStore((state: any) => state.removeItem);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(cart);
  }, [cart]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    router.push("/cart");
  };
  console.log(menu);
  return (
    <Wrapper>
      <Menu.Dropdown>
        {menu.map((v: any) => (
          <Menu.Item
            key={v.id}
            className="menu-item"
            onClick={(e) => {
              router.push(`/product/${v.id}`);
              e.stopPropagation();
            }}
          >
            <Image src={v?.media || v?.photo} alt="product-image" />
            <p className="product-info">
              <span className="product-name">{v.name}</span>
              <span>
                <NumberFormat value={(v.variant.price || v.price) ?? 0} />{" "}
                {t("card.currency")}
              </span>
            </p>
            <ActionIcon
              onClick={(e) => {
                removeItem(v.id, v.attributes);
                e.stopPropagation();
              }}
            >
              <IconDelete />
            </ActionIcon>
          </Menu.Item>
        ))}
        {menu.length === 0 && (
          <Menu.Item>
            <p className="empty-cart">{t("cart empty")}</p>
          </Menu.Item>
        )}
        <Menu.Item onClick={(e) => handleClick(e)}>
          <Button color="red" className="checkout-cart">
            {t("navigate cart")}
          </Button>
        </Menu.Item>
      </Menu.Dropdown>
    </Wrapper>
  );
};
