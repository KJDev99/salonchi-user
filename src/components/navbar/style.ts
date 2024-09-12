import styled from "@emotion/styled";

export const NavProvider = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavHeader = styled("div")`
  width: 100%;
  height: 40px;
  background-color: var(--main-bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    color: var(--main-white);
    font-size: 14px;
    font-weight: 300;
  }
  button {
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    background-color: var(--main-bg-color) !important;
    font-family: var(--font-readex);
    &.last-btn {
      margin-left: 30px;
      width: 224px;
      span {
        font-size: 16px;
      }
    }
    span {
      margin-left: 0;
      font-size: 16px;
    }
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export const Left = styled("div")`
  display: flex;
  align-items: center;

  svg {
    fill: var(--main-white);
  }
  & span {
    margin-left: 15px;
  }
`;
export const Right = styled("div")`
  display: flex;
  align-items: center;
  & span:nth-of-type(1) {
    font-size: 12px;
  }
  & span:nth-of-type(2) {
    margin-left: 15px;
  }
`;

export const Header = styled.header<any>`
  width: 100%;
  background-color: var(--main-white);
  transition: all 0.3s;
  &.fixed {
    position: fixed;
    box-shadow: 0 8px 8px #0000000f;
  }
  a {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  z-index: 30;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav__menu-bar {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    cursor: pointer;
  }
  .nav__menu-bar div {
    width: 40px;
    height: 4px;
    border-radius: 2px;
  }
  .nav__menu-list {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 100 !important;
    top: 0;
    width: 100%;
    row-gap: 24px;
    left: -100%;
    padding: 24px 16px;
    transition: all 0.2s;
    min-height: 100vh;
    color: #fff;
  }
  .nav__menu-list.active {
    left: 0;
  }
  .nav__item {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: var(--nav-link-color);
  }

  .nav__link {
    font-size: 24px !important;
    position: relative;
    transition: all 0.2s;
  }

  .nav__link:hover {
    font-weight: bold;
  }

  .center {
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 992px) {
    .nav__menu-bar {
      display: none;
    }
    .nav__menu-list {
      position: unset;
      z-index: 11;
      flex-direction: row;
      min-height: fit-content;
      width: fit-content;
      column-gap: 24px;
      align-items: center;
    }
    .nav__link::before {
      content: "";
      position: absolute;
      width: 0%;
      height: 6px;
      bottom: -16px;
      left: 0;
      background-color: black;
      transition: all 0.2s;
    }

    .nav__link:hover:before {
      width: 100%;
    }
  }
  @media (max-width: 992px) {
    .nav__menu-bar {
      position: absolute;
      left: 116px;
      z-index: 10;
    }
  }
  @media (max-width: 576px) {
    nav {
      .logo {
        height: 35px;
        width: 115px;
        &.logo-black {
          display: block;
        }
        &.logo-white {
          display: none;
        }
      }
    }
  }
`;
export const NavItemProvider = styled.div<any>`
  position: relative;
  & .cart-title {
    margin-top: 7px;
  }
  & .profile-item {
    font-family: var(--font-readex);
    font-size: 14px !important;
    font-weight: 300 !important;
    &:nth-of-type(2) {
      color: var(--main-bg-color);
      svg {
        stroke: var(--main-bg-color);
      }
    }
    svg {
      width: 18px;
    }
  }
  & a,
  button {
    @media (max-width: 576px) {
      display: none;
    }
  }
  & .login-btn {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    color: ${(props) => (props.pathname !== "/" ? "#414141" : "#fff")};
    border: 1px solid
      ${(props) => (props.pathname !== "/" ? "#414141" : "#fff")};
    width: 200px;
    height: 40px;
    font-family: "Lato", sans-serif;
  }
`;

export const MenuWrapper = styled.div`
  & .mantine-Menu-itemLabel {
    font-family: "Lato", sans-serif;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Badge = styled("div")`
  min-width: 18px;
  height: 18px;
  background: var(--main-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: -8px;
  right: 8px;
  &.saved-badge {
    top: -6px;
    right: 12px;
  }
  span {
    font-family: "Readex Pro";
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: var(--main-white);
  }
`;

export const MobileWrapper = styled("div")`
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
`;

export const MobileHeader = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  .nav__menu-bar {
    cursor: pointer;
  }
  .navbar-brand {
    margin-left: 26px;
    img {
      width: 100px;
      height: 40px;
    }
  }
`;
export const MobileFooter = styled("div")``;

export const Wrapper = styled("div")`
  max-height: 85vh;
  overflow-y: auto;
  .list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    li {
      list-style: none;
      line-height: 1;
      padding-left: 20px;
      a:hover {
        color: var(--main-bg-color);
      }
    }
    .empty-text {
      font-size: 13px;
      text-align: center;
      font-family: var(--font-readex);
    }
  }
`;
