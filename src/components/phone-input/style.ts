import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  label {
    font-family: var(--font-readex);
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: var(--main-black);
  }
  input {
    width: 100%;
    height: 50px;
    outline: none;
    text-indent: 22px;
    background: #fff;
    border-radius: 10px;
    border: 1px solid var(--main-bg-color);
    margin-bottom: calc(0.625rem / 2);
    margin-top: 4px;
    font-family: var(--font-readex);
    font-weight: 300;
    &::placeholder {
      font-family: var(--font-readex);
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      color: #8e8e93;
    }
    &.error {
      border: 0.795144px solid var(--main-red);
      &::placeholder {
        color: var(--main-red);
      }
    }
  }
  @media (max-width: 576px) {
    margin: 8px 0;
    input {
      height: 44px;
      font-size: 12px;
      &::placeholder {
        font-size: 12px;
      }
    }
    label {
      font-size: 12px;
    }
  }
`;
