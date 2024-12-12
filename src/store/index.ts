import { IProduct } from "@/types/product";
import { ICartStore, IStore } from "@/types/store";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useStore = create(
  persist<ICartStore>(
    (set) => ({
      cart: [],
      wishlist: [],
      quantity: 0,
      wishlistQuantity: 0,
      checkWhiteList: false,
      search: "",
      comment: "",
      setComment: (payload: string) => set(() => ({ comment: payload })),
      addToCart: (payload: IProduct) => {
        return set((state: IStore) => ({
          cart: [
            ...state.cart,
            {
              ...payload,
              productQuantity: payload.amount || 1,
            },
          ],
          quantity: state.quantity + 1,
        }));
      },
      removeItem: (id: string | number, attributes: any[]) =>
        set((state: IStore) => ({
          cart: state.cart?.filter((v: IProduct) => {
            const isIdMatch = v.id !== id;
            const isAttributeMatch =
              JSON.stringify(v.attributes) !== JSON.stringify(attributes);
            return isIdMatch || isAttributeMatch;
          }),
          quantity: state.quantity - 1,
        })),

      increment: (id: string | number, attributes: any[]) =>
        set((state: IStore) => ({
          cart: state.cart?.map((v: IProduct) => {
            const isIdMatch = v.id === id;
            const isAttributeMatch =
              JSON.stringify(v.attributes) === JSON.stringify(attributes);
            return isIdMatch && isAttributeMatch
              ? { ...v, productQuantity: v.productQuantity + 1 }
              : v;
          }),
        })),
      decrement: (id: string | number, attributes: any[]) =>
        set((state: IStore) => ({
          cart: state.cart?.map((v: IProduct) => {
            const isIdMatch = v.id === id;
            const isAttributeMatch =
              JSON.stringify(v.attributes) === JSON.stringify(attributes);
            return isIdMatch && isAttributeMatch && v.productQuantity > 1
              ? { ...v, productQuantity: v.productQuantity - 1 }
              : v;
          }),
        })),
      setCheckWhiteList: () =>
        set((state: any) => ({
          checkWhiteList: !state.checkWhiteList,
        })),
      addToWishList: (item: IProduct) =>
        set((state: IStore) => ({
          wishlist: [...state.wishlist, { ...item, hasWishList: true }],
          wishlistQuantity: state.wishlistQuantity + 1,
        })),
      removeWishList: (id: number) =>
        set((state: any) => ({
          wishlist: state?.wishlist?.filter((item: any) => item?.id !== id),
          wishlistQuantity: state.wishlistQuantity - 1,
        })),
      setSearch: (payload: string) => set(() => ({ search: payload })),
      clearStore: () => {
        set(() => ({
          cart: [],
          wishlist: [],
          quantity: 0,
          wishlistQuantity: 0,
        }));
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
