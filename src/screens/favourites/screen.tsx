import { CustomCard } from "@/components/card";
import { FavouritesEmpty } from "@/components/favourites-empty";
import { request } from "@/shared/api/requests";
import { ENDPOINTS } from "@/shared/endpoints";
import useStore from "@/store";
import { Container, Title, Wrapper } from "@/styles/global";
import { IProduct } from "@/types/product";
import { Grid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const FavouriteScreen = () => {
  const [favourites, setFavourites] = useState([]);
  const wishlist = useStore((state: any) => state.wishlist);
  const { width } = useViewportSize();

  const { mutate } = useMutation(
    (data) => request.post(ENDPOINTS.PRODUCT_CHECK_ID, data),
    {
      onSuccess: (res) => {
        setFavourites(
          wishlist.filter((c: any) => res?.data?.ids.includes(c.id))
        );
        console.log(res, "dataaaaa");
      },
    }
  );

  useEffect(() => {
    if (wishlist?.length > 0) {
      const data: any = {
        ids: wishlist.map((car: any) => car.id),
      };
      mutate(data);
    } else {
      setFavourites([]);
    }
  }, [wishlist]);

  return (
    <Wrapper>
      <Container>
        {favourites.length > 0 && <Title>Sevimli mahsulotlar</Title>}
        <Grid gutter={16}>
          {favourites.map((v: IProduct) => {
            return (
              <Grid.Col
                span={6}
                lg={12 / 5}
                xs={width > 640 ? 4 : 6}
                sm={4}
                md={3}
                key={v.id}
              >
                <CustomCard id={v.id} item={v} />
              </Grid.Col>
            );
          })}

          {favourites.length === 0 && <FavouritesEmpty />}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default FavouriteScreen;
