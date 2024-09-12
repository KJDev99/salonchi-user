import { useEffect, useState } from "react";
import Link from "next/link";
import { Badge, NavItemProvider } from "./style";
import { useRouter } from "next/router";
import { LanguageMenu } from "../menu";
import { INavItemProps } from "@/types/nav";
import useStore from "@/store";
import { Menu } from "@mantine/core";
import { CartMenu } from "../cart-menu";
import { ProfileIcon } from "@/assets/icons/profile";
import { IconLogout } from "@tabler/icons-react";
import { clearStorage } from "@/utils/clearStorage";
import { useTranslation } from "next-i18next";
import { IconProfile } from "@/assets/icons/navbar/profile";

const NavItem = ({
  text,
  href,
  active,
  Icon,
  btn,
  badge,
  favourites,
  profilePopup,
}: INavItemProps) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const quantity = useStore((state: any) => state.quantity);
  const wishlist = useStore((state: any) => state.wishlist);
  const cart = useStore((state: any) => state.cart);
  const wishlistQuantity = useStore((state: any) => state.wishlistQuantity);
  const [productCount, setProductCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [token, setToken] = useState<any>(null);

  useEffect(() => {
    setProductCount(cart?.length);
    setWishlistCount(wishlist.length);
  }, [cart?.length, wishlist?.length]);

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

  const handleLogout = () => {
    clearStorage();
    setToken(null);
    window.location.reload();
  };

  return (
    <NavItemProvider pathname={router.pathname} id="cart">
      {badge ? (
        <Menu shadow="md" trigger="hover" withArrow>
          <Menu.Target>
            <Link
              href="/cart"
              className={`nav__item ${active ? "active" : ""}`}
              color="white"
            >
              <Icon /> <span className="cart-title">{t(text)}</span>
            </Link>
          </Menu.Target>
          <CartMenu />
        </Menu>
      ) : profilePopup ? (
        <Menu withArrow trigger="hover">
          <Menu.Target>
            <Link
              href={token === null || token === undefined ? "/login" : "/"}
              className={`nav__item ${active ? "active" : ""}`}
              color="white"
            >
              <Icon />{" "}
              <span className="cart-title">
                {token === null || token === undefined ? t("login") : t(text)}
              </span>
            </Link>
          </Menu.Target>
          {token === null || token === undefined ? null : (
            <Menu.Dropdown>
              <Menu.Item
                className="profile-item"
                onClick={() => router.push("/profile")}
                icon={<IconProfile />}
              >
                {t("menu.my_profile")}
              </Menu.Item>
              <Menu.Item
                className="profile-item"
                onClick={handleLogout}
                icon={<IconLogout />}
              >
                {t("menu.logout")}
              </Menu.Item>
            </Menu.Dropdown>
          )}
        </Menu>
      ) : (
        <Link
          href={href}
          className={`nav__item ${active ? "active" : ""}`}
          color="white"
        >
          {!btn && <Icon />} <span className="cart-title">{t(text)}</span>
        </Link>
      )}

      {/* {btn && <LanguageMenu />} */}
      {badge && productCount > 0 && (
        <Badge>
          <span>{productCount}</span>
        </Badge>
      )}
      {favourites && wishlistCount > 0 && (
        <Badge className="saved-badge">
          <span>{wishlistCount}</span>
        </Badge>
      )}
    </NavItemProvider>
  );
};

export default NavItem;
