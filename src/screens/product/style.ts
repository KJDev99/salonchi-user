import styled from "@emotion/styled";
export const Additionals = styled("div")`
  display: flex;
  padding: 72px;
  background-color: white;
  flex-direction: column;
  margin-top: 96px;
  border-radius: 12px;
  .tabs {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #e5e7eb;
    gap: 16px;
    /* padding-bottom: px; */

    .tab {
      padding: 4px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      color: var(--gray-700);
    }
    .active {
      color: var(--main-bg-color);
      border-bottom: 2px solid var(--main-bg-color);
    }
  }

  .description {
    padding-top: 48px;
    h2 {
      color: #1f2a37;
      font-weight: 400;
      font-size: 18px;
    }
  }
  .comments {
    padding-top: 48px;
  }
`;
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
  .image-gallery-image {
    width: 300px !important;
    height: 400px !important;
    object-fit: cover !important;
  }
  @media (max-width: 576px) {
    border-radius: 0;
  }
`;
export const RightContent = styled("div")`
  padding: 0;
  width: 100%;
  min-height: 200px;
  .right-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* justify-content: center; */
  }
  .rating {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
  }
  .rating span {
    color: #9da4ae;
    font-size: 16px;
  }
  .amount-changer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 20px;
    width: 115px;
    text-align: center;
    background-color: white;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    height: 40px;
    align-items: center;
    margin-top: 10px;
    span {
      cursor: pointer;
    }
    input {
      outline: none;
      border: none;
      text-align: center;
      width: 100%;
      font-family: var(--font-readex);
    }
  }
  .card-options {
    display: flex;
    gap: 40px;
    flex-direction: column;
    margin-top: 40px;
  }
  .subtitle {
    font-size: 18px;
    font-weight: 400;
    color: var(--gray-700);
  }
  .cardPrice {
    display: flex;
    gap: 56px;

    .price-box {
      display: flex;
      /* flex-direction: column; */
      gap: 15px;
      align-items: flex-end;
    }
    .main-price {
      color: var(--main-bg-color);
      font-weight: 500;
      font-size: 26px;
    }
    .old-price {
      color: #6c737f;
      font-size: 20px;
      font-weight: 400;
      text-decoration: line-through;
    }
    .price-monthly {
      font-weight: 500;
      font-size: 26px;
    }
    .price-monthly-p {
      color: #6c737f;
      font-size: 20px;
      font-weight: 400;
    }
  }
  .heart-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      width: 32px;
      height: 32px;
      /* stroke: var(--main-bg-color); */
      &.icon-tabler-heart-filled {
        color: var(--main-bg-color);
      }
    }
  }

  .advantages {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    gap: 57px;
    border-radius: 32px;
    border: 1px solid #e5e7eb;
    padding: 32px;
    background-color: white;
    .advantagesBox {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      /* gap: 1rem; */
      h3 {
        color: #384250;
        font-weight: 500;
        font-size: 16px;
        margin-top: 1rem;
        margin-bottom: 12px;
      }
      p {
        font-size: 14px;
        font-weight: 400;
        color: var(--gray-700);
      }
      /* justify-content: center; */
    }
    .advantagesBox:first-of-type {
      padding-top: 10px;
    }
    .advantagesBoxIcons {
      display: flex;
      gap: 1rem;
      .advantagesBoxIcon {
        width: 88px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f1f1f2;
        border-radius: 10px;

        .advantagesBoxIcons {
          display: flex;
          .advantagesBoxIcon {
            width: 88px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            /* background-color: black; */
            svg {
              width: 60px;
            }
          }
        }
        /* background-color: black; */
        svg {
          width: 40px;
        }
      }
      img {
        width: 99px;
        height: 32px;
        object-fit: contain;
      }
    }
  }
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
  border: 1px solid #ea580c;
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
  display: flex;
  /* margin-top: 10px; */
  .buy-btns {
    display: flex;
    gap: 16px;
    .buy-btn:hover {
      color: white !important;
    }
  }
  /* justify-content: flex-end; */
  button {
    width: 100%;
    height: 46.5px;
    border-radius: 8px;
  }
`;
