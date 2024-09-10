import { request } from "../api/requests";
import { ENDPOINTS } from "../endpoints";

export const productDetail = (id: number) =>
  request(ENDPOINTS.PRODUCT_DETAIL + id);

export const newProducts = () => request(ENDPOINTS.PRODUCT_LIST_NEW);
