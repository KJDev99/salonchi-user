import { Grid, Skeleton } from '@mantine/core';
import React from 'react';
import { Card, Header } from './style';

export const UILoader = () => {
  return (
    <Grid style={{ marginTop: '17px' }} gutter={16}>
      {Array.from({ length: 15 }).map((_, i: number) => {
        return (
          <Grid.Col span={4} md={2} xs={4} key={i}>
            <Card>
              <Header>
                <Skeleton
                  width={'100%'}
                  height={'100%'}
                  style={{ borderRadius: '20px' }}
                />
              </Header>
              <Skeleton
                width={'70px'}
                height={'10px'}
                style={{ margin: '8px 12px' }}
              />
            </Card>
          </Grid.Col>
        );
      })}
    </Grid>
  );
};
