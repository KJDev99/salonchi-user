import { CheckWrapper } from '@/styles/global';
import React from 'react';

export const IconCheck = () => {
  return (
    <CheckWrapper>
      <svg
        enable-background="new 0 0 24 24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="icon-check"
      >
        <g id="Guide" display="none" />
        <g id="Dualtone">
          <g>
            <path
              d="m11.982 14.982c-.265 0-.52-.105-.707-.293l-2.982-2.982c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l2.275 2.275 7.293-7.293c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-8 8c-.188.188-.442.293-.707.293z"
              fill="#30d143"
            />
          </g>
          <g>
            <path
              d="m12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8c1.193 0 2.342.257 3.414.763.499.236.713.832.477 1.331-.236.5-.832.715-1.332.478-.802-.38-1.663-.572-2.559-.572-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6c0-.553.448-1 1-1s1 .447 1 1c0 4.411-3.589 8-8 8z"
              fill="#30d143"
            />
          </g>
        </g>
      </svg>
    </CheckWrapper>
  );
};
