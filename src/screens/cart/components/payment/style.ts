import styled from "@emotion/styled";

export const Payment = styled("div")`
  margin: 42px 0;
  width: 100%;
  .payment-types {
    margin-bottom: 24px;
    button {
      width: 50%;
      height: 45px;
      border-radius: 10px;
      border: 1px solid #909090;
      color: #909090;
      font-family: var(--font-readex);
      font-weight: 400;
      &:hover {
        border: 2px solid var(--main-bg-color);
      }
      &.active {
        border: 2px solid var(--main-bg-color);
      }
    }
  }
  @media (max-width: 576px) {
  }
`;

export const PaymentCard = styled("div")`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #909090;
  background: #fff;
  min-width: 331px;
  min-height: 53px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 25px;
  .payment-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 28px;
    border-radius: 10px;
    background-color: #f1f1f2;
  }
  &:hover {
    border: 2px solid var(--main-bg-color);
  }
  &.active {
    border: 2px solid var(--main-bg-color);
  }
  .icon__payme,
  .icon__click {
    width: 50px;
  }
  p {
    color: #333;
    font-family: var(--font-readex);
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-left: 18px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    min-width: 100%;
  }
`;

export const Flex = styled("div")`
  display: flex;
  align-items: center;
  gap: 26px;
`;
