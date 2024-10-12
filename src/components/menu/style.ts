import { ActionIcon } from "@mantine/core";
import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  .lang-btn {
    background-color: transparent;
    color: white;
    font-family: var(--font-readex);
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    svg {
      width: 16px;
    }
  }
  .item-active {
    background-color: red;
    color: white;
  }
  .item {
    background-color: white !important;
    color: black;
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    width: 170px;
    height: 40px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .item_icon {
    display: none;
  }
  .item-active_icon {
    display: block;
  }
`;
