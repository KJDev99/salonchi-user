import { request } from '../api/requests';
import { ENDPOINTS } from '../endpoints';

export const getUser = () => request(ENDPOINTS.USER_LIST);
