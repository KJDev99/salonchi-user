import { IconArrowRight2 } from "@/assets/icons/arrow.right2";
import { CustomCard } from "@/components/card";
import { Slider } from "@/components/carousel";
import { UISkeleton } from "@/components/skeleton";
import { Container, Title, Wrapper } from "@/styles/global";
import { IProduct } from "@/types/product";
import { Carousel } from "@mantine/carousel";
import { Button, Grid } from "@mantine/core";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import { IconRefresh } from "@tabler/icons-react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, Paging } from "./style";
import { usePage } from "./usePage";

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
  const { width } = useViewportSize();
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Wrapper className="home-wrapper">
      <Container>
        <Slider />
        {newProductList?.length > 0 && (
          <>
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
                { maxWidth: "sm", slideSize: "10%", slideGap: "0px" },
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
                    <CustomCard
                      isCarousel={true}
                      id={v?.id}
                      item={v}
                      type="new"
                    />
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
          </>
        )}
        <Title className="home-title home-titlee">{t("home.title")}</Title>
        {isLoading ? (
          <UISkeleton />
        ) : (
          <Grid className="home-grid" gutter={0}>
            {data?.pages?.map((page, idx) => {
              return (
                <Grid key={idx} gutter={16}>
                  {page?.results?.map((item: IProduct) => (
                    <Grid.Col
                      span={6}
                      lg={3}
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
                </Grid>
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
        {cheapProductList?.length > 0 && (
          <>
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
          </>
        )}

        {/* {newProductList?.length > 0 && (
          <>
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
                { maxWidth: "sm", slideSize: "10%", slideGap: "0px" },
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
                    <CustomCard
                      isCarousel={true}
                      id={v?.id}
                      item={v}
                      type="new"
                    />
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
          </>
        )} */}

        <Grid style={{ gap: "18px", marginTop: "40px" }} gutter={0}>
          {categoryListProducts?.map((item: any, idx: number) => {
            return (
              <>
                {item?.products?.length ? (
                  <>
                    {item.banner_uz && (
                      <Image
                        // src='/category_empty.webp'
                        src={item.banner_uz}
                        width={1248}
                        height={400}
                        alt="banner"
                        style={{
                          borderRadius: "32px",
                          marginTop: "20px",
                          marginBottom: "20px",
                        }}
                      />
                    )}
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
                        style={
                          idx === 0 ? { marginTop: 30 } : { marginTop: 15 }
                        }
                      >
                        {item?.name_uz}
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
                            {
                              maxWidth: "sm",
                              slideSize: "10%",
                              slideGap: "10px",
                            },
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
                              onClick={() =>
                                router.push(`/categories/${item.id}`)
                              }
                              className={"another-card"}
                            >
                              <p>Barcha mahsulotlarni ko‘rish</p>
                            </Card>
                          </Carousel.Slide>
                        </Carousel>
                      )}
                    </Grid.Col>
                  </>
                ) : (
                  ""
                )}
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
