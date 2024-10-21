import { ICarousel } from "@/types/carousel";
import { useViewportSize } from "@mantine/hooks";
import React, { useLayoutEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const CarouselDetails = ({ images, ref }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useViewportSize();
  // const handleAttributeImageClick = (selectedImageUrl: any) => {
  //   console.log(selectedImageUrl);
  //   const selectedIndex = images.findIndex(
  //     (image) => image.original === selectedImageUrl
  //   );

  //   if (selectedIndex !== -1 && galleryRef.current) {
  //     galleryRef.current.slideToIndex(selectedIndex);
  //   }
  // };
  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 100);
  }, []);

  if (!isLoading) {
    return <p>loading...</p>;
  } else
    return (
      <>
        <ImageGallery
          ref={ref}
          items={images}
          thumbnailPosition={width > 576 ? "bottom" : "bottom"}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={width > 576 ? true : false}
          showBullets={false}
          infinite={false}
          showNav={true}
          slideOnThumbnailOver={true}
          disableThumbnailScroll={false}
        />
        {/* <button onClick={() => handleAttributeImageClick(images[0].original)}>
          1
        </button> */}
      </>
    );
};

export default CarouselDetails;
