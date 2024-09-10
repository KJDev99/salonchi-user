import styled from '@emotion/styled';

export const Card = styled('div')`
  width: 100%;
  min-height: auto;
  cursor: pointer;
`;

export const Header = styled('div')`
  width: 160px;
  height: 160px;
  border-radius: 20px;
  background: var(--catalog-card-bg);
  position: relative;
  img {
    width: 80%;
    position: unset;
    object-fit: contain;
  }
`;

export const Text = styled('p')`
  margin: 8px 0;
  color: var(--nav-link-color);
  text-align: center;
  font-family: var(--font-readex);
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 98px;
`;
