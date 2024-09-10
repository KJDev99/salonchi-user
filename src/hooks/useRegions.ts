import { REACT_QUERY_KEYS } from '@/constants/react-query-keys';
import { getRegions } from '@/shared/modules/region';
import { useQuery } from '@tanstack/react-query';

interface IRegions {
  id: number;
  name_uz: string;
  name_ru: string;
}

export const useRegions = () => {
  const { data: regions = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_REGION_LIST],
    queryFn: getRegions,
    select: (res) =>
      res?.data?.map((v: IRegions) => {
        return {
          value: v?.id,
          label: v?.name_uz,
        };
      }),
  });

  return regions;
};
