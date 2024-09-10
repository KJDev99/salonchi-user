import { Skeleton } from '@mantine/core';
import React from 'react';
import { Wrap } from './style';

export const CarouselLoader = () => {
  return (
    <Wrap>
      <Skeleton height={310} radius="xl" />
    </Wrap>
  );
};
