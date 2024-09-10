import React from "react";
import { Carousel as CartSlider } from "@mantine/carousel";
import Image from "next/image";
import { ImageContainer } from "@/styles/global";

export const Carousel = ({ images }: any) => {
  return (
    <CartSlider
      maw={"100%"}
      w={"100%"}
      miw={215}
      mx="auto"
      withIndicators
      withControls={false}
      mih={120}
      loop
      className="cart-slider"
      styles={{
        indicators: {
          bottom: "-15px",
          gap: "3px",
        },
        indicator: {
          borderRadius: "50%",
          width: "6px",
          height: "6px",
          background: "#0071CE",
        },
      }}
    >
      {/* {images.map((v: ICartImage, i: number) => {
        return ( */}
      <CartSlider.Slide
      //  key={i}
      >
        <ImageContainer>
          <Image
            src={images}
            alt="iphone"
            layout="fill"
            sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
          />
        </ImageContainer>
      </CartSlider.Slide>
      {/* );
      })} */}
    </CartSlider>
  );
};
