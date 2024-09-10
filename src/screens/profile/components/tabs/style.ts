import styled from '@emotion/styled';

export const TabsWrapper = styled('div')`
  margin: 24px 0;
  width: 100%;
  .tab-element {
    background-color: transparent;
    font-family: var(--font-readex);
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: var(--nav-lang-btn-color);
    &:hover {
      background-color: transparent;
    }
    &.active {
      color: var(--main-bg-color);
      svg {
        path {
          stroke: var(--main-bg-color);
        }
      }
    }
    &.active.last-child {
      svg {
        path {
          fill: var(--main-bg-color);
          stroke: inherit;
        }
      }
    }
    svg {
      width: 18px;
      height: 20px;
    }
  }
  .logout-element {
    display: none;
  }

  @media (max-width: 992px) {
    .logout-element {
      display: inline-flex;
    }
  }
`;

export const ButtonGroup = styled('div')`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin: 24px 0 0 0;
  button {
    min-width: 120px;
    font-weight: 400;
    font-family: var(--font-readex);
    border-radius: 5px;
    &:first-of-type {
      background-color: #f2f2f2;
      color: var(--main-black);
    }
  }
`;
