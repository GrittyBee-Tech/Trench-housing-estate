import React from 'react';
import { IconProps } from '../types';

export default function FilterIcon({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 20 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.3337 1.5H1.66699L8.33366 9.38333V14.8333L11.667 16.5V9.38333L18.3337 1.5Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
