import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  /* margin-top: 22px; */
`;

export const Title = styled("p")`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: var(--product-title-color);
  margin-bottom: 14px;
`;

export const Color = styled("div")`
  width: 44px;
  height: 44px;
  /* padding: 10px; */
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ea580c;
  /* background-color: ${(props: any) => props.color}; */
  cursor: pointer;
  outline-offset: 2px;
  transition: all 0.1s;
  &.active {
    outline: 2px solid #ea580c;
  }
  &:hover {
    outline: 2px solid #ea580c;
  }
`;
