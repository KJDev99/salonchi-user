import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  /* background-color: black; */
  @media (max-width: 576px) {
    justify-content: center;
  }
  .profile-upload {
    @media (max-width: 576px) {
      /* flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px; */
      align-items: center;
    }
  }
  .upload-image {
    width: 169px;
    height: 169px;
    border-radius: 50%;
    object-position: top;
    object-fit: cover;
    @media (max-width: 576px) {
      width: 100px;
      height: 100px;
    }
  }
  .edit-pencil {
    /* position: absolute; */
    /* bottom: -10px; */
    display: flex;
    gap: 10px;
    background-color: white;
    border: 1px solid var(--main-bg-color);
    padding: 10px 24px;
    font-size: 14px;
    color: var(--main-bg-color);
    border-radius: 8px;
    width: auto;
    height: auto;
    margin-left: 10px;
    /* background: var(--main-bg-color); */
    /* border-radius: 50%; */
  }
`;
