import styled from "@emotion/styled";

export const CallWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .phone-btn {
    background-color: transparent;
    width: 52px;
    height: 52px;
    position: fixed;
    z-index: 10000;
    bottom: 30px;
    left: 25px;
    svg {
      width: 52px;
      height: 52px;
    }
  }
  @media (max-width: 992px) {
    .phone-btn {
      bottom: 80px;
    }
  }
  @media (max-width: 576px) {
    display: none;

    .phone-btn {
      bottom: 85px;
    }
  }
`;
