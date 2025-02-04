import React from "react";
import { IconProps } from "../types";

export default function NairaSign({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.71429 44V7.50667C9.71408 6.73108 9.9347 5.97739 10.3415 5.36395C10.7483 4.75052 11.3182 4.31209 11.9617 4.11752C12.6052 3.92296 13.2859 3.98329 13.8969 4.28902C14.5078 4.59476 15.0144 5.12858 15.3371 5.80667L32.6629 42.1933C32.9856 42.8714 33.4922 43.4052 34.1031 43.711C34.7141 44.0167 35.3948 44.077 36.0383 43.8825C36.6818 43.6879 37.2517 43.2495 37.6585 42.636C38.0653 42.0226 38.2859 41.2689 38.2857 40.4933V4M4 17.3333H44M4 30.6667H44"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
