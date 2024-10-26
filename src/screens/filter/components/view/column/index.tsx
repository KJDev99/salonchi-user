import { CustomCard } from "@/components/card";
import { IProduct } from "@/types/product";
import { Grid } from "@mantine/core";
import React, { Fragment } from "react";
import { UISkeleton } from "../../ui-skeleton";
import CategoryEmpty from "@/components/empty/empty";

interface IColumn {
  productList: IProduct[];
  isLoading: boolean;
}

export const Column = ({ productList, isLoading }: IColumn) => {
  return (
    <Fragment>
      {isLoading ? (
        <UISkeleton />
      ) : productList.length === 0 ? (
        <CategoryEmpty />
      ) : (
        <Grid mt={22}>
          {productList?.map((item: IProduct) => {
            return (
              <Grid.Col span={6} lg={3} xs={4} md={3} sm={6} key={item?.id}>
                <CustomCard id={item.id} item={item} />
              </Grid.Col>
            );
          })}
        </Grid>
      )}
    </Fragment>
  );
};
