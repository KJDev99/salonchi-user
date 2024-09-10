import styled from "@emotion/styled";

export const Paper = styled("div")<any>`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: ${(props) => (props.scrollY > 0 ? "95px" : "150px")};
  left: 0;
  z-index: 10;
  background: var(--main-white);
  box-shadow: 0 10px 16px #0000001a;
  display: none;
  overflow-y: hidden;
  &.active {
    display: block;
  }
  .sub-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 8px;
    li {
      width: 30%;
      list-style: none;
      font-weight: 300;
      padding: 0;
      line-height: 2;
      cursor: pointer;
      font-size: 14px;
      &:hover {
        color: var(--main-bg-color);
      }
    }
  }
`;

export const List = styled("div")`
  padding: 12px 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid hsla(220, 4%, 48%, 0.2);
`;

export const ListItem = styled("div")`
  padding: 0 4px;
  background: #fff;
  color: #111111;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 1.5;
  padding: 8px 16px;
  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 300;
  border-radius: 4px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  cursor: pointer;
  width: 100%;
  svg {
    path {
      fill: #a0a2a7;
    }
  }

  &:hover {
    background: #f2f2f2;
    color: var(--main-bg-color);
  }
`;

export const Title = styled("div")`
  color: #141415;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 500;
  font-family: var(--font-readex);
  margin-top: 9px;
`;
