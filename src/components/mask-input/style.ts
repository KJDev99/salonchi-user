import styled from "@emotion/styled";
import { InputBase } from "@mantine/core";

export const MantineInput = styled(InputBase)`
  width: 100%;
  margin: 11px 0;
  label {
    font-family: var(--font-readex);
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: var(--main-black);
    margin-bottom: 9px;
  }
  input {
    width: 100%;
    height: 40px;
    background: #fff;
    border-radius: 10px;
    border-radius: 10px;
    border: none !important;
    background: var(--brand-white, #f6f6f6);
    text-indent: 12px;
    color: var(--brand-black, #141311);
    font-family: var(--font-readex);
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    &::placeholder {
      font-family: var(--font-readex);
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
      color: #8e8e93;
    }
  }
  .mantine-InputWrapper-error {
    font-family: var(--font-readex);
    font-weight: 300;
    color: var(--main-red);
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
