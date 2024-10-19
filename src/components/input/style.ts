import styled from "@emotion/styled";
import { Button, PasswordInput, TextInput } from "@mantine/core";

export const Searchbar = styled("div")`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  &.black-wrap {
    background-color: #0006;
    display: block;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 50;
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`;
export const CatalogPanel = styled("div")`
  width: 154px;
  height: 48px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: var(--main-bg-color);
  border-radius: 8px;
  padding: 0 10px;

  span {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #fff;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const SearchWrapper = styled("form")`
  display: flex;
  justify-content: flex-end;
  min-width: 303px;
  width: 75%;
  position: relative;
  border: none;
  .search-btn {
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
    left: 14px;
  }
  .search-btn2 {
    height: 100%;
    width: 112px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    cursor: pointer;
    background-color: var(--main-bg-color);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    color: white;
    @media (max-width: 768px) {
      display: none !important;
    }
  }

  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 10px;
  }
  @media (max-width: 576px) {
    min-width: auto;
    .search-icon {
      width: 19px;
      height: 19px;
    }
  }
`;

export const Input = styled("input")`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ea580c;
  outline: none;
  height: 48px;
  width: 100%;
  text-indent: 42px;
  font-family: "Readex Pro";
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  &::placeholder {
    color: var(--input-placeholder-color);
  }
  color: var(--input-color);
  @media (max-width: 576px) {
    height: 44px;
    font-size: 12px;
    &::placeholder {
      font-size: 12px;
    }
  }
`;

export const MantineInput = styled(TextInput)`
  width: 100%;
  margin: 11px 0;
  label {
    font-family: var(--font-readex);
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: var(--main-black);
    margin-bottom: 9px;
  }
  input {
    width: 100%;
    height: 50px;
    background: #fff;
    border-radius: 10px;
    border: 1px solid var(--main-bg-color);
    text-indent: 12px;
    &::placeholder {
      font-family: var(--font-readex);
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      color: #8e8e93;
    }
  }
  .mantine-InputWrapper-error {
    font-family: var(--font-readex);
    font-weight: 300;
    color: var(--main-red);
  }
  @media (max-width: 576px) {
    margin: 8px 0;
    input {
      height: 44px;
      font-size: 12px;
      &::placeholder {
        font-size: 12px;
      }
    }
    label {
      font-size: 12px;
    }
  }
`;

export const MantinePassword = styled(PasswordInput)`
  width: 100%;
  margin: 11px 0;
  .mantine-PasswordInput-input {
    height: 50px;
    border: none;
  }
  .mantine-InputWrapper-error {
    font-family: var(--font-readex);
    font-weight: 300;
    color: var(--main-red);
  }
  label {
    font-family: var(--font-readex);
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: var(--main-black);
    margin-bottom: 9px;
  }
  input {
    width: 100%;
    height: 50px;
    text-indent: 12px;
    background: #fff;
    border-radius: 10px;
    border: 1px solid var(--main-bg-color);
    &::placeholder {
      font-family: var(--font-readex);
      font-weight: 300;
      font-size: 16px;
      line-height: 20px;
      color: #8e8e93;
    }
  }
  button {
    margin-top: 0 !important;
    background-color: transparent !important;
    color: var(--main-black) !important;
  }
  @media (max-width: 576px) {
    margin: 8px 0;
    .mantine-PasswordInput-input {
      height: 44px;
      border: none;
    }
    input {
      height: 44px;
      font-size: 12px;
      &::placeholder {
        font-size: 12px;
      }
    }
    label {
      font-size: 12px;
    }
  }
`;

export const CustomPopup = styled("div")`
  width: 100%;
  max-height: 60vh;
  min-height: 70px;
  overflow-y: auto;
  background-color: var(--main-white);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-top: 1px solid hsla(220, 4%, 48%, 0.1);
  position: absolute;
  z-index: 1000;
  top: 65px;
  left: 0;
  border-radius: 10px;
`;

export const List = styled("ul")`
  height: 100%;
  overflow-y: auto;
  .empty-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
  }
`;
export const ListItem = styled("li")`
  list-style: none;
  border-bottom: 0.5px solid #ced4da;
  padding: 8px 36px 8px 0px;
  width: 95%;
  margin: auto;
  display: flex;
  gap: 16px;
  align-items: flex-end;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.055);
  }
  .mantine-Image-root {
    width: auto !important;
  }
  &:last-of-type {
    border-bottom: none;
  }
  img {
    width: 40px !important;
    height: 40px !important;
    object-fit: contain;
  }
  span {
    font-size: 14px;
  }
  .arrow-right {
    position: absolute;
    right: 10px;
  }
`;

export const LoaderWrap = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
