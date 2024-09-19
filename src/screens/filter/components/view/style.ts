import styled from "@emotion/styled";

export const View = styled("div")`
  .active {
    svg {
      path {
        fill: var(--main-bg-color);
      }
    }
  }
`;

export const ListViewHeader = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`;
