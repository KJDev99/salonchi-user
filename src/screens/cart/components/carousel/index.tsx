import React from "react";
import { Carousel as CartSlider } from "@mantine/carousel";
import { ImageContainer } from "../card/style";
import Image from "next/image";

interface ICartCarousel {
  images: string;
}

interface ICartImage {
  file: string;
}

export const Carousel = ({ images }: ICartCarousel) => {
  console.log(images, "images");
  return (
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
    // <CartSlider
    //   maw={215}
    //   w={215}
    //   mx="auto"
    //   withIndicators
    //   withControls={false}
    //   height={120}
    //   loop
    //   styles={{
    //     indicators: {
    //       bottom: "-15px",
    //       gap: "3px",
    //     },
    //     indicator: {
    //       borderRadius: "50%",
    //       width: "6px",
    //       height: "6px",
    //       background: "#0071CE",
    //     },
    //   }}
    //   className="cart-slider"
    // >

    //       <CartSlider.Slide
    //        >
    //         <ImageContainer>
    //           <Image
    //             src={images}
    //             alt="iphone"
    //             layout="fill"
    //             sizes="(min-width: 60em) 24vw,
    //                 (min-width: 28em) 45vw,
    //                 100vw"
    //           />
    //         </ImageContainer>
    //       </CartSlider.Slide>

    // </CartSlider>
  );
};
