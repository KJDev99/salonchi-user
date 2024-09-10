import { request } from "../api/requests";
import { ENDPOINTS } from "../endpoints";

export const productDetail = (id: number) =>
  request(ENDPOINTS.PRODUCT_DETAIL + id);

export const cheapProducts = () => request(ENDPOINTS.PRODUCT_LIST_CHEAP);
