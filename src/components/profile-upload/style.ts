import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  position: relative;
  .upload-image {
    width: 169px;
    height: 169px;
    border-radius: 50%;
    object-position: top;
    object-fit: cover;
  }
  .edit-pencil {
    position: absolute;
    bottom: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 51px;
    height: 51px;
    background: var(--main-bg-color);
    border-radius: 50%;
  }
`;
