import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  background-color: white;
  padding: 76px 40px 40px 40px;
  border-radius: 12px 12px 0 0;
  position: relative;
  @media (max-width: 576px) {
    padding-top: 20px;
  }
  .personal-info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    column-gap: 32px;
    margin-top: 50px;

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
    input {
      margin: 0;
      font-weight: 500;
    }
    label {
      margin: 0;
      font-weight: 500;
      margin-bottom: 6px;
      color: #1f2a37;
    }
    .personal-input {
      margin: 0;
    }
  }
  .gradient {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 152px;
    border-radius: 12px 12px 0 0;

    background: linear-gradient(45deg, #ff7ec7 0%, #ffed46 100%);
  }
  button {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    font-size: 16px;
    font-family: var(--font-readex);
    font-weight: 400;
  }
`;
