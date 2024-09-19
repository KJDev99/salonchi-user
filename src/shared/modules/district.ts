import { request } from "../api/requests";

export const getDistricts = async (region_id: number | string) => {
  const a = await request(`region/district/${region_id}/list`);
  return a.data;
};
