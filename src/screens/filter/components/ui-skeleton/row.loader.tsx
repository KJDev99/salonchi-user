import React from 'react';
import { RowView } from '../view/row/style';
import { Skeleton } from '@mantine/core';
import { Wrapper } from './style';

export const RowLoader = () => {
  return (
    <RowView>
      {Array.from({ length: 8 }).map((_el, i: number) => {
        return (
          <Wrapper key={i}>
            <Skeleton
              width={'100%'}
              height={165}
              style={{ borderRadius: '8px' }}
            />
          </Wrapper>
        );
      })}
    </RowView>
  );
};
