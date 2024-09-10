import styled from "@emotion/styled";

export const CustomerInfo = styled("div")`
  width: 100%;
  min-height: 105px;
  background: var(--main-white);
  border: 1px solid var(--main-bg-color);
  border-radius: 20px;
  padding: 28px;
  /* display: flex;
  justify-content: space-between; */
  /* align-items: flex-end; */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 12px;
    width: 100%;
  }
`;

export const Left = styled("div")`
  .contact-customer {
    margin: 21px 0 9px 0;
    display: flex;
    gap: 19px;
  }
  .location-customer {
    color: var(--nav-link-color);
    font-weight: 300;
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Right = styled("div")`
  button {
    background-color: transparent !important;
    padding: 0;
    color: #0c53bd;
    font-family: var(--font-readex);
  }
`;

export const CustomerTitle = styled("h5")`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: var(--main-black);
`;
