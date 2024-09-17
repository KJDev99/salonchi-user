import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  margin: 0;
  display: flex;
  background: white;
  .katalog_main {
    display: flex;
  }

  .test {
    display: flex;
    gap: 40px;
  }

  @media (max-width: 576px) {
    margin: 20px 0;
  }
`;

export const Card = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 0;

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    color: #4d5761;
    white-space: nowrap;
  }

  @media (max-width: 576px) {
    gap: 8px;
    p {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export const ImageContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }

  @media (max-width: 576px) {
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 0px;
`;

export const ViewAllButton = styled("button")`
  background-color: #fff;
  color: #4d5761;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: 500;
  white-space: nowrap;
`;
