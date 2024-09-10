import { REACT_QUERY_KEYS } from '@/constants/react-query-keys';
import { useRegions } from '@/hooks/useRegions';
import { addressDetail } from '@/shared/modules/create-address';
import { getDistricts } from '@/shared/modules/district';
import { useQuery } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

export const useAddress = () => {
  const form = useFormContext();
  const regions = useRegions();
  const user = JSON.parse(localStorage.getItem("userData") as string);
  const { isLoading } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_ADDRESS_DETAIL1],
    queryFn: addressDetail,
    onSuccess: (res) => {
      
      form.reset({
        home: res?.data?.home,
        region: res?.data?.region?.id,
        district: res?.data?.district?.id,
        street: res?.data?.street,
      });
    },
    enabled: !!user?.token ? true : false,
  });

  const { data: districtList = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.READ_DISTRICT_LIST, form.watch('region')],
    queryFn: () => getDistricts(form.watch('region')),
    select: (res) =>
      res?.data?.results?.map((v: any) => {
        return {
          value: v?.id,
          label: v?.name_uz,
        };
      }),
    enabled: form.watch('region') !== undefined && !!user?.token  ? true : false,
  });

  return {
    regions,
    districtList,
    isLoading,
  };
};
