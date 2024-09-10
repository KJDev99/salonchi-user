import styled from '@emotion/styled';

export const PricePanel = styled('div')``;
export const InputGroup = styled('div')`
  display: flex;
  gap: 8px;
  .from,
  .to {
    width: 100%;
  }
`;

export const Label = styled('label')`
  font-family: 'Readex Pro';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: var(--input-label-color);
`;
export const Input = styled('input')`
  width: 100%;
  height: 44px;
  background: var(--main-grey);
  border-radius: 8px;
  border: none;
  outline: none;
  text-indent: 20px;
  font-size: 12px;
  &::placeholder {
    font-size: 12px;
    color: var(--nav-link-color);
  }
`;
