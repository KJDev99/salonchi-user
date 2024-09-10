import { request } from '../api/requests';
import { ENDPOINTS } from '../endpoints';

export const getRegions = () => request(ENDPOINTS.REGION_LIST);
