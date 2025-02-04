import React from 'react';
import { IconProps } from '../types';

export default function Filter({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 7H16M1 1H19M7 13H13'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
