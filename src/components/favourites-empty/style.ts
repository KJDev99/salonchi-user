import styled from '@emotion/styled';

export const EmptyProvider = styled.div`
  min-height: 25vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & .empty-cart {
    min-height: 50px;
  }
`;

export const CartEmptyProvider = styled.div`
  min-height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &.category-empty-provider {
    min-height: 40vh;
  }
  & .link {
    color: #141415;
    font-size: 14px;
    width: 45%;
    margin: 0 auto;
    text-align: center;
  }
  & .category-link {
    font-size: 0.8rem;
    font-family: var(--font-readex);
    font-weight: 400;
    line-height: 1.4em;
    margin: 8px 0 0;
  }
  @media (max-width: 992px) {
    & .link {
      width: 100%;
    }
  }
  @media (max-width: 768px) {
    min-height: 30vh;
    &.wishlist-empty {
      min-height: 60vh;
    }
  }
  & a {
    color: var(--main-black);
    margin-top: 16px;
    font-size: 18px;
  }
  & span {
    color: var(--segment-bg-color);
    font-weight: 500;
  }
  & button {
    min-width: 107px;
    height: 38px;
    border-radius: 4px;
    color: var(--main-white);
    font-family: var(--font-readex);
    margin-top: 34px;
    text-transform: inherit;
    font-size: 14px;
    font-weight: 400;
    &.btn-category {
      width: auto;
      background: rgba(118, 121, 127, 0.1) !important;
      text-transform: inherit;
      color: var(--main-black);
      font-size: 12.25px;
      padding: 7px 14px;
      margin: 20px 0;
    }
  }
  @media (max-width: 576px) {
    & a {
      text-align: center;
      font-size: 16px;
      margin-top: 8px;
      line-height: 1.5;
    }
  }
  & .link {
    margin-top: 12px;
  }
`;

export const EmptyWrapper = styled('div')`
  width: 100%;
  min-height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: var(--font-readex);
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 47px;
  color: var(--product-title-color);
  & span {
    color: var(--main-black);
    opacity: 0.54;
  }
  &.empty-title {
    color: rgba(0, 0, 0, 0.26);
  }
  &.wishlist-title {
    color: var(--main-black);
    font-size: 22px;
  }
  &.category-title {
    font-size: 19.25px;
    font-weight: 600;
    line-height: 45px;
  }
  @media (max-width: 576px) {
    &.empty-title {
      font-size: 16px;
      text-align: center;
      line-height: 1.7;
    }
    &.category-title {
      font-size: 14px;
    }
    font-size: 16px;
  }
`;
