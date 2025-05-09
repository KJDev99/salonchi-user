import { IProduct } from "./product";

export interface IStore {
  cart: IProduct[];
  wishlist: IProduct[];
  quantity: number;
  wishlistQuantity: number;
  checkWhiteList?: boolean;
}

export interface ICartStore {
  cart: IProduct[];
  wishlist: IProduct[];
  quantity: number;
  wishlistQuantity: number;
  checkWhiteList: boolean;
  search: string;
  comment: string;
  setComment: (payload: string) => void;
  addToCart: (payload: IProduct) => void;
  removeItem: (id: string | number, attributes: any[]) => void;
  increment: (id: string | number, attributes: any[]) => void;
  decrement: (id: string | number, attributes: any[]) => void;
}
