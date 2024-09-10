import React from "react";
import { Card, ImageContainer, Wrapper } from "./style";
import Image from "next/image";
import { Title } from "@/styles/global";
import { useRouter } from "next/router";
import { Carousel } from "@mantine/carousel";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/shared/modules/category";
import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { CatalogSkeleton } from "../catalog-skeleton";
import { useTranslation } from "next-i18next";
import { useViewportSize } from "@mantine/hooks";

export const Catalog = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { width } = useViewportSize();

  const { data: catalog = [], isLoading } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_CATALOG_LIST],
    queryFn: getCategory,
    select: (res) => {
      return res.data;
    },
  });

  return (
    <Wrapper>
      <Title className="home-catalog-title">{t("catalogue.title")}</Title>
      {isLoading ? (
        <CatalogSkeleton />
      ) : (
        <Carousel
          slideSize="10%"
          slideGap={width > 576 ? "31px" : "14px"}
          loop
          align="start"
          withControls={false}
        >
          {catalog.map((item: any) => (
            <Carousel.Slide key={item.id}>
              <Card onClick={() => router.push(`/categories/${item.id}`)}>
                <ImageContainer>
                  {item?.photo == null ? null : (
                    <Image
                      src={item?.photo}
                      alt={item.name_uz}
                      priority
                      width={70}
                      height={70}
                    />
                  )}
                </ImageContainer>
                <p style={{ marginTop: "8px" }}>
                  {router.locale == "ru" ? item?.name_ru : item?.name_uz}
                </p>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
      )}
    </Wrapper>
  );
};
