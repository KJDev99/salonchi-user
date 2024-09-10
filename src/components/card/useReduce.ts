import useStore from "@/store";
import { IProduct } from "@/types/product";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";

interface IReduce {
  cart: IProduct[];
  item: IProduct;
}

export const useReduce = ({ cart, item }: IReduce) => {
  const [checked, setChecked] = useState(false);
  const addToCart = useStore((state: any) => state.addToCart);
  const increment = useStore((state: any) => state.increment);
  const decrement = useStore((state: any) => state.decrement);
  const removeItem = useStore((state: any) => state.removeItem);
  const addToWishList = useStore((state: any) => state.addToWishList);
  const removeWishList = useStore((state: any) => state.removeWishList);
  const wishlist = useStore((state: any) => state.wishlist);
  const router = useRouter();

  const handleAddToCart = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    item: IProduct
  ) => {
    e.stopPropagation();
    addToCart({ ...item, color: item?.colors?.[0] });
  };
  const handleChackToCart = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    item: IProduct
  ) => {
    e.stopPropagation();
    addToCart({ ...item, color: item?.colors?.[0]?.id });
    router.push("cart");
  };

  const handleIncrement = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    item: IProduct
  ) => {
    e.stopPropagation();
    increment(item?.id);
  };

  const handleDecrement = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    item: IProduct
  ) => {
    e.stopPropagation();
    cart?.find((el: IProduct) => el?.id === item?.id)?.productQuantity === 1
      ? removeItem(item?.id)
      : decrement(item?.id);
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

  return {
    handleAddToCart,
    handleIncrement,
    handleDecrement,
    handleAddWishlist,
    checked,
    setChecked,
    handleChackToCart,
  };
};
