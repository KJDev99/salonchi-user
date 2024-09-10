import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .phone-input {
    margin: 11px 0;
  }
  p {
    margin-top: 18px;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: var(--main-black);
  }
  @media (max-width: 576px) {
    p {
      font-size: 14px;
      text-align: center;
    }
  }
`;

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 24px;
  button {
    width: 406px;
    height: 50px;
    border-radius: 8px;
    font-family: var(--font-readex);
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--main-white);
    margin-top: 22px;
  }
  @media (max-width: 576px) {
    button {
      width: 331px;
    }
  }
`;

export const Title = styled("h1")`
  font-family: var(--font-readex);
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  color: var(--main-black);
  &.sign-in-title {
    margin: 24px 0 24px 0;
  }
  @media (max-width: 576px) {
    font-size: 20px;
  }
`;
