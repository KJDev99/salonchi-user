import React, { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { Wrapper } from "./style";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/constants/react-query-keys";
import { getBannerList } from "@/shared/modules/banner";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/router";
import { ISlider } from "@/types/slider";
import { CarouselLoader } from "../loader/carousel.loader";
import { useViewportSize } from "@mantine/hooks";
import Link from "next/link";

export const Slider = () => {
  const { width } = useViewportSize();
  const router = useRouter();
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const { data: carousel = [], isLoading } = useQuery({
    queryKey: [REACT_QUERY_KEYS.BANNER_LIST],
    queryFn: getBannerList,
    select: (res) => {
      return res.data;
    },
  });

  return (
    <Wrapper>
      {isLoading ? (
        <CarouselLoader />
      ) : (
        <Carousel
          maw={320}
          mx="auto"
          mih={119}
          mah={400}
          slideGap="md"
          align="start"
          loop
          onClick={(e) => {
            e.stopPropagation();
          }}
          plugins={width > 575 ? [autoplay.current] : []}
          className="carousel-slider"
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {carousel.map((item: ISlider) => {
            return (
              <Carousel.Slide
                key={item?.id}
                bg={"#E9F0FF"}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Link
                  href={`${item?.url ?? "/#"}`}
                  className="carousel-link"
                  target="_blank"
                >
                  {router.locale === "uz" ? (
                    <Image
                      src={
                        width > 576
                          ? item?.media_uz || ""
                          : item?.mobile_media_uz || ""
                      }
                      alt="group"
                      priority
                      quality={100}
                      width={1248}
                      height={400}
                      sizes="100vw"
                      className="carousel-image"
                    />
                  ) : (
                    <Image
                      src={
                        width > 576
                          ? item?.media_ru || ""
                          : item?.mobile_media_ru || ""
                      }
                      alt="group"
                      priority
                      quality={100}
                      width={1248}
                      height={400}
                      sizes="100vw"
                      className="carousel-image"
                    />
                  )}
                </Link>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      )}
    </Wrapper>
  );
};
