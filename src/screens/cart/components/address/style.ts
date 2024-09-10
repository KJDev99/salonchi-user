import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  &.ui-loader-wrap {
    display: flex;
    flex-direction: column;
    gap: 16px;
    .form-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .form-footer {
      display: flex;
      justify-content: flex-end;
    }
  }
  .address-footer {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 16px;
    button {
      min-width: 150px;
      height: 44px;
      border-radius: 8px;
      font-family: var(--font-readex);
      font-weight: 400;
    }
  }
`;
