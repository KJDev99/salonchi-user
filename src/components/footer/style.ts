import styled from "@emotion/styled";
import Link from "next/link";

export const Wrapper = styled("footer")`
  border: var(--footer-border);
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  padding: 44px 0 0 0;
  margin-top: 125px;
  @media (max-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: red; */
    width: 100%;
  }
  .social-links {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: 32px;
    @media (max-width: 576px) {
      justify-content: center;
    }
  }
  /* background-color: #f1f1f2; */
  h4 {
    color: var(--main-bg-color);
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
  }
  .payment-systems {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 576px) {
      align-items: center;
      justify-content: center;
    }
    .payment-header,
    .payment-footer {
      display: flex;
      align-items: center;
      gap: 16px;
      margin: 8px 0;
      .payment-card {
        background-color: #f1f1f2;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 56px;
        cursor: pointer;
        transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        a {
          height: 30px;
        }
        &:hover {
          background-color: #999;
        }
        svg {
          max-height: 32px;
          max-width: 80px;
          height: 30px;
          width: 80px;
        }
      }
    }
  }
`;

export const Ul = styled("ul")`
  @media (max-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
       text-align: center;
     
    }
  li {
    list-style: none;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: #909090;
    padding: 4px 0;
    display: flex;
    align-items: center;
    span {
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      color: #909090;
    }
    svg {
      margin-right: 7px;
    }
  }
  &.footer-info {
    margin-top: 27px;
  
  }
`;

export const Bottom = styled("div")`
  border-top: var(--footer-border);
`;

export const TabsWrapper = styled("div")`
  display: none;
  box-shadow: 0 -4px 8px #0000000f;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 10;
  background-color: var(--main-white);
  @media (max-width: 992px) {
    display: block;
  }
`;
export const List = styled("ul")`
  width: 100%;
  min-height: 83px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListItem = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.active {
    svg {
      stroke: var(--main-bg-color) !important;
    }
  }
  &.cart-list-item {
    position: relative;
  }
  svg {
    width: 22px;
    height: 22px;
    &.active {
      path,
      circle {
        stroke: var(--main-bg-color);
      }
    }
  }
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #8e8e93;
    margin-top: 4px;
    &.active {
      color: var(--main-bg-color);
    }
  }
`;

export const Badge = styled("div")`
  position: absolute;
  min-width: 18px;
  height: 18px;
  background: var(--main-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: -8px;
  right: 6px;
  .count {
    font-family: "Readex Pro";
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: var(--main-white);
    margin-top: 0;
  }
`;

// bottom navigator started

export const Navigator = styled("div")`
  display: none;
  box-shadow: 0 -4px 8px #0000000f;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1000;
  min-height: 96px;
  background-color: var(--main-white);
  border-bottom: var(--footer-border);
  padding: 8px;
  button {
    color: var(--main-white);
    font-family: var(--font-readex);
    font-weight: 400;
    border-radius: 8px;
    padding: 14px 37px;
    min-height: 48px;
    font-size: 16px;
  }
  @media (max-width: 576px) {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Left = styled("div")``;

export const AddCart = styled("div")`
  display: flex;
  align-items: center;
  gap: 12px;
  .in-cart-btn {
    font-family: var(--font-readex);
    font-weight: 400;
    border-radius: 8px;
    border: 1px solid var(--main-bg-color);
    color: var(--main-bg-color);
    min-width: 120px;
    svg {
      width: 22px;
      path {
        fill: var(--main-bg-color);
      }
    }
  }
  .inc-btn {
    color: var(--main-white);
    font-family: var(--font-readex);
    font-weight: 400;
    min-width: 50px;
    border-radius: 8px;
    padding: 0;
  }
`;

export const FooterBottom = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 48px 0;
  gap: 25px;
  .copyright {
    p {
      color: #909090;
      font-family: var(--font-readex);
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }
  .public-offer {
    color: #909090;
    font-family: var(--font-readex);
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    display: flex;
    align-items: center;
    gap: 113px;
  }
  .social-media {
    display: flex;
    align-items: center;
    gap: 13px;
    svg {
      fill: #828282;
      font-size: 30px;
    }
  }
  @media (max-width: 992px) {
    .public-offer {
      gap: 12px;
    }
  }
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const ContainerFooter = styled.div`
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    text-align: center !important;
    width: 100%;
  }


  @media (min-width: 768px) {
    padding-right: 30px;
    padding-left: 30px;
  }
  @media (max-width: 992px) {
    max-width: 800px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1160px;
  }
  @media (min-width: 1300px) {
    max-width: 1240px;
  }
`;