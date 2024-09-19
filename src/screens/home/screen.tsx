import { CustomCard } from "@/components/card";
import { Slider } from "@/components/carousel";
import { Catalog } from "@/components/catalog";
import { Container, Title, Wrapper } from "@/styles/global";
import { Button, Grid } from "@mantine/core";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import React, { Fragment } from "react";
import { usePage } from "./usePage";
import { Paging, Card } from "./style";
import { UISkeleton } from "@/components/skeleton";
import { IconRefresh } from "@tabler/icons-react";
import { IProduct } from "@/types/product";
import { useTranslation } from "next-i18next";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight2 } from "@/assets/icons/arrow.right2";
import { useRouter } from "next/navigation";
import { Notify } from "./notify";
import Image from "next/image";

import Banner from "@/assets/images/banner.png";
const HomeScreen = () => {
  const { t } = useTranslation("common");
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    newProductList,
    cheapProductList,
    isFetchingNextPage,
    categoryListProducts,
  } = usePage();
  // console.log(data);
  const { width } = useViewportSize();
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Wrapper className="home-wrapper">
      {/* <Catalog /> */}
      <Container>
        <Slider />
        <Title className="home-title">{t("home.title")}</Title>
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
                      <CustomCard
                        isCarousel={false}
                        id={item?.id}
                        item={item}
                        type={item?.is_cheap ? "cheap" : ""}
                      />
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
              variant="outline"
            >
              {isFetchingNextPage ? t("loading") : t("home.fetching")}
            </Button>
          </Paging>
        )}
        <Title className="home-title" style={{ marginTop: 0 }}>
          {t("cheap prices")}
        </Title>
        <Carousel
          withIndicators={false}
          slideSize="20%"
          slideGap="sm"
          slidesToScroll={width > 576 ? 5 : 1}
          loop={false}
          align="start"
          breakpoints={[
            { maxWidth: "md", slideSize: "20%" },
            { maxWidth: "sm", slideSize: "10%", slideGap: "10px" },
          ]}
          controlSize={47}
          withControls={width > 576 ? true : false}
          styles={{
            control: {
              "&[data-inactive]": {
                opacity: 0,
                cursor: "default",
              },
            },
          }}
        >
          {cheapProductList?.slice(0, 9)?.map((v: any) => {
            return (
              <Carousel.Slide key={v?.id}>
                <CustomCard
                  isAllview={false}
                  isCarousel={true}
                  id={v?.id}
                  item={v}
                  type="cheap"
                />
              </Carousel.Slide>
            );
          })}
          <Carousel.Slide>
            <Card
              onClick={() => router.push(`/all-product/cheap`)}
              className={"another-card"}
            >
              <p>Barcha mahsulotlarni ko‘rish</p>
            </Card>
          </Carousel.Slide>
        </Carousel>
        <Title className="home-title">{t("news")}</Title>
        <Carousel
          withIndicators={false}
          slideSize="20%"
          slideGap="sm"
          slidesToScroll={width > 576 ? 5 : 1}
          loop={false}
          align="start"
          breakpoints={[
            { maxWidth: "md", slideSize: "20%" },
            { maxWidth: "sm", slideSize: "10%", slideGap: "10px" },
          ]}
          styles={{
            control: {
              "&[data-inactive]": {
                opacity: 0,
                cursor: "default",
              },
            },
          }}
          controlSize={47}
          withControls={width > 576 ? true : false}
        >
          {newProductList?.slice(0, 9)?.map((v: any) => {
            return (
              <Carousel.Slide key={v?.id}>
                <CustomCard isCarousel={true} id={v?.id} item={v} type="new" />
              </Carousel.Slide>
            );
          })}
          <Carousel.Slide>
            <Card
              onClick={() => router.push(`/all-product/new`)}
              className={"another-card"}
            >
              <p>Barcha mahsulotlarni ko‘rish</p>
            </Card>
          </Carousel.Slide>
        </Carousel>

        <Grid style={{ gap: "72px" }} gutter={16}>
          {console.log("categoryListProducts", categoryListProducts)}
          {categoryListProducts?.map((item: any, idx: number) => {
            return (
              <>
                <Image src={Banner} width={1248} height={400} alt="banner" />
                <Grid.Col
                  span={12}
                  lg={12}
                  xs={12}
                  sm={12}
                  md={12}
                  key={item?.id}
                >
                  <Title
                    className="home-title catalog-title-2"
                    style={idx === 0 ? { marginTop: 30 } : { marginTop: 15 }}
                  >
                    {item?.name_uz}{" "}
                    <IconArrowRight2 style={{ marginLeft: 10 }} />
                  </Title>

                  {item?.products?.length > 0 && (
                    <Carousel
                      withIndicators={false}
                      slideSize="20%"
                      slideGap="sm"
                      slidesToScroll={width > 576 ? 5 : 1}
                      loop={false}
                      align="start"
                      breakpoints={[
                        { maxWidth: "md", slideSize: "50%" },
                        { maxWidth: "sm", slideSize: "10%", slideGap: "10px" },
                      ]}
                      controlSize={47}
                      withControls={width > 576 ? true : false}
                      styles={{
                        control: {
                          "&[data-inactive]": {
                            opacity: 0,
                            cursor: "default",
                          },
                        },
                      }}
                    >
                      {item?.products?.slice(0, 9)?.map((children: any) => {
                        return (
                          <Carousel.Slide key={children?.id}>
                            <CustomCard
                              isCarousel={true}
                              id={children?.id}
                              item={children}
                              type={children?.is_cheap ? "cheap" : ""}
                            />
                          </Carousel.Slide>
                        );
                      })}
                      <Carousel.Slide>
                        <Card
                          onClick={() => router.push(`/categories/${item.id}`)}
                          className={"another-card"}
                        >
                          <p>Barcha mahsulotlarni ko‘rish</p>
                        </Card>
                      </Carousel.Slide>
                    </Carousel>
                  )}
                </Grid.Col>
              </>
            );
          })}
        </Grid>

        {/* <Notify opened={opened} close={close} open={open} /> */}
      </Container>
    </Wrapper>
  );
};

export default HomeScreen;
