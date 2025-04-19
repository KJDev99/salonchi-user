import { request } from "../api/requests";
import { ENDPOINTS } from "../endpoints";

export const getOrder = () => request(ENDPOINTS.ORDER_LIST);

export const createOrder = <T>(data: T) => {
  return request.post(ENDPOINTS.ORDER_CREATE, data); 
};

export const paymentStatus = (pyStatus: any) =>
  request(`${ENDPOINTS.PAYMENT_STATUS}/${pyStatus}`);
