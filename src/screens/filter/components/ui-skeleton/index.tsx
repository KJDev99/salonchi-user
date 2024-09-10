import { Card } from '@/components/card/style';
import {
  SkeletonBody,
  SkeletonFooter,
  SkeletonHeader,
} from '@/components/skeleton/style';
import { Grid, Skeleton } from '@mantine/core';
import React from 'react';

export const UISkeleton = () => {
  return (
    <Grid gutter={16} mt={22}>
      {Array.from({ length: 12 }).map((_el, i: number) => (
        <Grid.Col span={6} lg={3} xs={4} md={3} sm={6} key={i}>
          <Card>
            <SkeletonHeader>
              <Skeleton height={99} style={{ borderRadius: '9px' }} />
            </SkeletonHeader>
            <SkeletonBody>
              <Skeleton height={20} mb="sm" style={{ borderRadius: '4px' }} />
              <Skeleton height={20} mb="xl" style={{ borderRadius: '4px' }} />
            </SkeletonBody>
            <SkeletonFooter>
              <div className="stars-group">
                <Skeleton height={10} mb="sm" style={{ borderRadius: '4px' }} />
                <Skeleton
                  height={10}
                  w={40}
                  mb="sm"
                  style={{ borderRadius: '4px' }}
                />
              </div>
              <Skeleton height={33} radius={5} />
            </SkeletonFooter>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};
