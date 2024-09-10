import { CustomCard } from '@/components/card';
import { FavouritesEmpty } from '@/components/favourites-empty';
import useStore from '@/store';
import { IProduct } from '@/types/product';
import { Grid } from '@mantine/core';
import React, { useEffect, useState } from 'react';

export const Favourites = () => {
  const wishlist = useStore((state: any) => state.wishlist);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setFavourites(wishlist);
  }, [wishlist]);

  return (
    <Grid gutter={16}>
      {favourites.map((item: IProduct) => (
        <Grid.Col span={6} lg={3} xs={4} md={3} sm={6} key={item?.id}>
          <CustomCard id={item?.id} item={item} />
        </Grid.Col>
      ))}
      {favourites.length === 0 && <FavouritesEmpty />}
    </Grid>
  );
};
