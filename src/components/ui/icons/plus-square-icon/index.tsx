import React from 'react';
import { IconProps } from '../types';

export default function PlusSquare({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9 5.66667V12.3333M5.66667 9H12.3333M3.16667 1.5H14.8333C15.7538 1.5 16.5 2.24619 16.5 3.16667V14.8333C16.5 15.7538 15.7538 16.5 14.8333 16.5H3.16667C2.24619 16.5 1.5 15.7538 1.5 14.8333V3.16667C1.5 2.24619 2.24619 1.5 3.16667 1.5Z'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
