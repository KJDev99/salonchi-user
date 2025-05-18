import { CustomCard } from "@/components/card";
import { Pagination } from "@/components/pagination";
import { UISkeleton } from "@/components/skeleton";
import { Container, Title, Wrapper } from "@/styles/global";
import { IProduct } from "@/types/product";
import { Grid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { useProducts } from "./useProducts";

const AllProductScreen = () => {
  const router = useRouter();
  const slug = router.query.slug as String;
  const { productList, isLoading, setPage, activePage } = useProducts();
  const { t } = useTranslation("common");
  const { width } = useViewportSize();

  return (
    <Wrapper className="home-wrapper">
      <Container>
        <Title className="home-title" style={{ marginTop: 0 }}>
          {slug === "cheap" ? t("cheap prices") : t("news")}
        </Title>
        {isLoading ? (
          <UISkeleton />
        ) : (
          <Grid gutter={16}>
            <Fragment>
              {productList?.data?.map((item: IProduct) => (
                <Grid.Col
                  span={6}
                  lg={12 / 5}
                  xs={width > 640 ? 4 : 6}
                  sm={4}
                  md={3}
                  key={item?.id}
                >
                  <CustomCard
                    isCarousel={false}
                    id={item?.id}
                    item={item}
                    type={item?.is_cheap ? "cheap" : ""}
                  />
                </Grid.Col>
              ))}
            </Fragment>
          </Grid>
        )}
      </Container>
      <Pagination
        productCount={productList.count}
        activePage={activePage}
        setPage={(e) => setPage(e)}
      />
    </Wrapper>
  );
};

export default AllProductScreen;
