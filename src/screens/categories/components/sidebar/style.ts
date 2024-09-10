import styled from '@emotion/styled';

export const List = styled('ul')`
 @media (max-width:576px ) {
   display: none;
 }

`;
export const ListItem = styled('li')`
  list-style: none;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: var(--nav-lang-btn-color);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  margin: 4px 0;
  .mantine-Image-root {
    width: auto !important;
    img {
      width: 30px !important;
    }
  }
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 12px 12px 12px;
    border-radius: 6px;
    width: 100%;
    &:hover {
      background-color: var(--main-white);
    }
    &.active {
      background-color: var(--main-white);
      color: var(--list-item-color);
      font-weight: 500;
    }
  }
  svg {
    min-width: 56px;
  }
  span {
    text-align: left;
  }
`;
