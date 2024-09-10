import React from 'react';
import { AddCart, Left, Navigator } from './style';
import { Button } from '@mantine/core';
import useStore from '@/store';
import { IProduct } from '@/types/product';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { CartIcon } from '@/assets/icons/cart';
import { useTranslation } from 'next-i18next';

export const BottomNavigator = ({ id, data }: any) => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const cart = useStore((state: any) => state.cart);
  const addToCart = useStore((state: any) => state.addToCart);
  const increment = useStore((state: any) => state.increment);

  const handleAddToCart = (item: IProduct) => {
    addToCart(item);
    toast.success("Maxsulot savatga qo'shildi");
  };

  const handleIncrement = (item: IProduct) => {
    increment(item.id);
  };

  return (
    <Navigator>
      <Left>
        <p>{t('sale')}</p>
      </Left>
      {cart?.find((v: any) => v.id == data?.id) ? (
        <AddCart>
          <Button
            color="red"
            className="inc-btn"
            onClick={() => handleIncrement(data)}
          >
            {' '}
            +{cart?.find((v: any) => v.id == data?.id)?.productQuantity}
          </Button>
          <Button
            variant="outlined"
            className="in-cart-btn"
            leftIcon={<CartIcon />}
            onClick={() => router.push('/cart')}
          >
            {t('go')}
          </Button>
        </AddCart>
      ) : (
        <AddCart>
          <Button color="red" onClick={() => handleAddToCart(data)}>
            {t('add cart')}
          </Button>
        </AddCart>
      )}
    </Navigator>
  );
};
