import styled from '@emotion/styled';

export const LoaderProvider = styled.div`
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
`;

export const Wrap = styled('div')`
  @media (max-width: 576px) {
    display: none;
  }
`;
