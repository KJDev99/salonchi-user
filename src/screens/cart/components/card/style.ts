import styled from "@emotion/styled";

export const CardUI = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 165px;
  background: var(--main-white);
  border: 1px solid var(--main-bg-color);
  border-radius: 20px;
  padding: 16px 21px 29px 21px;
  gap: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
    /* .delete-favourite {
      display: none;
    } */
  }
  @media (max-width: 576px) {
    /* border: none;
    border-top: var(--card-border);
    border-radius: 0;
    padding: 16px 0; */
  }
`;

export const ContentLeft = styled("div")`
  display: flex;
  gap: 33px;
  .image-container {
    display: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
  @media (max-width: 576px) {
    .cart-slider {
      display: none;
    }
    gap: 15px;
    /* .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 73px;
      height: 73px;
      border-radius: 8px;
      background: #d9d9d9;
      figure {
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 73px;
          height: 73px;
        }
      }
      img {
        width: 100% !important;
        height: 100% !important;
        border-radius: 8px;
      }
    } */
  }
  @media (max-width: 280px) {
    flex-direction: column;
  }
`;
export const ContentRight = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  min-height: 120px;
  .operations {
    display: flex;
    align-items: center;
    gap: 34px;
  }
  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
  }
  button {
    color: var(--main-white);
    border-radius: 5px;
    font-family: var(--font-readex);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  @media (max-width: 576px) {
    min-height: auto;
    h2 {
      font-size: 14px;
    }
    button {
      font-size: 12px;
      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

export const ImageContainer = styled("div")`
  width: 215px;

  min-height: 120px;
  /* background: #f6f2fe; */
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    width: 100%;
    position: unset;
    object-fit: contain;
  }
  @media (max-width: 280px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    min-width: 130px;
  }
`;

export const ProductInfo = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  h4 {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
  .rating {
    display: flex;
    align-items: center;
    gap: 2px;
    span {
      color: var(--brand-black, #141311);
      font-family: "Readex Pro", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  button {
    font-family: var(--font-readex);
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: #3e7ede;
    background-color: transparent !important;
    padding: 0;
  }
  @media (max-width: 576px) {
    align-items: flex-end;
    button.delete-favourite {
      display: none;
    }
  }
  @media (max-width: 280px) {
    align-items: flex-start;
  }
`;

export const ContentHeader = styled("div")`
  display: flex;
  flex-direction: column;
  .discount {
    font-size: 13px;
    color: #7e7e7e;
  }
  .heart-wrapper {
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
      stroke: var(--main-bg-color);
      &.icon-tabler-heart-filled {
        color: var(--main-bg-color);
      }
    }
  }
`;
