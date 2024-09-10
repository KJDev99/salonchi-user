import { ICarousel } from "@/types/carousel";
import { useViewportSize } from "@mantine/hooks";
import React, { useLayoutEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const CarouselDetails = ({ images }: ICarousel) => {
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useViewportSize();

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 100);
  }, []);

  if (!isLoading) {
    return <p>loading...</p>;
  } else
    return (
      <ImageGallery
        items={images}
        thumbnailPosition={width > 576 ?  "bottom" : "left"}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={true}
        showBullets={false}
        infinite={false}
        showNav={false}
        slideOnThumbnailOver={true}
        disableThumbnailScroll={false}
       
      
      />
    );
};

export default CarouselDetails;
