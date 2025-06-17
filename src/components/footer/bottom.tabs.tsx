/* eslint-disable react-hooks/exhaustive-deps */
import { CatalogIcon } from "@/assets/icons/catalog";
import { CartIcon } from "@/assets/icons/mobile/cart";
import { HeartIcon } from "@/assets/icons/mobile/heart";
import { HomeIcon } from "@/assets/icons/mobile/home";
import { ProfileIcon } from "@/assets/icons/mobile/profile";
import useStore from "@/store";
import useToken from "@/store/token";
import { Container } from "@/styles/global";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Badge, List, ListItem, TabsWrapper } from "./style";

export const BottomTabs = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const quantity = useStore((state: any) => state.quantity);
  const [productCount, setProductCount] = useState(0);
  const token = useToken((state: any) => state.token);
  const setToken = useToken((state: any) => state.setToken);

  useEffect(() => {
    setProductCount(quantity);
  }, [productCount, quantity]);

  useEffect(() => {
    const getFromStorage = async () => {
      if (typeof window !== "undefined") {
        const user = JSON.parse(
          window.localStorage.getItem("userData") as string
        );
        await setToken(user?.access);
      }
    };
    window.addEventListener("storage", getFromStorage);
    getFromStorage();
  }, [token]);

  return (
    <TabsWrapper>
      <Container>
        <List style={{ padding: "0 16px" }}>
          <ListItem href="/">
            <HomeIcon />
            <span className={router.pathname === "/" ? "active" : ""}>
              {t("main")}
            </span>
          </ListItem>
          <ListItem href="/catalog">
            <CatalogIcon />
            <span className={router.pathname === "/catalog" ? "active" : ""}>
              {t("catalog")}
            </span>
          </ListItem>
          <ListItem href="/favourites">
            <HeartIcon />
            <span className={router.pathname === "/favourites" ? "active" : ""}>
              {t("favourite")}
            </span>
          </ListItem>
          <ListItem href="/cart" className="cart-list-item">
            <CartIcon />
            <span className={router.pathname === "/cart" ? "active" : ""}>
              {t("menu.cart")}
            </span>
            <Badge>
              <span className="count">{productCount}</span>
            </Badge>
          </ListItem>
          <ListItem
            href={token === null || token === undefined ? "/login" : "/profile"}
          >
            <ProfileIcon />
            {token === null || token === undefined ? (
              <span className={router.pathname === "/login" ? "active" : ""}>
                {t("login")}
              </span>
            ) : (
              <span className={router.pathname === "/profile" ? "active" : ""}>
                {t("menu.profile")}
              </span>
            )}
          </ListItem>
        </List>
      </Container>
    </TabsWrapper>
  );
};
