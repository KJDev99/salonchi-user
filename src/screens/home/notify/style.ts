import styled from "@emotion/styled";
import { Title } from "@mantine/core";

export const ModalTitle = styled(Title)`
  font-size: 24px;
  font-weight: 500;
  font-family: var(--font-readex);

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

export const ModalText = styled("p")`
  font-size: 16px;
  font-family: var(--font-readex);
  font-weight: 400;
  color: #3d3d3d;
  text-align: left;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const ModalBody = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 85%;
  margin: auto;
  svg {
    margin: auto;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
`;

export const ModalFooter = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    margin-top: 16px;
  }
  button {
    height: 42px;
    background: #6417b0;
    width: 85%;
    border-radius: 12px;
    margin: 32px auto 16px auto;
    font-family: var(--font-readex);
    font-size: 18px;
    font-weight: 400;
  }

  @media (max-width: 576px) {
    button {
      width: 90%;
      height: 35px;
      font-size: 16px;
      margin: 0px auto 16px auto;
    }
    svg {
      margin-top: 0;
    }
  }
`;
