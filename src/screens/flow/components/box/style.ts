import styled from "@emotion/styled";

export const Box = styled("div")`
  margin: 45px 0;
  display: flex;
  align-items: center;
  gap: 12px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 576px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
export const BoxCard = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 110px;
  min-height: 140px;
  border-radius: 10px;
  border: 1px solid #bfbfbf;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid #db3333;
    .icon-check {
      display: block;
    }
  }
  &.active {
    border: 1px solid #db3333;
    .icon-check {
      display: block;
    }
  }
  p {
    color: #494949;
    font-family: var(--font-readex);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 18px;
  }
  img {
    width: 100%;
    object-fit: contain;
    position: unset;
  }
  .icon-check {
    position: absolute;
    display: none;
  }
  @media (max-width: 576px) {
    min-width: 100px;
    min-height: 120px;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
