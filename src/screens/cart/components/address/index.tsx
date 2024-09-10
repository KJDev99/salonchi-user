import { Input } from '@/components/input';
import { Select } from '@/components/select';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Wrapper } from './style';
import { Button } from '@mantine/core';
import { useAddress } from './useAddress';
import { UILoader } from '../ui-loader';
import { useTranslation } from 'next-i18next';
import { createAddress } from '@/shared/modules/create-address';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys';
import toast from 'react-hot-toast';

interface TAddress {
  close: () => void;
}

export const Address = ({ close }: TAddress) => {
  const form = useFormContext();
  const { t } = useTranslation('common');
  const queryClient = useQueryClient();
  const { regions, districtList, isLoading } = useAddress();

  const { mutate, isLoading: addressLoading } = useMutation(
    (data) => createAddress(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [REACT_QUERY_KEYS.GET_ADDRESS_DETAIL],
        });
        toast.success("Manzil muvaffaqiyatli o'zgartirildi!");
        close();
      },
      onError: () => {},
    }
  );

  const onAddress = () => {
    const payload: any = {
      region: Number(form.watch('region')),
      district: Number(form.watch('district')),
      street: form.watch('street'),
      home: form.watch('home'),
    };
    mutate(payload);
  };
  return (
    <>
      {isLoading ? (
        <UILoader />
      ) : (
        <form onSubmit={form.handleSubmit(onAddress)}>
          <Wrapper>
            <Select
              label={t('address.region')}
              placeholder={t('address.region')}
              name="region"
              control={form.control}
              data={regions}
              nothingFound="No data"
              searchable
            />
            <Select
              label={t('address.district')}
              placeholder={t('address.district')}
              name="district"
              control={form.control}
              data={districtList}
              searchable
            />
            <Input
              type="text"
              label={t('address.street')}
              placeholder={t('address.street')}
              name="street"
              control={form.control}
            />
            <Input
              type="text"
              label={t('address.home number')}
              placeholder={t('address.home number')}
              name="home"
              control={form.control}
            />
            <div className="address-footer">
              <Button
                type="button"
                color="red"
                loading={addressLoading}
                onClick={onAddress}
              >
                {t('address.save')}
              </Button>
            </div>
          </Wrapper>
        </form>
      )}
    </>
  );
};
