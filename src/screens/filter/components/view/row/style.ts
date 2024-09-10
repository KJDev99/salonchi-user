import styled from '@emotion/styled';

export const RowView = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 31px 0;
`;

export const CardView = styled('div')`
  width: 100%;
  min-height: 165px;
  background: var(--main-white);
  border: var(--card-border);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 36px;
  padding: 21px 27px 21px 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 576px) {
    padding: 16px;
  }
`;

export const LeftView = styled('div')`
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const RightView = styled('div')`
  p {
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;
    color: var(--nav-link-color);
    width: 80%;
  }
  @media (max-width: 576px) {
    p {
      width: 100%;
    }
  }
`;

export const ViewFooter = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 0;
  .product-btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--nav-link-color);
    border-radius: 5px;
    background-color: transparent !important;
    font-family: var(--font-readex);
    min-width: 155px;
    margin-top: 16px;
    .inner-action-btn {
      min-width: auto;
    }
    input {
      font-size: 14px;
    }
    button {
      border: none;
      margin-top: 0;
    }
  }
  button {
    min-width: 155px;
    height: 33px;
    margin-top: 16px;
    border: 1px solid var(--nav-link-color);
    color: var(--nav-link-color);
    border-radius: 5px;
    background-color: transparent !important;
    font-family: var(--font-readex);
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    svg {
      width: 20px;
      height: 18px;
    }
  }
  @media (max-width: 992px) {
    h2 {
      font-size: 18px;
    }
  }
  @media (max-width: 576px) {
    display: none;
  }
`;

export const MobileFooter = styled('div')`
  display: none;
  @media (max-width: 576px) {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    .currency {
      display: flex;
      width: 100% !important;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;
      h2 {
        font-size: 16px;
      }
    }
    .mobile-product-btns {
      display: flex;
      align-items: center;
      height: 38px;
      button {
        border: none;
        margin-top: 0;
      }
    }
    button {
      width: 100%;
      height: 38px;
      margin-top: 16px;
      border: 1px solid var(--nav-link-color);
      color: var(--nav-link-color);
      border-radius: 5px;
      background-color: transparent !important;
      font-family: var(--font-readex);
      font-weight: 300;
      font-size: 12px;
      line-height: 15px;
      svg {
        width: 20px;
        height: 18px;
      }
    }
  }
`;
