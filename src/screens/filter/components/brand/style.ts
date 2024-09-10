import styled from '@emotion/styled';

export const BrandWrap = styled('div')`
  padding-top: 44px;
  button {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    margin: 26px 0;
    span {
      font-family: var(--font-readex);
      font-weight: 400;
    }
  }
  label {
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: #454545;
  }
`;

export const SystemList = styled('ul')`
  margin: 26px 0;
`;
export const SystemListItem = styled('li')`
  list-style: none;
  padding: 12.5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: #393939;
    font-size: 16px;
    font-family: var(--font-readex);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
