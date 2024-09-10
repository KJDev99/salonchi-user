import React, { Fragment } from "react";
import { useTranslation } from "next-i18next";
import { CustomCard } from "@/components/card";
import { useViewportSize } from "@mantine/hooks";
import { useList } from "./useList";
import { Carousel } from "@mantine/carousel";
import { Container, Title } from "@/styles/global";

export const SimilarProducts = ({ item }: any) => {
  const { t } = useTranslation("common");
  const { width } = useViewportSize();
  const { data } = useList({ item });

  return (
    <Fragment>
      {width < 576 ? (
        <Container>
          <Title className="home-title">{t("similar products")}</Title>
          <Carousel
            withIndicators={false}
            slideSize="20%"
            slideGap="sm"
            slidesToScroll={width > 576 ? 5 : 1}
            loop={false}
            align="start"
            breakpoints={[
              { maxWidth: "md", slideSize: "20%" },
              { maxWidth: "sm", slideSize: "50%", slideGap: "10px" },
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
          >
            {data?.map((v: any) => {
              return (
                <Carousel.Slide key={v?.id}>
                  <CustomCard id={v?.id} item={v} type="new" />
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </Container>
      ) : (
        <Fragment>
          <Title className="home-title">{t("similar products")}</Title>
          <Carousel
            withIndicators={false}
            slideSize="20%"
            slideGap="sm"
            slidesToScroll={width > 576 ? 5 : 1}
            loop={false}
            align="start"
            breakpoints={[
              { maxWidth: "md", slideSize: "20%" },
              { maxWidth: "sm", slideSize: "50%", slideGap: "10px" },
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
          >
            {data?.map((v: any) => {
              return (
                <Carousel.Slide key={v?.id}>
                  <CustomCard id={v?.id} item={v} type="new" />
                </Carousel.Slide>
              );
            })}
          </Carousel>
        </Fragment>
      )}
    </Fragment>
  );
};
