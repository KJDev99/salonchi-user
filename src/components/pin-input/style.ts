import styled from "@emotion/styled";
import { PinInput as MantinePinInput } from "@mantine/core";

export const MantinePin = styled(MantinePinInput)`
  input {
    width: 53px;
    height: 53px;
    border: 1px solid var(--main-bg-color);
    border-radius: 10px;
    font-family: var(--font-readex);
    font-size: 20px;
    font-weight: 300;
    &::placeholder {
      position: absolute;
      width: 0;
    }
  }
`;

export const PinWrapper = styled("div")`
  margin: 50px 0 23px 0;
`;
