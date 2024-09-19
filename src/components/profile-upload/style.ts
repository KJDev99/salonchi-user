import styled from "@emotion/styled";

export const Wrapper = styled("div")`
  position: relative;
  display: flex;
  .upload-image {
    width: 169px;
    height: 169px;
    border-radius: 50%;
    object-position: top;
    object-fit: cover;
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
