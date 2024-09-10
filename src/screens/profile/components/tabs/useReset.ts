import { REACT_QUERY_KEYS } from '@/constants/react-query-keys';
import { getDistricts } from '@/shared/modules/district';
import { userProfile } from '@/shared/modules/profile';
import { getRegions } from '@/shared/modules/region';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

export const useReset = () => {
  const form = useFormContext();
  const router = useRouter();
  const [image, setImage] = useState(
    'https://biolearns.medicine.iu.edu/imgs/user-icon.svg'
  );
  const regions = useWatch<any>({
    control: form.control,
    name: 'region',
  });

  const { data: regionsList = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_REGION_LIST],
    queryFn: getRegions,
    select: (res) => {
      return res?.data?.map((v: any) => {
        return {
          value: v?.id,
          label: v?.name_uz,
        };
      });
    },
  });

  const { data: districtList = [] } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_DISTRICT_LIST, regions],
    queryFn: () => getDistricts(regions),
    enabled: regions !== undefined ? true : false,
    select: (res) =>
      res?.data?.results?.map((v: any) => {
        return {
          value: v?.id,
          label: v?.name_uz,
        };
      }),
  });

  const { isLoading } = useQuery({
    queryKey: ['get-users-profile'],
    queryFn: userProfile,
    select: (res) => res?.data,
    onSuccess: (res) => {
      form.reset({
        ...res,
        street: res?.address?.street,
        home: res?.address?.home,
        region: res?.address?.region?.id,
        district: res?.address?.district?.id,
      });
      if (res?.photo !== null) setImage(`https://dev.freepik.uz${res?.photo}`);
    },
    onError: (err: any) => {
      if (err?.response?.status == 401) {
        router.push('/');
      }
    },
  });

  console.log(image, 'image');

  return {
    isLoading,
    regionsList,
    districtList,
    image,
    setImage,
  };
};
