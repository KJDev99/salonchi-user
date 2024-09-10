import { request } from '../api/requests';
import { ENDPOINTS } from '../endpoints';

export const userProfile = () => request(ENDPOINTS.USER_PROFILE);

export const updateProfile = <T>(data: T) =>
  request.put(ENDPOINTS.USER_PROFILE_UPDATE, data);
