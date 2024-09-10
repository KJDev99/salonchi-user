import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  .mantine-Menu-itemLabel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .mantine-Image-root {
    width: auto !important;
  }
  .menu-item {
    width: 100%;
    padding: 8px;
    img {
      width: 50px !important;
      height: 50px !important;
      max-width: 50px;
      object-fit: contain !important;
    }
  }
  svg {
    stroke: red;
  }
  .product-info {
    min-width: 130px;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      font-family: var(--font-readex);
      font-weight: 400;
      text-align: left;
      line-height: 1.5;
      &.product-name {
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
  .empty-cart {
    font-family: var(--font-readex);
    text-align: center;
    width: 100%;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.77);
  }
  .checkout-cart {
    width: 100%;
    font-family: var(--font-readex);
    font-weight: 400;
    font-size: 13px;
  }
`;
