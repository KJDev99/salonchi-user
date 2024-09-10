import styled from "@emotion/styled";
import { Select as MantineSelect } from "@mantine/core";

export const MantineUISelect = styled(MantineSelect)`
  font-family: var(--font-readex);
  width: 100%;
  margin: 11px 0;
  input {
    width: 100%;
    height: 50px;
    background: #fff;
    border-radius: 10px;
    border: 1px solid var(--main-bg-color);
    font-family: var(--font-readex);
    text-indent: 12px;
  }
  label {
    font-family: var(--font-readex);
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: var(--main-black);
    margin-bottom: 9px;
  }
  svg {
    width: 12px;
  }
  @media (max-width: 576px) {
    margin: 8px 0;
    input {
      height: 44px;
      font-size: 12px;
    }
    label {
      font-size: 12px;
    }
  }
`;
