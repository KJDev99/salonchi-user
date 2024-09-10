import { request } from '../api/requests';

export const getDistricts = (region_id: number | string) =>
  request(`/region/district/${region_id}/list`);
