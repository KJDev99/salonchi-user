import styled from '@emotion/styled';

export const SkeletonHeader = styled('div')`
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 99px;
  overflow: hidden;
`;

export const SkeletonBody = styled('div')`
  padding: 10px 10px 0 10px;
`;

export const SkeletonFooter = styled('div')`
  padding: 10px;
  .stars-group {
    display: flex;
    justify-content: space-between;
    gap: 25px;
  }
`;
