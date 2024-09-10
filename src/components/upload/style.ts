import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  position: relative;
  width: 169px;
  height: 169px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  @media (max-width: 576px) {
    margin: auto;
  }
`;

export const ImageLabel = styled('label')`
  width: 169px;
  height: 169px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  & .upload-image-parent {
    width: 169px;
    height: 169px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UploadImageProvider = styled('div')`
  border: 1px solid grey;
  .camera-icon {
    width: 169px;
    border-radius: 50%;
    object-fit: contain;
  }
  .upload-image-child {
    position: absolute;
    right: -10px;
    bottom: 0;
  }
`;

export const AvatarEditor = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 17px;
  width: 51px;
  height: 51px;
  background: var(--main-bg-color);
  border-radius: 50%;
`;
