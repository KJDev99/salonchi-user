import { request } from '../api/requests';
import { ENDPOINTS } from '../endpoints';

export const getBannerList = () => request(ENDPOINTS.BANNER_LIST);
