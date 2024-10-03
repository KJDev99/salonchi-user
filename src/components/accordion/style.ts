import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  .mantine-Accordion-item:first-of-type {
    border: none !important;
    background-color: #faf5ff !important;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .mantine-Accordion-content {
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }
  button {
    padding: 0 32px;
  }
  .mantine-Accordion-label {
    font-family: var(--font-readex);
  }
  .modal-container {
    display: flex;
    align-items: center;
  }
`;
