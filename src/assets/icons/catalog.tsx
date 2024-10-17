import React from "react";
import { useRouter } from "next/router";

export const CatalogIcon = () => {
  const router = useRouter();
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={router.pathname === "/catalog" ? "active" : ""}
    >
      <rect
        x="1"
        y="2"
        width="7"
        height="7"
        rx="2.5"
        stroke="#494949"
        strokeWidth="1.5"
      />
      <rect
        x="1"
        y="12"
        width="7"
        height="7"
        rx="2.5"
        stroke="#494949"
        strokeWidth="1.5"
      />
      <rect
        x="14.6736"
        y="0.029541"
        width="7.49097"
        height="7.49097"
        rx="2.5"
        transform="rotate(45 14.6736 0.029541)"
        stroke="#494949"
        strokeWidth="1.5"
      />
      <rect
        x="11"
        y="12"
        width="7"
        height="7"
        rx="2.5"
        stroke="#494949"
        strokeWidth="1.5"
      />
    </svg>
  );
};
