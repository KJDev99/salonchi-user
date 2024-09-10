import { UISkeleton } from "@/components/skeleton";
import React, { Fragment } from "react";
import { useTranslation } from "next-i18next";
import { CustomCard } from "@/components/card";
import { Button, Grid } from "@mantine/core";
import { IProduct } from "@/types/product";
import { useViewportSize } from "@mantine/hooks";
import { useList } from "./useList";
import { Paging } from "./style";
import { IconRefresh } from "@tabler/icons-react";
import { Container, Title } from "@/styles/global";

export const SimilarProducts = ({ item }: any) => {
  const { t } = useTranslation("common");
  const { width } = useViewportSize();
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useList({ item });

  return (
    <Fragment>
      {width < 576 ? (
        <Container>
          <Title className="home-title">{t("similar products")}</Title>
          {isLoading ? (
            <UISkeleton />
          ) : (
            <Grid gutter={16}>
              {data?.pages?.map((page, idx) => {
                return (
                  <Fragment key={idx}>
                    {page?.results?.map((item: IProduct) => (
                      <Grid.Col
                        span={6}
                        lg={12 / 5}
                        xs={width > 640 ? 4 : 6}
                        sm={4}
                        md={3}
                        key={item?.id}
                      >
                        <CustomCard id={item?.id} item={item} />
                      </Grid.Col>
                    ))}
                  </Fragment>
                );
              })}
            </Grid>
          )}
          {isFetchingNextPage ? <UISkeleton /> : hasNextPage ? null : null}
          {hasNextPage && (
            <Paging>
              <Button
                className="show-more"
                onClick={() => fetchNextPage()}
                disabled={!hasNextPage || isFetchingNextPage}
                loading={isLoading}
                leftIcon={<IconRefresh />}
              >
                {isFetchingNextPage ? t("loading") : t("home.fetching")}
              </Button>
            </Paging>
          )}
        </Container>
      ) : (
        <Fragment>
          <Title className="home-title">{t("similar products")}</Title>
          {isLoading ? (
            <UISkeleton />
          ) : (
            <Grid gutter={16}>
              {data?.pages?.map((page, idx) => {
                return (
                  <Fragment key={idx}>
                    {page?.results?.map((item: IProduct) => (
                      <Grid.Col
                        span={6}
                        lg={12 / 5}
                        xs={width > 640 ? 4 : 6}
                        sm={4}
                        md={3}
                        key={item?.id}
                      >
                        <CustomCard id={item?.id} item={item} />
                      </Grid.Col>
                    ))}
                  </Fragment>
                );
              })}
            </Grid>
          )}
          {isFetchingNextPage ? <UISkeleton /> : hasNextPage ? null : null}
        </Fragment>
      )}
    </Fragment>
  );
};
