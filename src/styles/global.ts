import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 32px 0;
  .order-btn {
    font-family: var(--font-readex);
    font-weight: 400;
    min-width: 300px;
    font-size: 16px;
    height: 48px;
    border-radius: 8px;
  }
  &.home-wrapper {
    padding: 0;
  }
  .advertising {
    display: none;
    border-radius: 8px;
    background: #ffe8d8;
    width: 100%;
    min-height: 119px;
    margin-bottom: 24px;
    .left-content {
      width: 40%;
      padding-left: 21px;
      h4 {
        font-family: var(--font-readex);
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
      }
      button {
        min-width: 92px;
        height: 25px;
        font-size: 12px;
        font-family: var(--font-readex);
        margin-top: 6px;
      }
    }
    .right-content {
      width: 60%;
      img {
        width: 100%;
        object-fit: contain;
      }
    }
    @media (max-width: 576px) {
      display: flex;
      align-items: center;
    }
    @media (max-width: 375px) {
      .left-content {
        h4 {
          font-size: 14px;
        }
      }
    }
  }
  .image-gallery-bullets {
    bottom: auto;
    width: 100%;
  }
  .image-gallery-bullets-container {
    margin-top: 10px;
    /* position: absolute;
    top: 30px; */
    /* text-align: center; */
    /* left: 50%;
    transform: translateX(-50%); */
    button {
      box-shadow: none;
      border: none;
      background: #a6a6a6 !important;
      width: 7px !important;
      height: 7px !important;
      &.active {
        background: var(--main-bg-color) !important;
        width: 7px !important;
        height: 7px !important;
      }
    }
  }
  & .image-gallery-slide {
    /* background-color: #efefef; */
    /* border: 1px solid #8e8e8e; */

    width: 294px;
    /* max-height: 214px; */
    display: flex !important;
    border: 1px solid transparent;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    & button {
      padding: 0 !important;
      background-color: red !important;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  & .image-gallery-thumbnail-image {
    border-radius: 10px;
  }
  & .image-gallery-thumbnail {
    border-radius: 10px;
    border: 1px solid #8e8e8e;
    width: 84px;
    height: 84px;
    img {
      width: 100%;
      max-height: 55px;
      object-fit: contain;
    }
    margin: 10px;
  }

  .image-gallery-thumbnail.active,
  .image-gallery-thumbnail:focus {
    border: 1px solid black;
    border-radius: 10px;
  }
  .image-gallery-image {
    /* max-height: 500px !important; */
    object-position: center;
  }
  @media (hover: hover) and (pointer: fine) {
    .image-gallery-thumbnail:hover {
      border: 1px solid black;
      border-radius: 10px;
    }
  }
  & .image-gallery-thumbnail-inner {
    cursor: pointer;
    display: flex !important;
    align-items: center;
    justify-content: center;
    /* background-color: #efefef; */
    border-radius: 4px;
  }
  & .image-gallery-svg {
    width: 40px !important;
    height: 40px !important;
  }
  @media (max-width: 576px) {
    .order-btn {
      width: 100%;
      min-width: 250px;
      margin-top: -35px;
    }
    &.catalog-wrap {
      padding: 23px 0;
    }
    .image-gallery-thumbnails-container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    & .image-gallery-thumbnail {
      width: 82px !important;
      height: 82px !important;
    }
    .image-gallery-content {
      display: flex;
      justify-content: center;
    }
  }
`;
export const Title = styled.h4`
  font-family: var(--font-readex);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: var(--input-color);
  margin: 17px 0 30px 0;
  padding: 0;
  &.home-catalog-title {
    font-size: 28px;
    margin: 17px 0 30px 0;
  }
  &.home-title {
    margin-top: 30px;
    font-size: 28px;
  }
  &.catalog-title-2 {
    font-size: 28px;
  }
  &.filter-title {
    font-size: 24px;
    font-family: var(--font-readex);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    span:first-of-type {
      text-transform: capitalize;
    }
    span:nth-of-type(2) {
      color: #494949;
      font-size: 16px;
      font-family: var(--font-readex);
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }
  &.personal-title {
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: var(--input-color);
    margin-top: 72px;
  }
  &.cart-title {
    font-weight: 500;
    font-size: 26px;
    line-height: 30px;
  }
  &.catalog-title {
    margin: 0;
  }
  @media (max-width: 576px) {
    &.home-title {
      font-size: 20px;
      margin-top: 24px;
    }
    &.cart-title {
      font-size: 18px;
      line-height: normal;
    }
    &.catalog-title-2 {
      font-size: 16px;
    }
    &.home-catalog-title {
      font-size: 14px;
      margin: 0 0 15px 0;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: auto;
  margin-left: auto;
  /* @media (max-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: aliceblue;
    text-align: center !important;
    width: 100%;
  } */
  &.add-to-cart-container {
    padding-left: 0;
    padding-right: 0;
  }

  &.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 576px) {
    &.product-slug-container {
      max-width: 100%;
      width: 100%;
      padding-right: 0 !important;
      padding-left: 0 !important;
    }
    &.add-to-cart-container {
      padding-left: 15px;
      padding-right: 15px;
      max-width: 540px;
    }
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

export const Form = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 406px;
    height: 50px;
    border-radius: 8px;
    font-family: var(--font-readex);
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--main-white);
    margin-top: 22px;
  }
  .recode-link {
    color: #909090;
    font-family: var(--font-readex);
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    &.forget {
      margin-bottom: 24px;
    }
    a {
      color: var(--main-bg-color);
    }
  }
  .forget-password-link {
    text-align: left;
    width: 100%;
    color: var(--main-bg-color);
    font-size: 14px;
  }
  .register-link {
    text-align: left;
    width: 100%;
    margin-top: 12px;
    font-weight: 300;
    font-size: 14px;
    span {
      color: var(--btn-red);
      font-weight: 400;
      margin-left: 4px;
    }
  }
  .signin-link {
    margin-top: 24px;
    color: var(--main-bg-color);
    cursor: pointer;
    &.extra-title {
      margin-top: 0;
    }
  }
  @media (max-width: 576px) {
    button {
      width: 331px;
    }
  }
`;

export const ImageContainer = styled("div")`
  width: 100%;
  min-height: 120px;
  background: #f6f2fe;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    width: 100%;
    position: unset;
    object-fit: contain;
  }
`;

export const Error = styled("div")`
  color: var(--main-red);
  font-size: 12px;
  font-family: var(--font-readex);
  font-weight: 300;
  &.pin-error {
    margin-top: 4px;
  }
`;

export const CheckWrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  svg {
    width: 70px;
    height: 70px;
  }
`;
