import { IconCartNew } from "@/assets/icons/cart.new";
import { IconProfile } from "@/assets/icons/navbar/profile";
import { IconHeart } from "@/assets/icons/navbar/heart";
import { IconCart } from "@/assets/icons/navbar/cart";

export const menuList = [
  {
    text: "menu.profile",
    href: "/profile",
    btn: false,
    Icon: IconProfile,
    favourites: false,
    badge: false,
    profilePopup: true,
  },
  {
    text: "menu.saved",
    href: "/favourites",
    btn: false,
    badge: false,
    favourites: true,
    Icon: IconHeart,
    profilePopup: false,
  },
  {
    text: "menu.cart",
    href: "/cart",
    btn: false,
    badge: true,
    favourites: false,
    Icon: IconCart,
    profilePopup: false,
  },
  {
    text: "",
    href: "/",
    btn: true,
    badge: false,
    favourites: false,
    Icon: IconCart,
    profilePopup: false,
  },
];
