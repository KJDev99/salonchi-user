import { request } from '@/shared/api/requests';
import { ENDPOINTS } from '@/shared/endpoints';

export const getProducts = async () => {
  const res = await request(ENDPOINTS.READ_PRODUCT_LIST);
  return res.data;
};
