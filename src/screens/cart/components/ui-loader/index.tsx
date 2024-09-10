import React from 'react';
import { Skeleton } from '@mantine/core';
import { Wrapper } from '../address/style';

export const UILoader = () => {
  return (
    <Wrapper className="ui-loader-wrap">
      <div className="form-group" style={{marginTop:'10px'}}>
        <Skeleton width={120} height={'10px'} />
        <Skeleton
          width={'100%'}
          height={'44px'}
          style={{ borderRadius: '8px' }}
        />
      </div>
      <div className="form-group">
        <Skeleton width={120} height={'10px'} />
        <Skeleton
          width={'100%'}
          height={'44px'}
          style={{ borderRadius: '8px' }}
        />
      </div>
      <div className="form-group">
        <Skeleton width={120} height={'10px'} />
        <Skeleton
          width={'100%'}
          height={'44px'}
          style={{ borderRadius: '8px' }}
        />
      </div>
      <div className="form-group">
        <Skeleton width={120} height={'10px'} />
        <Skeleton
          width={'100%'}
          height={'44px'}
          style={{ borderRadius: '8px' }}
        />
      </div>
      <div className="form-footer">
        <Skeleton
          width={'150px'}
          height={'44px'}
          style={{ borderRadius: '8px' }}
        />
      </div>
    </Wrapper>
  );
};
