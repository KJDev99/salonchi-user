import styled from "@emotion/styled";

export const Paging = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 32px 0;
  .show-more {
    width: 60%;
    cursor: pointer;
    text-decoration: none;
    border-radius: 4px;
    background-color: rgba(118, 121, 127, 0.1);
    color: #141415;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    height: 56px;
    border-radius: 8px;
    font-family: var(--font-readex);
  }
  @media (max-width: 992px) {
    .show-more {
      width: 100%;
    }
  }
`;
