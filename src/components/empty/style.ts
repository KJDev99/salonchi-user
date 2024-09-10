import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &.category-empty-provider {
    min-height: 60vh;
  }
  & .link {
    color: #141415;
    font-size: 14px;
  }
  & .category-link {
    font-size: 0.8rem;
    font-family: var(--font-readex);
    font-weight: 400;
    line-height: 1.4em;
    margin: 8px 0 0;
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
    color: var(--main-bg-color);
    font-weight: 500;
  }
  & button {
    min-width: 107px;
    height: 38px;
    border-radius: 4px;
    color: var(--main-black);
    font-family: var(--font-readex);
    margin-top: 34px;
    text-transform: inherit;
    font-size: 14px;
    font-weight: 400;
    &.btn-category {
      width: auto;
      background: rgba(118, 121, 127, 0.1) !important;
      text-transform: inherit;
      color: #000;
      font-size: 12.25px;
      padding: 7px 14px;
      margin: 20px 0;
      span {
        color: #000;
        font-weight: 400;
      }
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
`;
