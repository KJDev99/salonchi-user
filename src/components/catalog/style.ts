import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  margin: 32px 0;
  .mantine-Carousel-slide {
    & > div {
      width: auto;
    }
  }
  .mantine-Carousel-control:nth-of-type(1) {
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
  }
  .mantine-Carousel-control:nth-of-type(2) {
    position: absolute;
    right: -12px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 576px) {
    margin: 20px 0;
  }
`;

export const WrapperContent = styled("div")`
  display: flex;
  gap: 6px;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

export const Card = styled("div")`
  width: 8.3%;
  width: 130px;
  height: auto;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    font-family: "Readex Pro", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #141311;
  }

  @media (max-width: 576px) {
    gap: 4px;
    p {
      font-size: 12px;
      line-height: normal;
      margin-top: 4px !important;
    }
  }
`;

export const ImageContainer = styled("div")`
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  position: relative;
  border: 1px solid var(--main-bg-color);
  img {
    width: 100px;
    height: 100px;
    position: unset;
    object-fit: contain;
  }

  @media (max-width: 576px) {
    width: 90px;
    height: 90px;
    border-radius: 10px;
    img {
      width: 80px;
      height: 80px;
    }
  }
`;
