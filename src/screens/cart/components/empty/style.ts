import styled from '@emotion/styled';

export const Empty = styled('div')`
  width: 100%;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    margin: 8px 0 0;
    font-size: 13px;
    text-align: center;
  }
  button {
    font-family: var(--font-readex);
    font-weight: 400;
    margin: 16px 0 0;
  }
`;

export const Title = styled('h1')`
  font-size: 1.375rem;
  font-weight: 600;
  line-height: 1.2em;
  margin: 16px 0 0;
  text-align: center;
`;
