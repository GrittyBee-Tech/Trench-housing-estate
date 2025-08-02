import React from 'react';
import { IconProps } from '../icon/types';

export default function ArrowDown({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0003 4.16675V15.8334M10.0003 15.8334L15.8337 10.0001M10.0003 15.8334L4.16699 10.0001"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
