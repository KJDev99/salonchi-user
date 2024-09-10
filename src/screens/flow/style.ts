import styled from "@emotion/styled";

export const LeftContent = styled("div")`
  /* width: 400px; */
  /* padding: 10px; */
  /* border: 2px solid red; */
  /* min-height: 500px;
  height: 500px; */
  /* background: red; */
  /* border-radius: 35px; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
 /* overflow: hidden; */
  /* button {
    position: absolute;
    bottom: 100px;
  } */
    /* img{
      object-fit: cover;
    } */
      /* display: flex; */
      /* flex-direction: column; */
      /* align-items: center; */
      /* justify-content: center; */

      .image-gallery-slide-wrapper {
        width: 290px !important;
        height: 400px !important;

        margin: 0 auto !important;
      }
      .image-gallery-image{
        width: 300px !important;
        height: 400px !important;
        object-fit:cover !important;
      }
  @media (max-width: 576px) {
    border-radius: 0;
  }
`;
export const RightContent = styled("div")`
  width: 100%;
  min-height: 200px;
`;

export const Title = styled("h2")`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  color: var(--product-title-color);
`;

export const Parameters = styled("ul")`
  margin: 47px 0 35px 0;
  .desc-title {
    color: #141311;
    font-family: var(--font-readex);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 15px;
  }
  li {
    list-style: none;
    font-weight: 300;
    font-size: 14px;
    line-height: 28px;
    color: var(--nav-link-color);
    opacity: 0.8;
    span {
      display: inline-flex;
      max-width: 129px;
    }
  }
  /* a {
    padding-top: 220px !important;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #0e5ed6;
    opacity: 0.8;
  } */
`;

export const AddToCart = styled("div")`
  width: 100%;
  min-height: 274px;
  background: var(--main-white);
  border: 1px solid #6417b0;
  border-radius: 10px;
  padding: 28px 32px 30px 30px;
`;

export const RatingUI = styled("div")`
  margin: 11px 0 32px 0;
`;

export const Header = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 25px;
    height: 25px;
  }
  .heart-wrapper {
    cursor: pointer;
    svg {
      width: 24px;
      height: 24px;
      stroke: var(--main-bg-color);
      &.icon-tabler-heart-filled {
        color: var(--main-bg-color);
      }
    }
  }
`;
export const Body = styled("div")`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 32px 0 45px 0;
  gap: 15px;
  svg {
    width: 31px;
    height: 19px;
  }
`;
export const Info = styled("div")`
  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: var(--input-color);
  }
  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: var(--nav-link-color);
  }
`;

export const Footer = styled("div")`
  button {
    width: 100%;
    height: 46.5px;
    border-radius: 8px;
  }
`;
