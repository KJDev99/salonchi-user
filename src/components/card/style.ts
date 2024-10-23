import styled from "@emotion/styled";

export const Card = styled("div")`
  width: 100%;
  min-height: 387px;
  height: 100%;
  background: var(--main-white);
  /* border: 0.5px solid var(--main-bg-color); */
  border-radius: 12px;
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);

  @media (max-width: 576px) {
    width: 10%;
    padding: 10px;
    border-radius: 10px;
  }
  .heart-wrapper {
    cursor: pointer;
    position: absolute;
    z-index: 1;
    right: 1rem;
    top: 1rem;
    /* background-color: whi; */
    svg {
      width: 24px;
      height: 24px;
      /* stroke: var(--main-bg-color); */
      &.icon-tabler-heart-filled {
        color: var(--main-bg-color);
      }
    }
  }
  cursor: pointer;
  .number-price {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }

  .inc-dec-btn {
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
  }
  @media (max-width: 576px) {
    padding: 10px;
    min-height: 286px;
    &.another-card {
      width: auto;
    }
    width: auto;
  }
  @media (max-width: 476px) {
    width: 180px;
    &.carousel {
      width: 150px !important;
      p {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 400px) {
    width: 160px;
  }
`;

export const CardMain = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled("div")`
  /* background: red; */
  position: relative;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  img {
    width: 100%;
    object-fit: contain;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .badge {
    position: absolute;
    left: 4px;
    top: 4px !important;
    /* width: 58px; */
    padding: 4px 8px;
    background-color: #f63d68;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #fff;
    font-weight: 400;
    font-family: "Readex Pro", sans-serif;
    @media (max-width: 576px) {
      left: 0;
      font-size: 10px;
      border-radius: 4px;
      padding: 2px 4px;
    }
  }

  @media (max-width: 500px) {
    height: 180px;
  }
`;

export const CardBody = styled("div")`
  /* padding: 10px; */
  .discount-price {
    font-size: 11px;
    color: #747474;
  }
  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: var(--main-black);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 8px;
    &:nth-of-type(2) {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      margin: 8px 0;
    }
  }
  @media (max-width: 576px) {
    p {
      font-size: 12px;
    }
    span.number-price {
      font-size: 14px;
    }
    span {
      font-size: 14px;
    }
    padding: 10px 0;
  }
`;

export const CardFooter = styled("div")`
  padding: 12px 16px;
  .btn-group {
    display: grid;
    gap: 8px;
    grid-template-columns: min-content 1fr;
    /* justify-content: s; */
  }
  @media (max-width: 576px) {
    padding: 0px;
  }
  /* background-color: red; */
  .stars-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
  }
  span.number-price {
    font-size: 14px;
    color: var(--brand-black, #141311);
    font-family: "Readex Pro", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .rating {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .rating span {
    color: #9da4ae;
    font-size: 13px;
  }
  p {
    color: var(--gray-700, #141311);
    font-family: "Readex Pro", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  button {
    /* width: 100%; */
    height: 46px;

    border: 1px solid var(--nav-link-color);
    color: var(--nav-link-color);
    border-radius: 5px;
    background-color: transparent !important;
    font-family: var(--font-readex);
    font-weight: 300;
    /* font-size: 12px; */
    line-height: 15px;
    svg {
      width: 20px;
      height: 18px;
    }
  }

  @media (max-width: 768px) {
    button {
      height: 39px;
      font-size: 12px;
    }
  }
  /* @media (max-width: 375px) {
    button {
      font-size: 10px;
    }
  } */
`;

export const ButtonWrapper = styled("div")`
  /* display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  */
  margin-top: 8px;
  /* .to-chack-cart-btn {
    width: 100%;
    height: 32px;
    background: var(--main-bg-color) !important;
    border-color: var(--main-bg-color) !important;
    color: var(--main-white);
    padding: 5px 10px;
  }  */

  .add-to-cart-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    /* width: 100%; */
    /* height: 32px; */
    padding: 8px 12px;
    font-size: 14px;
    /* padding: 5px 6px; */
    background-color: var(--main-bg-color) !important;
    border: 1px solid transparent !important;
    color: #fff;
    border-radius: 8px;
    svg {
      width: 16px;
      height: 16px;
    }

    @media (max-width: 768px) {
      /* svg {
        width: 24px;
        height: 24px;
      } */
    }
    @media (max-width: 375px) {
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
  .add-to-cart-btn2 {
    /* display: block; */
    width: 100%;
    padding: 6px;
    font-weight: 500;
  }
  @media (max-width: 1400px) {
    gap: 5px;
    /* .to-chack-cart-btn {
      font-size: 10px;
    } */
    .add-to-cart-btn {
      padding: 5px 6px;
    }
  }
  @media (max-width: 488px) {
    /* flex-wrap: wrap; */
    /* button {
      width: 100% !important;
    } */
  }
`;

export const ProductBtns = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 32px;
  margin-top: 8px;
  border: 1px solid var(--main-bg-color);
  color: #0071ce;
  border-radius: 10px;
  background-color: transparent !important;
  font-family: var(--font-readex);
  border-color: var(--main-bg-color);
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none !important;
    height: 33px;
    margin-top: 0;
    color: var(--main-bg-color) !important;
    border-radius: 8px !important;
  }
  @media (max-width: 768px) {
    height: 39px;
  }
`;

export const Input = styled("input")`
  border: none;
  width: auto;
  max-width: 40px;
  height: 100%;
  outline: none;
  color: var(--main-bg-color);
  text-align: center;
  font-weight: 500;
  font-family: var(--font-readex);
  font-size: 14px;
`;

export const ImageContainer = styled("div")`
  width: 200px;
  height: 240px;
  background: var(--main-white);
  background-color: transparent;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* overflow: hidden; */
  margin-bottom: 10px;
  /* background-color: red; */
  /* padding: 10px 0; */
  img {
    width: 100%;
    height: 100%;
    position: unset;
    object-fit: contain;
  }
`;
