import React from "react";

export const ArrowDownIcon = ({ color }: { color?: string }) => {
  return (
    <svg
      width="15"
      height="8"
      viewBox="0 0 15 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.88184 5.99254C7.67096 6.20873 7.32905 6.20873 7.11816 5.99254L1.5364 0.27024C1.18492 -0.0900811 0.615076 -0.0900812 0.263604 0.270239C-0.0878676 0.63056 -0.0878676 1.21476 0.263604 1.57508L5.84537 7.29737C6.75919 8.23421 8.2408 8.23421 9.15463 7.29738L14.7364 1.57508C15.0879 1.21476 15.0879 0.630561 14.7364 0.27024C14.3849 -0.0900803 13.8151 -0.0900803 13.4636 0.270241L7.88184 5.99254Z"
        fill={color ? color : "#ffffff"}
      />
    </svg>
  );
};
