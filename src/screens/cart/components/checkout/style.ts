import { colors } from "./../../../flow/constants";
import styled from "@emotion/styled";

export const Form = styled("form")`
  width: 100%;
  height: auto;
  background: var(--main-white);
  /* border: 1px solid var(--main-bg-color); */
  border-radius: 12px;
  padding: 28px 20px 0px 20px;

  /* position: fixed;
  width: max-content; */

  position: fixed; /* Default position */
  width: max-content;
  transition: all 0.3s ease;
  margin-top: 8px;
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
  @media (max-width: 768px) {
    padding: 5px 15px;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    ul {
      display: flex;
      justify-content: center;
      font-size: 14px;
    }
    .order-btn {
      /* display: none; */
      width: 50%;
      font-size: 12px;
      margin-top: 0;
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
    font-size: 20px;
    line-height: 30px;
    color: #384250;
  }
  h3 {
    font-weight: 500;
    font-size: 23px;
    line-height: 30px;
    color: #384250;
  }
  .addInfo {
    display: flex;
    justify-content: space-between;
    color: #4d5761;
    margin-top: 16px;
  }
  .Priceall {
    font-weight: 500;
    font-size: 23px;
    line-height: 30px;
    color: #384250;
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      font-size: 16px;
    }
    h3 {
      font-size: 18px;
    }
    .addInfo {
      font-size: 14px;
      margin-top: 8px;
    }
  }
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
  @media (max-width: 768px) {
    padding: 10px 0px;
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
  /* display: flex; */
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  margin-top: 20px;

  h3 {
    color: #1f2a37;
    font-size: 18px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    color: #6c737f;
    margin-bottom: 32px;
    text-align: left;
  }
  &.notify-modal {
    .notify-title {
      margin: 24px 0 32px 0;
      color: #141311;
    }
    button {
      width: 100%;
      min-width: 350px;
      height: 40px;
      border-radius: 10px !important;
      font-weight: 600;
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
