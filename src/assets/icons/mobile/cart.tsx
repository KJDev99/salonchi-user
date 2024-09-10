import { useRouter } from 'next/router';
import React from 'react';

export const CartIcon = () => {
  const router = useRouter();
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={router.pathname === '/cart' ? 'active' : ''}
    >
      <path
        d="M1 1L2.04936 1.20987C2.91136 1.38227 3.55973 2.09732 3.6472 2.97203L3.8 4.5M3.8 4.5L4.7886 12.7383C4.90922 13.7435 5.76195 14.5 6.77435 14.5H15.7673C17.3733 14.5 18.7733 13.407 19.1628 11.8489L20.2855 7.35783C20.6485 5.90619 19.5505 4.5 18.0542 4.5H3.8Z"
        stroke="#8E8E93"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 11.5H8"
        stroke="#8E8E93"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="18" r="1.5" fill="#8E8E93" />
      <circle cx="16.5" cy="18" r="1.5" fill="#8E8E93" />
    </svg>
  );
};
