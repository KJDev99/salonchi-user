import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  margin: 46px 0;
  .mantine-Carousel-root {
    max-width: inherit;
    /* border-radius: 14px; */
    position: relative;
    & > div {
      border-radius: 14px;
      max-height: 310px;
    }
  }
  .mantine-Carousel-slide {
    height: 310px;
  }
  .carousel-link {
    width: 100%;
    height: 100%;
    h2 {
      color: white;
      position: absolute;
      /* top: 0; */
      left: 0;
      bottom: 10%;
    }
  }
  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .carousel-slider {
    /* height: 310px !important; */
  }
  @media (max-width: 1024px) {
    .mantine-Carousel-slide {
      height: 250px;
    }
  }
  @media (max-width: 576px) {
    .mantine-Carousel-slide {
      height: 210px;
    }
  }
  @media (max-width: 300px) {
    .mantine-Carousel-slide {
      height: 180px;
    }
  }
`;

export const Content = styled("div")`
  position: absolute;
  top: 63px;
  left: 162px;
  h2 {
    font-family: var(--font-readex);
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    color: var(--main-black);
    width: 50%;
  }
  .sale-btn {
    background-color: var(--btn-red);
    width: 206px;
    height: 48px;
    margin-top: 15px;
    border-radius: 8px;
    font-family: var(--font-readex);
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: var(--main-white);
  }
  @media (max-width: 1200px) {
    left: 68px;
  }

  @media (max-width: 992px) {
    h2 {
      font-size: 18px;
      line-height: normal;
    }
    .sale-btn {
      width: 150px;
      height: 35px;
      font-size: 14px;
    }
  }
`;

export const ImageContainer = styled("div")`
  position: absolute;
  right: 41px;
  height: 100%;
  img {
    width: 100%;
    position: unset;
    object-fit: contain;
  }
  @media (max-width: 992px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    img {
      position: unset;
      width: 100%;
      height: auto;
    }
  }
`;
