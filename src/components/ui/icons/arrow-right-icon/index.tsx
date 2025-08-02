import React from "react";
import { IconProps } from "../types";

export default function ArrowRight({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.16699 10.5001H15.8337M15.8337 10.5001L10.0003 4.66675M15.8337 10.5001L10.0003 16.3334"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
