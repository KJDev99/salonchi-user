import { useRouter } from 'next/router';
import React from 'react';

export const HeartIcon = () => {
  const router = useRouter();

  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={router.pathname === '/favourites' ? 'active' : ''}
    >
      <path
        d="M2.66275 11.2135L8.82377 17.7065C10.0068 18.9532 11.9932 18.9532 13.1762 17.7065L19.3372 11.2135C21.5542 8.87699 21.5543 5.08882 19.3373 2.75235C17.1203 0.415881 13.5258 0.415883 11.3088 2.75235V2.75235C11.1409 2.92925 10.8591 2.92925 10.6912 2.75235V2.75235C8.47421 0.415883 4.87975 0.415882 2.66275 2.75235C0.44575 5.08883 0.445751 8.87699 2.66275 11.2135Z"
        stroke="#8E8E93"
        strokeWidth="1.5"
      />
    </svg>
  );
};
