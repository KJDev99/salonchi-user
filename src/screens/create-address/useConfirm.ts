import { REACT_QUERY_KEYS } from '@/constants/react-query-keys';
import { createAddress } from '@/shared/modules/create-address';
import { getDistricts } from '@/shared/modules/district';
import { getRegions } from '@/shared/modules/region';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { formSchema } from './form.schema';
import { useRegions } from '@/hooks/useRegions';

export const useConfirm = () => {
  const form = useForm<any>({
    resolver: yupResolver(formSchema),
  });
  const router = useRouter();
  const regions = useRegions();

  const { data: districtList = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_DISTRICT_LIST, form.watch('region')],
    queryFn: () => getDistricts(form.watch('region')),
    enabled: form.watch('region') !== undefined ? true : false,
    select: (res) =>
      res?.data?.results?.map((v: any) => {
        return {
          value: v?.id,
          label: v?.name_uz,
        };
      }),
  });

  const { mutate, isLoading } = useMutation((data) => createAddress(data), {
    onSuccess: () => {
      router.push('/login');
    },
    onError: () => {},
  });

  const onAddress = (data: any) => {
    const payload: any = {
      region: Number(data.region),
      district: Number(data.district),
      street: data.street,
      home: data.home,
    };
    mutate(payload);
  };
  return {
    form,
    onAddress,
    regionsList: regions,
    districtList,
    isLoading,
  };
};
