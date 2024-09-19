import React from "react";
import { Sidebar } from "./components/sidebar";
import { Grid } from "@mantine/core";
import { CustomCard } from "@/components/card";
import { Title } from "@/styles/global";
// import { useProducts } from "@/hooks/useProducts";
import { IProduct } from "@/types/product";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useProducts } from "./useProducts";
import { Pagination } from "@/components/pagination";

const CategoriesScreen = () => {
  const router = useRouter();
  const categoryId = router.query.slug as string;
  const { productList, isLoading, setPage, activePage } = useProducts();
  const { t } = useTranslation("common");

  return (
    <Sidebar categoryId={categoryId}>
      <Title>{t("home.title")}</Title>
      <Grid gutter={16}>
        {!isLoading &&
          productList?.data?.map((item: IProduct) => (
            <Grid.Col
              span={6}
              lg={4}
              md={3}
              xs={4}
              // sm={4}
              key={item.id}
              style={{ background: "red !important" }}
            >
              <CustomCard id={item.id} item={item} />
            </Grid.Col>
          ))}
      </Grid>
      <Pagination
        productCount={productList.count}
        activePage={activePage}
        setPage={(e) => setPage(e)}
      />
    </Sidebar>
  );
};

export default CategoriesScreen;
