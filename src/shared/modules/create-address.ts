import { request } from '../api/requests';
import { ENDPOINTS } from '../endpoints';

export const createAddress = <T>(data: T) =>
  request.post(ENDPOINTS.USER_ADDRESS_UPDATE, data);

export const addressDetail = () => request(ENDPOINTS.USER_ADDRESS_DETAIL);
