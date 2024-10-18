import styled from "@emotion/styled";

export const CustomerInfo = styled("div")`
  width: 100%;
  min-height: 105px;
  background: var(--main-white);
  border-radius: 12px;
  padding: 28px;
  /* display: flex;
  justify-content: space-between; */
  /* align-items: flex-end; */
  h2 {
    font-size: 24px;
    margin-bottom: 40px;
  }
  .form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 16px;
    width: 100%;
    .inputs {
      display: flex;
      flex-direction: column;
      label {
        color: #1f2a37;
        font-size: 18px;
        margin-bottom: 6px;
      }
      input,
      select {
        border: 1px solid #e5e7eb;
        padding: 14px;
        border-radius: 8px;
        outline: none;
      }
    }
    .textarea {
      grid-column: span 2; /* Make this span across two columns */
      display: grid;
      grid-template-columns: 1fr;
      label {
        color: #1f2a37;
        font-size: 18px;
        margin-bottom: 6px;
      }
      textarea {
        border: 1px solid #e5e7eb;
        padding: 14px;
        border-radius: 8px;
        resize: vertical;
        height: 150px;
      }
    }
  }
  @media (max-width: 768px) {
    h2 {
      display: none;
    }
    flex-direction: column;
    padding: 12px;
    width: 100%;
    .form {
      display: flex;
      flex-direction: column;
      gap: 24px 16px;
    }
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
    font-size: 13px;
    line-height: 1;
  }
`;
export const Right = styled("div")`
  button {
    background-color: transparent !important;
    padding: 0;
    color: #0c53bd;
    font-family: var(--font-readex);
    border: 2px solid red;
  }
`;

export const CustomerTitle = styled("h5")`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: var(--main-black);
`;

export const PaymentOption = styled.div<{ selected: boolean }>`
  border: ${({ selected }) =>
    selected ? "1px solid #F16A21" : "1px solid #e2e2e2"};
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ selected }) => (selected ? "#fff" : "#fff")};
  cursor: pointer;
  height: 80px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 20px;
    height: max-content;
  }
`;

export const RadioButton = styled.div<{ selected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({ selected }) => (selected ? "#F16A21" : "#ccc")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const RadioCircle = styled.div<{ selected: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ selected }) => (selected ? "#F16A21" : "transparent")};
  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

export const OptionText = styled.p<{ selected: boolean }>`
  font-size: 18px;
  font-weight: 500;
  color: ${({ selected }) => (selected ? "#333" : "#6c757d")};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    height: auto;
    margin-left: 15px;
  }
  @media (max-width: 767px) {
    img {
      margin-top: 10px;
    }
  }
`;
