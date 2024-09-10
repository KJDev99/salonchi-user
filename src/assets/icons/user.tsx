import React from 'react';

export const IconUser = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="600"
      height="600"
      fill="white"
    >
      <title>Abstract user icon</title>

      <defs>
        <clipPath id="circular-border">
          <circle cx="300" cy="300" r="250" />
        </clipPath>
      </defs>

      <circle cx="300" cy="300" r="280" fill="#c8c8c8" />
      <circle cx="300" cy="230" r="100" />
      <circle cx="300" cy="550" r="190" clip-path="url(#circular-border)" />
    </svg>
  );
};
