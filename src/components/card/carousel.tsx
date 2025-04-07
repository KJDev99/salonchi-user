import React from "react";
import { Carousel as CartSlider } from "@mantine/carousel";
import { ImageContainer } from "./style";
import Image from "next/image";

export const Carousel = ({ images, media }: any) => {
  return (
    <ImageContainer>
      <Image
        src="/category_empty.webp"
        // src={images || media?.[0]?.file}
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
    // >
    //   {/* {images?.map((v: ICartImage, i: number) => { */}
    //   {/* return ( */}
    //   <CartSlider.Slide>
    //     <ImageContainer>
    //       <Image
    //         src={images}
    //         alt="iphone"
    //         layout="fill"
    //         sizes="(min-width: 60em) 24vw,
    //                 (min-width: 28em) 45vw,
    //                 100vw"
    //       />
    //     </ImageContainer>
    //   </CartSlider.Slide>
    //   {/* ); */}
    //   {/* })} */}
    // </CartSlider>
  );
};
