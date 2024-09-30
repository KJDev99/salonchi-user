import styled from "@emotion/styled";

export const Form = styled("form")`
  width: 100%;
  height: auto;
  background: var(--main-white);
  border: 1px solid var(--main-bg-color);
  border-radius: 12px;
  padding: 28px 26px 0px 26px;
  position: fixed;
  width: max-content;
  /* top: 0px; */
  /* top: 200px; */

  .button-group {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    border: 1px solid red;
  }
  .order-btn {
    width: 100%;
    margin-top: 35px;
  }
  @media (max-width: 1200px) {
    .order-btn {
      display: none;
    }
  }
`;

export const Header = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    color: #384250;
  }
  h3 {
    font-weight: 500;
    font-size: 23px;
    line-height: 30px;
    color: #384250;
  }
  /* border-bottom: 1px solid #bfbfbf; */
  /* padding-bottom: 20px; */
`;
export const Body = styled("ul")`
  padding: 25px 0 35px 0;
  li {
    list-style: none;
    padding: 6px 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span:nth-of-type(1) {
      color: var(--input-color);
    }
    span:nth-of-type(2) {
      color: var(--nav-link-color);
      font-weight: 300;
    }
  }
`;
export const Footer = styled("div")`
  button {
    width: 100%;
    height: 48px;
    border-radius: 8px;

    font-family: var(--font-readex);
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--main-white);
  }
`;

export const Title = styled("h2")`
  color: #333;
  text-align: center;
  font-family: var(--font-readex);
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Text = styled("p")`
  text-align: center;
  margin: 24px 0;
  font-size: 14px;
  font-family: var(--font-readex);
`;

export const FlexBtns = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 18px 0 0 0;
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const ModalContent = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &.notify-modal {
    padding-bottom: 24px;
    .notify-title {
      margin: 24px 0 32px 0;
      color: #141311;
    }
    button {
      width: 100%;
      min-width: 350px;
      height: 54px;
      border-radius: 10px !important;
    }
    a {
      color: var(--main-bg-color);
      font-family: var(--font-readex);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
