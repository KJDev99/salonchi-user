import { request } from "../api/requests";
import { ENDPOINTS } from "../endpoints";

export const getCategory = () => request(ENDPOINTS.CATEGORY_LIST);
export const getSubcategories = () => request(ENDPOINTS.CATEGORY_LIST_SUB);
