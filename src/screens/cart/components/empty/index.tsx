import React from 'react';
import { Empty, Title } from './style';
import Image from 'next/image';
import EmpySmileIcon from '@/assets/images/empty-smile.png';
import { Button } from '@mantine/core';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export const CartEmpty = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  return (
    <Empty>
      <Image src={EmpySmileIcon} alt="empty" priority />
      <Title>{t('cart.empty cart')}</Title>
      <p>{t('cart.empty info')}</p>
      <Button color="red" onClick={() => router.push('/')}>
        {t('go home page')}
      </Button>
    </Empty>
  );
};
