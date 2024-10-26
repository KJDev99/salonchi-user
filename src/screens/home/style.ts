import styled from "@emotion/styled";

export const Paging = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 32px 0;
  @media (max-width: 576px) {
    padding: 10px 0;
  }
  .show-more {
    width: 287px;
    cursor: pointer;
    text-decoration: none;
    color: var(--main-bg-color);
    border-radius: 30px;
    font-size: 16px;
    font-weight: 500;
    height: 44px;
    font-family: var(--font-readex);
    border: 1px solid var(--main-bg-color);
  }
  @media (max-width: 992px) {
    .show-more {
      width: 100%;
    }
  }
`;

export const Card = styled("div")`
  width: 100%;
  min-height: 380px;
  height: 100%;
  background: var(--main-white);
  border: 0.5px solid var(--main-bg-color);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  background-color: #f6f1fd;
  p {
    font-size: 18px;
    line-height: 27px;
    color: #ea580c;
    text-align: center;
  }
  @media (max-width: 576px) {
    padding: 10px;
    min-height: 286px;
    &.another-card {
      width: auto;
      border-radius: 12px;
    }
    width: auto;
  }
  @media (max-width: 476px) {
    width: 180px;
  }
  @media (max-width: 400px) {
    width: 160px;
  }
`;
