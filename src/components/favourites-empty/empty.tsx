import React from 'react';
import { CartEmptyProvider, Title } from './style';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '@mantine/core';
import Link from 'next/link';
import IConWishlist from '@/assets/images/empty-wishlist.png';
import { useTranslation } from 'next-i18next';

export const FavouritesEmpty = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  return (
    <CartEmptyProvider className="wishlist-empty">
      <Image
        src={IConWishlist}
        alt="wishlist-icon-empty"
        width={128}
        height={128}
      />
      <Title className="empty-title wishlist-title">
        {t('wishlist.empty title')}
      </Title>
      <Link href="/" className="link">
        {t('wishlist.empty info')}
      </Link>
      <Button onClick={() => router.push('/')} color="red">
        {t('go back')}
      </Button>
    </CartEmptyProvider>
  );
};
