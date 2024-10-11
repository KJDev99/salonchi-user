import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 100000;

  @media (max-width: 576px) {
    padding: 0 15px;
  }
`;

export const Image = styled("img")`
  max-width: 400px;
  /* width: 100%; */
  height: auto;
  object-fit: cover;

  @media (max-width: 576px) {
    max-width: 300px;
  }
`;

export const Title = styled("p")`
  margin-top: 18px;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  max-width: 300px;
  text-align: center;
  color: var(--main-black);

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const Input = styled("input")`
  width: 300px;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid var(--main-bg-color);
  border-radius: 5px;
  font-size: 16px;
  outline: none;

  &:nth-of-type(2) {
    margin-bottom: 20px;
  }

  @media (max-width: 576px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const Button = styled("button")`
  width: 300px;
  padding: 10px;
  background-color: var(--main-bg-color);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #ff4a63;
  }

  @media (max-width: 576px) {
    width: 100%;
    font-size: 14px;
  }
`;
