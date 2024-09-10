import { useRouter } from 'next/router';
import React from 'react';

export const SearchIcon = () => {
  const router = useRouter();

  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={router.pathname === '/catalog' ? 'active' : ''}
    >
      <circle
        cx="9"
        cy="9"
        r="8"
        stroke="#8E8E93"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 14.958L19.5 19.958"
        stroke="#8E8E93"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
